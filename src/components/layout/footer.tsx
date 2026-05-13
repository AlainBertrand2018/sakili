import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = {
  Platform: [
    { name: "Discover", href: "/discover" },
    { name: "Organizations", href: "/organizations" },
    { name: "Ecosystem Map", href: "/map" },
    { name: "Events", href: "/events" },
  ],
  Intelligence: [
    { name: "Reports", href: "/reports" },
    { name: "Data Insights", href: "/insights" },
    { name: "Country Analysis", href: "/analysis" },
    { name: "Ecosystem Graph", href: "/graph" },
  ],
  Community: [
    { name: "About SAKILI", href: "/about" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Join Ecosystem", href: "/join" },
    { name: "Institutional Access", href: "/institutional" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Verification Rules", href: "/verification" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-20 mb-20">
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" className="mb-6" />
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Africa's intelligence, unified. The strategic infrastructure for continental AI coordination and collaboration.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                <img src="/icons/x.svg" alt="X" className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Globe className="h-4 w-4" />
            <span>Headquartered in Mauritius. Connecting 54 African nations.</span>
          </div>
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} SAKILI Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
