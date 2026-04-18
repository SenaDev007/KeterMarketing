import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "À Propos — Dawes & Stevens, Fondateurs | Keter Marketing",
  description:
    "Keter Marketing a été fondée par Dawes (Stratégie & Copywriting) et Stevens (Design & Développement). Une obsession : transformer votre site en meilleur commercial.",
  alternates: {
    canonical: "https://ketermarketing.com/a-propos",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
