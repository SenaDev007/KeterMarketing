import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "À propos - Dawes et Stevens, fondateurs | Keter Marketing",
  description:
    "Keter Marketing a été fondée par Dawes et Stevens. Une obsession commune: transformer les sites web en actifs de conversion plus clairs, plus crédibles et plus efficaces.",
  alternates: {
    canonical: "https://ketermarketing.com/a-propos",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
