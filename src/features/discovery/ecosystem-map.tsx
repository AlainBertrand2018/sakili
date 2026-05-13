"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, ShieldCheck } from "lucide-react";

export function EcosystemMap() {
  return (
    <div className="relative w-full aspect-[21/9] glass rounded-[32px] border-white/10 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Continental Hub Metaphor */}
      <div className="relative h-64 w-64 md:h-96 md:w-96 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
        />
        
        {/* Middle Ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 border border-primary/10 rounded-full flex items-center justify-center"
        >
          {/* Node Points */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <div 
              key={deg}
              className="absolute h-3 w-3 bg-primary rounded-full shadow-[0_0_10px_rgba(94,234,212,0.8)]"
              style={{ transform: `rotate(${deg}deg) translateY(-144px)` }}
            />
          ))}
        </motion.div>

        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-24 w-24 md:h-32 md:w-32 bg-primary rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(94,234,212,0.3)] z-10"
        >
          <Globe className="h-12 w-12 md:h-16 md:w-16 text-primary-foreground" />
          <div className="absolute -bottom-10 text-xs font-bold text-primary uppercase tracking-[0.2em] whitespace-nowrap">
            Continental Core
          </div>
        </motion.div>

        {/* Floating Data Streams (Lines) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {/* I'll add some animated lines if needed, but this visual is already institutional */}
        </svg>
      </div>

      {/* Map Labels */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest">
          <div className="h-2 w-2 rounded-full bg-primary" />
          Verified AI Nodes
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest">
          <div className="h-2 w-2 rounded-full bg-accent-primary opacity-30" />
          Emerging Hubs
        </div>
      </div>

      <div className="absolute top-8 right-8 flex items-center gap-3 glass-surface px-4 py-2 rounded-full border-white/10">
        <ShieldCheck className="h-4 w-4 text-primary" />
        <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">Real-time Intelligence Feed</span>
      </div>
    </div>
  );
}
