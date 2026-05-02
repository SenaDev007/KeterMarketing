"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layout, Globe, FileText, RefreshCw } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const offers = [
  {
    icon: <Layout size={26} strokeWidth={1.5} />,
    name: "Le Site One-Page",
    delay: "10 jours ouvrés",
    tagline: "L'essentiel, sans rien de superflu.",
    description:
      "Idéal pour lancer rapidement, tester une offre, présenter une activité simplement.",
    badge: null,
  },
  {
    icon: <Globe size={26} strokeWidth={1.5} />,
    name: "Le Site Vitrine Multi-Pages",
    delay: "3 à 4 semaines",
    tagline: "Votre présence web complète, pensée pour convaincre.",
    description:
      "Idéal pour les PME, agences et professionnels qui veulent une présence web complète et crédible.",
    badge: "Populaire",
  },
  {
    icon: <FileText size={26} strokeWidth={1.5} />,
    name: "La Landing Page de Vente",
    delay: "2 semaines",
    tagline: "Une page. Un seul objectif : vendre.",
    description:
      "Idéal pour vendre une formation, un accompagnement ou un produit premium en ligne.",
    badge: null,
  },
  {
    icon: <RefreshCw size={26} strokeWidth={1.5} />,
    name: "La Refonte Stratégique",
    delay: "4 à 5 semaines",
    tagline: "Votre site existe déjà. Faites-le enfin travailler.",
    description:
      "Idéal pour les entreprises avec un site existant qui ne convertit pas.",
    badge: null,
  },
];

export default function OffersSection() {
  return (
    <section
      className="offers-section"
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
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <ScrollReveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">Votre transformation</span>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "16px",
              }}
            >
              Choisissez votre{" "}
              <span style={{ color: "#D4AF37" }}>point de départ.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.42)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Chaque projet est unique — et chaque stratégie l'est aussi.
              On définit ensemble l'accompagnement qui correspond à votre
              situation, votre cible et vos objectifs de croissance.
            </p>
          </ScrollReveal>
        </div>

        {/* Offer cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="offers-grid"
        >
          {offers.map((offer, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.4)" }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "#111111",
                  border: offer.badge
                    ? "1px solid rgba(212,175,55,0.3)"
                    : "1px solid #222222",
                  borderRadius: "8px",
                  padding: "36px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  position: "relative",
                  cursor: "default",
                }}
              >
                {offer.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#D4AF37",
                      color: "#0B0B0B",
                      padding: "4px 14px",
                      borderRadius: "20px",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {offer.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D4AF37",
                  }}
                >
                  {offer.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: "rgba(212,175,55,0.6)",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {offer.tagline}
                  </p>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.25,
                      marginBottom: "14px",
                    }}
                  >
                    {offer.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.42)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {offer.description}
                  </p>
                </div>

                {/* Delay + CTA */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                      padding: "10px 14px",
                      background: "rgba(212,175,55,0.05)",
                      borderRadius: "6px",
                      border: "1px solid rgba(212,175,55,0.1)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span style={{ fontSize: "12px", color: "rgba(212,175,55,0.8)", fontWeight: 500 }}>
                      Délai : {offer.delay}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-secondary btn-shine"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Démarrer
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.3}>
          <div
            style={{
              textAlign: "center",
              marginTop: "56px",
              padding: "32px",
              background: "rgba(212,175,55,0.04)",
              border: "1px solid rgba(212,175,55,0.1)",
              borderRadius: "8px",
              maxWidth: "640px",
              margin: "56px auto 0",
            }}
          >
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 20px" }}>
              Vous ne savez pas par où commencer ? On en parle lors de votre
              appel gratuit de 30 minutes — on analyse votre situation et on
              définit ensemble la meilleure approche.
            </p>
            <Link href="/contact" className="btn-primary">
              → Réserver mon appel gratuit
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .offers-section { padding: 72px 24px !important; }
        }
        @media (max-width: 1100px) {
          .offers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .offers-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .offers-section { padding: 56px 16px !important; }
        }
      `}</style>
    </section>
  );
}
