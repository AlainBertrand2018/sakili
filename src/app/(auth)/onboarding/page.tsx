import { OnboardingForm } from "@/features/onboarding/onboarding-form";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.onboarding);

export default function Page() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Onboard your Organization</h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Complete your institutional profile to join the continental registry and unlock collaboration intelligence.
          </p>
        </div>
        <OnboardingForm />
      </div>
    </div>
  );
}
