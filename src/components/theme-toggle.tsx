"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ collapsed, iconOnly }: { collapsed?: boolean; iconOnly?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary transition-all",
          iconOnly ? "p-2" : "w-full",
          collapsed && "justify-center px-0"
        )}
      >
        <div className="h-5 w-5 shrink-0" />
        {!collapsed && !iconOnly && <span className="font-medium text-sm">Light Mode</span>}
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "flex items-center gap-3 rounded-xl text-text-secondary hover:bg-white/5 hover:text-foreground transition-all",
        iconOnly ? "p-2" : "px-3 py-2.5 w-full",
        collapsed && "justify-center px-0"
      )}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 shrink-0" />
      ) : (
        <Sun className="h-5 w-5 shrink-0" />
      )}
      {!collapsed && !iconOnly && (
        <span className="font-medium text-sm">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );
}
