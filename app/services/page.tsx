import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Création Site Web Conversion | Keter Marketing",
  description:
    "Landing Page, Site One-Page, Site Multi-Pages ou Refonte Stratégique. Découvrez toutes nos offres de création de sites web qui convertissent. À partir de 2 500€.",
  alternates: {
    canonical: "https://ketermarketing.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
