"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Shield, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reassurances = [
  { icon: <Clock size={16} strokeWidth={1.5} />, text: "30 minutes · Sans engagement" },
  { icon: <Shield size={16} strokeWidth={1.5} />, text: "100% stratégique" },
  { icon: <MessageSquare size={16} strokeWidth={1.5} />, text: "Réponse sous 24h" },
];

export default function CTAFinal() {
  return (
    <section className="cta-final-section" style={{ background: "#0B0B0B", padding: "0 32px 120px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <ScrollReveal>
          <motion.div
            style={{
              background: "linear-gradient(135deg, #111111 0%, #161610 50%, #111111 100%)",
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "16px",
              padding: "clamp(48px, 8vw, 96px) clamp(32px, 6vw, 80px)",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: "-60%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "700px",
                height: "500px",
                background: "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />
            {/* Corner TL */}
            <div style={{ position: "absolute", top: "24px", left: "24px", width: "36px", height: "36px", borderTop: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)" }} />
            {/* Corner BR */}
            <div style={{ position: "absolute", bottom: "24px", right: "24px", width: "36px", height: "36px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Couronne
              </p>

              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 58px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  maxWidth: "720px",
                  margin: "0 auto 20px",
                }}
              >
                Votre prochain client est
                <br />
                peut-être déjà sur votre site.
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #E8C84A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  On s'assure qu'il ne repart pas.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.75,
                  maxWidth: "540px",
                  margin: "0 auto 48px",
                }}
              >
                Vous avez lu jusqu'ici. Ça veut dire que vous savez que votre
                site peut faire mieux. La prochaine étape est simple : un appel
                de 30 minutes, gratuit, sans engagement. On analyse votre
                situation ensemble et on vous dit honnêtement si on peut vous
                aider — et comment.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "36px",
                }}
              >
                <Link href="/contact" className="btn-primary btn-shine">
                  → Réserver mon appel gratuit
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "28px",
                  flexWrap: "wrap",
                }}
              >
                {reassurances.map((r, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.35)", fontSize: "13px" }}
                  >
                    <span style={{ color: "#D4AF37" }}>{r.icon}</span>
                    {r.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cta-final-section { padding: 0 20px 72px !important; }
        }
        @media (max-width: 480px) {
          .cta-final-section { padding: 0 16px 56px !important; }
        }
      `}</style>
    </section>
  );
}
