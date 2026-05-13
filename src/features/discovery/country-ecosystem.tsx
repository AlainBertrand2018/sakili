"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Users, BarChart3, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getFlag } from "./country-data";

interface CountryEcosystemProps {
  countryName: string;
  countryCode: string;
}

const countryStats = [
  { label: "AI Startups", value: "142", icon: Zap },
  { label: "Research Labs", value: "12", icon: BarChart3 },
  { label: "Verified Partners", value: "45", icon: ShieldCheck },
  { label: "Ecosystem Handshakes", value: "850+", icon: Users },
];

export function CountryEcosystem({ countryName, countryCode }: CountryEcosystemProps) {
  const flag = getFlag(countryCode);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        {/* Country Hero */}
        <section className="relative mb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="h-20 w-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-2xl overflow-hidden">
                <img src={flag} alt={countryCode} className="h-full w-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
                  {countryName} <span className="text-primary">Ecosystem</span>
                  <span className="ml-3 text-lg font-mono text-text-muted align-middle">({countryCode})</span>
                </h1>
                <p className="text-lg text-text-secondary">Continental AI Intelligence Node</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {countryStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6 rounded-2xl"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Organizations In Country */}
        <section className="container mx-auto px-4 md:px-6 mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground">Premier Organizations</h2>
            <Link href="/discover">
              <Button variant="ghost" className="text-primary hover:bg-primary/5">
                View All Directory
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card border border-border rounded-3xl p-8 group hover:border-primary/30 transition-all">
                <div className="h-12 w-12 rounded-xl bg-muted border border-border flex items-center justify-center text-lg font-bold text-primary mb-6">
                  {item === 1 ? "SL" : item === 2 ? "MU" : "AI"}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Institutional Entity {item}</h3>
                <p className="text-sm text-text-secondary mb-8 line-clamp-2">
                  Dedicated to advancing {countryName}'s AI capabilities through research and strategic innovation.
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-state-success" />
                    <span className="text-[10px] font-bold text-state-success uppercase tracking-widest">Institutional</span>
                  </div>
                  <Link href="/org/sakili-labs">
                    <Button size="sm" variant="ghost" className="text-xs font-bold uppercase tracking-widest hover:text-primary">
                      Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ecosystem Intelligence Section */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="bg-card border border-border rounded-[32px] p-10 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Globe className="h-64 w-64" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Regional Intelligence Hub</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {countryName} serves as a critical node in the continental AI network, facilitating cross-border data flows and strategic alignment for the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground font-bold h-12 px-8 rounded-xl">
                  Download Ecosystem Report
                </Button>
                <Button variant="outline" className="border-border text-foreground h-12 px-8 rounded-xl">
                  View Data Insights
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
