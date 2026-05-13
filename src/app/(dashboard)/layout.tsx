"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Building2, 
  Search, 
  Handshake, 
  ShieldCheck, 
  Calendar, 
  BarChart3, 
  Settings,
  Menu,
  X,
  LogOut,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

const sidebarItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Organization", href: "/dashboard/organization", icon: Building2 },
  { name: "Discovery", href: "/discover", icon: Search },
  { name: "Handshakes", href: "/dashboard/collaborations", icon: Handshake },
  { name: "Verifications", href: "/dashboard/verifications", icon: ShieldCheck },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Intelligence", href: "/intelligence", icon: BarChart3 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-card border-r border-border transition-all duration-300 flex flex-col z-30",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="h-20 flex items-center px-6 border-b border-border">
          <Logo showText={isSidebarOpen} />
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                pathname === item.href 
                  ? "bg-primary/10 text-primary" 
                  : "text-text-secondary hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5 shrink-0", pathname === item.href ? "text-primary" : "text-text-muted group-hover:text-foreground")} />
              {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-border space-y-1">
          <ThemeToggle collapsed={!isSidebarOpen} />
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:bg-white/5 hover:text-foreground transition-all"
            )}
          >
            <Settings className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium text-sm">Settings</span>}
          </Link>
          <button
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-muted hover:bg-destructive/10 hover:text-destructive transition-all"
            )}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium text-sm">Sign Out</span>}
          </button>
        </div>
        
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="h-10 flex items-center justify-center border-t border-border text-text-muted hover:text-foreground transition-colors"
        >
          <ChevronRight className={cn("h-4 w-4 transition-transform", isSidebarOpen ? "rotate-180" : "")} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-foreground">
              {sidebarItems.find(item => item.href === pathname)?.name || "Dashboard"}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle iconOnly />
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-border">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                JD
              </div>
              <span className="text-xs font-medium text-text-secondary">John Doe</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
