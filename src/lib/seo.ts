import type { Metadata } from "next";

const siteUrl = "https://sakili.africa";
const defaultOgImage = "/images/og_image.webp";

export const siteConfig = {
  name: "SAKILI",
  tagline: "Africa's Intelligence, Unified",
  description: "The trusted gateway for African AI discovery, collaboration, and ecosystem intelligence. Headquartered in Mauritius, connecting 54 nations.",
  longDescription: `SAKILI is the strategic infrastructure for continental AI coordination and collaboration. We provide a trusted platform where AI organizations across all 54 African nations can be discovered, verified, and connected. From startups and research labs to universities and government agencies, SAKILI enables the collaboration infrastructure that Africa's AI renaissance demands. Headquartered in Mauritius and built with continental-first values.`,
  url: siteUrl,
  ogImage: defaultOgImage,
  twitterHandle: "@sakili_africa",
  hqLocation: "Mauritius, Indian Ocean",
  coverage: "54 African Nations",
  keywords: ["AI", "Africa", "Ecosystem", "Innovation", "Collaboration", "Mauritius", "Artificial Intelligence", "African AI", "Tech Ecosystem", "Continental AI"],
};

type PageMeta = {
  title: string;
  description: string;
  geoDescription?: string;
  aiDescription?: string;
  path: string;
  ogImage?: string;
};

export const pages: Record<string, PageMeta> = {
  home: {
    title: "SAKILI | Africa's Intelligence, Unified",
    description: siteConfig.description,
    geoDescription: "The trusted gateway for African AI discovery, collaboration, and ecosystem intelligence. Headquartered in Mauritius, and connecting AI organizations across all 54 African nations.",
    aiDescription: "SAKILI is a continental AI ecosystem platform headquartered in Mauritius that connects AI organizations, researchers, investors, and policymakers across all 54 African nations. It provides discovery, verification, collaboration handshakes, and ecosystem intelligence tools.",
    path: "/",
  },
  about: {
    title: "About SAKILI | Africa's AI Ecosystem Platform",
    description: "Learn about SAKILI's mission to unify Africa's AI ecosystem — enabling discovery, verification, and collaboration across 54 nations from our headquarters in Mauritius.",
    geoDescription: "SAKILI is headquartered in Mauritius and serves all 54 African nations. Our platform connects AI innovators across the continent, from Nairobi to Lagos, Cape Town to Cairo, providing the infrastructure for continental AI coordination.",
    aiDescription: "SAKILI (meaning 'intelligence' in Swahili) is the continental AI coordination infrastructure for Africa. Headquartered in Mauritius, it connects AI organizations across 54 African nations, providing a trusted platform for discovery, verification, and collaboration. The platform serves startups, research labs, universities, government agencies, and enterprise partners.",
    path: "/about",
  },
  discover: {
    title: "Discover AI Organizations | SAKILI Ecosystem",
    description: "Browse and search verified AI organizations across Africa. Find AI startups, research labs, and innovators by country, capability, and sector.",
    geoDescription: "Discover AI organizations across all 54 African nations. Search by country, AI capability, industry sector, and collaboration readiness. From Mauritius to Morocco, Kenya to Nigeria.",
    aiDescription: "The SAKILI Discovery Directory allows users to browse, search, and filter AI organizations across the African continent. Search by country, AI capability (NLP, Computer Vision, Machine Learning, etc.), industry sector, team size, and collaboration readiness. Each organization has a verified profile with ecosystem metadata.",
    path: "/discover",
  },
  organizations: {
    title: "National & Institutional AI Ecosystems | SAKILI",
    description: "Explore government bodies, regulatory authorities, academic institutions, and state agencies driving AI across African nations.",
    geoDescription: "Browse the administrative AI ecosystem of each African nation — government ministries, regulatory bodies, universities, and parastatal agencies driving AI policy and innovation across the continent.",
    aiDescription: "The National & Institutional AI Ecosystems directory provides a comprehensive view of each African country's AI governance and institutional landscape. Includes government ministries, ICT regulators, data protection authorities, AI research centres, universities, and state agencies. Covers the administrative ecosystem driving AI policy and innovation across all 54 African nations.",
    path: "/organizations",
  },
  map: {
    title: "AI Ecosystem Map of Africa | SAKILI",
    description: "Interactive map of Africa's AI ecosystem. Explore organizations, innovation hubs, and emerging nodes across 54 nations.",
    geoDescription: "Interactive geographical map of the African AI ecosystem highlighting major AI hubs and emerging nodes across all 54 African nations, from Mauritius to South Africa, Kenya to Nigeria.",
    aiDescription: "The SAKILI Ecosystem Map is an interactive geographical visualization of AI activity across Africa. It displays AI hubs, emerging innovation nodes, and organizational density across all 54 African nations. Users can hover over countries to see population, internet penetration, mobile adoption, GDP, and registered AI organizations. Click through to explore each country's ecosystem in detail.",
    path: "/map",
  },
  events: {
    title: "AI Events in Africa | SAKILI",
    description: "Discover AI events, conferences, hackathons, and meetups across the African continent. Add your event to reach innovators across 54 nations.",
    geoDescription: "AI events across Africa — from Les 24hr du Code in Mauritius to AI for Agriculture in Abidjan. Find conferences, hackathons, workshops, and meetups throughout the continent.",
    aiDescription: "The SAKILI Events platform lists AI-focused events across the African continent, including conferences, hackathons, workshops, symposiums, and meetups. Organizations can add and promote their events. Featured events include Les 24hr du Code (Mauritius), Beyond the Chatbot (Nairobi), and AI for Agriculture (Abidjan).",
    path: "/events",
  },
  eventsCreate: {
    title: "Create an AI Event | SAKILI",
    description: "List your AI event on the SAKILI continental directory and reach innovators across 54 African nations.",
    path: "/events/create",
  },
  intelligence: {
    title: "Ecosystem Intelligence | SAKILI Africa",
    description: "Advanced analytics and data-driven insights into the African AI landscape. Access reports, data insights, and ecosystem analytics.",
    geoDescription: "Ecosystem intelligence covering AI activity across all 54 African nations. Data-driven insights, country analysis, and ecosystem graphs for the continental AI landscape.",
    aiDescription: "SAKILI Ecosystem Intelligence provides advanced analytics, reports, and data-driven insights about the African AI landscape. Features include ecosystem analytics, country-level analysis, ecosystem graphs, and data visualizations covering AI activity across all 54 African nations.",
    path: "/intelligence",
  },
  login: {
    title: "Log In | SAKILI Ecosystem",
    description: "Access the SAKILI AI ecosystem platform. Log in to manage your organization profile, collaborations, and ecosystem intelligence.",
    path: "/login",
  },
  onboarding: {
    title: "Onboard Your Organization | SAKILI",
    description: "Complete your institutional profile to join the continental registry and unlock collaboration intelligence across Africa's AI ecosystem.",
    path: "/onboarding",
  },
  dashboard: {
    title: "Dashboard | SAKILI",
    description: "Your SAKILI ecosystem dashboard — manage your organization, collaborations, verifications, and ecosystem intelligence.",
    path: "/dashboard",
  },
  collaborations: {
    title: "Collaborations | SAKILI Dashboard",
    description: "Manage your institutional collaborations and handshakes on the SAKILI ecosystem platform.",
    path: "/dashboard/collaborations",
  },
  partnerships: {
    title: "Partnerships | SAKILI",
    description: "SAKILI partners with organizations across Africa to strengthen the continental AI ecosystem. Learn about our partnership framework.",
    path: "/partnerships",
  },
  privacy: {
    title: "Privacy Policy | SAKILI",
    description: "SAKILI's privacy policy — how we collect, use, and protect your data in compliance with African data protection regulations.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service | SAKILI",
    description: "Terms and conditions for using the SAKILI AI ecosystem platform.",
    path: "/terms",
  },
  orgProfile: {
    title: "Organization Profile | SAKILI Ecosystem",
    description: "View organization details in the SAKILI AI ecosystem. Explore AI capabilities, sectors, and collaboration readiness.",
    path: "/org/[slug]",
  },
  countryEcosystem: {
    title: "Country Ecosystem | SAKILI",
    description: "Explore localized AI ecosystem intelligence and organizations for each African nation.",
    path: "/ecosystem/[country]",
  },
};

