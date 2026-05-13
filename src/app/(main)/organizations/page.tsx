"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Globe, ChevronRight, ClipboardList, Clock,
  Phone, Percent, IdCard, Scale, Sparkles,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { FilterableSearch } from "@/components/filterable-search";
import { getAdminData, getAllAdminData, typeMeta, type AdminOrg } from "@/features/discovery/organization-data";
import { getFlag } from "@/features/discovery/country-data";
import { setDocumentMeta, pages } from "@/lib/seo";

const countries = getAllAdminData();

const sectorFilters = [
  { value: "government", label: "Government & Ministries" },
  { value: "regulator", label: "Regulatory Bodies" },
  { value: "academic", label: "Academic & Research" },
  { value: "parastatal", label: "Parastatals & Agencies" },
];

const typeOrder: AdminOrg["type"][] = ["government", "regulator", "academic", "parastatal"];

/* ─── Ad Carousel ─── */
const ads = [
  {
    title: "Discover AI Innovators Across Africa",
    subtitle: "Browse 850+ verified AI organizations in 54 countries.",
    cta: "Explore Ecosystem",
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    title: "Secure Your Institution's Verification",
    subtitle: "Build trust with SAKILI's tiered verification framework.",
    cta: "Get Verified",
    gradient: "from-accent/20 via-primary/10 to-transparent",
  },
  {
    title: "Power Your AI Research with Ecosystem Data",
    subtitle: "Access real-time intelligence on Africa's AI landscape.",
    cta: "View Intelligence",
    gradient: "from-primary/15 via-accent/5 to-transparent",
  },
];

