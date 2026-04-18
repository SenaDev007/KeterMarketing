"use client";

import { motion } from "framer-motion";
import { Phone, Compass, Code2, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    day: "Jour 1",
    icon: <Phone size={20} strokeWidth={1.5} />,
    title: "Appel découverte",
    duration: "30 minutes",
    description:
      "30 minutes pour comprendre votre activité, votre cible et vos objectifs. Gratuit, sans engagement.",
  },
  {
    day: "Jour 3",
    icon: <Compass size={20} strokeWidth={1.5} />,
    title: "Stratégie & proposition",
    duration: "J+3",
    description:
      "Architecture du site, angle de positionnement, copywriting proposé et proposition stratégique sur mesure.",
  },
  {
    day: "Semaines 2 à 4",
    icon: <Code2 size={20} strokeWidth={1.5} />,
    title: "Design, copywriting & développement",
    duration: "3 semaines",
    description:
      "On construit votre site de A à Z. Un aller-retour de corrections est inclus.",
  },
  {
    day: "Jour 25 à 30",
    icon: <Rocket size={20} strokeWidth={1.5} />,
    title: "Livraison, formation & suivi",
    duration: "J28 — Mise en ligne",
    description:
      "Mise en ligne, formation de 30 min, support 30 jours post-livraison.",
  },
];

export default function ProcessSection() {
  return (
    <section style={{ background: "#F5F5F5", padding: "120px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <div style={{ marginBottom: "80px" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">Notre processus</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 800,
                color: "#0B0B0B",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                maxWidth: "560px",
              }}
            >
              De la première conversation
              <br />
              à la mise en ligne.
              <br />
              <span style={{ color: "#D4AF37" }}>Voici comment ça se passe.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line desktop */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "calc(50% - 0.5px)",
              top: "20px",
              bottom: "20px",
              width: "1px",
              background: "linear-gradient(to bottom, #D4AF37 0%, rgba(212,175,55,0.08) 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 80px 1fr",
                      marginBottom: i < steps.length - 1 ? "40px" : 0,
                    }}
                    className="timeline-row"
                  >
                    {/* Left side */}
                    {isLeft ? (
                      <>
                        <motion.div
                          whileHover={{ x: -4 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #E8E8E8",
                            borderRadius: "8px",
                            padding: "32px 36px",
                            textAlign: "right",
                            transition: "border-color 0.3s, box-shadow 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = "rgba(212,175,55,0.4)";
                            el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.05)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = "#E8E8E8";
                            el.style.boxShadow = "none";
                          }}
                        >
                          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "8px" }}>
                            {step.day}
                          </p>
                          <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#0B0B0B", marginBottom: "10px" }}>
                            {step.title}
                          </h3>
                          <p style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.7, margin: 0 }}>
                            {step.description}
                          </p>
                        </motion.div>

                        {/* Center dot */}
                        <div style={{ display: "flex", justifyContent: "center", paddingTop: "28px" }}>
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              background: "#D4AF37",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#0B0B0B",
                              zIndex: 1,
                              flexShrink: 0,
                              boxShadow: "0 0 0 5px rgba(212,175,55,0.12)",
                            }}
                          >
                            {step.icon}
                          </div>
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        {/* Center dot */}
                        <div style={{ display: "flex", justifyContent: "center", paddingTop: "28px" }}>
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              background: "#D4AF37",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#0B0B0B",
                              zIndex: 1,
                              flexShrink: 0,
                              boxShadow: "0 0 0 5px rgba(212,175,55,0.12)",
                            }}
                          >
                            {step.icon}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #E8E8E8",
                            borderRadius: "8px",
                            padding: "32px 36px",
                            transition: "border-color 0.3s, box-shadow 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = "rgba(212,175,55,0.4)";
                            el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.05)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.borderColor = "#E8E8E8";
                            el.style.boxShadow = "none";
                          }}
                        >
                          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "8px" }}>
                            {step.day}
                          </p>
                          <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#0B0B0B", marginBottom: "10px" }}>
                            {step.title}
                          </h3>
                          <p style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.7, margin: 0 }}>
                            {step.description}
                          </p>
                        </motion.div>
                      </>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none !important; }
          .timeline-row {
            grid-template-columns: 1fr !important;
          }
          .timeline-row > div:nth-child(2) { display: none !important; }
          .timeline-row > div:empty { display: none !important; }
        }
      `}</style>
    </section>
  );
}
