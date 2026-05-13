"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Building2,
  Map,
  Calendar,
  BarChart3,
  Sparkles,
  ArrowRight,
  LogIn,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const shortcuts = [
  { name: "Discover", href: "/discover", icon: Search },
  { name: "Organizations", href: "/organizations", icon: Building2 },
  { name: "Ecosystem Map", href: "/map", icon: Map },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Intelligence", href: "/intelligence", icon: BarChart3 },
];

const bottomLinks = [
  { name: "About", href: "/about" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export function LandingPage() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Top bar with Log in and Menu */}
      <div className="absolute top-0 right-0 left-0 flex items-center justify-between px-6 h-16 z-10">
        <div />
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-foreground gap-2">
              <LogIn className="h-4 w-4" />
              Log in
            </Button>
          </Link>
          <Link href="/join">
            <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90 font-semibold px-5">
              Join SAKILI
            </Button>
          </Link>
        </div>
      </div>

      {/* Main splash area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 w-full max-w-2xl"
        >
          {/* Logo */}
          <Link href="/" className="block">
            <img
              src="/images/woodmark_logo.svg"
              alt="SAKILI"
              className="h-32 w-auto md:h-48"
            />
          </Link>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-text-secondary text-center leading-relaxed max-w-lg">
            African Intelligence... Unified
          </p>

          {/* AI Search Bar */}
          <div className="w-full relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-2xl blur opacity-40 group-focus-within:opacity-70 transition-opacity" />
            <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-lg shadow-primary/5 transition-all group-focus-within:shadow-xl group-focus-within:border-primary/50">
              <Sparkles className="absolute left-5 h-5 w-5 text-accent" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Africa's AI ecosystem..."
                className="flex-1 bg-transparent text-foreground placeholder-text-muted py-4 pl-14 pr-14 rounded-2xl outline-none text-base md:text-lg"
              />
              <button className="absolute right-2 p-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Shortcut Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4">
            {shortcuts.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-text-secondary group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom links */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-6 border-t border-border">
        {bottomLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xs text-text-muted hover:text-foreground transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