function Carousel() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIdx((prev) => (prev + 1) % ads.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[30vh] md:min-h-[35vh] overflow-hidden rounded-3xl border border-border bg-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${ads[idx].gradient} p-8 md:p-14 flex flex-col justify-center`}
        >
          <Sparkles className="h-8 w-8 text-primary/30 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 max-w-xl">{ads[idx].title}</h3>
          <p className="text-sm md:text-base text-text-secondary max-w-lg mb-6">{ads[idx].subtitle}</p>
          <button className="self-start px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            {ads[idx].cta}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Intent Card ─── */
function IntentCard({ icon: Icon, label, color, text }: { icon: React.ElementType; label: string; color: "primary" | "accent"; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className={`text-xs font-bold uppercase tracking-wider ${color === "primary" ? "text-primary" : "text-accent"} mb-1`}>{label}</div>
        <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function OrganizationsPage() {
  const [selectedCode, setSelectedCode] = React.useState(countries[0]?.countryCode || "MU");
  const [sectorFilter, setSectorFilter] = React.useState("");
  const [intent, setIntent] = React.useState<string>("register");

  React.useEffect(() => {
    setDocumentMeta(pages.organizations.title, pages.organizations.description);
  }, []);

  const data = getAdminData(selectedCode);
  const flag = data ? getFlag(selectedCode) : "";

  const filteredOrgs = React.useMemo(() => {
    if (!data) return {};
    const grouped = data.organizations.reduce<Record<string, AdminOrg[]>>((acc, org) => {
      if (sectorFilter && org.type !== sectorFilter) return acc;
      if (!acc[org.type]) acc[org.type] = [];
      acc[org.type].push(org);
      return acc;
    }, {});
    return grouped;
  }, [data, sectorFilter]);

  return (
    <>
      <Header />

      {/* ─── Section 1: Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        {/* Background image */}
        <img
          src="/images/hero_01.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
              National &amp; Institutional <br />
              <span className="text-white">AI Ecosystems</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
              Explore government bodies, regulatory authorities, academic institutions, and state agencies
              driving the AI ecosystem across African nations.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <FilterableSearch
              placeholder="Search for a country..."
              items={countries}
              getSearchText={(c) => `${c.countryName} ${c.countryCode}`}
              getKey={(c) => c.countryCode}
              selectedKey={selectedCode}
              onSelect={(c) => setSelectedCode(c.countryCode)}
              renderItem={(c, highlighted) => (
                <div className="flex items-center gap-3">
                  <img src={getFlag(c.countryCode)} alt="" className="w-6 h-5 rounded object-cover" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{c.countryName}</div>
                    <div className="text-[10px] font-mono text-text-muted uppercase">{c.countryCode}</div>
                  </div>
                  {highlighted && <ChevronRight className="ml-auto h-4 w-4 text-primary" />}
                </div>
              )}
              filters={[
                { key: "sector", label: "Sector", options: sectorFilters },
              ]}
              filterValues={{ sector: sectorFilter ? [sectorFilter] : [] }}
              onFilterChange={(key, values) => {
                if (key === "sector") setSectorFilter(values[0] || "");
              }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-4 h-6 rounded-full border border-border flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Section 2: Advertising Carousel ─── */}
      <section className="min-h-[50vh] flex items-center justify-center px-4 md:px-6 bg-muted/30 border-y border-border overflow-hidden">
        <div className="container mx-auto max-w-5xl py-8 w-full">
          <Carousel />
        </div>
      </section>

      {/* ─── Sections 3–5 ─── */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        {data && (
          <div className="space-y-16">
            {/* Section 3: Path to Business */}
            {data.businessPath && (
              <section className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Path to Business in <span className="text-primary">{data.countryName}</span>
                  </h2>
                  {flag && <img src={flag} alt="" className="w-8 h-6 rounded object-cover" />}
                </div>
                <p className="text-sm text-text-secondary mb-6 max-w-xl">
                  What brings you to {data.countryName}&rsquo;s AI ecosystem?
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { id: "register", label: "Register a new business", icon: ClipboardList },
                    { id: "partner", label: "Find a local partner", icon: Phone },
                    { id: "invest", label: "Raise capital / find investors", icon: Percent },
                    { id: "hire", label: "Hire tech talent", icon: IdCard },
                    { id: "government", label: "Sell to government", icon: Scale },
                    { id: "research", label: "Academic collaboration", icon: Building2 },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setIntent(opt.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                          intent === opt.id
                            ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "bg-muted border-border text-text-secondary hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {(intent === "register" || intent === "invest") && (
                    <><IntentCard icon={ClipboardList} label="Registration" color="primary" text={data.businessPath.registrationSteps} /><IntentCard icon={Clock} label="Timeline" color="accent" text={data.businessPath.timeline} /></>
                  )}
                  {intent === "register" && (
                    <><IntentCard icon={Scale} label="Legal Framework" color="primary" text={data.businessPath.legalFramework} /><IntentCard icon={Percent} label="Tax Incentives" color="accent" text={data.businessPath.taxIncentives} /></>
                  )}
                  {intent === "partner" && (
                    <><IntentCard icon={Phone} label="Key Contacts" color="primary" text={data.businessPath.keyContacts} /><IntentCard icon={Scale} label="Legal Framework" color="accent" text={data.businessPath.legalFramework} /></>
                  )}
                  {intent === "invest" && (
                    <><IntentCard icon={Percent} label="Tax Incentives" color="primary" text={data.businessPath.taxIncentives} /><IntentCard icon={Phone} label="Key Contacts" color="accent" text={data.businessPath.keyContacts} /></>
                  )}
                  {intent === "hire" && (
                    <><IntentCard icon={IdCard} label="Visa & Talent Policy" color="primary" text={data.businessPath.visaPolicy} /><IntentCard icon={Phone} label="Key Contacts" color="accent" text={data.businessPath.keyContacts} /></>
                  )}
                  {intent === "government" && (
                    <><IntentCard icon={Scale} label="Legal Framework" color="primary" text={data.businessPath.legalFramework} /><IntentCard icon={Phone} label="Key Contacts" color="accent" text={data.businessPath.keyContacts} /></>
                  )}
                  {intent === "research" && (
                    <><IntentCard icon={Scale} label="Legal Framework" color="primary" text={data.businessPath.legalFramework} /><IntentCard icon={IdCard} label="Visa & Talent Policy" color="accent" text={data.businessPath.visaPolicy} /></>
                  )}
                </div>
              </section>
            )}

            {/* Section 4: Organizations Directory */}
            {typeOrder.map((type) => {
              const orgs = filteredOrgs[type];
              if (!orgs || orgs.length === 0) return null;
              const meta = typeMeta[type];
              return (
                <section key={type}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl">{meta.icon}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{meta.label}</h2>
                    <span className="text-xs text-text-muted font-mono bg-muted px-2 py-0.5 rounded-md">{orgs.length}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {orgs.map((org, i) => (
                      <motion.div
                        key={org.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                            <Building2 className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
                              {org.name}
                            </div>
                            <p className="text-xs text-text-secondary leading-relaxed">{org.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Section 5: SAKILI's Recommendations */}
            <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-accent/5 to-background p-8 md:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">SAKILI&rsquo;s Recommendations</h2>
              <p className="text-sm text-text-secondary mb-8 max-w-xl">
                Based on your interest in <span className="font-semibold text-foreground">{data.countryName}</span>, here are suggested next steps.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-all group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><Globe className="h-5 w-5" /></div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">Discover Ecosystem</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">Browse AI organizations and innovators in {data.countryName}&rsquo;s ecosystem.</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-all group">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4"><Building2 className="h-5 w-5" /></div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors mb-1.5">Join the Ecosystem</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">Register your organization and connect with verified partners across Africa.</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-all group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"><Scale className="h-5 w-5" /></div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">Explore Intelligence</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">Access ecosystem analytics, reports, and data-driven insights for {data.countryName}.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {!data && (
          <div className="text-center py-20 text-text-muted">
            <Building2 className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">No administrative data available for this country yet.</p>
          </div>
        )}
      </div>
    </>
  );
}
