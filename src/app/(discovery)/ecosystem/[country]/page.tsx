import { CountryEcosystem } from "@/features/discovery/country-ecosystem";
import { getCountryInfo } from "@/features/discovery/country-data";

export const metadata = {
  title: "Country Ecosystem",
  description: "Explore localized AI ecosystem intelligence and organizations.",
};

export default async function Page({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const code = country.toUpperCase();
  const info = getCountryInfo(code);
  const countryName = info?.name || code;

  return <CountryEcosystem countryName={countryName} countryCode={code} />;
}