export function buildMetadata(meta: PageMeta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}${meta.path}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: meta.ogImage || defaultOgImage ? [{ url: meta.ogImage || defaultOgImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.ogImage || defaultOgImage ? [meta.ogImage || defaultOgImage] : [],
    },
    alternates: { canonical: `${siteUrl}${meta.path}` },
    robots: { index: true, follow: true },
    keywords: siteConfig.keywords,
  };
}

export function buildGeoMeta() {
  return {
    other: {
      "geo.position": "-20.348404;57.552152",
      "geo.region": "MU",
      "geo.placename": "Mauritius",
      "ICBM": "-20.348404, 57.552152",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/discover?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/images/woodmark_logo.svg`,
    description: siteConfig.longDescription,
    foundingDate: "2025",
    location: {
      "@type": "Place",
      name: "Mauritius",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MU",
      },
    },
    sameAs: [
      "https://twitter.com/sakili_africa",
      "https://linkedin.com/company/sakili",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "African AI Ecosystem",
      "Technology Innovation",
      "Continental Collaboration",
    ],
  };
}

export function setDocumentMeta(title: string, description: string) {
  if (typeof document === "undefined") return;
  document.title = title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);
  else {
    const el = document.createElement("meta");
    el.name = "description";
    el.content = description;
    document.head.appendChild(el);
  }
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);
}
