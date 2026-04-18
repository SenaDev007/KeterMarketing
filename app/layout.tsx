import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keter Marketing — Agence Web qui Convertit | Sites Web Premium",
    template: "%s | Keter Marketing",
  },
  description:
    "Keter Marketing conçoit des sites web stratégiques qui transforment vos visiteurs en clients. Copywriting, design premium et SEO pour agences, infopreneurs et PME.",
  keywords: [
    "agence création site web conversion",
    "site web qui convertit PME",
    "copywriting site web professionnel",
    "agence web stratégique France",
    "refonte site web agence",
    "Keter Marketing",
  ],
  authors: [{ name: "Keter Marketing" }],
  creator: "Keter Marketing",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ketermarketing.com",
    siteName: "Keter Marketing",
    title: "Keter Marketing — On transforme vos visiteurs en clients. À chaque fois.",
    description:
      "Sites web stratégiques qui génèrent des leads qualifiés. Stratégie, copywriting et design pour agences, infopreneurs et PME ambitieux.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keter Marketing — Agence Web Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keter Marketing — Sites Web qui Convertissent",
    description: "On transforme vos visiteurs en clients. À chaque fois.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://ketermarketing.com"),
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ketermarketing.com/#organization",
      name: "Keter Marketing",
      url: "https://ketermarketing.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ketermarketing.com/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@ketermarketing.com",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: [
        "https://linkedin.com/company/ketermarketing",
        "https://instagram.com/ketermarketing",
        "https://x.com/ketermarketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ketermarketing.com/#website",
      url: "https://ketermarketing.com",
      name: "Keter Marketing",
      description: "Agence de création de sites web stratégiques orientés conversion",
      publisher: { "@id": "https://ketermarketing.com/#organization" },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
