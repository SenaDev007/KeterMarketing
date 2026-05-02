"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { MessageSquareOff, HelpCircle, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painCards = [
  {
    icon: <MessageSquareOff size={26} strokeWidth={1.5} color="#D4AF37" />,
    quote: "Mon site existe, mais ne génère aucun lead.",
  },
  {
    icon: <HelpCircle size={26} strokeWidth={1.5} color="#D4AF37" />,
    quote: "Je ne sais pas pourquoi les visiteurs ne me contactent pas.",
  },
  {
    icon: <TrendingDown size={26} strokeWidth={1.5} color="#D4AF37" />,
    quote: "J'ai l'impression de perdre des clients tous les jours.",
  },
];

// --- 3D Tilt Card Component ---
function TiltCard({ card, index }: { card: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.1 + 0.2}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-xl cursor-default p-[4px] overflow-hidden"
      >
        {/* Animated Beam Border Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%]"
            style={{ background: "conic-gradient(from 0deg, transparent 20%, #D4AF37 80%, #FFFFFF 100%)" }}
          />
        </div>

        {/* Base Border (visible when not hovered) */}
        <div className="absolute inset-0 border border-[#2A2A2A] rounded-xl z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

        {/* Glow Shadow (visible on hover) */}
        <div className="absolute inset-0 rounded-xl shadow-[0_0_70px_rgba(212,175,55,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

        {/* Card Content Surface */}
        <div className="relative z-20 bg-[#141414] rounded-[8px] p-8 flex flex-col gap-6 h-full">
          <div 
            className="w-14 h-14 shrink-0 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center"
            style={{ transform: "translateZ(30px)" }}
          >
            {card.icon}
          </div>
          <p 
            className="text-lg font-semibold text-white leading-snug italic m-0"
            style={{ transform: "translateZ(20px)" }}
          >
            "{card.quote}"
          </p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

// --- Word Reveal Component ---
function WordReveal({ children, progress, range }: { children: string, progress: any, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }} className="mr-1">{children}</motion.span>;
}

// --- Text Reveal Component ---
function TextReveal({ text }: { text: string }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");
  return (
    <div ref={container} className="text-[22px] md:text-[28px] font-medium text-[#0B0B0B] leading-[1.6] max-w-[800px] mx-auto text-center mb-24 flex flex-wrap justify-center">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        // We use dangerouslySetInnerHTML to allow <br/> tags to render as newlines if we passed them, 
        // but here we just split by space.
        return <WordReveal key={i} progress={scrollYProgress} range={[start, end]}>{word}</WordReveal>;
      })}
    </div>
  );
}

export default function PainSection() {
  const paragraph = "Vous avez investi du temps, de l'argent et de l'énergie pour créer votre site. Il est en ligne. Mais au fond, vous savez que quelque chose ne fonctionne pas. Les visiteurs arrivent, et repartent sans laisser de trace. Juste du silence. Le problème n'est pas votre offre. Le problème, c'est que votre site ne la vend pas.";

  return (
    <section className="pain-section bg-[#F5F5F5] relative py-24 md:py-32 overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center">

        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="section-label">La réalité de la plupart des sites</span>
            <div className="w-8 h-px bg-[#D4AF37]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0B0B] leading-[1.15] tracking-tight mb-20 max-w-[800px]">
            Votre site est en ligne.<br/>
            <span className="text-[#D4AF37]">Mais les clients, eux, ne viennent pas.</span>
          </h2>
        </ScrollReveal>

        {/* Text Reveal Paragraph */}
        <TextReveal text={paragraph} />

        {/* Pain Cards 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {painCards.map((card, i) => (
            <TiltCard key={i} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
