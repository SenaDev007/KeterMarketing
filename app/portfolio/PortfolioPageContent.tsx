"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Coach Business Premium",
    tag: "Site Multi-Pages",
    filter: "Site Vitrine",
    accent: "#4A90E2",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
    context: "Coach business accompagnant des entrepreneurs à scaler leur activité. Zéro présence en ligne, 100% bouche-à-oreille.",
    deliverables: ["Stratégie de contenu", "Copywriting 5 pages", "Design premium", "Tunnel de capture leads"],
    result: "3 leads qualifiés dès la première semaine de mise en ligne.",
    number: "01",
  },
  {
    id: 2,
    title: "Infopreneur — Formation en Ligne",
    tag: "Landing Page",
    filter: "Landing Page",
    accent: "#C84A4A",
    gradient: "linear-gradient(135deg, #2E1A1A 0%, #3E1616 50%, #5A1010 100%)",
    context: "Infopreneur vendant une formation à 997 €. Taux de conversion de 0,8% sur l'ancienne page.",
    deliverables: ["Audit de conversion", "Copywriting persuasif", "Design orienté vente", "Structure A/B testée"],
    result: "Taux de conversion passé de 0,8% à 3,2% — ×4 en 30 jours.",
    number: "02",
  },
  {
    id: 3,
    title: "Agence Recrutement B2B",
    tag: "Refonte Stratégique",
    filter: "Refonte",
    accent: "#D4AF37",
    gradient: "linear-gradient(135deg, #1A160A 0%, #2A2010 50%, #3D2E0A 100%)",
    context: "Agence de recrutement B2B avec un site de 2017. Zéro lead entrant, 100% cold outreach.",
    deliverables: ["Audit SEO complet", "Refonte architecture", "Nouveau copywriting", "Optimisation vitesse"],
    result: "5 leads qualifiés en 3 semaines, dont 2 convertis en clients.",
    number: "03",
  },
];

const filters = ["Tous", "Site Vitrine", "Landing Page", "Refonte"];

export default function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter(p => p.filter === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="portfolio-hero" style={{ background: "#0B0B0B", padding: "160px 32px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
            <span className="section-label">Nos Réalisations</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "clamp(40px, 5.5vw, 68px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "20px" }}>
            Our Work
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "520px", marginBottom: "48px" }}>
            Des sites stratégiques qui génèrent de vrais résultats — leads, conversions, croissance.
          </motion.p>

          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: "8px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer",
                border: `1.5px solid ${activeFilter === f ? "#D4AF37" : "rgba(255,255,255,0.12)"}`,
                background: activeFilter === f ? "rgba(212,175,55,0.1)" : "transparent",
                color: activeFilter === f ? "#D4AF37" : "rgba(255,255,255,0.45)",
                transition: "all 0.2s", fontFamily: "inherit",
              }}>
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="portfolio-grid-section" style={{ background: "#0B0B0B", padding: "80px 32px 120px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }} className="portfolio-grid">
              {filtered.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22 }} style={{ background: "#111111", borderRadius: "12px", overflow: "hidden", border: "1px solid #2A2A2A", display: "flex", flexDirection: "column" }}>
                    {/* Visual */}
                    <div style={{ height: "200px", background: project.gradient, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ExternalLink size={36} color="rgba(255,255,255,0.08)" strokeWidth={1} />
                      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                        <span style={{ background: "rgba(0,0,0,0.55)", border: `1px solid ${project.accent}50`, borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: project.accent, letterSpacing: "0.06em" }}>
                          {project.tag}
                        </span>
                      </div>
                      <div style={{ position: "absolute", top: "16px", right: "16px", fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.15)", letterSpacing: "0.1em" }}>
                        {project.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{project.title}</h3>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{project.context}</p>

                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
                        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: `${project.accent}90`, textTransform: "uppercase", marginBottom: "10px" }}>Livré</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                          {project.deliverables.map((d, j) => (
                            <li key={j} style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ width: "4px", height: "4px", background: project.accent, borderRadius: "50%", flexShrink: 0 }} />{d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px", marginTop: "auto" }}>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: "0 0 20px", fontStyle: "italic" }}>"{project.result}"</p>
                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: project.accent, textDecoration: "none", border: `1px solid ${project.accent}40`, borderRadius: "4px", padding: "10px 16px", transition: "background 0.2s" }}
                          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = `${project.accent}15`)}
                          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}>
                          Démarrer un projet similaire <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ background: "#0B0B0B", padding: "0 32px 120px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ background: "linear-gradient(135deg, #D4AF37 0%, #E8C84A 100%)", borderRadius: "12px", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(11,11,11,0.55)", marginBottom: "8px" }}>Votre projet</p>
                <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#0B0B0B", margin: 0, lineHeight: 1.2 }}>
                  Votre réalisation pourrait être<br />la prochaine sur cette page.
                </h2>
              </div>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0B0B0B", color: "#FFFFFF", padding: "16px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", flexShrink: 0, transition: "background 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#1A1A1A")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#0B0B0B")}>
                Démarrer mon projet <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-hero { padding: 100px 20px 48px !important; }
          .portfolio-grid-section { padding: 48px 20px 80px !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .portfolio-hero { padding: 80px 16px 40px !important; }
          .portfolio-grid-section { padding: 40px 16px 64px !important; }
        }
      `}</style>
    </>
  );
}
