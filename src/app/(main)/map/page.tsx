"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
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
                  <Image src={flag} alt={info.code} width={48} height={36} unoptimized className="w-12 h-9 rounded-lg object-cover shadow-md" />
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
  { src: "/images/adverts/sakili_AD_01.webp", alt: "Register Your Organization — Join 850+ verified AI businesses across 54 nations", href: "https://sakili.launchableai.online/onboarding" },
  { src: "/images/adverts/sakili_AD_02.webp", alt: "Partner with SAKILI — Become an institutional partner and shape the ecosystem", href: "https://sakili.launchableai.online/onboarding" },
  { src: "/images/adverts/sakili_AD_03.webp", alt: "Ecosystem Intelligence Report — Data-driven insights on Africa's AI landscape", href: "https://sakili.launchableai.online/intelligence" },
  { src: "/images/adverts/sakili_AD_05.webp", alt: "Sakili Uniting Africa's AI Ecosystem —continental AI Business Landscape", href: "https://sakili.launchableai.online/" },
];

function AdCarousel() {
  const [idx, setIdx] = React.useState(0);
  const prevIdx = React.useRef(0);

  const goTo = React.useCallback((next: number) => {
    setIdx((cur) => { prevIdx.current = cur; return next; });
  }, []);

  React.useEffect(() => {
    const t = setInterval(() => goTo((idx + 1) % ads.length), 6000);
    return () => clearInterval(t);
  }, [idx, goTo]);

  const getTransform = (i: number) => {
    if (i === idx) return "translateX(0%)";
    if (i === prevIdx.current) return "translateX(-100%)";
    return "translateX(100%)";
  };

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-accent/30 bg-card shadow-sm">
      {ads.map((ad, i) => (
        <a
          key={i}
          href={ad.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transform: getTransform(i),
            transition: i === idx || i === prevIdx.current
              ? "transform 600ms cubic-bezier(0.42, 0, 0.58, 1)"
              : "none",
          }}
          className={`absolute inset-0 block ${i !== idx && i !== prevIdx.current ? "pointer-events-none" : ""}`}
        >
          <Image
            src={ad.src}
            alt={ad.alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
            priority={i === 0}
          />
        </a>
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to ad ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${i === idx ? "w-6 bg-accent" : "w-2 bg-white/60"}`}
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
