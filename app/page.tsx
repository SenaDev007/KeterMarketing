import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProofSection from "@/components/sections/ProofSection";
import OffersSection from "@/components/sections/OffersSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAFinal from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Keter Marketing — Sites Web Premium qui Convertissent | Agence Conversion",
  description:
    "Keter Marketing conçoit des sites web qui transforment vos visiteurs en clients. Copywriting, design premium et SEO pour coachs, consultants et PME. Délai garanti 4 semaines.",
  alternates: {
    canonical: "https://ketermarketing.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainSection />
      <SolutionSection />
      <ProofSection />
      <OffersSection />
      <ProcessSection />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
