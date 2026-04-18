"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "Est-ce que je dois fournir les textes de mon site ?",
    answer:
      "Non. Le copywriting est intégré dans toutes nos offres. On rédige chaque mot de votre site — vous n'avez qu'à nous donner les informations sur votre activité lors de l'appel découverte.",
  },
  {
    question: "Combien de temps dure la création de mon site ?",
    answer:
      "Entre 10 jours pour un one-page et 5 semaines pour une refonte complète. Les délais sont fixés dès la signature et respectés.",
  },
  {
    question: "Est-ce que mon site sera visible sur Google ?",
    answer:
      "Oui. Chaque site est optimisé pour le référencement naturel de base. Pour un SEO avancé, nous proposons un accompagnement complémentaire.",
  },
  {
    question: "Je n'y connais rien au web. Est-ce que je vais pouvoir gérer mon site ?",
    answer:
      "Absolument. On vous livre une formation de 30 minutes incluse dans chaque offre. Votre site est conçu pour être simple à mettre à jour.",
  },
  {
    question: "Pourquoi investir dans un site Keter plutôt qu'une solution générique ?",
    answer:
      "Parce qu'on ne vend pas un site. On vend une performance. Un site qui n'attire aucun client ne coûte pas moins cher — il coûte infiniment plus, en opportunités manquées. Keter livre un actif qui travaille pour vous, 24h/24.",
  },
  {
    question: "Vous travaillez avec quel type de client ?",
    answer:
      "Agences marketing, infopreneurs, consultants, coachs, prestataires B2B et PME. Si vous vendez une expertise ou un service et que votre site ne vous ramène pas de clients — on peut vous aider.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "26px 0",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: isOpen ? "#D4AF37" : "#FFFFFF",
              lineHeight: 1.45,
              transition: "color 0.2s ease",
            }}
          >
            {faq.question}
          </span>
          <div
            style={{
              width: "30px",
              height: "30px",
              border: `1px solid ${isOpen ? "#D4AF37" : "rgba(255,255,255,0.18)"}`,
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: isOpen ? "#D4AF37" : "rgba(255,255,255,0.45)",
              background: isOpen ? "rgba(212,175,55,0.07)" : "transparent",
              transition: "all 0.2s ease",
            }}
          >
            {isOpen ? <Minus size={15} /> : <Plus size={15} />}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.52)",
                  lineHeight: 1.8,
                  paddingBottom: "26px",
                  paddingRight: "54px",
                  margin: 0,
                }}
              >
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  return (
    <section className="faq-section" style={{ background: "#0B0B0B", padding: "120px 32px" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "96px",
          alignItems: "start",
        }}
        className="faq-layout"
      >
        {/* Left sticky */}
        <div style={{ position: "sticky", top: "120px" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">FAQ</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "20px",
              }}
            >
              Les questions
              <br />
              qu'on nous pose
              <br />
              <span style={{ color: "#D4AF37" }}>le plus souvent.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
              Une question non listée ? Réservez un appel de 30 minutes — c'est
              gratuit et sans engagement.
            </p>
          </ScrollReveal>
        </div>

        {/* Right — list */}
        <div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-section { padding: 72px 24px !important; }
          .faq-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-layout > div:first-child { position: static !important; }
        }
        @media (max-width: 480px) {
          .faq-section { padding: 56px 16px !important; }
        }
      `}</style>
    </section>
  );
}
