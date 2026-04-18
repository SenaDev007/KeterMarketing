"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAFinal from "@/components/sections/CTAFinal";

const projects = [
  {
    number: "01",
    tag: "Coach Business",
    type: "Site vitrine multi-pages",
    context:
      "Un coach business avec une offre solide mais un site amateur qui ne reflétait ni son expertise ni sa valeur. Ses prospects visitaient le site et disparaissaient sans laisser de trace.",
    approach:
      "Audit de positionnement complet. Résultat : le site parlait de lui — pas de son client. On a retravaillé l'architecture, réécrit chaque page avec un angle centré sur les douleurs du prospect, et redesigné l'ensemble pour inspirer confiance immédiatement.",
    delivered: [
      "Architecture 6 pages",
      "Copywriting intégral",
      "Design premium",
      "Intégration Calendly",
      "Optimisation SEO on-page",
    ],
    result:
      "Un site qui reflète une expertise à 3 000 € la prestation — et qui le justifie dès la première section.",
    color: "#D4AF37",
  },
  {
    number: "02",
    tag: "Infopreneur — Formation en ligne",
    type: "Landing page de vente",
    context:
      "Un infopreneur avec une formation à 997 € et une page de vente bricolée sur Notion. Le trafic existait. Les ventes, non.",
    approach:
      "Analyse du trafic entrant, identification des objections principales, réécriture complète avec 7 blocs d'argumentation progressive, 4 CTA positionnés stratégiquement et une FAQ de 8 questions pour éliminer les derniers freins.",
    delivered: [
      "Copywriting long format",
      "Design conversion-first",
      "Intégration Stripe",
      "Optimisation mobile",
    ],
    result:
      "Une page de vente construite pour convaincre — pas pour informer.",
    color: "#FFFFFF",
  },
  {
    number: "03",
    tag: "Agence de recrutement B2B",
    type: "Refonte stratégique complète",
    context:
      "Une agence de recrutement avec 8 ans d'expérience et un site qui datait de 2018. Design obsolète, copywriting générique, aucune différenciation visible par rapport aux concurrents.",
    approach:
      "Audit complet, analyse concurrentielle, repositionnement éditorial. On a identifié leur vraie différence — leur spécialisation sectorielle — et on a construit toute la communication autour de ça.",
    delivered: [
      "Audit & repositionnement",
      "7 pages copywritées",
      "Design complet",
      "Redéveloppement",
      "Formation équipe",
    ],
    result: "Un site qui dit enfin pourquoi eux — et pas un concurrent.",
    color: "#D4AF37",
  },
];

export default function PortfolioPageContent() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#0B0B0B",
          padding: "160px 32px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(212,175,55,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">Nos réalisations</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                maxWidth: "680px",
              }}
            >
              Ce qu'on construit.
              <br />
              <span style={{ color: "#D4AF37" }}>Ce que ça produit.</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                maxWidth: "560px",
              }}
            >
              Chaque projet est une réponse stratégique à un problème réel.
              Découvrez comment on transforme un brief en machine à conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: "#0B0B0B", padding: "20px 32px 120px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2px" }}>
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  background: i % 2 === 0 ? "#0F0F0F" : "#111111",
                  borderRadius: i === 0 ? "12px 12px 0 0" : i === projects.length - 1 ? "0 0 12px 12px" : "0",
                  border: "1px solid #1E1E1E",
                  borderBottom: i < projects.length - 1 ? "none" : "1px solid #1E1E1E",
                  padding: "clamp(36px, 5vw, 60px)",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "64px",
                }}
                className="project-row"
              >
                {/* Left — info */}
                <div>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "rgba(212,175,55,0.07)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <ExternalLink size={24} color="#D4AF37" strokeWidth={1.5} />
                  </div>

                  <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "rgba(212,175,55,0.6)", textTransform: "uppercase", marginBottom: "8px" }}>
                    Projet {project.number}
                  </p>

                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "4px",
                      padding: "5px 12px",
                      fontSize: "12px",
                      color: "#D4AF37",
                      fontWeight: 600,
                      marginBottom: "16px",
                    }}
                  >
                    {project.tag}
                  </div>

                  <h2
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      marginBottom: "24px",
                      lineHeight: 1.25,
                    }}
                  >
                    {project.type}
                  </h2>

                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
                      Livré
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {project.delivered.map((d, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                          <span style={{ width: "4px", height: "4px", background: "#D4AF37", borderRadius: "50%", flexShrink: 0 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right — details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
                      Contexte
                    </p>
                    <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0 }}>
                      {project.context}
                    </p>
                  </div>

                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
                      Notre approche
                    </p>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0 }}>
                      {project.approach}
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "24px 28px",
                      background: "rgba(212,175,55,0.05)",
                      border: "1px solid rgba(212,175,55,0.15)",
                      borderRadius: "8px",
                      borderLeft: `3px solid ${project.color}`,
                    }}
                  >
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(212,175,55,0.6)", marginBottom: "10px" }}>
                      Résultat
                    </p>
                    <p style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                      "{project.result}"
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pioneer CTA */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              maxWidth: "640px",
              margin: "64px auto 0",
              textAlign: "center",
              padding: "48px 40px",
              background: "rgba(212,175,55,0.04)",
              border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "16px",
              }}
            >
              Votre site pourrait être ici.
            </p>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "28px" }}>
              Si vous voulez faire partie des pionniers — et bénéficier d'une
              attention maximale sur votre projet — c'est le bon moment.
            </p>
            <Link href="/contact" className="btn-primary">
              → Parlons de votre projet
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <CTAFinal />

      <style>{`
        @media (max-width: 860px) {
          .project-row { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </>
  );
}
