"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { showcaseProjects } from "@/lib/showcase";

export default function PortfolioPageContent() {
  return (
    <div style={{ background: "#0B0B0B", minHeight: "100vh", color: "#F6F3EA" }}>
      {/* ── HERO ── */}
      <section style={{ paddingTop: "240px", paddingBottom: "120px", textAlign: "center", paddingInline: "24px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(56px, 8vw, 110px)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Notre Travail
        </motion.h1>
      </section>

      {/* ── PROJECTS LIST ── */}
      <section style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 4vw 120px" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "40px" }}>
          {showcaseProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectRow({ project, index }: { project: typeof showcaseProjects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        paddingBottom: "80px",
        marginBottom: "80px",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
      className="portfolio-row"
    >
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px" }}>
        
        {/* Left Side: Tags, Title, Button */}
        <div style={{ flex: "1 1 400px", maxWidth: "600px", position: "sticky", top: "160px" }}>
          <ScrollReveal>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              {project.deliverables.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.05)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2
              style={{
                fontSize: "clamp(48px, 6vw, 84px)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 48px 0",
              }}
            >
              {project.title}
            </h2>

            <Link
              href="/contact"
              className="btn-shine"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#E8E8E8", // Sher uses light buttons for case studies on dark bg
                color: "#0B0B0B",
                padding: "14px 28px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E8E8E8")}
            >
              Étude de cas
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowUpRight size={14} />
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Right Side: Large Image */}
        <div style={{ flex: "1 1 600px" }}>
          <ScrollReveal delay={0.1}>
            <div
              style={{
                position: "relative",
                aspectRatio: "16/11",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#1A1A1A",
              }}
            >
              <motion.div style={{ width: "100%", height: "120%", y }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .portfolio-row > div {
            flex-direction: column !important;
          }
          .portfolio-row > div > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
