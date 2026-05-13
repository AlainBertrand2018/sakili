"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Globe, Zap, Users, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";

const countries = ["All Countries", "Mauritius", "South Africa", "Nigeria", "Kenya", "Egypt", "Senegal", "Morocco"];
const capabilities = ["All Capabilities", "Natural Language Processing", "Computer Vision", "Machine Learning", "Data Science", "Robotics"];

export function DiscoveryPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Discovery Directory</h1>
            <p className="text-xl text-text-secondary">Explore the verified organizations building the future of African AI.</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="glass p-4 rounded-2xl border-white/10 mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
              <Input 
                placeholder="Search organizations, capabilities, or sectors..." 
                className="pl-12 bg-white/5 border-transparent focus:border-primary/50 h-14 rounded-xl text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select className="bg-white/5 border border-border rounded-xl px-4 h-14 text-sm text-text-secondary focus:outline-none focus:border-primary/50 cursor-pointer min-w-[160px]">
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select className="bg-white/5 border border-border rounded-xl px-4 h-14 text-sm text-text-secondary focus:outline-none focus:border-primary/50 cursor-pointer min-w-[160px]">
                {capabilities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <Button size="icon" className="h-14 w-14 rounded-xl bg-white/5 border border-border text-text-muted hover:text-primary transition-colors">
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item * 0.05 }}
              >
                <Link href="/org/sakili-labs">
                  <div className="glass-surface rounded-3xl p-8 border-white/5 transition-all hover:border-primary/30 group cursor-pointer h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold text-primary group-hover:scale-110 transition-transform">
                        {item % 2 === 0 ? "SL" : "AI"}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-state-success/10 border border-state-success/20 text-state-success text-[8px] font-bold uppercase tracking-widest">
                          <ShieldCheck className="h-2 w-2" />
                          Verified
                        </div>
                        <div className="text-[10px] font-medium text-text-muted flex items-center gap-1 uppercase tracking-tighter">
                          <MapPin className="h-2 w-2" />
                          Mauritius
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">SAKILI AI Labs {item}</h3>
                    <p className="text-sm text-text-secondary mb-8 line-clamp-2 leading-relaxed">
                      Specialized in regional dialect NLP and predictive analytics for African infrastructure optimization.
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="text-[9px] font-bold text-text-muted border border-border px-2 py-0.5 rounded-full uppercase tracking-tighter">NLP</span>
                        <span className="text-[9px] font-bold text-text-muted border border-border px-2 py-0.5 rounded-full uppercase tracking-tighter">Predictive</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center">
            <Button variant="outline" className="border-border text-text-secondary h-12 px-8 rounded-xl bg-white/5 hover:bg-white/10">
              Load More Organizations
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
