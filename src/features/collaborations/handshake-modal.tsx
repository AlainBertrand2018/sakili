"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Send, X, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface HandshakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  orgName: string;
}

const intentTypes = [
  { id: "partnership", label: "Strategic Partnership", icon: ShieldCheck },
  { id: "research", label: "Research Collaboration", icon: Info },
  { id: "procurement", label: "Intelligence Procurement", icon: Send },
];

export function HandshakeModal({ isOpen, onClose, orgName }: HandshakeModalProps) {
  const [selectedIntent, setSelectedIntent] = React.useState("partnership");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  async function handleHandshake() {
    setIsSubmitting(true);
    // TODO: Implement Supabase handshake creation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[70] px-4"
          >
            <div className="glass rounded-[32px] p-8 md:p-10 border-white/10 shadow-3xl overflow-hidden relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-text-muted hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="h-20 w-20 rounded-full bg-state-success/10 border border-state-success/20 flex items-center justify-center text-state-success mx-auto mb-6">
                    <CheckIcon className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Handshake Initiated</h2>
                  <p className="text-text-secondary">
                    Your collaboration intent has been securely transmitted to <strong>{orgName}</strong>. 
                    You will be notified once they respond.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Initiate Handshake</h2>
                      <p className="text-sm text-text-muted">Propose collaboration with {orgName}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-xs uppercase tracking-widest text-text-muted">Intent Type</Label>
                      <div className="grid grid-cols-1 gap-3">
                        {intentTypes.map((intent) => (
                          <button
                            key={intent.id}
                            onClick={() => setSelectedIntent(intent.id)}
                            className={cn(
                              "flex items-center justify-between p-4 rounded-2xl border transition-all text-left group",
                              selectedIntent === intent.id 
                                ? "bg-primary/10 border-primary text-primary" 
                                : "bg-white/5 border-border text-text-secondary hover:border-primary/50"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <intent.icon className={cn("h-5 w-5", selectedIntent === intent.id ? "text-primary" : "text-text-muted group-hover:text-primary")} />
                              <span className="font-bold">{intent.label}</span>
                            </div>
                            <div className={cn(
                              "h-5 w-5 rounded-full border-2 flex items-center justify-center",
                              selectedIntent === intent.id ? "border-primary bg-primary" : "border-border"
                            )}>
                              {selectedIntent === intent.id && <CheckIcon className="h-3 w-3 text-primary-foreground" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs uppercase tracking-widest text-text-muted">Personalized Invitation</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        placeholder="Detail your collaboration vision or specific intelligence requirements..."
                        className="bg-white/5 border-border min-h-[120px] rounded-2xl resize-none focus:border-primary/50"
                      />
                    </div>

                    <Button 
                      disabled={isSubmitting}
                      onClick={handleHandshake}
                      className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-accent-hover font-bold text-lg shadow-xl shadow-primary/20"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="mr-2 h-5 w-5 border-2 border-white/20 border-t-white rounded-full"
                        />
                      ) : (
                        <Send className="mr-2 h-5 w-5" />
                      )}
                      Send Handshake
                    </Button>
                    
                    <p className="text-[10px] text-center text-text-muted uppercase tracking-widest">
                      Institutional verification required for accepted handshakes.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
