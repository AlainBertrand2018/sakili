import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig, buildGeoMeta, organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FDF6EC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const geo = buildGeoMeta();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + " | " + siteConfig.tagline,
    template: "%s | SAKILI",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "SAKILI Team" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name + " | " + siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "https://sakili.launchableai.online/images/og_image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " | " + siteConfig.tagline,
    description: siteConfig.description,
    images: ["https://sakili.launchableai.online/images/og_image.webp"],
  },
  other: {
    ...geo.other,
    "og:image:width": "1200",
    "og:image:height": "630",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = organizationSchema();
  const siteSchema = websiteSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary/30 selection:text-primary">
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
