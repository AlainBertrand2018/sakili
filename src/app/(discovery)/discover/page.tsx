import { DiscoveryPage } from "@/features/discovery/discovery-page";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.discover);

export default function Page() {
  return <DiscoveryPage />;
}
