"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTAFinal from "@/components/sections/CTAFinal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { showcaseProjects } from "@/lib/showcase";

const principles = [
  "Le site doit vendre avant d’expliquer trop.",
  "Le design sert la confiance, pas la décoration.",
  "Le copywriting structure l’attention.",
  "Les réalisations doivent être visibles très tôt.",
];

export default function AboutPageContent() {
  const visual = showcaseProjects[1];

  return (
    <>
      <section
        className="about-hero"
        style={{
          padding: "154px 32px 74px",
          background:
            "radial-gradient(circle at top left, rgba(212,175,55,0.1), transparent 24%), #0f100f",
        }}
      >
        <div
          className="about-hero-grid"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 0.95fr)",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}
            >
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">À propos</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.08 }}
              style={{
                margin: "0 0 18px",
                fontSize: "clamp(42px, 6vw, 78px)",
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
                color: "#F6F3EA",
                maxWidth: "12ch",
              }}
            >
              Une agence pensée pour rendre les sites plus convaincants.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{ margin: "0 0 28px", color: "rgba(246,243,234,0.66)", fontSize: "18px", lineHeight: 1.75, maxWidth: "58ch" }}
            >
              Keter ne cherche pas à faire des sites “jolis”. Keter cherche à rendre l’offre plus claire,
              la présence plus forte et le passage à l’action plus naturel.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <Link href="/contact" className="btn-primary">
                Parler du projet
                <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Voir les réalisations
              </Link>
            </motion.div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            style={{
              position: "relative",
              minHeight: "500px",
              borderRadius: "30px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image src={visual.image} alt={visual.alt} fill priority sizes="(max-width: 960px) 100vw, 38vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,16,15,0.1), rgba(15,16,15,0.82))" }} />
            <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "20px", padding: "22px", borderRadius: "22px", background: "rgba(15,16,15,0.72)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}>
              <p style={{ margin: "0 0 8px", color: "#D4AF37", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                Positionnement
              </p>
              <h2 style={{ margin: "0 0 10px", color: "#F6F3EA", fontSize: "24px", lineHeight: 1.08 }}>
                Montrer vite que le niveau est là.
              </h2>
              <p style={{ margin: 0, color: "rgba(246,243,234,0.64)", fontSize: "14px", lineHeight: 1.7 }}>
                C’est ce que font très bien les meilleures agences. Keter doit donner cette impression sur toute la navigation.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section style={{ background: "#f3efe6", padding: "0 32px 112px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gap: "24px" }}>
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
                gap: "24px",
              }}
              className="about-story-grid"
            >
              <div
                style={{
                  padding: "28px",
                  borderRadius: "28px",
                  background: "#fffdf8",
                  border: "1px solid rgba(18,18,18,0.08)",
                }}
              >
                <p style={{ margin: "0 0 10px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                  Pourquoi Keter
                </p>
                <h2 style={{ margin: 0, color: "#121212", fontSize: "34px", lineHeight: 1.04, letterSpacing: "-0.04em" }}>
                  Plus de netteté, moins de bruit.
                </h2>
              </div>

              <div
                style={{
                  padding: "28px",
                  borderRadius: "28px",
                  background: "#fffdf8",
                  border: "1px solid rgba(18,18,18,0.08)",
                }}
              >
                <p style={{ margin: "0 0 16px", color: "#434343", fontSize: "15px", lineHeight: 1.8 }}>
                  Keter vient d’une idée simple: la plupart des sites disent beaucoup, mais convainquent peu.
                  Les visiteurs ne manquent pas toujours. Très souvent, c’est la structure, le rythme et le traitement
                  de la preuve qui manquent.
                </p>
                <p style={{ margin: 0, color: "#434343", fontSize: "15px", lineHeight: 1.8 }}>
                  L’agence s’est construite autour de cette correction: rendre le message plus net, les sections plus utiles
                  et la direction artistique plus cohérente avec le niveau réel de l’activité.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "18px",
            }}
            className="about-principles"
          >
            {principles.map((principle) => (
              <ScrollReveal key={principle}>
                <article
                  style={{
                    padding: "24px",
                    borderRadius: "24px",
                    background: "#fffdf8",
                    border: "1px solid rgba(18,18,18,0.08)",
                    height: "100%",
                  }}
                >
                  <p style={{ margin: 0, color: "#121212", fontSize: "18px", lineHeight: 1.5, letterSpacing: "-0.02em" }}>
                    {principle}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />

      <style>{`
        @media (max-width: 960px) {
          .about-hero {
            padding: 112px 24px 56px !important;
          }
          .about-hero-grid,
          .about-story-grid,
          .about-principles {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .about-hero {
            padding: 96px 16px 48px !important;
          }
          section[style*="padding: 0 32px 112px"] {
            padding: 0 16px 72px !important;
          }
        }
      `}</style>
    </>
  );
}
