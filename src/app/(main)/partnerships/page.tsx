import { Header } from "@/components/layout/header";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.partnerships);

export default function PartnershipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Partnerships</h1>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              SAKILI partners with organizations across Africa to strengthen the continental AI ecosystem. 
              Our partnership framework enables institutional collaboration, data sharing, and coordinated 
              investment in AI infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
