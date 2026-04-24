import type { Metadata } from "next";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio - Ce qu'on construit, ce que cela produit | Keter Marketing",
  description:
    "Découvrez les réalisations Keter Marketing: site vitrine, landing page, refonte stratégique et gestion de site. Chaque projet répond à un problème business réel.",
  alternates: {
    canonical: "https://ketermarketing.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
