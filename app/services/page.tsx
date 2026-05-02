import type { Metadata } from "next";
import ProcessPageContent from "./ProcessPageContent";

export const metadata: Metadata = {
  title: "Notre Processus - Création de site web | Keter Marketing",
  description:
    "Découvrez notre processus éprouvé en 5 étapes pour créer des sites web qui convertissent vos visiteurs en clients.",
  alternates: {
    canonical: "https://ketermarketing.com/services",
  },
};

export default function ServicesPage() {
  return <ProcessPageContent />;
}
