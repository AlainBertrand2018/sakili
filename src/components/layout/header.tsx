"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Globe, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navItems = [
  { name: "About SAKILI", href: "/about" },
  { name: "Discover", href: "/discover" },
  { name: "Organizations", href: "/organizations" },
  { name: "Ecosystem Map", href: "/map" },
  { name: "Events", href: "/events" },
  { name: "Intelligence", href: "/intelligence" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(26, 15, 10, 0)", "rgba(26, 15, 10, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    ["rgba(62, 44, 32, 0)", "rgba(62, 44, 32, 1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom: `1px solid ${borderOpacity}` }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Wordmark */}
          <Logo boxless />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-text-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/login">
              <Button variant="ghost" className="text-text-secondary hover:text-primary">
                Log in
              </Button>
            </Link>
            <Link href="/join">
              <Button className="bg-primary text-primary-foreground hover:bg-accent-hover font-semibold px-6">
                Join SAKILI
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 glass shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors",
                pathname === item.href ? "text-primary" : "text-text-secondary"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start border-border text-text-secondary">
                Log in
              </Button>
            </Link>
            <Link href="/join" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground">
                Join SAKILI
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
