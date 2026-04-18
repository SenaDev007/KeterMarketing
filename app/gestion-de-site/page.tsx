import type { Metadata } from "next";
import GestionSiteContent from "./GestionSiteContent";

export const metadata: Metadata = {
  title: "Gestion de Site Web | Keter Marketing",
  description: "Maintenance, hébergement, corrections de bugs, modifications de contenu illimitées, optimisation vitesse et sécurité. Confiez votre site à Keter Marketing.",
  openGraph: {
    title: "Gestion de Site Web — Keter Marketing",
    description: "On s'occupe de tout. Vous vous concentrez sur votre business.",
  },
};

export default function GestionSitePage() {
  return <GestionSiteContent />;
}
