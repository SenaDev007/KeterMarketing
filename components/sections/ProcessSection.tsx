"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Planification de l'Expérience Utilisateur",
    description: "Le premier et le plus important élément à aborder est le parcours d'un visiteur sur votre site web. Quelles questions se posent-ils à leur arrivée ? Quelles hésitations devons-nous surmonter ? Nous abordons tout cela lors d'un atelier de wireframing où nous présentons le squelette de votre futur site.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Design Visuel",
    description: "En fonction de l'audience ciblée, plusieurs esthétiques peuvent mieux plaire et renforcer la confiance. Nous explorons plusieurs options pour trouver celle qui correspond parfaitement à votre image de marque, tout en respectant vos directives existantes ou en les réinventant totalement.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Rédaction & Copywriting",
    description: "La clé du copywriting est de rester concis et informatif. Nous écrivons les textes qui vendent et, si nécessaire, nous les optimisons pour les moteurs de recherche (SEO) afin d'attirer un trafic qualifié.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Développement & Tests",
    description: "Nous transformons les designs validés en code performant. Nous utilisons des CMS modernes comme WordPress, Webflow ou Shopify pour vous garantir une autonomie totale par la suite. Nous testons chaque page sur tous les types d'écrans.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "05",
    title: "Acquisition de Trafic",
    description: "Une fois votre site en ligne et performant, il est temps de lui envoyer des visiteurs. Nous optimisons votre présence sur Google (SEO) et gérons vos campagnes publicitaires (SEA) pour un retour sur investissement immédiat.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0B0B0B] text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:w-20 relative">
            <div className="lg:sticky lg:top-32 flex lg:flex-col items-center">
              <h2 className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180 mb-8 lg:mb-0">
                Notre Processus
              </h2>
              <div className="hidden lg:block w-px h-32 bg-[#D4AF37]/20 mt-8" />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex-1">
            <ScrollReveal>
              <h3 className="text-[32px] md:text-[48px] lg:text-[56px] font-normal leading-tight mb-16 max-w-2xl">
                Comment fonctionne <br />
                <span className="font-bold">notre méthode</span>
              </h3>
            </ScrollReveal>

            <div className="border-t border-white/10">
              {steps.map((step, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="no-shine w-full py-8 md:py-12 flex items-center justify-between text-left group transition-all"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-[40px] md:text-[60px] lg:text-[80px] font-bold text-white/5 group-hover:text-[#D4AF37]/20 transition-colors leading-none">
                        {step.number}
                      </span>
                      <span className={`text-[20px] md:text-[28px] lg:text-[34px] font-bold transition-colors ${openIndex === index ? "text-[#D4AF37]" : "text-white"}`}>
                        {step.title}
                      </span>
                    </div>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === index ? "bg-[#D4AF37] border-[#D4AF37] rotate-0" : "group-hover:border-white"}`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-black" />
                      ) : (
                        <Plus className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                          <div className="space-y-8">
                            <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-xl">
                              {step.description}
                            </p>
                            <Link 
                              href="/contact" 
                              className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-white transition-colors"
                            >
                              En savoir plus
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group/img">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="object-cover w-full h-full transition-transform duration-700 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom CTAs */}
            <ScrollReveal delay={0.2}>
              <div className="mt-20 flex flex-wrap gap-6">
                <Link 
                  href="/contact" 
                  className="btn-primary btn-shine group"
                >
                  Démarrer votre projet
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link 
                  href="/portfolio" 
                  className="btn-secondary btn-shine"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Voir nos réalisations
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

