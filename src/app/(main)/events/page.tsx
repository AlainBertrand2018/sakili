"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Plus, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { setDocumentMeta, pages } from "@/lib/seo";

const mockEvents = [
  {
    title: "Les 24hr du Code",
    date: "10 March 2027",
    description: "A 24-hour coding marathon bringing together developers, designers, and innovators from across the continent to build AI-powered solutions.",
    category: "Hackathon",
    location: "Mauritius",
  },
  {
    title: "Beyond the Chatbot",
    date: "31 July 2026",
    description: "An immersive conference exploring the next frontier of conversational AI — from multimodal agents to autonomous decision-making systems.",
    category: "Conference",
    location: "Nairobi, Kenya",
  },
  {
    title: "AI for Agriculture",
    date: "28 August 2026",
    description: "A focused symposium on how artificial intelligence is transforming African agriculture — from precision farming to supply chain optimization.",
    category: "Symposium",
    location: "Abidjan, Côte d'Ivoire",
  },
];

const categoryColors: Record<string, string> = {
  Hackathon: "bg-primary/10 text-primary border-primary/20",
  Conference: "bg-accent/10 text-accent border-accent/20",
  Symposium: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

export default function EventsPage() {
  React.useEffect(() => {
    setDocumentMeta(pages.events.title, pages.events.description);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 container mx-auto px-4 md:px-6 pt-32 pb-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Calendar className="h-14 w-14 text-primary/30 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Events</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Discover AI events, conferences, and meetups across the African continent.
          </p>
          <Link href="/events/create">
            <Button className="bg-primary text-primary-foreground hover:opacity-90 font-semibold px-8 h-14 rounded-xl text-lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Your Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mockEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group flex flex-col"
              >
                <span className={cn("inline-block self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4", categoryColors[event.category] || "")}>
                  {event.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                  {event.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
