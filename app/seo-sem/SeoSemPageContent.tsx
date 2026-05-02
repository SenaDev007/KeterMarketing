"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Google Ads (SEA)",
    desc: "Nous vous aidons à cibler des mots-clés à forte valeur ajoutée pour votre entreprise afin d'obtenir des placements payants sur la plateforme publicitaire de Google.\n\nRésultats mesurables dès les premières semaines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Référencement naturel (SEO)",
    desc: "Faites apparaître votre site plus haut dans les résultats de recherche Google pour obtenir une source cohérente et à long terme de prospects pour votre entreprise.\n\nLe SEO est un investissement stratégique qui génère des leads sans coût par clic.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Gestion de site web",
    desc: "Gardez votre site web sain et à jour avec des tests de vitesse, la gestion de l'accessibilité, des mises à jour logicielles, des analyses de sécurité, et bien plus encore.\n\nUn site performant est la base d'un bon référencement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

const NAV_PILLS = [
  { label: "Notre processus", href: "/services", active: false },
  { label: "Gestion de site", href: "/gestion-de-site", active: false },
  { label: "SEO & Google Ads", href: "/seo-sem", active: true },
  { label: "Portfolio", href: "/portfolio", active: false },
];

export default function SeoSemPageContent() {
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
          Trafic, Leads et Ventes
          <br />
          <span style={{ fontWeight: 600 }}>depuis Google.</span>
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
            Obtenir un devis
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

      {/* ── SERVICES SECTION ── */}
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
              Services SEM
            </h2>
          </div>
        </div>

        {/* Steps Column */}
        <div style={{ flex: 1, paddingBottom: "120px" }}>
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "80px" }} />
          
          {services.map((service, index) => (
            <ServiceStep key={service.number} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ── CASE STUDY HIGHLIGHT ── */}
      <section style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 4vw 120px" }}>
        <ScrollReveal>
          <div style={{ background: "#151515", borderRadius: "32px", padding: "clamp(40px, 8vw, 100px)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 64px 0", maxWidth: "800px" }}>
              Comment nous avons aidé <span style={{ color: "#D4AF37" }}>Academia Helm</span> à exploser son trafic
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "80px" }}>
              <div style={{ flex: "1 1 200px" }}>
                <p style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 500, color: "#D4AF37", margin: "0 0 8px 0", lineHeight: 1 }}>+312%</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", margin: 0 }}>De trafic organique</p>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <p style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 500, color: "#FFFFFF", margin: "0 0 8px 0", lineHeight: 1 }}>4.2×</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", margin: 0 }}>Leads par semaine</p>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <p style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 500, color: "#FFFFFF", margin: "0 0 8px 0", lineHeight: 1 }}>Pos. 1</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", margin: 0 }}>Sur 6 mots-clés cibles</p>
              </div>
            </div>

            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#FFFFFF",
                color: "#0B0B0B",
                padding: "16px 32px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
            >
              Voir l'étude de cas complète
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── RELATED SERVICES CROSS-SELL ── */}
      <section style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 4vw 160px" }}>
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginBottom: "64px" }} />
        <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, margin: "0 0 64px", letterSpacing: "-0.03em" }}>
          Que faisons-nous d'autre ?
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
          <Link href="/services" style={{ textDecoration: "none", color: "inherit" }} className="cross-sell-link group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, margin: 0 }}>Notre processus</h3>
              <ArrowUpRight size={40} className="group-hover:text-[#D4AF37] transition-colors" />
            </div>
          </Link>
          <Link href="/gestion-de-site" style={{ textDecoration: "none", color: "inherit" }} className="cross-sell-link group">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 500, margin: 0 }}>Gestion de site</h3>
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

function ServiceStep({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} style={{ marginBottom: "120px" }}>
      <ScrollReveal>
        <div style={{ display: "flex", gap: "32px", alignItems: "baseline", marginBottom: "40px" }}>
          <span style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, color: "rgba(255,255,255,0.3)" }}>
            {service.number}
          </span>
          <h3 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", margin: 0 }}>
            {service.title}
          </h3>
        </div>

        <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "24px", overflow: "hidden", marginBottom: "64px", background: "#1A1A1A" }}>
          <motion.div style={{ width: "100%", height: "120%", y }}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1600px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>

        <div style={{ maxWidth: "800px" }}>
          <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", whiteSpace: "pre-line", margin: 0 }}>
            {service.desc}
          </p>
        </div>
      </ScrollReveal>
      
      {/* Separator only if not last */}
      {index !== services.length - 1 && (
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.15)", marginTop: "120px" }} />
      )}
    </div>
  );
}
