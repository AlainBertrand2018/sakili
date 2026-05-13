import { Building2, Handshake, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickStats = [
  { name: "Org Visibility", value: "842", trend: "+12%", icon: Zap },
  { name: "Handshakes", value: "14", trend: "+2", icon: Handshake },
  { name: "Trust Score", value: "92/100", icon: ShieldCheck },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Ecosystem Overview</h1>
          <p className="text-text-secondary">Track your organization's participation and impact across Africa.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-border bg-white/5">Export Intelligence</Button>
          <Button className="bg-primary text-primary-foreground font-semibold">Initiate Handshake</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat) => (
          <div key={stat.name} className="glass-surface p-6 rounded-2xl border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              {stat.trend && (
                <span className="text-[10px] font-bold text-state-success bg-state-success/10 px-2 py-0.5 rounded-full">
                  {stat.trend}
                </span>
              )}
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">{stat.name}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Onboarding Completion Card */}
        <div className="glass rounded-3xl p-8 border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Building2 className="h-24 w-24" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">Profile Completeness</h3>
          <div className="w-full bg-white/5 h-2 rounded-full mb-6">
            <div className="bg-primary h-2 rounded-full w-[65%]" />
          </div>
          <p className="text-sm text-text-secondary mb-8 max-w-sm">
            Your organization profile is 65% complete. Finish adding your AI capabilities to increase visibility to governments and investors.
          </p>
          <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-foreground">
            Complete Profile
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Verification Status Card */}
        <div className="glass rounded-3xl p-8 border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShieldCheck className="h-24 w-24" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">Verification Level: Basic</h3>
          <p className="text-sm text-text-secondary mb-8 max-w-sm">
            You currently hold a Basic verification badge. Upgrade to "Verified Member" to unlock ecosystem intelligence reports and cross-border partnership matching.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full uppercase tracking-tight">Basic</span>
            <span className="text-[10px] font-bold text-text-muted border border-border px-2.5 py-1 rounded-full uppercase tracking-tight">Verified</span>
            <span className="text-[10px] font-bold text-text-muted border border-border px-2.5 py-1 rounded-full uppercase tracking-tight">Institutional</span>
          </div>
          <Button className="bg-primary text-primary-foreground font-semibold">
            Upgrade Verification
          </Button>
        </div>
      </div>
    </div>
  );
}
