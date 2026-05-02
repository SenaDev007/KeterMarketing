"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAFinal from "@/components/sections/CTAFinal";

const processSteps = [
  {
    number: "01",
    title: "Planification de l'expérience utilisateur",
    body: "La première chose à définir, c'est le parcours de votre visiteur.\n\nQuelles questions se pose-t-il en arrivant ? Quelles objections faut-il lever ? Comment installer la confiance rapidement ?\n\nNous répondons à toutes ces questions dès le premier jour dans un atelier de structuration où nous vous présentons l'architecture du site et échangeons sur les meilleures options.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Direction artistique",
    body: "En fonction de votre audience, plusieurs esthétiques peuvent séduire et rassurer vos prospects. Dans cette deuxième phase, nous explorons les directions possibles et sélectionnons ensemble celle qui correspond le mieux à votre marché.\n\nNous pouvons travailler dans le respect d'une charte graphique existante — ou la réinventer entièrement.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Copywriting",
    body: "La clé d'un bon texte de site, c'est d'être concis et convaincant.\n\nNous rédigeons l'intégralité des mots présents sur votre site — et nous les optimisons pour les moteurs de recherche si pertinent.\n\nChaque phrase est pensée pour répondre à une question silencieuse de votre prospect et le guider vers une seule action : vous contacter.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Développement & tests",
    body: "Nous transformons les maquettes en code fonctionnel, optimisé et livré dans les temps. À cette étape, nous vérifions que votre site est parfait sur tous les formats : ordinateur, tablette, téléphone.\n\nNous travaillons principalement avec Next.js et des CMS modernes pour garantir vitesse, sécurité et flexibilité à long terme.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "05",
    title: "Trafic & optimisation continue",
    body: "Une fois votre site en ligne, il est temps d'y envoyer des visiteurs qualifiés.\n\nNous optimisons votre présence sur Google (SEO) et pilotons des campagnes Google Ads (SEA) pour générer des leads rapidement.\n\nNous suivons les résultats et ajustons en continu pour maximiser votre retour sur investissement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

const NAV_PILLS = [
  { label: "Notre processus", href: "/services", active: true },
  { label: "Gestion de site", href: "/gestion-de-site", active: false },
  { label: "SEO & Google Ads", href: "/seo-sem", active: false },
  { label: "Portfolio", href: "/portfolio", active: false },
];

export default function ProcessPageContent() {
  return (
    <div style={{ background: "#0B0B0B", color: "#F6F3EA", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section style={{ paddingTop: "160px", paddingBottom: "120px", textAlign: "center", paddingInline: "24px" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "80px" }}
        >
          {NAV_PILLS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                background: p.active ? "#F6F3EA" : "rgba(255,255,255,0.05)",
                color: p.active ? "#0B0B0B" : "rgba(255,255,255,0.7)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { if (!p.active) e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { if (!p.active) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              {p.label}
            </Link>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            margin: "0 0 32px 0",
            lineHeight: 1.05,
          }}
        >
          Création de Sites & Landing Pages
          <br />
          <span style={{ fontWeight: 600 }}>Pensés pour Convertir</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#1E1E1E",
              color: "#FFFFFF",
              padding: "16px 32px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "transform 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2A2A2A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1E1E1E")}
          >
            Réserver un appel
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 4vw 120px", display: "flex", gap: "80px" }} className="process-layout">
        
        {/* Sticky Sidebar */}
        <div style={{ width: "120px", position: "relative", display: "flex", justifyContent: "center" }} className="process-sidebar">
          <div style={{ position: "sticky", top: "200px", height: "fit-content", whiteSpace: "nowrap" }}>
            <h2
              style={{
                fontSize: "clamp(48px, 6vw, 96px)",
                fontWeight: 500,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                margin: 0,
                transform: "rotate(-90deg) translateX(-50%)",
                transformOrigin: "left center",
              }}
            >
              Notre Processus
            </h2>
          </div>
        </div>

        {/* Steps Column */}
        <div style={{ flex: 1, paddingBottom: "120px" }}>
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "80px" }} />
          
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </section>

      {/* ── RELATED SERVICES CROSS-SELL ── */}
      <section style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 4vw 160px" }}>
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "64px" }} />
        <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, margin: "0 0 64px", letterSpacing: "-0.03em" }}>
          Que faisons-nous d'autre ?
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
          <Link href="/gestion-de-site" style={{ textDecoration: "none", color: "inherit" }} className="cross-sell-link group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, margin: 0 }}>Gestion de site</h3>
              <ArrowUpRight size={40} className="group-hover:text-[#D4AF37] transition-colors" />
            </div>
          </Link>
          <Link href="/seo-sem" style={{ textDecoration: "none", color: "inherit" }} className="cross-sell-link group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, margin: 0 }}>SEO & Google Ads</h3>
              <ArrowUpRight size={40} className="group-hover:text-[#D4AF37] transition-colors" />
            </div>
          </Link>
          <Link href="/portfolio" style={{ textDecoration: "none", color: "inherit" }} className="cross-sell-link group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, margin: 0 }}>Voir notre travail</h3>
              <ArrowUpRight size={40} className="group-hover:text-[#D4AF37] transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .process-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} style={{ marginBottom: "120px" }}>
      <ScrollReveal>
        <div style={{ display: "flex", gap: "32px", alignItems: "baseline", marginBottom: "40px" }}>
          <span style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, color: "rgba(255,255,255,0.3)" }}>
            {step.number}
          </span>
          <h3 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", margin: 0 }}>
            {step.title}
          </h3>
        </div>

        <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "24px", overflow: "hidden", marginBottom: "64px", background: "#1A1A1A" }}>
          <motion.div style={{ width: "100%", height: "120%", y }}>
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 1600px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>

        <div style={{ maxWidth: "800px" }}>
          <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", whiteSpace: "pre-line", margin: 0 }}>
            {step.body}
          </p>
        </div>
      </ScrollReveal>
      
      {/* Separator only if not last */}
      {index !== processSteps.length - 1 && (
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginTop: "120px" }} />
      )}
    </div>
  );
}
