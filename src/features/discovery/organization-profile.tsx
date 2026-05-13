"use client";

import { Globe, Mail, MapPin, ShieldCheck, Zap, Handshake, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { HandshakeModal } from "@/features/collaborations/handshake-modal";
import * as React from "react";

export function OrganizationProfile() {
  const [isHandshakeOpen, setIsHandshakeOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <HandshakeModal 
            isOpen={isHandshakeOpen} 
            onClose={() => setIsHandshakeOpen(false)} 
            orgName="SAKILI AI Labs" 
          />
          {/* Cover / Header Section */}
          <div className="relative glass rounded-[32px] p-8 md:p-12 border-white/10 mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Zap className="h-64 w-64" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-4xl font-bold text-primary shrink-0 shadow-2xl">
                SL
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">SAKILI AI Labs</h1>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-state-success/10 border border-state-success/20 text-state-success text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="h-3 w-3" />
                    Institutional Verified
                  </div>
                </div>
                
                <p className="text-xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
                  Leading the development of large-scale language models optimized for regional African dialects and agricultural intelligence.
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Mauritius, Port Louis
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    sakili-labs.ai
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Maturity: Enterprise
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
                <Button 
                  onClick={() => setIsHandshakeOpen(true)}
                  className="bg-primary text-primary-foreground font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/20 group"
                >
                  <Handshake className="mr-2 h-5 w-5" />
                  Initiate Handshake
                </Button>
                <Button variant="outline" className="border-border text-foreground h-12 px-8 rounded-xl bg-white/5">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">About Organization</h2>
                <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
                  <p>
                    SAKILI AI Labs was founded to bridge the intelligence gap in continental data processing. We focus on creating high-fidelity datasets that reflect the socio-economic realities of Africa, enabling more accurate predictive modeling for infrastructure and resource management.
                  </p>
                  <p className="mt-4">
                    Our team of 45+ researchers and engineers collaborates with universities in 12 countries to ensure that AI development is inclusive, representative, and strategically aligned with the African Union's Agenda 2063.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">AI Capabilities</h2>
                <div className="flex flex-wrap gap-3">
                  {['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Ethical AI', 'Edge Computing'].map(cap => (
                    <span key={cap} className="px-4 py-2 rounded-xl bg-white/5 border border-border text-sm text-text-secondary font-medium transition-colors hover:border-primary/50 cursor-default">
                      {cap}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Sectors of Impact</h2>
                <div className="flex flex-wrap gap-3">
                  {['Agriculture', 'Infrastructure', 'Education', 'Government'].map(sector => (
                    <span key={sector} className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-sm text-primary font-bold uppercase tracking-wider">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-8">
              <div className="glass-surface p-8 rounded-3xl border-white/5">
                <h3 className="text-lg font-bold text-foreground mb-6">Ecosystem Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-muted">Handshakes Accepted</span>
                    <span className="text-lg font-bold text-foreground">124</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-muted">Verification Rank</span>
                    <span className="text-lg font-bold text-primary">#12 Continental</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-muted">Verified Since</span>
                    <span className="text-lg font-bold text-foreground">2024</span>
                  </div>
                </div>
              </div>

              <div className="glass-surface p-8 rounded-3xl border-white/5">
                <h3 className="text-lg font-bold text-foreground mb-6">Contact Intelligence</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Mail className="h-4 w-4 text-primary" />
                    intelligence@sakili-labs.ai
                  </div>
                  <p className="text-xs text-text-muted mt-4">
                    Responses are usually handled within 48 institutional hours. Verified handshakes are prioritized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
