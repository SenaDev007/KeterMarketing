"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { showcaseProjects } from "@/lib/showcase";

const featuredProjects = showcaseProjects.slice(0, 3);

export default function ProofSection() {
  return (
    <section className="proof-section" style={{ background: "#f3efe6", padding: "128px 32px" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div
          className="proof-header"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(320px, 0.8fr)",
            gap: "56px",
            alignItems: "end",
            marginBottom: "70px",
          }}
        >
          <div>
            <ScrollReveal>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span className="section-label">Réalisations mises en avant</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                style={{
                  margin: 0,
                  color: "#121212",
                  fontSize: "clamp(34px, 4.6vw, 58px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                Montrer le niveau du site
                <span style={{ display: "block", color: "#D4AF37" }}> dès le premier scroll.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16} direction="left">
            <div
              style={{
                padding: "24px 26px",
                borderRadius: "24px",
                background: "#fffdf8",
                border: "1px solid rgba(18,18,18,0.08)",
                boxShadow: "0 22px 60px rgba(18,18,18,0.08)",
              }}
            >
              <p style={{ margin: "0 0 18px", color: "#454545", fontSize: "16px", lineHeight: 1.7 }}>
                Sher fait très bien une chose: les visiteurs comprennent immédiatement que l’agence sait
                produire des sites désirables. Keter doit créer ce même réflexe avec des visuels forts,
                des résultats concrets et des CTA visibles à proximité.
              </p>
              <Link href="/portfolio" className="btn-dark">
                Explorer le portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="proof-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 0.92fr)",
            gap: "22px",
            alignItems: "stretch",
          }}
        >
          <ScrollReveal>
            <article
              style={{
                position: "relative",
                minHeight: "620px",
                borderRadius: "30px",
                overflow: "hidden",
                background: "#101010",
                color: "#F6F3EA",
                boxShadow: "0 34px 90px rgba(16,16,16,0.18)",
              }}
            >
              <Image
                src={featuredProjects[0].image}
                alt={featuredProjects[0].alt}
                fill
                sizes="(max-width: 960px) 100vw, 52vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(16,16,16,0.06), rgba(16,16,16,0.28) 28%, rgba(16,16,16,0.9))",
                }}
              />
              <div style={{ position: "absolute", inset: "24px 24px auto 24px", display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <span
                  style={{
                    padding: "8px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Projet vedette
                </span>
                <span style={{ color: "rgba(246,243,234,0.65)", fontSize: "12px" }}>{featuredProjects[0].tag}</span>
              </div>

              <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "24px" }}>
                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                    padding: "24px",
                    borderRadius: "24px",
                    background: "rgba(16,16,16,0.7)",
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div>
                    <p style={{ margin: "0 0 8px", color: featuredProjects[0].accent, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                      {featuredProjects[0].category}
                    </p>
                    <h3 style={{ margin: "0 0 10px", fontSize: "28px", lineHeight: 1.05 }}>{featuredProjects[0].title}</h3>
                    <p style={{ margin: 0, color: "rgba(246,243,234,0.72)", fontSize: "15px", lineHeight: 1.7 }}>
                      {featuredProjects[0].context}
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }} className="proof-metrics">
                    {featuredProjects[0].metrics.map((metric) => (
                      <div
                        key={metric}
                        style={{
                          padding: "14px",
                          borderRadius: "18px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#F6F3EA",
                          fontSize: "13px",
                          lineHeight: 1.45,
                        }}
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div style={{ display: "grid", gap: "22px" }}>
            {featuredProjects.slice(1).map((project, index) => (
              <ScrollReveal key={project.id} delay={0.08 + index * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(220px, 0.92fr) minmax(0, 1fr)",
                    minHeight: "299px",
                    background: "#fffdf8",
                    borderRadius: "28px",
                    overflow: "hidden",
                    border: "1px solid rgba(18,18,18,0.08)",
                    boxShadow: "0 22px 60px rgba(18,18,18,0.08)",
                  }}
                  className="proof-card"
                >
                  <div style={{ position: "relative", minHeight: "100%" }}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 960px) 100vw, 24vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "28px 28px 30px", display: "grid", gap: "16px" }}>
                    <div>
                      <p style={{ margin: "0 0 8px", color: project.accent, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                        {project.tag}
                      </p>
                      <h3 style={{ margin: "0 0 10px", color: "#121212", fontSize: "24px", lineHeight: 1.08 }}>
                        {project.title}
                      </h3>
                      <p style={{ margin: 0, color: "#4a4a4a", fontSize: "14px", lineHeight: 1.75 }}>
                        {project.outcome}
                      </p>
                    </div>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
                      {project.deliverables.slice(0, 3).map((deliverable) => (
                        <li key={deliverable} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#2a2a2a", fontSize: "13px", lineHeight: 1.6 }}>
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: project.accent, marginTop: "7px", flexShrink: 0 }} />
                          {deliverable}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        width: "fit-content",
                        color: "#121212",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Lancer un projet similaire
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .proof-section {
            padding: 80px 24px !important;
          }
          .proof-header,
          .proof-grid,
          .proof-card {
            grid-template-columns: 1fr !important;
          }
          .proof-metrics {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .proof-section {
            padding: 64px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
