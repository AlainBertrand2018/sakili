import { CountryEcosystem } from "@/features/discovery/country-ecosystem";

export const metadata = {
  title: "Country Ecosystem",
  description: "Explore localized AI ecosystem intelligence and organizations.",
};

export default function Page({ params }: { params: { country: string } }) {
  // Capitalize first letter of country
  const countryName = params.country.charAt(0).toUpperCase() + params.country.slice(1);
  
  return <CountryEcosystem countryName={countryName} />;
}
