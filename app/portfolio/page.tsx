import type { Metadata } from "next";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio — Ce qu'on construit, ce que ça produit | Keter Marketing",
  description:
    "Découvrez les réalisations Keter Marketing : site vitrine coach business, landing page infopreneur, refonte agence B2B. Chaque projet est une réponse stratégique à un problème réel.",
  alternates: {
    canonical: "https://ketermarketing.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
