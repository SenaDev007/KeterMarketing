"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "En 3 semaines, notre site a été entièrement repensé. Le résultat est bluffant — les prospects nous disent maintenant qu'ils ont choisi notre cabinet avant même d'avoir appelé, juste grâce au site.",
    author: "Mehdi R.",
    role: "Fondateur, Cabinet de conseil B2B",
    company: "Cabinet Rhali Conseil",
    stars: 5,
    metric: "+340% de leads qualifiés en 60 jours",
  },
  {
    quote: "On avait un vieux site WordPress qu'on n'osait plus montrer. Keter a livré quelque chose qui nous ressemble vraiment — et qui vend. Notre taux de conversion a triplé le premier mois.",
    author: "Sophie L.",
    role: "Directrice marketing",
    company: "Formation FinancePro",
    stars: 5,
    metric: "×3 sur le taux de conversion",
  },
  {
    quote: "Ce n'est pas juste du design. C'est une vraie stratégie de conversion. Chaque mot, chaque section est pensée pour convaincre. On est à 6 figures de CA générés via le site en 4 mois.",
    author: "Karim B.",
    role: "CEO",
    company: "Agence Locale Pro",
    stars: 5,
    metric: "6 figures de CA générés via le site",
  },
  {
    quote: "L'équipe de Keter Marketing a su capturer l'essence de notre marque. Le processus a été extrêmement fluide du début à la fin. Notre ROI a explosé depuis la mise en ligne.",
    author: "Antoine D.",
    role: "Directeur de Clientèle",
    company: "TechScale Solutions",
    stars: 5,
    metric: "+150% de ROI sur les Ads",
  },
  {
    quote: "Je ne pourrais pas être plus satisfaite. Mon site n'est pas seulement beau, il est ultra performant. Les retours de nos clients sont unanimes : le site fait pro et inspire confiance.",
    author: "Isabelle V.",
    role: "Propriétaire",
    company: "Studio Design Vision",
    stars: 5,
    metric: "20% de temps gagné sur la pré-vente",
  },
  {
    quote: "Un vrai soulagement pour notre équipe. Ils gèrent tout, du copywriting à la technique. On a enfin un outil qui travaille pour nous 24h/24.",
    author: "Marc-André G.",
    role: "Associé Gérant",
    company: "Audit & Croissance",
    stars: 5,
    metric: "Zéro bug technique en 1 an",
  },
];

export default function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-8 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <ScrollReveal>
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-normal leading-tight text-[#1A1A1A]">
              Histoires de <br />
              <span className="font-bold">nos clients</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={isHovered ? { scale: 1 } : { scale: [1, 1.15, 1] }}
                transition={isHovered ? { duration: 0.2 } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link 
                  href="/contact" 
                  className="group flex items-center gap-4 text-[#D4AF37] hover:text-[#1A1A1A] transition-colors duration-300 font-bold text-[12px] uppercase tracking-[0.08em]"
                >
                  Réserver un appel
                  <div className="w-8 h-8 rounded-full border border-[#D4AF37] group-hover:border-[#1A1A1A] flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 h-full flex flex-col group">
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[18px] md:text-[20px] leading-relaxed text-[#1A1A1A] mb-10 flex-grow font-medium">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto pt-8 border-t border-gray-50">
                  <p className="font-bold text-[#1A1A1A] text-[16px] mb-1">
                    {t.author}
                  </p>
                  <p className="text-gray-400 text-[14px]">
                    {t.role} — <span className="text-gray-300">{t.company}</span>
                  </p>
                </div>
                
                {/* Metric Overlay or Badge */}
                <div className="mt-4 inline-flex items-center gap-2 text-[#D4AF37] font-bold text-[12px] uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {t.metric}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Proof Stats (from previous version, integrated more subtly) */}
        <ScrollReveal delay={0.3}>
          <div className="mt-24 pt-16 border-t border-gray-100 flex flex-wrap justify-center md:justify-between gap-12 text-center md:text-left">
            {[
              { label: "175+", desc: "avis 5 étoiles" },
              { label: "98%", desc: "clients satisfaits" },
              { label: "48h", desc: "délai de réponse max" },
              { label: "4 sem.", desc: "délai de livraison" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[32px] md:text-[42px] font-bold text-[#D4AF37] leading-none mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-[12px] uppercase tracking-widest font-bold">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

