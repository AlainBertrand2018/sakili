"use client";

import * as React from "react";
import { Handshake, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, XCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const handshakes = [
  {
    id: "1",
    orgName: "Nairobi AI Collective",
    type: "received",
    intent: "Strategic Partnership",
    status: "pending",
    date: "2 hours ago",
    message: "We are interested in your dialect datasets for our regional health assistant project.",
  },
  {
    id: "2",
    orgName: "Cape Town Innovation Hub",
    type: "sent",
    intent: "Research Collaboration",
    status: "accepted",
    date: "Yesterday",
    message: "Proposing a joint research paper on edge computing for agricultural sensors.",
  },
  {
    id: "3",
    orgName: "Lagos Data Science",
    type: "received",
    intent: "Intelligence Procurement",
    status: "rejected",
    date: "3 days ago",
    message: "Requesting access to verified sectoral intelligence reports.",
  },
];

export function HandshakeDashboard() {
  const [filter, setFilter] = React.useState<"all" | "received" | "sent">("all");

  const filteredHandshakes = handshakes.filter(h => filter === "all" || h.type === filter);

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Handshakes</h1>
          <p className="text-text-secondary">Manage your institutional collaboration intents and strategic handshakes.</p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex bg-white/5 p-1 rounded-xl border border-border">
          {["all", "received", "sent"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={cn(
                "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                filter === f ? "bg-primary text-primary-foreground shadow-lg" : "text-text-muted hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <Input placeholder="Search handshakes..." className="pl-10 bg-white/5 border-border rounded-xl h-10" />
        </div>
      </div>

      {/* Handshake List */}
      <div className="space-y-4">
        {filteredHandshakes.map((handshake) => (
          <div key={handshake.id} className="glass-surface p-6 rounded-2xl border-white/5 group hover:border-primary/20 transition-all">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center shrink-0",
                handshake.type === "received" ? "bg-accent-primary/10 text-accent-primary" : "bg-primary/10 text-primary"
              )}>
                {handshake.type === "received" ? <ArrowDownLeft className="h-6 w-6" /> : <ArrowUpRight className="h-6 w-6" />}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-foreground">{handshake.orgName}</h3>
                  <span className={cn(
                    "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                    handshake.status === "pending" ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-500" :
                    handshake.status === "accepted" ? "bg-state-success/10 border-state-success/20 text-state-success" :
                    "bg-destructive/10 border-destructive/20 text-destructive"
                  )}>
                    {handshake.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Handshake className="h-3 w-3" />
                    {handshake.intent}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {handshake.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                {handshake.status === "pending" && handshake.type === "received" ? (
                  <>
                    <Button variant="outline" className="flex-1 md:flex-none border-border text-foreground hover:bg-white/5 rounded-xl">
                      View Message
                    </Button>
                    <Button className="flex-1 md:flex-none bg-state-success hover:bg-state-success/90 text-white rounded-xl font-bold">
                      Accept
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" className="w-full md:w-auto border-border text-foreground hover:bg-white/5 rounded-xl">
                    View Details
                  </Button>
                )}
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-text-secondary italic">
              "{handshake.message}"
            </div>
          </div>
        ))}
      </div>

      {filteredHandshakes.length === 0 && (
        <div className="text-center py-20 glass rounded-3xl border-dashed border-border">
          <Handshake className="h-12 w-12 text-text-muted mx-auto mb-4 opacity-20" />
          <p className="text-text-muted">No handshakes found matching your filter.</p>
        </div>
      )}
    </div>
  );
}
