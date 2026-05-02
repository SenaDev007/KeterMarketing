import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Keter Marketing - Agence web qui convertit | Sites web premium",
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
  icons: {
    icon: [
      { url: "/images/logo-keter-marketing1.ico", sizes: "any" },
      { url: "/images/logo-keter-marketing1.png", type: "image/png" },
    ],
    apple: { url: "/images/logo-keter-marketing1.png" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ketermarketing.com",
    siteName: "Keter Marketing",
    title: "Keter Marketing - On transforme vos visiteurs en clients. A chaque fois.",
    description:
      "Sites web stratégiques qui génèrent des leads qualifiés. Stratégie, copywriting et design pour agences, infopreneurs et PME ambitieux.",
    images: [
      {
        url: "/images/logo-keter-marketing1.png",
        width: 512,
        height: 512,
        alt: "Keter Marketing - Agence web conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keter Marketing - Sites web qui convertissent",
    description: "On transforme vos visiteurs en clients. A chaque fois.",
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
        url: "https://ketermarketing.com/images/logo-keter-marketing1.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact.ketermarketing@gmail.com",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: [
        "https://www.linkedin.com/company/keter-marketing",
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
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Analytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
