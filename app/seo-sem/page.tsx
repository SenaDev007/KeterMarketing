import type { Metadata } from "next";
import SeoSemPageContent from "./SeoSemPageContent";

export const metadata: Metadata = {
  title: "SEO & Google Ads - Trafic & Leads | Keter Marketing",
  description:
    "Générez du trafic et des leads qualifiés via le référencement naturel (SEO) et les annonces Google (Google Ads/SEA).",
  alternates: {
    canonical: "https://ketermarketing.com/seo-sem",
  },
};

export default function SeoSemPage() {
  return <SeoSemPageContent />;
}
