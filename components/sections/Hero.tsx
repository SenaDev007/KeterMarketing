"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const pills = [
  { label: "Conversion",    x: "62%", y: "4%",  angle: -4,  style: "gold" },
  { label: "Copywriting",   x: "80%", y: "3%",  angle: 6,   style: "dark" },
  { label: "SEO",           x: "72%", y: "7%",  angle: -2,  style: "ghost" },
  { label: "Leads",         x: "90%", y: "5%",  angle: 3,   style: "gold" },
  { label: "Design",        x: "57%", y: "3%",  angle: -6,  style: "ghost" },
  { label: "Performance",   x: "85%", y: "9%",  angle: 5,   style: "dark" },
  { label: "Stratégie",     x: "67%", y: "12%", angle: -3,  style: "dark" },
  { label: "Landing Page",  x: "77%", y: "14%", angle: 4,   style: "gold" },
  { label: "Premium",       x: "60%", y: "9%",  angle: -5,  style: "ghost" },
  { label: "Croissance",    x: "88%", y: "14%", angle: 2,   style: "dark" },
  { label: "ROI",           x: "93%", y: "9%",  angle: -4,  style: "gold" },
  { label: "Branding",      x: "55%", y: "13%", angle: 6,   style: "ghost" },
];

const pillStyles: Record<string, React.CSSProperties> = {
  gold: {
    background: "#D4AF37",
    color: "#0B0B0B",
    border: "none",
  },
  dark: {
    background: "#111111",
    color: "#D4AF37",
    border: "1px solid rgba(212,175,55,0.35)",
  },
  ghost: {
    background: "rgba(255,255,255,0.07)",
    color: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
};

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#0B0B0B",
        padding: "140px 32px 80px",
      }}
    >
      {/* Physics pill background */}
      <Gravity
        gravity={{ x: 0, y: 1 }}
        grabCursor
        addTopWall={false}
        autoStart
        className="z-0"
      >
        {pills.map((pill) => (
          <MatterBody
            key={pill.label}
            x={pill.x}
            y={pill.y}
            angle={pill.angle}
            matterBodyOptions={{ friction: 0.45, restitution: 0.25, density: 0.002 }}
          >
            <div
              style={{
                ...pillStyles[pill.style],
                padding: "10px 22px",
                borderRadius: "100px",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                backdropFilter: pill.style === "ghost" ? "blur(8px)" : undefined,
              }}
            >
              {pill.label}
            </div>
          </MatterBody>
        ))}
      </Gravity>

      {/* Left-to-right dark gradient — keeps text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(11,11,11,0.95) 0%, rgba(11,11,11,0.75) 50%, rgba(11,11,11,0.15) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "880px" }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}
          >
            <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
            <span className="section-label">Agence de Conversion Web — Premium</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: "clamp(44px, 6.5vw, 78px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: "28px",
            }}
          >
            On transforme vos{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #D4AF37 0%, #E8C84A 55%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              visiteurs en clients.
            </span>
            <span style={{ opacity: 0.45 }}>À chaque fois.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            style={{
              fontSize: "clamp(16px, 1.9vw, 20px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginBottom: "52px",
            }}
          >
            Keter Marketing conçoit des sites web stratégiques pour les{" "}
            <span style={{ color: "rgba(255,255,255,0.88)" }}>agences, infopreneurs et PME</span>{" "}
            qui veulent générer des leads, signer des clients et augmenter leur
            chiffre d&apos;affaires — sans dépendre de la chance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}
          >
            <Link href="/contact" className="btn-primary">
              → Réserver mon appel gratuit
              <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Voir nos réalisations
            </Link>
          </motion.div>

          {/* Sub-CTA hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", marginBottom: "60px", fontStyle: "italic" }}
          >
            Sans engagement — 30 minutes chrono
          </motion.p>

          {/* Social proof quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "14px",
              padding: "20px 24px",
              background: "rgba(212,175,55,0.05)",
              border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "8px",
              maxWidth: "560px",
            }}
          >
            <div style={{ color: "#D4AF37", marginTop: "2px", flexShrink: 0 }}>
              <svg width="16" height="12" viewBox="0 0 24 18" fill="currentColor">
                <path d="M0 18V10.8C0 7.4 1 4.6 3 2.4S7.8 0 11.4 0v3.6c-2 0-3.5.7-4.5 2.1S5.4 9 5.4 10.8H9V18H0zm13.8 0V10.8c0-3.4 1-6.2 3-8.4S21.6 0 25.2 0v3.6c-2 0-3.5.7-4.5 2.1s-1.5 3.3-1.5 5.1H23V18H13.8z" />
              </svg>
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
              Rejoignez les entrepreneurs qui ont fait de leur site{" "}
              <span style={{ color: "rgba(255,255,255,0.85)", fontStyle: "normal", fontWeight: 500 }}>
                leur meilleur commercial.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.9 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(212,175,55,0.12)",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "80px",
            maxWidth: "580px",
          }}
          className="hero-stats"
        >
          {[
            { value: "4 offres", label: "maîtrisées" },
            { value: "100%", label: "copywriting intégré" },
            { value: "30 min", label: "audit gratuit" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#121212",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#D4AF37",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "44px",
            background: "linear-gradient(to bottom, #D4AF37, transparent)",
            margin: "0 auto",
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { padding: 100px 20px 60px !important; }
          .hero-stats { margin-top: 48px !important; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 80px 16px 48px !important; }
          .hero-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
