"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Gravity, MatterBody } from "@/components/ui/gravity";

// ── Portfolio projects ────────────────────────────────────────────────
type Project = {
  id: number;
  title: string;
  tag: string;
  accent: string;
  gradient: string;
  result: string;
  number: string;
  href: string;
};

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Coach Business Premium",
    tag: "Site Multi-Pages",
    accent: "#4A90E2",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
    result: "3 leads qualifiés dès la première semaine de mise en ligne.",
    number: "01",
    href: "/portfolio",
  },
  {
    id: 2,
    title: "Infopreneur — Formation en Ligne",
    tag: "Landing Page",
    accent: "#C84A4A",
    gradient: "linear-gradient(135deg, #2E1A1A 0%, #3E1616 50%, #5A1010 100%)",
    result: "Taux de conversion ×4 en 30 jours — de 0,8 % à 3,2 %.",
    number: "02",
    href: "/portfolio",
  },
  {
    id: 3,
    title: "Agence Recrutement B2B",
    tag: "Refonte Stratégique",
    accent: "#D4AF37",
    gradient: "linear-gradient(135deg, #1A160A 0%, #2A2010 50%, #3D2E0A 100%)",
    result: "5 leads qualifiés en 3 semaines, dont 2 convertis en clients.",
    number: "03",
    href: "/portfolio",
  },
];

// 12 physics pills — 4 instances of each project
const pillItems = [
  { project: portfolioProjects[0], x: "62%", y: "4%",  angle: -4  },
  { project: portfolioProjects[1], x: "80%", y: "3%",  angle: 6   },
  { project: portfolioProjects[2], x: "72%", y: "7%",  angle: -2  },
  { project: portfolioProjects[0], x: "90%", y: "5%",  angle: 3   },
  { project: portfolioProjects[1], x: "57%", y: "3%",  angle: -6  },
  { project: portfolioProjects[2], x: "85%", y: "9%",  angle: 5   },
  { project: portfolioProjects[0], x: "67%", y: "12%", angle: -3  },
  { project: portfolioProjects[1], x: "77%", y: "14%", angle: 4   },
  { project: portfolioProjects[2], x: "60%", y: "9%",  angle: -5  },
  { project: portfolioProjects[0], x: "88%", y: "14%", angle: 2   },
  { project: portfolioProjects[1], x: "93%", y: "9%",  angle: -4  },
  { project: portfolioProjects[2], x: "55%", y: "13%", angle: 6   },
];

const pillStyle = (project: Project): React.CSSProperties => ({
  padding: "10px 22px",
  borderRadius: "100px",
  fontWeight: 700,
  fontSize: "13px",
  letterSpacing: "0.05em",
  whiteSpace: "nowrap",
  fontFamily: "var(--font-inter), Inter, sans-serif",
  userSelect: "none",
  background: `${project.accent}18`,
  color: project.accent,
  border: `1px solid ${project.accent}40`,
});

// ── Hover preview card ────────────────────────────────────────────────
const CARD_W = 280;
const CARD_H = 216;

function HoverPreview({ project, mousePos }: { project: Project; mousePos: { x: number; y: number } }) {
  const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
  const left = Math.max(12, Math.min(mousePos.x - CARD_W / 2, vw - CARD_W - 12));
  const top  = Math.max(12, mousePos.y - CARD_H - 20);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      style={{
        position: "fixed",
        left,
        top,
        width: `${CARD_W}px`,
        zIndex: 9999,
        pointerEvents: "none",
        borderRadius: "12px",
        overflow: "hidden",
        border: `1px solid ${project.accent}35`,
        boxShadow: `0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px ${project.accent}15`,
      }}
    >
      {/* Gradient thumbnail */}
      <div
        style={{
          height: "130px",
          background: project.gradient,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "52px",
            fontWeight: 900,
            color: "rgba(255,255,255,0.06)",
            letterSpacing: "-0.04em",
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          {project.number}
        </span>

        {/* Type badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: `${project.accent}22`,
            border: `1px solid ${project.accent}50`,
            borderRadius: "100px",
            padding: "4px 11px",
            fontSize: "10px",
            fontWeight: 700,
            color: project.accent,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {project.tag}
        </div>

        {/* Arrow CTA */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: project.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRight size={13} color="#0B0B0B" strokeWidth={2.5} />
        </div>
      </div>

      {/* Info */}
      <div style={{ background: "#141414", padding: "14px 16px" }}>
        <p style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px", lineHeight: 1.3 }}>
          {project.title}
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>
          {project.result}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Hero component ───────────────────────────────────────────────
export default function Hero() {
  const router  = useRouter();
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos]             = useState({ x: 0, y: 0 });
  const pillRefs      = useRef<(HTMLDivElement | null)[]>(Array(pillItems.length).fill(null));
  const dragStartRef  = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const mx = e.clientX;
    const my = e.clientY;
    setMousePos({ x: mx, y: my });

    let found: Project | null = null;
    pillRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom) {
        found = pillItems[i].project;
      }
    });
    setHoveredProject(found);
  }, []);

  const handleMouseLeave = useCallback(() => setHoveredProject(null), []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (!dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    dragStartRef.current = null;
    if (Math.sqrt(dx * dx + dy * dy) < 5 && hoveredProject) {
      router.push(hoveredProject.href);
    }
  }, [hoveredProject, router]);

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
        cursor: hoveredProject ? "pointer" : "default",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Physics pills */}
      <Gravity
        gravity={{ x: 0, y: 1 }}
        grabCursor
        addTopWall={false}
        autoStart
        className="z-0"
      >
        {pillItems.map((item, i) => (
          <MatterBody
            key={i}
            x={item.x}
            y={item.y}
            angle={item.angle}
            matterBodyOptions={{ friction: 0.45, restitution: 0.25, density: 0.002 }}
          >
            <div
              ref={el => { pillRefs.current[i] = el; }}
              style={pillStyle(item.project)}
            >
              {item.project.tag}
            </div>
          </MatterBody>
        ))}
      </Gravity>

      {/* Hover preview — fixed position, escapes overflow:hidden */}
      <AnimatePresence>
        {hoveredProject && (
          <HoverPreview project={hoveredProject} mousePos={mousePos} />
        )}
      </AnimatePresence>

      {/* Left-to-right dark gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(11,11,11,0.95) 0%, rgba(11,11,11,0.75) 50%, rgba(11,11,11,0.15) 100%)",
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
            Nous concevons des sites web qui{" "}
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #D4AF37 0%, #E8C84A 55%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              génèrent des clients.
            </span>
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
            { value: "4 offres",  label: "maîtrisées"          },
            { value: "100%",      label: "copywriting intégré" },
            { value: "30 min",    label: "audit gratuit"        },
          ].map((stat, i) => (
            <div key={i} style={{ background: "#121212", padding: "28px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#D4AF37", lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.01em" }}>
                {stat.value}
              </div>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
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
        style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, #D4AF37, transparent)", margin: "0 auto" }}
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
