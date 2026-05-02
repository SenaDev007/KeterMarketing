"use client";

import { useState } from "react";
import { Play, Send, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ChecklistSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Checklist envoyée !");
  };

  return (
    <section className="py-24 md:py-36 bg-[#F7F7F7] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Form */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <ScrollReveal>
              <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#1A1A1A] font-normal tracking-tight mb-6 max-w-[550px]">
                Utilisez cette checklist <br />
                <span className="font-bold text-black">gratuite</span> pour <span className="font-bold text-black">auditer</span> <br />
                votre site web
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="w-full">
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                Utilisez notre checklist pour identifier exactement où votre site web perd des clients et comment y remédier.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="w-full">
              <form onSubmit={handleSubmit} className="w-full max-w-[550px] space-y-8">
                {/* Full Name Field */}
                <div className="space-y-3">
                  <label className="block text-[15px] font-medium text-[#1A1A1A]">
                    Nom complet *
                  </label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Nom complet"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-[16px] focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="space-y-3">
                  <label className="block text-[15px] font-medium text-[#1A1A1A]">
                    Email professionnel *
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg py-4 pl-12 pr-6 text-[16px] focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-dark btn-shine justify-center"
                  >
                    Envoyez-la gratuitement
                  </motion.button>
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Right Column: Video/Mockup */}
          <div className="w-full lg:w-[45%]">
            <ScrollReveal delay={0.3}>
              <div className="relative aspect-[4/5] bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer border-[8px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" 
                  alt="Audit Checklist Video" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/90 shadow-2xl flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-10 h-10 text-black fill-black ml-2" />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-10 left-10 right-10 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-bold text-lg mb-1">Démonstration : Audit de conversion</p>
                  <p className="text-sm text-white/70">Apprenez à analyser votre site en 5 minutes.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

