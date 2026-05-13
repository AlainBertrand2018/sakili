"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Users, Wifi, Smartphone, DollarSign, Languages, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/header";
import { getCountryInfo, getFlag } from "@/features/discovery/country-data";
import { setDocumentMeta, pages } from "@/lib/seo";

const InteractiveMap = dynamic(
  () => import("@/features/discovery/interactive-map").then((m) => m.InteractiveMap),
  { ssr: false }
);

export default function MapPage() {
  const router = useRouter();
  const [hoveredCode, setHoveredCode] = React.useState<string | null>(null);

  React.useEffect(() => {
    setDocumentMeta(pages.map.title, pages.map.description);
  }, []);
  const info = hoveredCode ? getCountryInfo(hoveredCode) : null;
  const flag = hoveredCode ? getFlag(hoveredCode) : "";

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      <div className="flex-1 flex items-stretch px-6 md:px-10 lg:px-16 pt-20 pb-6 gap-6 min-h-0">
        {/* Left — Map */}
        <div className="flex-1 min-w-0 h-full">
          <InteractiveMap onHover={(code) => { if (code) setHoveredCode(code); }} />
        </div>

        {/* Right — Country Info Panel */}
        <div className="w-[360px] lg:w-[420px] h-full flex flex-col gap-4">
          {info && hoveredCode ? (
            <>
              <div className="flex-1 bg-card border border-border rounded-2xl p-6 md:p-8 overflow-y-auto min-h-0">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <img src={flag} alt={info.code} className="w-12 h-9 rounded-lg object-cover shadow-md" />
                  <div className="min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{info.fullName}</h2>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">{info.code}</span>
                  </div>
                </div>

                <div className="h-px bg-border mb-6" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-y-5 gap-x-6 mb-8">
                  <StatRow icon={Users} label="Population" value={info.population} color="primary" />
                  <StatRow icon={Globe} label="AI Organizations" value={String(info.aiOrgs)} color="primary" />
                  <StatRow icon={Wifi} label="Internet Penetration" value={info.internet} color="accent" />
                  <StatRow icon={Smartphone} label="Mobile Penetration" value={info.mobile} color="accent" />
                  <StatRow icon={DollarSign} label="GDP" value={info.gdp} color="primary" />
                  <StatRow icon={Languages} label="Languages" value={info.languages.join(", ")} color="accent" />
                </div>

                {/* CTA */}
                <button
                  onClick={() => router.push(`/ecosystem/${hoveredCode}`)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Explore {info.name} Ecosystem
                  <ArrowRight className="h-4 w-4" />
                </button>

                {/* Quick links */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <QuickLink href="/discover" label="Discover" />
                  <QuickLink href="/organizations" label="Organizations" />
                </div>
              </div>
              <AdCarousel />
            </>
          ) : (
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <Sparkles className="h-12 w-12 text-primary/30 mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Hover over a country</h3>
                <p className="text-sm text-text-secondary max-w-xs">
                  Move your cursor over a country on the map to see ecosystem data and insights.
                </p>
              </div>
              <AdCarousel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Square Ad Carousel ─── */
const ads = [
  { title: "Register Your Organization", subtitle: "Join 850+ verified AI orgs across 54 nations.", cta: "Get Started", bg: "from-accent/30 via-primary/10 to-accent/20" },
  { title: "Ecosystem Intelligence Report", subtitle: "Data-driven insights on Africa's AI landscape.", cta: "Download", bg: "from-primary/20 via-accent/15 to-primary/10" },
  { title: "Partner with SAKILI", subtitle: "Become an institutional partner and shape the ecosystem.", cta: "Learn More", bg: "from-accent/25 via-primary/5 to-accent/15" },
];

function AdCarousel() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setIdx((prev) => (prev + 1) % ads.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-accent/30 bg-card shadow-sm">
      {ads.map((ad, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${ad.bg} p-6 flex flex-col justify-center transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <h4 className="text-sm font-bold text-foreground mb-2">{ad.title}</h4>
          <p className="text-xs text-text-secondary mb-4 leading-relaxed">{ad.subtitle}</p>
          <button className="self-start px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
            {ad.cta}
          </button>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-accent" : "w-1.5 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}

function StatRow({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: string; color: "primary" | "accent" }) {
  return (
    <div className="flex items-center gap-3 min-w-0">
      <div className={`h-9 w-9 rounded-xl shrink-0 flex items-center justify-center ${color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-text-muted">{label}</div>
        <div className="text-sm font-bold text-foreground truncate">{value}</div>
      </div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-center py-2.5 rounded-xl border border-border text-sm font-medium text-text-secondary hover:border-primary/50 hover:text-foreground transition-all"
    >
      {label}
    </Link>
  );
}
