"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PenTool, Layers, Target } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAFinal from "@/components/sections/CTAFinal";

const philosophy = [
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    number: "①",
    title: "Un site, c'est un commercial.",
    description:
      "Il travaille 24h/24, 7j/7, sans vacances et sans commission. Notre rôle est de le rendre aussi efficace que possible.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    number: "②",
    title: "Le beau ne suffit pas.",
    description:
      "Un site peut être magnifique et ne rien vendre. On construit des sites qui convertissent — et qui sont beaux parce que le design renforce la confiance.",
  },
  {
    icon: <PenTool size={22} strokeWidth={1.5} />,
    number: "③",
    title: "On mesure ce qu'on livre.",
    description:
      "Pas de promesses vagues. Chaque projet a des objectifs clairs — et on vous donne les outils pour mesurer les résultats.",
  },
];

export default function AboutPageContent() {
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
              <span className="section-label">À propos</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                maxWidth: "760px",
              }}
            >
              Deux fondateurs.
              <br />
              <span style={{ color: "#D4AF37" }}>Une obsession :</span>
              <br />
              votre conversion.
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                maxWidth: "580px",
              }}
            >
              On n'a pas créé une agence web de plus. On a créé l'agence qu'on
              aurait voulu trouver quand on cherchait un partenaire sérieux pour
              développer une activité en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "#F5F5F5", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="story-grid"
          >
            <ScrollReveal>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span className="section-label" style={{ color: "#D4AF37" }}>L'histoire — Pourquoi Keter ?</span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 800,
                    color: "#0B0B0B",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    marginBottom: "0",
                  }}
                >
                  Keter.
                  <br />
                  <span style={{ color: "#D4AF37" }}>La couronne.</span>
                  <br />
                  Le sommet absolu.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="left">
              <div>
                <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "20px" }}>
                  Keter vient de la Kabbale hébraïque. C'est la couronne — le
                  sommet absolu. Le niveau le plus élevé. Ce n'est pas un nom
                  choisi par hasard. C'est un engagement.
                </p>
                <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "20px" }}>
                  Celui de livrer systématiquement le meilleur niveau de travail
                  possible — pas juste un site correct, mais un site qui performe.
                </p>
                <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.85 }}>
                  Dawes et Stevens se sont associés avec une conviction simple :
                  la majorité des sites web sont des opportunités manquées. De
                  belles vitrines vides. Des pages qui informent sans jamais
                  convaincre.{" "}
                  <strong style={{ color: "#0B0B0B" }}>
                    Keter Marketing existe pour changer ça.
                  </strong>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ background: "#0B0B0B", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span className="section-label">Les deux fondateurs</span>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              </div>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
            className="founders-grid"
          >
            {/* Dawes */}
            <ScrollReveal delay={0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                style={{
                  background: "#111111",
                  border: "1px solid #2A2A2A",
                  borderRadius: "12px",
                  padding: "52px 44px",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))",
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#D4AF37",
                  }}
                >
                  D
                </div>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "8px" }}>
                  Co-fondateur
                </p>
                <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#FFFFFF", marginBottom: "6px" }}>
                  Dawes
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(212,175,55,0.7)", marginBottom: "24px", fontWeight: 500 }}>
                  Stratégie & Copywriting
                </p>
                <div style={{ width: "40px", height: "1px", background: "rgba(212,175,55,0.3)", marginBottom: "24px" }} />
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0 }}>
                  Dawes est obsédé par une question : pourquoi certains sites
                  convertissent et d'autres non ? Cette obsession l'a conduit à
                  étudier le copywriting de conversion, la psychologie de la
                  décision et les meilleures pratiques du web stratégique
                  international.
                  <br /><br />
                  <span style={{ color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>
                    Chez Keter, il est garant du message — chaque mot a un rôle.
                  </span>
                </p>
              </motion.div>
            </ScrollReveal>

            {/* Stevens */}
            <ScrollReveal delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                style={{
                  background: "#111111",
                  border: "1px solid #2A2A2A",
                  borderRadius: "12px",
                  padding: "52px 44px",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))",
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#D4AF37",
                  }}
                >
                  S
                </div>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "#D4AF37", textTransform: "uppercase", marginBottom: "8px" }}>
                  Co-fondateur
                </p>
                <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#FFFFFF", marginBottom: "6px" }}>
                  Stevens
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(212,175,55,0.7)", marginBottom: "24px", fontWeight: 500 }}>
                  Design & Développement
                </p>
                <div style={{ width: "40px", height: "1px", background: "rgba(212,175,55,0.3)", marginBottom: "24px" }} />
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0 }}>
                  Stevens croit que le design n'est pas une question d'esthétique
                  — c'est une question d'efficacité. Un bon design guide l'œil,
                  réduit la friction et dirige le visiteur vers l'action.
                  <br /><br />
                  <span style={{ color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>
                    Chez Keter, il est garant de l'expérience — chaque pixel a une fonction.
                  </span>
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "#F5F5F5", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span className="section-label" style={{ color: "#D4AF37" }}>Notre philosophie</span>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "#0B0B0B",
                  letterSpacing: "-0.02em",
                }}
              >
                En 3 points.
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="philosophy-grid"
          >
            {philosophy.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8E8E8",
                    borderRadius: "8px",
                    padding: "40px 32px",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                    <span style={{ fontSize: "28px", fontWeight: 800, color: "rgba(212,175,55,0.2)" }}>{item.number}</span>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "rgba(212,175,55,0.08)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#D4AF37",
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0B0B0B", marginBottom: "12px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.75, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#0B0B0B", padding: "80px 32px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <ScrollReveal>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", fontStyle: "italic", marginBottom: "20px" }}>
              On préfère travailler avec peu de clients — et très bien.
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "28px" }}>
              Si vous voulez un partenaire qui s'implique vraiment
              dans votre croissance —{" "}
              <span style={{ color: "#D4AF37" }}>on a envie de vous parler.</span>
            </h2>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "16px 36px" }}>
              → Réserver un appel avec l'équipe
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTAFinal />

      <style>{`
        @media (max-width: 860px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .founders-grid { grid-template-columns: 1fr !important; }
          .philosophy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
