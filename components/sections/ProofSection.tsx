"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const stats = [
  { value: "4", label: "offres maîtrisées" },
  { value: "100%", label: "projets livrés avec copywriting" },
  { value: "30 min", label: "pour auditer votre site" },
];

const projects = [
  {
    tag: "Coach Business",
    title: "Site vitrine multi-pages",
    context: "Un coach business avec une offre solide mais un site amateur qui ne reflétait ni son expertise ni sa valeur.",
    deliverables: ["Architecture 6 pages", "Copywriting intégral", "Design premium", "Intégration Calendly"],
    result: "Un site qui reflète une expertise à 3 000 € la prestation — et qui le justifie dès la première section.",
  },
  {
    tag: "Infopreneur",
    title: "Landing page de vente",
    context: "Un infopreneur avec une formation à 997 € et une page de vente bricolée sur Notion. Le trafic existait. Les ventes, non.",
    deliverables: ["Copywriting long format", "Design conversion-first", "Intégration paiement", "Optimisation mobile"],
    result: "Une page de vente construite pour convaincre — pas pour informer.",
  },
  {
    tag: "Agence B2B",
    title: "Refonte stratégique complète",
    context: "Une agence de recrutement avec 8 ans d'expérience et un site qui datait de 2018. Design obsolète, copywriting générique.",
    deliverables: ["Audit & repositionnement", "7 pages copywritées", "Design complet", "Formation équipe"],
    result: "Un site qui dit enfin pourquoi eux — et pas un concurrent.",
  },
];

export default function ProofSection() {
  return (
    <section className="proof-section" style={{ background: "#F5F5F5", padding: "120px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "end",
            marginBottom: "80px",
          }}
          className="proof-header"
        >
          <div>
            <ScrollReveal>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span className="section-label">Nos réalisations</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 46px)",
                  fontWeight: 800,
                  color: "#0B0B0B",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Ce qu'on construit.
                <br />
                <span style={{ color: "#D4AF37" }}>Ce que ça produit.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18} direction="left">
            <div>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4A4A4A",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}
              >
                On démarre. Nos premiers projets sont en cours de finalisation.
                Mais notre approche est déjà éprouvée — construite sur les meilleures
                pratiques du web stratégique et du copywriting de conversion.
              </p>
              <Link href="/portfolio" className="btn-dark">
                Voir tous les projets
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Key stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "#E0E0E0",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "64px",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "36px 32px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: 800,
                    color: "#0B0B0B",
                    lineHeight: 1,
                    marginBottom: "8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#4A4A4A",
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Project cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href="/portfolio" style={{ display: "block", textDecoration: "none", height: "100%" }}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                style={{
                  background: "#0B0B0B",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #2A2A2A",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                {/* Visual */}
                <div
                  style={{
                    height: "160px",
                    background: "linear-gradient(135deg, #141414 0%, #1C1C1C 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    borderBottom: "1px solid #2A2A2A",
                  }}
                >
                  <ExternalLink size={32} color="rgba(212,175,55,0.2)" strokeWidth={1} />
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      background: "rgba(212,175,55,0.12)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#D4AF37",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {project.tag}
                  </div>
                </div>

                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: 0 }}>
                    {project.context}
                  </p>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(212,175,55,0.55)", textTransform: "uppercase", marginBottom: "10px" }}>
                      Livré
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {project.deliverables.map((d, j) => (
                        <li key={j} style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "4px", height: "4px", background: "#D4AF37", borderRadius: "50%", flexShrink: 0 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                      "{project.result}"
                    </p>
                  </div>
                </div>
              </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proof-section { padding: 72px 24px !important; }
          .proof-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .proof-section { padding: 56px 16px !important; }
        }
      `}</style>
    </section>
  );
}
