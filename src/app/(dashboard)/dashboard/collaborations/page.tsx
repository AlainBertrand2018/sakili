import { HandshakeDashboard } from "@/features/collaborations/handshake-dashboard";
import { pages, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.collaborations);

export default function Page() {
  return <HandshakeDashboard />;
}
