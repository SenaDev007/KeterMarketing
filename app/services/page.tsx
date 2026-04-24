import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services - Création de site web conversion | Keter Marketing",
  description:
    "Landing page, site one-page, site multi-pages ou refonte stratégique. Découvrez les offres Keter Marketing pour créer des sites web qui convertissent.",
  alternates: {
    canonical: "https://ketermarketing.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
