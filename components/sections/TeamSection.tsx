"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const teamMembers = [
  {
    name: "Dawes AKPOVI",
    role: "Co-fondateur | Design & Dev",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stevens AKPOVI",
    role: "Co-fondateur | Acquisition Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-24 md:py-36 bg-[#0B0B0B] text-white">
      <div className="max-w-[1300px] mx-auto px-8 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-normal leading-tight">
              Notre <span className="font-bold text-[#D4AF37]">équipe</span>
            </h2>
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
                  className="group flex items-center gap-4 text-[#D4AF37] hover:text-white transition-colors duration-300 font-bold text-[18px]"
                >
                  Travailler avec nous
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37] group-hover:border-white flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="w-full aspect-[4/5] relative rounded-[32px] overflow-hidden mb-8 shadow-2xl border border-white/5">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] text-[16px] uppercase tracking-widest font-bold">
                    {member.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

