import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ShowreelSection from "@/components/sections/ShowreelSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioGridSection from "@/components/sections/PortfolioGridSection";
import ChecklistSection from "@/components/sections/ChecklistSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Keter Marketing - Sites web premium qui convertissent | Agence conversion",
  description:
    "Keter Marketing conçoit des sites web qui transforment vos visiteurs en clients. Copywriting, design premium et SEO pour coachs, consultants et PME.",
  alternates: {
    canonical: "https://ketermarketing.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShowreelSection />
      <WhatWeDoSection />
      <TestimonialsSection />
      <ProcessSection />
      <PortfolioGridSection />
      <ChecklistSection />
      <TeamSection />
      <FAQSection />
    </>
  );
}
