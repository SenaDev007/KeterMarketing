"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Refonte de votre site web",
    description: "Obtenez un site web ou une page de destination qui transforme plus de visiteurs en clients et attire plus de trafic via Google.",
    href: "/services",
  },
  {
    title: "Gestion de site web",
    description: "Hébergement, sécurité, mises à jour logicielles, surveillance, corrections de bugs, gestion de contenu, et plus encore.",
    href: "/gestion-de-site",
  },
  {
    title: "Marketing digital (SEO/SEA)",
    description: "Générez du trafic vers votre site web via le référencement naturel (SEO) et le référencement payant (SEA/PPC).",
    href: "/contact",
  },
];

export default function WhatWeDoSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#111111] text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-[40%] flex flex-col items-start pt-4">
            <ScrollReveal>
              <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-normal leading-tight mb-8">
                Ce que nous faisons
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Link 
                href="/contact" 
                className="btn-primary btn-shine group"
              >
                Démarrer votre projet
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-[60%]">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="border-t border-white/10 last:border-b"
              >
                <div 
                  className="py-10 md:py-12 cursor-pointer group transition-all"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between gap-6">
                    <h3 className={`text-[24px] md:text-[32px] lg:text-[38px] font-normal transition-colors duration-300 ${expandedIndex === index ? "text-[#D4AF37]" : "text-white/80 group-hover:text-[#D4AF37]"}`}>
                      {service.title}
                    </h3>
                    
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${expandedIndex === index ? "bg-[#D4AF37]" : "bg-white/10 group-hover:bg-[#D4AF37]"}`}>
                      {expandedIndex === index ? (
                        <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 text-black" strokeWidth={2} />
                      ) : (
                        <ArrowRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black" strokeWidth={2} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[16px] md:text-[18px] text-white/60 max-w-[550px] leading-relaxed">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

  );
}
