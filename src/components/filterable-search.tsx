"use client";

import * as React from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterOption {
  value: string;
  label: string;
  meta?: string;
  left?: React.ReactNode;
}

export interface FilterConfig {
  key: string;
  label: string;
  options: FilterOption[];
  multiple?: boolean;
}

interface FilterableSearchProps<T> {
  /** Placeholder text for the search input */
  placeholder?: string;
  /** All items to search/filter through */
  items: T[];
  /** Function that returns searchable text from an item */
  getSearchText: (item: T) => string;
  /** Render function for each result item */
  renderItem: (item: T, highlighted: boolean) => React.ReactNode;
  /** Called when selection changes */
  onSelect: (item: T) => void;
  /** Optional additional filter dropdowns */
  filters?: FilterConfig[];
  /** Current filter values (controlled from parent) */
  filterValues?: Record<string, string[]>;
  /** Called when filters change */
  onFilterChange?: (key: string, values: string[]) => void;
  /** Key extractor */
  getKey: (item: T) => string;
  /** Max height for results dropdown */
  maxHeight?: string;
  /** Selected item key (for highlighting) */
  selectedKey?: string;
}

export function FilterableSearch<T>({
  placeholder = "Search...",
  items,
  getSearchText,
  renderItem,
  onSelect,
  filters,
  filterValues = {},
  onFilterChange,
  getKey,
  maxHeight = "320px",
  selectedKey,
}: FilterableSearchProps<T>) {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightIdx, setHighlightIdx] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return items;
    return items.filter((item) => getSearchText(item).toLowerCase().includes(q));
  }, [items, query, getSearchText]);

  React.useEffect(() => {
    setHighlightIdx(0);
  }, [query, filtered.length]);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIdx((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[highlightIdx]) {
      e.preventDefault();
      onSelect(filtered[highlightIdx]);
      setIsOpen(false);
      setQuery("");
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Search input + filter dropdowns */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3 text-sm text-foreground placeholder:text-text-muted outline-none focus:border-primary/50 transition-colors"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); setIsOpen(true); inputRef.current?.focus(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Additional filter dropdowns */}
        {filters?.map((filter) => (
          <div key={filter.key} className="relative shrink-0">
            <select
              value={filterValues[filter.key]?.[0] || ""}
              onChange={(e) => {
                const val = e.target.value;
                onFilterChange?.(filter.key, val ? [val] : []);
              }}
              className="appearance-none bg-card border border-border rounded-xl px-4 py-3 pr-10 text-sm text-foreground outline-none focus:border-primary/50 transition-colors cursor-pointer min-w-[160px]"
            >
              <option value="">All {filter.label}</option>
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Results dropdown */}
      {isOpen && query && (
        <div
          className="absolute z-30 mt-2 w-full bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto"
          style={{ maxHeight }}
        >
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-sm text-text-muted">No results found</div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={getKey(item)}
                onClick={() => { onSelect(item); setIsOpen(false); setQuery(""); }}
                onMouseEnter={() => setHighlightIdx(idx)}
                className={cn(
                  "w-full text-left px-4 py-3 transition-colors border-b border-border/50 last:border-b-0",
                  highlightIdx === idx ? "bg-primary/5" : "hover:bg-white/5"
                )}
              >
                {renderItem(item, selectedKey === getKey(item))}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
