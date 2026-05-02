"use client";

import { useRef, useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  {
    title: "Cabinet d'Avocats",
    category: "Site vitrine",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio",
    size: "tall",
  },
  {
    title: "Agence Immobilière Premium",
    category: "Génération de leads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio",
    size: "short",
  },
  {
    title: "Coach Sportif HP",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio",
    size: "short",
  },
  {
    title: "Consultant B2B",
    category: "Site personnel",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    href: "/portfolio",
    size: "tall",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for 3D Tilt & Magnetic Button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smoothness
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  
  // Magnetic button position
  const buttonX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const buttonY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <div 
        ref={cardRef}
        className={`perspective-1000 ${index % 2 !== 0 ? "md:mt-16" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <Link 
          href={project.href} 
          className={`group block relative rounded-[40px] overflow-hidden bg-gray-100 transition-shadow duration-500 ${
            project.size === "tall" ? "aspect-[3/4.2]" : "aspect-[1/1]"
          } ${isHovered ? "shadow-2xl" : "shadow-sm"}`}
        >
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full h-full relative"
          >
            {/* Background Image with Parallax */}
            <div className="absolute inset-[-20%] transition-transform duration-700 group-hover:scale-110 overflow-hidden">
              <motion.img 
                src={project.image} 
                alt={project.title}
                style={{ y: imageY }}
                className="w-full h-full object-cover scale-125"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white" style={{ transform: "translateZ(50px)" }}>
              <div className="flex items-end justify-between gap-4">
                <div className="space-y-3">
                  <motion.p 
                    animate={{ y: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.7 }}
                    className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]"
                  >
                    {project.category}
                  </motion.p>
                  <h3 className="text-[32px] md:text-[42px] font-bold leading-tight tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                {/* Magnetic Button */}
                <motion.div 
                  style={{ x: buttonX, y: buttonY, transformStyle: "preserve-3d" }}
                  className="hidden md:flex bg-white text-black w-20 h-20 rounded-full shadow-2xl items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  <ArrowUpRight className="w-8 h-8" strokeWidth={2.5} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </ScrollReveal>
  );
}

export default function PortfolioGridSection() {
  return (
    <section className="py-24 md:py-48 bg-white text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column: Sticky Heading */}
          <div className="lg:w-[35%]">
            <div className="lg:sticky lg:top-32 space-y-12">
              <ScrollReveal>
                <h2 className="text-[56px] md:text-[72px] lg:text-[84px] font-normal leading-[0.95] tracking-tighter">
                  Les sites que <br />
                  nous avons <span className="font-black text-black">créés</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col items-start gap-8">
                  <p className="text-xl text-gray-500 max-w-sm leading-relaxed">
                    Découvrez une sélection de nos projets récents, conçus pour maximiser l'impact et la conversion.
                  </p>
                  <Link 
                    href="/portfolio" 
                    className="btn-secondary btn-shine"
                  >
                    Plus d'études de cas
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Asymmetric Grid */}
          <div className="lg:w-[65%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {/* Bottom Mobile Link */}
            <div className="mt-16 lg:hidden">
              <Link 
                href="/portfolio" 
                className="inline-flex items-center gap-4 text-[#D4AF37] font-bold text-xl"
              >
                Plus d'études de cas
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}


