import { CountryEcosystem } from "@/features/discovery/country-ecosystem";
import { getCountryInfo } from "@/features/discovery/country-data";

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const code = country.toUpperCase();
  const info = getCountryInfo(code);
  const name = info?.name || code;
  return {
    title: `${name} AI Ecosystem | SAKILI`,
    description: `Explore the AI ecosystem in ${name}. Discover AI organizations, research labs, startups, and innovation hubs in ${name}'s growing AI landscape.`,
    openGraph: {
      title: `${name} AI Ecosystem | SAKILI`,
      description: `Explore AI organizations and innovation in ${name}. Part of the SAKILI continental AI ecosystem spanning 54 African nations.`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const code = country.toUpperCase();
  const info = getCountryInfo(code);
  const countryName = info?.name || code;

  return <CountryEcosystem countryName={countryName} countryCode={code} />;
}
