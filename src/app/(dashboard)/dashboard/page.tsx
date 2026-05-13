import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.dashboard);

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Overview</h1>
      <p className="text-text-secondary mt-2">Welcome to your SAKILI ecosystem dashboard.</p>
    </div>
  );
}
