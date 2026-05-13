import { Header } from "@/components/layout/header";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.terms);

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>This page outlines the terms and conditions for using the SAKILI platform.</p>
            <p>Details coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
