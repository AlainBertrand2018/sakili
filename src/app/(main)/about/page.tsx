"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { setDocumentMeta, pages } from "@/lib/seo";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Globe,
  Shield,
  Users,
  Zap,
  Target,
  Eye,
  CheckCircle,
  ExternalLink,
  BarChart3,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ──────────── Data ──────────── */

const partners = [
  "AI Africa Alliance", "Mauritius Tech Hub", "Data Science Africa",
  "African AI Labs", "Ecosystem Builders", "Innovation Bridge",
  "Tech for Impact", "Continental AI Network", "Future Africa",
  "AI Research Institute", "Digital Africa", "Startup Sahara",
];

const articles = [
  { title: "The State of African AI in 2026", tag: "Research", date: "May 2026" },
  { title: "How SAKILI Is Building Continental Trust Infrastructure", tag: "Platform", date: "Apr 2026" },
  { title: "Mauritius: Africa's Emerging AI Gateway", tag: "Spotlight", date: "Apr 2026" },
  { title: "Why Institutional Verification Matters for AI Ecosystems", tag: "Insights", date: "Mar 2026" },
  { title: "Bridging 54 Nations: The SAKILI Vision", tag: "Vision", date: "Mar 2026" },
  { title: "Collaboration Handshakes: A New Paradigm for AI Partnerships", tag: "Feature", date: "Feb 2026" },
];

const faqs = [
  { q: "What is SAKILI?", a: "SAKILI is the strategic infrastructure for continental AI coordination and collaboration. Headquartered in Mauritius, we connect organizations across all 54 African nations, enabling discovery, verification, and collaboration within a trusted ecosystem." },
  { q: "Who can join SAKILI?", a: "Any organization operating in the African AI ecosystem — from startups and research labs to universities, government agencies, and enterprise partners." },
  { q: "Is SAKILI free to use?", a: "Basic registration and discovery features are free. Premium verification tiers and advanced intelligence tools are available for institutional partners." },
  { q: "How does verification work?", a: "SAKILI offers a tiered verification framework: basic (email/domain), verified (document review), institutional (legal entity validation), and partner (strategic endorsement)." },
  { q: "What are Collaboration Handshakes?", a: "Handshakes are structured collaboration agreements between organizations. They support partnerships, research co-ops, procurement deals, and more — all within a trusted framework." },
  { q: "How is my data protected?", a: "SAKILI adheres to strict data protection standards. Your organization's data is encrypted in transit and at rest, and you control what information is publicly visible." },
];

/* ──────────── Section Wrapper ──────────── */

function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={cn("min-h-screen flex items-center justify-center px-4 md:px-6 py-24 md:py-32", className)}>
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}

/* ──────────── 1. Hero ──────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero_03.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-white text-xs font-semibold mb-6">
            <Globe className="h-3 w-3" />
            Continental AI Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
        >
          Africa's Intelligence, <br />
          <span className="text-white">Unified.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SAKILI is the trusted gateway for African AI discovery, collaboration, and ecosystem intelligence.
          Connecting innovators across 54 nations from our headquarters in Mauritius.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/join">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 font-semibold px-8 h-14 rounded-xl text-lg group">
              Join the Ecosystem
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/discover">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-white/5 px-8 h-14 rounded-xl text-lg">
              Explore Organizations
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────── 2. Partners Marquee ──────────── */

