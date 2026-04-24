"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { showcaseProjects } from "@/lib/showcase";

const filters = ["Tous", "Site Vitrine", "Landing Page", "Refonte", "Gestion"];

export default function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? showcaseProjects
      : showcaseProjects.filter((project) => project.category === activeFilter);

  return (
    <>
      <section
        className="portfolio-hero"
        style={{
          padding: "156px 32px 72px",
          background:
            "radial-gradient(circle at top, rgba(212,175,55,0.1), transparent 24%), #0f100f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
              color: "#D4AF37",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
            <span className="section-label">Portfolio Keter</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08 }}
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(42px, 6vw, 80px)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
              color: "#F6F3EA",
              maxWidth: "11ch",
            }}
          >
            Des réalisations qui installent la confiance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            style={{
              margin: "0 0 34px",
              color: "rgba(246,243,234,0.66)",
              fontSize: "18px",
              lineHeight: 1.75,
              maxWidth: "58ch",
            }}
          >
            L’objectif n’est pas de montrer des cartes jolies. L’objectif est de montrer un niveau de
            rendu, une logique de contenu et un traitement visuel capables de vendre avant même l’appel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  borderRadius: "999px",
                  padding: "10px 18px",
                  border:
                    activeFilter === filter
                      ? "1px solid rgba(212,175,55,0.55)"
                      : "1px solid rgba(255,255,255,0.1)",
                  background:
                    activeFilter === filter ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.03)",
                  color: activeFilter === filter ? "#F6F3EA" : "rgba(246,243,234,0.58)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="portfolio-grid-section" style={{ background: "#0f100f", padding: "0 32px 112px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="portfolio-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "24px",
              }}
            >
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.06}>
                  <article
                    style={{
                      background: "#151615",
                      borderRadius: "28px",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 28px 76px rgba(0,0,0,0.26)",
                    }}
                  >
                    <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 960px) 100vw, 46vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(15,16,15,0.1), rgba(15,16,15,0.24) 40%, rgba(15,16,15,0.88))",
                        }}
                      />
                      <div style={{ position: "absolute", left: "18px", right: "18px", top: "18px", display: "flex", justifyContent: "space-between", gap: "12px" }}>
                        <span
                          style={{
                            padding: "8px 12px",
                            borderRadius: "999px",
                            background: "rgba(15,16,15,0.66)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: project.accent,
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {project.tag}
                        </span>
                        <span style={{ color: "rgba(246,243,234,0.62)", fontSize: "12px" }}>{project.category}</span>
                      </div>
                      <div style={{ position: "absolute", left: "18px", right: "18px", bottom: "18px" }}>
                        <div
                          style={{
                            display: "inline-flex",
                            flexWrap: "wrap",
                            gap: "8px",
                          }}
                        >
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              style={{
                                padding: "8px 10px",
                                borderRadius: "999px",
                                background: "rgba(255,255,255,0.08)",
                                color: "#F6F3EA",
                                fontSize: "11px",
                                lineHeight: 1.2,
                              }}
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "28px 28px 30px", display: "grid", gap: "16px" }}>
                      <div>
                        <h2 style={{ margin: "0 0 10px", fontSize: "28px", lineHeight: 1.04, color: "#F6F3EA", letterSpacing: "-0.04em" }}>
                          {project.title}
                        </h2>
                        <p style={{ margin: "0 0 10px", color: "rgba(246,243,234,0.68)", fontSize: "15px", lineHeight: 1.75 }}>
                          {project.context}
                        </p>
                        <p style={{ margin: 0, color: "rgba(246,243,234,0.46)", fontSize: "14px", lineHeight: 1.7 }}>
                          {project.outcome}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gap: "10px",
                          paddingTop: "18px",
                          borderTop: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {project.deliverables.map((deliverable) => (
                          <div key={deliverable} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#F6F3EA", fontSize: "13px", lineHeight: 1.6 }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: project.accent, marginTop: "7px", flexShrink: 0 }} />
                            <span style={{ color: "rgba(246,243,234,0.68)" }}>{deliverable}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          width: "fit-content",
                          textDecoration: "none",
                          color: "#F6F3EA",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginTop: "4px",
                        }}
                      >
                        Demander une réalisation similaire
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          <ScrollReveal delay={0.15}>
            <section style={{ paddingTop: "28px" }}>
              <div
                className="portfolio-cta"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: "24px",
                  alignItems: "center",
                  padding: "34px 36px",
                  borderRadius: "28px",
                  border: "1px solid rgba(212,175,55,0.18)",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))",
                  marginTop: "28px",
                }}
              >
                <div>
                  <p style={{ margin: "0 0 10px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                    Étape suivante
                  </p>
                  <h2 style={{ margin: "0 0 8px", color: "#F6F3EA", fontSize: "32px", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
                    Votre site doit produire ce niveau de présence.
                  </h2>
                  <p style={{ margin: 0, color: "rgba(246,243,234,0.62)", fontSize: "15px", lineHeight: 1.7, maxWidth: "58ch" }}>
                    Si Keter doit s’aligner sur la sensation Sher, cela passe par de meilleurs visuels, plus de
                    preuves et une structure éditoriale plus confiante. C’est exactement le cadre de travail proposé ici.
                  </p>
                </div>
                <Link href="/contact" className="btn-primary">
                  Démarrer un projet
                  <ArrowRight size={16} />
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .portfolio-hero {
            padding: 112px 24px 56px !important;
          }
          .portfolio-grid-section {
            padding: 0 24px 88px !important;
          }
          .portfolio-grid,
          .portfolio-cta {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .portfolio-hero {
            padding: 96px 16px 48px !important;
          }
          .portfolio-grid-section {
            padding: 0 16px 72px !important;
          }
          .portfolio-cta {
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </>
  );
}
