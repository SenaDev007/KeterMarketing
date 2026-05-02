"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ShowreelSection() {
  return (
    <section className="bg-white py-24 md:py-48 lg:py-[270px] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
          
          {/* Left Side: Video Container */}
          <div className="w-full lg:w-1/2 relative">
            <ScrollReveal>
              {/* Offset Background Shape (Beige/Brown offset) */}
              <div className="absolute -inset-5 bg-[#EADCC8] rounded-lg transform rotate-[-1.5deg] z-0" />
              
              {/* Video Box */}
              <div className="relative z-10 w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                  alt="Showreel Preview" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Dark overlay to make play button pop */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Play Button (White Triangle) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-2xl" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <ScrollReveal delay={0.1}>
              <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#1A1A1A] font-normal tracking-tight mb-12">
                Voici <span className="font-bold">comment nous</span>
                <br />
                créons des sites web qui
                <br />
                <span className="font-bold">boostent les ventes.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-8 flex-wrap">
                {/* Button */}
                <Link href="/contact" className="btn-dark btn-shine group">
                  Réserver un appel
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                {/* Divider */}
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />

                {/* Hero Review Style Integration */}
                <div className="flex items-center gap-10">
                  {/* Hero Review Copy */}
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                      ))}
                    </div>
                    <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                      5.0 D'APRÈS 175+ AVIS
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
