import { OrganizationProfile } from "@/features/discovery/organization-profile";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.orgProfile);

export default function Page() {
  return <OrganizationProfile />;
}
