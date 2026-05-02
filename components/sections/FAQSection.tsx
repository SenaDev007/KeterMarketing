"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "En quoi êtes-vous différents des autres agences ?",
    answer:
      "Contrairement aux agences traditionnelles qui vendent du 'design', nous vendons de la performance. Chaque pixel et chaque mot de votre site sont pensés avec un seul objectif : convertir vos visiteurs en clients. Nous combinons copywriting de haut niveau, design premium et stratégie de conversion.",
  },
  {
    question: "Combien de temps prend la création d'un site ?",
    answer:
      "Un projet typique dure entre 3 et 5 semaines, de la stratégie initiale à la mise en ligne. Cela nous permet de passer par toutes les étapes cruciales : wireframing, design, rédaction, développement et tests intensifs.",
  },
  {
    question: "Travaillez-vous avec des startups ?",
    answer:
      "Oui, nous travaillons avec des startups, des PME et des indépendants ambitieux. Si vous avez un service ou un produit à forte valeur ajoutée et que vous avez besoin d'une présence web qui reflète cette qualité, nous sommes faits pour vous.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Chaque projet est unique, mais nos tarifs commencent généralement à partir de 3 000€ pour un site vitrine haute-performance. Nous ne sommes pas les moins chers du marché, mais nous offrons le meilleur retour sur investissement grâce à notre approche orientée conversion.",
  },
  {
    question: "Proposez-vous l'hébergement et la maintenance ?",
    answer:
      "Absolument. Nous proposons des forfaits de maintenance et d'hébergement premium pour que vous n'ayez jamais à vous soucier de la technique. Votre site reste rapide, sécurisé et à jour.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-white/10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="no-shine w-full py-8 md:py-10 flex items-center justify-between gap-8 text-left group transition-all"
        >
          <span className={`text-[20px] md:text-[24px] lg:text-[28px] font-bold transition-colors ${isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-[#D4AF37]"}`}>
            {faq.question}
          </span>
          <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-[#D4AF37] border-[#D4AF37] rotate-0" : "group-hover:border-white"}`}>
            {isOpen ? (
              <Minus className="w-5 h-5 text-black" />
            ) : (
              <Plus className="w-5 h-5 text-white" />
            )}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <p className="text-[16px] md:text-[18px] text-white/50 leading-relaxed pb-10 max-w-2xl">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-[#0B0B0B] text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          
          {/* Left Column */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-10">
            <ScrollReveal>
              <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-normal leading-[1.05] tracking-tight">
                Questions <br />
                <span className="font-bold text-[#D4AF37]">fréquentes</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <p className="text-xl text-white/40 max-w-xs leading-relaxed">
                  Vous avez une question spécifique ? Notre équipe est là pour vous répondre.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-primary btn-shine"
                >
                  Contactez-nous
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Decorative dot from Sher style */}
            <div className="hidden lg:block w-3 h-3 rounded-full bg-[#D4AF37] mt-12" />
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 w-full">
            <div className="border-t border-white/10">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