function PartnersSection() {
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center px-4 md:px-6 py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto max-w-6xl text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Trusted Across the Continent</h2>
        <p className="text-text-secondary">Partner organizations powering the SAKILI ecosystem</p>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex gap-16 animate-marquee">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-16 px-8 rounded-xl bg-card border border-border text-text-secondary font-semibold text-sm whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────── 3. What Is Sakili ──────────── */

function WhatIsSection() {
  return (
    <Section className="bg-background">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">About</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            What Is <span className="text-primary">SAKILI</span>?
          </h2>
          <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
            <p>
              SAKILI — meaning "intelligence" in Swahili — is a continental infrastructure layer purpose-built
              for the African AI ecosystem.
            </p>
            <p>
              We provide a trusted platform where AI organizations across all 54 African nations can be discovered,
              verified, and connected. From startups and research labs to universities and government agencies,
              SAKILI enables the collaboration infrastructure that Africa's AI renaissance demands.
            </p>
            <p>
              Headquartered in Mauritius and built with continental-first values, we are creating the unified
              nervous system for African AI intelligence.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-border/50 p-8 flex items-center justify-center">
            <Globe className="h-32 w-32 text-primary/30" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ──────────── 4. Mission & Vision ──────────── */

function MissionVisionSection() {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      body: "To build the trusted infrastructure that unifies Africa's AI ecosystem — enabling discovery, verification, and collaboration across all 54 nations.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Eye,
      title: "Our Vision",
      body: "A connected African AI landscape where every innovator, institution, and investor can collaborate seamlessly — driving continental prosperity through intelligence.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <Section className="bg-muted/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mission &amp; Vision</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">What drives us every day</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-primary/30 transition-colors"
          >
            <div className={cn("h-14 w-14 rounded-xl flex items-center justify-center mb-6", item.bg)}>
              <item.icon className={cn("h-7 w-7", item.color)} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
            <p className="text-text-secondary text-lg leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ──────────── 5. Why Register ──────────── */

function WhyRegisterSection() {
  const reasons = [
    { icon: Shield, title: "Verified Presence", body: "Establish your organization's verified identity in Africa's most trusted AI directory." },
    { icon: Zap, title: "AI-Powered Discovery", body: "Get found by partners, investors, and institutions searching for African AI capabilities." },
    { icon: Users, title: "Collaboration Handshakes", body: "Initiate structured partnerships with verified organizations across the continent." },
    { icon: Globe, title: "Continental Visibility", body: "Showcase your work to a pan-African audience of innovators and decision-makers." },
    { icon: BarChart3, title: "Ecosystem Intelligence", body: "Access data and insights about the African AI landscape to guide your strategy." },
    { icon: CheckCircle, title: "Institutional Trust", body: "Leverage SAKILI's verification tiers to build credibility with partners and funders." },
  ];

  return (
    <Section className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Register?</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">The benefits of joining the SAKILI ecosystem</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
          >
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ──────────── 6. Articles Grid ──────────── */

function ArticlesSection() {
  return (
    <Section className="bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest Articles</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Insights and updates from the SAKILI team</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group cursor-pointer flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-widest font-semibold text-primary mb-3">{article.tag}</span>
            <h3 className="text-lg font-bold text-foreground mb-3 flex-1 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-text-muted">{article.date}</span>
              <ExternalLink className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ──────────── 7. FAQ ──────────── */

function FAQSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <Section className="bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary text-lg">Everything you need to know about SAKILI</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-foreground font-semibold hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-text-muted transition-transform", openIdx === i && "rotate-180")} />
              </button>
              <div className={cn("grid transition-all duration-300", openIdx === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────── 8. Contact ──────────── */

function ContactSection() {
  return (
    <Section className="bg-muted/30 border-t border-border">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            Have questions about the ecosystem, verification, or partnership opportunities?
            We'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-text-secondary text-sm">connect@sakili.africa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Headquarters</p>
                <p className="text-text-secondary text-sm">Mauritius, Indian Ocean</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Coverage</p>
                <p className="text-text-secondary text-sm">54 African Nations</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
            <input type="text" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-primary/50 transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <input type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-primary/50 transition-colors" placeholder="you@organization.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <textarea rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-text-muted outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about your interest..." />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90 h-12 rounded-xl font-semibold">
            Send Message
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}

/* ──────────── Page ──────────── */

export default function AboutPage() {
  React.useEffect(() => {
    setDocumentMeta(pages.about.title, pages.about.description);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <WhatIsSection />
        <MissionVisionSection />
        <WhyRegisterSection />
        <ArticlesSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
