"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { showcaseProjects } from "@/lib/showcase";

const features = [
  "Maintenance technique continue",
  "Modifications de contenu rapides",
  "Corrections de bugs sans friction",
  "Vitesse et sécurité surveillées",
  "Suivi analytique plus propre",
  "Vision claire de ce qui compte vraiment",
];

export default function GestionSiteContent() {
  const visualProjects = showcaseProjects.slice(2, 4);

  return (
    <>
      <section
        className="gestion-hero"
        style={{
          padding: "154px 32px 64px",
          background:
            "radial-gradient(circle at top, rgba(212,175,55,0.1), transparent 24%), #0f100f",
        }}
      >
        <div
          className="gestion-hero-grid"
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
              <span className="section-label">Gestion de site</span>
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
              Garder le site propre, rapide et vivant.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{ margin: "0 0 28px", color: "rgba(246,243,234,0.66)", fontSize: "18px", lineHeight: 1.75, maxWidth: "58ch" }}
            >
              L’alignement avec Sher passe aussi par la tenue dans le temps. Un beau site qui se dégrade, ralentit ou se vide
              en quelques mois perd tout son effet. Cette offre sert à éviter exactement ça.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px", marginBottom: "28px" }}
              className="gestion-feature-list"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(246,243,234,0.74)",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {feature}
                </div>
              ))}
            </motion.div>

            <Link href="/contact" className="btn-primary">
              Demander un devis
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gap: "18px", gridTemplateColumns: "1fr 1fr" }}>
            {visualProjects.map((project) => (
              <article
                key={project.id}
                style={{
                  position: "relative",
                  minHeight: "420px",
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 960px) 100vw, 18vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,16,15,0.12), rgba(15,16,15,0.82))" }} />
                <div style={{ position: "absolute", left: "16px", right: "16px", bottom: "16px" }}>
                  <p style={{ margin: "0 0 6px", color: project.accent, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                    {project.tag}
                  </p>
                  <h2 style={{ margin: "0 0 8px", color: "#F6F3EA", fontSize: "20px", lineHeight: 1.1 }}>{project.title}</h2>
                  <p style={{ margin: 0, color: "rgba(246,243,234,0.62)", fontSize: "13px", lineHeight: 1.6 }}>
                    {project.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f100f", padding: "0 32px 112px" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
            gap: "24px",
          }}
          className="gestion-body"
        >
          <ScrollReveal>
            <div
              style={{
                padding: "28px",
                borderRadius: "28px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "fit-content",
              }}
            >
              <p style={{ margin: "0 0 10px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                Pourquoi cette offre
              </p>
              <h2 style={{ margin: "0 0 12px", color: "#F6F3EA", fontSize: "32px", lineHeight: 1.04, letterSpacing: "-0.04em" }}>
                Un site premium se voit aussi après le lancement.
              </h2>
              <p style={{ margin: 0, color: "rgba(246,243,234,0.62)", fontSize: "15px", lineHeight: 1.8 }}>
                Trop de sites commencent fort puis se dégradent. Cette formule maintient la cohérence visuelle,
                la fiabilité technique et la capacité du site à continuer de rassurer et convertir.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gap: "18px" }}>
            {[
              {
                title: "Maintenance et corrections",
                text: "Mises à jour, vérifications, corrections et surveillance pour éviter que le site se fragilise avec le temps.",
              },
              {
                title: "Modifications de contenu",
                text: "Changer une section, remplacer un visuel, ajouter une offre ou ajuster un message sans casser l’équilibre du site.",
              },
              {
                title: "Performance et confiance",
                text: "Vitesse, sécurité, analytics et stabilité générale: tout ce qui fait qu’un site inspire encore confiance plusieurs mois après sa mise en ligne.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <article
                  style={{
                    padding: "26px 28px",
                    borderRadius: "24px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <h3 style={{ margin: "0 0 10px", color: "#F6F3EA", fontSize: "22px", lineHeight: 1.1 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "rgba(246,243,234,0.62)", fontSize: "15px", lineHeight: 1.75 }}>{item.text}</p>
                </article>
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "20px",
                  alignItems: "center",
                  padding: "28px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.14), rgba(212,175,55,0.05))",
                  border: "1px solid rgba(212,175,55,0.16)",
                }}
                className="gestion-cta"
              >
                <div>
                  <p style={{ margin: "0 0 8px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                    Étape suivante
                  </p>
                  <p style={{ margin: 0, color: "#F6F3EA", fontSize: "20px", lineHeight: 1.35 }}>
                    Si le site doit rester au niveau, il faut une vraie gestion derrière.
                  </p>
                </div>
                <Link href="/contact" className="btn-primary">
                  Réserver un appel
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .gestion-hero {
            padding: 112px 24px 56px !important;
          }
          .gestion-hero-grid,
          .gestion-body,
          .gestion-cta {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .gestion-feature-list {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .gestion-hero {
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
