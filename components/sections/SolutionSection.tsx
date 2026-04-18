"use client";

import { motion } from "framer-motion";
import { Brain, PenTool, BarChart2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const pillars = [
  {
    number: "①",
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: "Stratégie avant tout",
    description:
      "On commence par comprendre votre cible, vos concurrents et vos objectifs. Le design vient après la réflexion — jamais avant.",
  },
  {
    number: "②",
    icon: <PenTool size={22} strokeWidth={1.5} />,
    title: "Copywriting de conversion",
    description:
      "Les mots vendent autant que le visuel. On rédige chaque phrase pour répondre aux questions silencieuses de votre prospect et le convaincre d'agir.",
  },
  {
    number: "③",
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    title: "Résultats mesurables",
    description:
      "On ne vous livre pas un site « clé en main » qu'on oublie le lendemain. On vous livre une performance — avec les indicateurs pour la suivre.",
  },
];

export default function SolutionSection() {
  return (
    <section
      style={{
        background: "#0B0B0B",
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(212,175,55,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "end",
            marginBottom: "80px",
          }}
          className="solution-header"
        >
          <div>
            <ScrollReveal>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span className="section-label">La méthode Keter</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 46px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Un site web, ça ne devrait
                <br />
                pas juste être beau.
                <br />
                <span style={{ color: "#D4AF37" }}>Ça devrait vendre.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18} direction="left">
            <div>
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}
              >
                Chez Keter Marketing, on ne conçoit pas des sites. On construit
                des{" "}
                <span style={{ color: "rgba(255,255,255,0.85)" }}>
                  machines à conversion.
                </span>{" "}
                Chaque mot, chaque section, chaque bouton a un rôle précis :
                guider votre visiteur vers une seule action — vous contacter.
              </p>
              <Link href="/services" className="btn-secondary">
                Voir nos accompagnements
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          className="pillars-grid"
        >
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ background: "#181818" }}
                style={{
                  background: "#111111",
                  padding: "52px 40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  transition: "background 0.3s ease",
                }}
              >
                {/* Icon + Number */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "rgba(212,175,55,0.25)",
                      lineHeight: 1,
                    }}
                  >
                    {pillar.number}
                  </span>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D4AF37",
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#D4AF37",
                      marginBottom: "14px",
                      lineHeight: 1.25,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.48)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solution-header { grid-template-columns: 1fr !important; gap: 36px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
