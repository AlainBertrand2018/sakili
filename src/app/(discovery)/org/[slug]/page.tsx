import { OrganizationProfile } from "@/features/discovery/organization-profile";

export const metadata = {
  title: "Organization Profile",
  description: "View organization details in the SAKILI AI ecosystem.",
};

export default function Page({ params }: { params: { slug: string } }) {
  return <OrganizationProfile />;
}
