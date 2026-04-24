import type { Metadata } from "next";
import GestionSiteContent from "./GestionSiteContent";

export const metadata: Metadata = {
  title: "Gestion de site web | Keter Marketing",
  description:
    "Maintenance, hébergement, corrections de bugs, modifications de contenu, optimisation vitesse et sécurité. Confiez la gestion de votre site à Keter Marketing.",
  openGraph: {
    title: "Gestion de site web - Keter Marketing",
    description: "On s'occupe de tout. Vous vous concentrez sur votre business.",
  },
};

export default function GestionSitePage() {
  return <GestionSiteContent />;
}
