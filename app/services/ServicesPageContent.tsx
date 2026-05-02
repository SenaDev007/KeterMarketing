"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTAFinal from "@/components/sections/CTAFinal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { showcaseProjects } from "@/lib/showcase";

const services = [
  {
    id: "one-page",
    name: "Le site one-page",
    delay: "10 jours ouvrés",
    headline: "L’essentiel, sans dilution.",
    description:
      "Pour lancer vite, cadrer une offre et afficher une présence crédible sans partir sur une architecture trop lourde.",
    bullets: ["Angle d’offre clarifié", "Copywriting complet", "Design premium", "Mise en ligne rapide"],
  },
  {
    id: "multi-pages",
    name: "Le site vitrine multi-pages",
    delay: "3 à 4 semaines",
    headline: "La base sérieuse pour convaincre et faire avancer la vente.",
    description:
      "Pour les activités qui doivent rassurer, détailler plusieurs services et installer une image plus forte dès la première visite.",
    bullets: ["Architecture 5 à 7 pages", "Copy sur toutes les pages", "Direction artistique", "SEO on-page propre"],
  },
  {
    id: "landing-page",
    name: "La landing page de vente",
    delay: "2 semaines",
    headline: "Une page, une tension narrative, une action claire.",
    description:
      "Pour vendre une offre précise avec une structure plus directe, plus dense et pensée pour lever les objections.",
    bullets: ["Structure orientée conversion", "Preuves et objections", "Design plus tendu", "CTA stratégiquement répétés"],
  },
  {
    id: "refonte",
    name: "La refonte stratégique",
    delay: "4 à 5 semaines",
    headline: "Quand le site existe déjà, mais ne fait plus le travail.",
    description:
      "Pour reprendre le fond et la forme: message, hiérarchie, design, rythme visuel, crédibilité et conversion.",
    bullets: ["Audit complet", "Repositionnement", "Nouveau design", "Réécriture et déploiement"],
  },
];

export default function ServicesPageContent() {
  const featured = showcaseProjects[0];

  return (
    <>
      <section
        className="services-hero"
        style={{
          padding: "154px 32px 74px",
          background:
            "radial-gradient(circle at top right, rgba(212,175,55,0.1), transparent 24%), #0f100f",
        }}
      >
        <div
          className="services-hero-grid"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 0.92fr)",
            gap: "40px",
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
              <span className="section-label">Services Keter</span>
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
              Des offres pensées pour des situations nettes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{ margin: "0 0 28px", color: "rgba(246,243,234,0.66)", fontSize: "18px", lineHeight: 1.75, maxWidth: "56ch" }}
            >
              Chaque accompagnement correspond à un besoin réel et à un niveau d’intervention précis.
              Pas de formules génériques — une solution choisie avec vous, calée sur vos objectifs de croissance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <Link href="/contact" className="btn-primary">
                Réserver un appel
                <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Voir le portfolio
              </Link>
            </motion.div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            style={{
              position: "relative",
              minHeight: "480px",
              borderRadius: "30px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 28px 80px rgba(0,0,0,0.28)",
            }}
          >
            <Image src={featured.image} alt={featured.alt} fill priority sizes="(max-width: 960px) 100vw, 38vw" style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,16,15,0.08), rgba(15,16,15,0.82))" }} />
            <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "20px", padding: "22px", borderRadius: "22px", background: "rgba(15,16,15,0.72)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}>
              <p style={{ margin: "0 0 8px", color: "#D4AF37", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                Référence visuelle
              </p>
              <h2 style={{ margin: "0 0 10px", color: "#F6F3EA", fontSize: "26px", lineHeight: 1.08 }}>{featured.title}</h2>
              <p style={{ margin: 0, color: "rgba(246,243,234,0.66)", fontSize: "14px", lineHeight: 1.7 }}>
                Un design qui communique la valeur de votre offre avant même que votre prospect lise la première ligne.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section style={{ background: "#0f100f", padding: "0 32px 112px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gap: "22px" }}>
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.06}>
              <article
                className="service-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "240px minmax(0, 1fr) auto",
                  gap: "28px",
                  alignItems: "start",
                  padding: "28px",
                  borderRadius: "28px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  <p style={{ margin: "0 0 10px", color: "#D4AF37", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                    {service.delay}
                  </p>
                  <h2 style={{ margin: "0 0 10px", color: "#F6F3EA", fontSize: "28px", lineHeight: 1.04, letterSpacing: "-0.04em" }}>
                    {service.name}
                  </h2>
                </div>

                <div>
                  <p style={{ margin: "0 0 10px", color: "#F6F3EA", fontSize: "18px", lineHeight: 1.45, fontWeight: 600 }}>
                    {service.headline}
                  </p>
                  <p style={{ margin: "0 0 18px", color: "rgba(246,243,234,0.64)", fontSize: "15px", lineHeight: 1.75, maxWidth: "64ch" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {service.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        style={{
                          padding: "8px 10px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "rgba(246,243,234,0.72)",
                          fontSize: "12px",
                        }}
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ minWidth: "fit-content" }}>
                  <Link href="/contact" className="btn-secondary">
                    En parler
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTAFinal />

      <style>{`
        @media (max-width: 960px) {
          .services-hero {
            padding: 112px 24px 56px !important;
          }
          .services-hero-grid,
          .service-card {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .services-hero {
            padding: 96px 16px 48px !important;
          }
          section[style*="padding: 0 32px 112px"] {
            padding: 0 16px 72px !important;
          }
          .service-card {
            padding: 22px !important;
          }
        }
      `}</style>
    </>
  );
}
