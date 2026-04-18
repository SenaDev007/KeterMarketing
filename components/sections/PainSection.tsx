"use client";

import { motion } from "framer-motion";
import { MessageSquareOff, HelpCircle, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const painCards = [
  {
    icon: <MessageSquareOff size={26} strokeWidth={1.5} color="#D4AF37" />,
    quote: "Mon site existe, mais ne génère aucun lead.",
  },
  {
    icon: <HelpCircle size={26} strokeWidth={1.5} color="#D4AF37" />,
    quote: "Je ne sais pas pourquoi les visiteurs ne me contactent pas.",
  },
  {
    icon: <TrendingDown size={26} strokeWidth={1.5} color="#D4AF37" />,
    quote: "J'ai l'impression de perdre des clients tous les jours.",
  },
];

export default function PainSection() {
  return (
    <section style={{ background: "#F5F5F5", padding: "120px 32px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
            <span className="section-label">La réalité de la plupart des sites</span>
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
              marginBottom: "20px",
              maxWidth: "680px",
            }}
          >
            Votre site est en ligne.
            <br />
            <span style={{ color: "#D4AF37" }}>Mais les clients, eux, ne viennent pas.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <p
            style={{
              fontSize: "17px",
              color: "#4A4A4A",
              lineHeight: 1.8,
              maxWidth: "640px",
              marginBottom: "64px",
            }}
          >
            Vous avez investi du temps, de l'argent, de l'énergie pour créer votre site.
            Il est en ligne. Il est correct. Peut-être même beau. Mais au fond, vous savez
            que quelque chose ne fonctionne pas.
            <br /><br />
            Les visiteurs arrivent — et repartent sans laisser de trace. Pas de formulaire
            rempli, pas d'appel entrant, pas de message reçu. Juste du silence.
            <br /><br />
            Vous avez peut-être même essayé la publicité, le référencement, les réseaux
            sociaux. Le trafic a augmenté. Les résultats, non.
            <br /><br />
            <strong style={{ color: "#0B0B0B" }}>Le problème n'est pas votre offre.
            Le problème, c'est que votre site ne la vend pas.</strong>
          </p>
        </ScrollReveal>

        {/* Pain cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="pain-grid"
        >
          {painCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1 + 0.2}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(212,175,55,0.45)" }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E8E8",
                  borderRadius: "8px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(212,175,55,0.08)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#0B0B0B",
                    lineHeight: 1.5,
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  "{card.quote}"
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pain-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 540px) and (max-width: 860px) {
          .pain-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
