"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { showcaseProjects } from "@/lib/showcase";

const heroProjects = showcaseProjects.slice(0, 3);

export default function Hero() {
  const [featured, secondary, tertiary] = heroProjects;

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        padding: "148px 32px 88px",
        background:
          "radial-gradient(circle at top right, rgba(212,175,55,0.12), transparent 24%), #0f100f",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.1))",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(380px, 0.95fr)",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "26px",
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.18)",
              color: "#f2df92",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#D4AF37",
                boxShadow: "0 0 18px rgba(212,175,55,0.55)",
              }}
            />
            Sites web premium orientés conversion
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            style={{
              fontSize: "clamp(48px, 7vw, 86px)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
              margin: "0 0 24px",
              color: "#F6F3EA",
              fontWeight: 700,
            }}
          >
            Keter conçoit des sites qui donnent
            <span style={{ color: "#D4AF37", display: "block" }}> envie de vous contacter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            style={{
              color: "rgba(246,243,234,0.68)",
              fontSize: "18px",
              lineHeight: 1.75,
              maxWidth: "58ch",
              margin: "0 0 34px",
            }}
          >
            Comme sur les meilleurs sites d’agence, le message est clair, les preuves arrivent vite,
            les réalisations sont visibles tout de suite et chaque section pousse vers l’étape suivante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "26px" }}
          >
            <Link href="/contact" className="btn-primary">
              Réserver un appel
              <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Voir nos réalisations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "12px",
              marginBottom: "28px",
            }}
            className="hero-stats"
          >
            {[
              { value: "4 semaines", label: "pour une refonte claire et vendable" },
              { value: "Copy intégré", label: "aucun texte laissé au hasard" },
              { value: "Parcours net", label: "CTA visibles dès les premières sections" },
            ].map((item) => (
              <div
                key={item.value}
                style={{
                  padding: "18px 18px 20px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 18px 48px rgba(0,0,0,0.22)",
                }}
              >
                <div
                  style={{
                    color: "#F6F3EA",
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "8px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.value}
                </div>
                <p style={{ margin: 0, color: "rgba(246,243,234,0.56)", fontSize: "12px", lineHeight: 1.6 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{
              margin: 0,
              color: "rgba(246,243,234,0.34)",
              fontSize: "13px",
              letterSpacing: "0.04em",
            }}
          >
            Direction artistique, contenu, structure, performance et maintenance si nécessaire.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
          style={{
            position: "relative",
            minHeight: "620px",
            display: "grid",
            gap: "18px",
            gridTemplateColumns: "1fr 0.82fr",
            gridTemplateRows: "1fr auto",
          }}
          className="hero-visuals"
        >
          <article
            style={{
              gridRow: "1 / span 2",
              position: "relative",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#141514",
              boxShadow: "0 26px 80px rgba(0,0,0,0.34)",
            }}
          >
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 36vw"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(15,16,15,0.06), rgba(15,16,15,0.16) 35%, rgba(15,16,15,0.88))",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "18px 18px auto 18px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  padding: "8px 12px",
                  borderRadius: "999px",
                  background: "rgba(15,16,15,0.68)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F6F3EA",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                {featured.tag}
              </span>
              <span style={{ color: "rgba(246,243,234,0.64)", fontSize: "12px" }}>Visuel de réalisation</span>
            </div>
            <div
              style={{
                position: "absolute",
                left: "20px",
                right: "20px",
                bottom: "20px",
                padding: "18px",
                borderRadius: "22px",
                background: "rgba(15,16,15,0.72)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p style={{ margin: "0 0 8px", color: "rgba(246,243,234,0.54)", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {featured.category}
              </p>
              <h2 style={{ margin: "0 0 10px", fontSize: "24px", lineHeight: 1.15, color: "#F6F3EA" }}>
                {featured.title}
              </h2>
              <p style={{ margin: 0, color: "rgba(246,243,234,0.66)", fontSize: "14px", lineHeight: 1.65 }}>
                {featured.outcome}
              </p>
            </div>
          </article>

          {[secondary, tertiary].map((project) => (
            <article
              key={project.id}
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#171816",
                minHeight: "0",
              }}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 18vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15,16,15,0.18), rgba(15,16,15,0.84))",
                }}
              />
              <div style={{ position: "absolute", left: "16px", right: "16px", bottom: "16px" }}>
                <p style={{ margin: "0 0 6px", color: project.accent, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                  {project.tag}
                </p>
                <h3 style={{ margin: 0, color: "#F6F3EA", fontSize: "18px", lineHeight: 1.2 }}>{project.title}</h3>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visuals {
            min-height: auto !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 420px 260px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 112px 20px 64px !important;
          }
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
          .hero-visuals {
            grid-template-columns: 1fr !important;
            grid-template-rows: 360px 220px 220px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-section {
            padding: 96px 16px 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
