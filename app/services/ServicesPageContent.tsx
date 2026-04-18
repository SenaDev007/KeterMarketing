"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAFinal from "@/components/sections/CTAFinal";

const services = [
  {
    id: "one-page",
    name: "Le Site One-Page",
    headline: "L'essentiel, sans rien de superflu.",
    forWho: "Vous lancez une activité, vous testez une nouvelle offre, ou vous avez besoin d'une présence web rapide et professionnelle.",
    whatYouGet: "Un site en ligne en 10 jours ouvrés. Une page qui dit qui vous êtes, ce que vous faites, pour qui, et pourquoi vous contacter — dans cet ordre précis.",
    delay: "10 jours ouvrés",
    cta: "Démarrer mon site one-page",
    included: [
      "Audit de positionnement (30 min)",
      "Architecture de la page optimisée",
      "Copywriting intégral rédigé par Keter",
      "Design sur-mesure adapté à votre identité",
      "Développement & mise en ligne",
      "Optimisation SEO de base",
      "Formation à la mise à jour (20 min)",
      "Support 30 jours après livraison",
    ],
  },
  {
    id: "multi-pages",
    name: "Le Site Vitrine Multi-Pages",
    headline: "Votre présence web complète, pensée pour convaincre.",
    forWho: "Vous avez une activité établie, plusieurs services à présenter, et vous voulez un site qui inspire confiance dès les premières secondes.",
    whatYouGet: "Un site complet, multi-pages, avec un SEO solide, un design premium et un copywriting qui positionne votre expertise.",
    delay: "3 à 4 semaines",
    cta: "Démarrer mon site vitrine",
    highlighted: true,
    included: [
      "Audit stratégique complet",
      "Architecture multi-pages (5 à 7 pages)",
      "Copywriting intégral de toutes les pages",
      "Design premium sur-mesure",
      "Développement & mise en ligne",
      "Optimisation SEO on-page",
      "Intégration formulaire & prise de RDV",
      "Formation complète (30 min)",
      "Support prioritaire 30 jours",
    ],
  },
  {
    id: "landing-page",
    name: "La Landing Page de Vente",
    headline: "Une page. Un seul objectif : vendre.",
    forWho: "Vous vendez une formation, un programme d'accompagnement, un produit digital ou une offre premium. Vous avez besoin d'une page qui argumente, convainc et convertit.",
    whatYouGet: "Une page de vente construite pour convaincre — pas pour informer. Structure AIDA, gestion des objections, CTA positionnés stratégiquement.",
    delay: "2 semaines",
    cta: "Créer ma landing page",
    included: [
      "Stratégie de conversion sur-mesure",
      "Copywriting long format (AIDA + objections)",
      "Design orienté conversion",
      "Développement & mise en ligne",
      "Intégration paiement ou formulaire",
      "Tests et optimisation avant livraison",
      "Support 30 jours",
    ],
  },
  {
    id: "refonte",
    name: "La Refonte Stratégique",
    headline: "Votre site existe déjà. Faites-le enfin travailler.",
    forWho: "Vous avez un site en ligne depuis des mois, voire des années. Mais il ne génère ni leads, ni appels, ni ventes. On repart de zéro, avec méthode.",
    whatYouGet: "Un site entièrement repensé, repositionné et développé de A à Z — avec un audit complet comme point de départ.",
    delay: "4 à 5 semaines",
    cta: "Refondre mon site",
    included: [
      "Audit complet (UX, copy, conversion, SEO)",
      "Rapport de diagnostic avec recommandations",
      "Nouvelle architecture stratégique",
      "Nouveau copywriting intégral",
      "Nouveau design sur-mesure",
      "Redéveloppement complet",
      "Migration et mise en ligne",
      "Formation & suivi 30 jours",
    ],
  },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#0B0B0B",
          padding: "160px 32px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(212,175,55,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">Nos accompagnements stratégiques</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                maxWidth: "720px",
              }}
            >
              Conçus pour{" "}
              <span style={{ color: "#D4AF37" }}>transformer.</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                maxWidth: "580px",
              }}
            >
              Chaque accompagnement est conçu pour une situation précise.
              Identifiez la vôtre — ou parlez-nous de votre projet et on vous
              guide vers la meilleure stratégie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ background: "#0B0B0B", padding: "20px 32px 120px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.07}>
              <div
                style={{
                  background: service.highlighted ? "#131308" : "#111111",
                  border: service.highlighted
                    ? "1px solid rgba(212,175,55,0.3)"
                    : "1px solid #222222",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {service.highlighted && (
                  <div
                    style={{
                      background: "linear-gradient(90deg, #D4AF37, #E8C84A)",
                      height: "3px",
                    }}
                  />
                )}

                <div
                  style={{
                    padding: "48px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "64px",
                  }}
                  className="service-inner"
                >
                  {/* Left */}
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: "rgba(212,175,55,0.6)",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}
                    >
                      Délai : {service.delay}
                    </p>
                    <h2
                      style={{
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        lineHeight: 1.2,
                        marginBottom: "12px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {service.name}
                    </h2>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#D4AF37",
                        marginBottom: "20px",
                      }}
                    >
                      {service.headline}
                    </p>

                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "10px",
                      }}
                    >
                      Pour qui
                    </p>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.52)", lineHeight: 1.75, marginBottom: "28px" }}>
                      {service.forWho}
                    </p>

                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "10px",
                      }}
                    >
                      Ce que vous obtenez
                    </p>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontStyle: "italic", marginBottom: "36px" }}>
                      "{service.whatYouGet}"
                    </p>

                    <div
                      style={{
                        padding: "16px 20px",
                        background: "rgba(212,175,55,0.06)",
                        border: "1px solid rgba(212,175,55,0.15)",
                        borderRadius: "6px",
                        marginBottom: "28px",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <strong style={{ color: "#D4AF37", display: "block", marginBottom: "4px" }}>
                        Investissement
                      </strong>
                      Sur mesure — défini lors de votre appel découverte
                    </div>

                    <Link href="/contact" className="btn-primary">
                      → {service.cta}
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Right — included */}
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: "rgba(212,175,55,0.6)",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                      }}
                    >
                      Ce qui est inclus
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      {service.included.map((item, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 + 0.2 }}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.5,
                          }}
                        >
                          <Check size={16} color="#D4AF37" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              maxWidth: "600px",
              margin: "64px auto 0",
              textAlign: "center",
              padding: "40px",
              background: "rgba(212,175,55,0.04)",
              border: "1px solid rgba(212,175,55,0.12)",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "24px" }}>
              Chaque projet est unique et mérite une approche sur mesure.
              Réservez un appel de 30 minutes — on analyse votre situation
              ensemble et on définit la meilleure stratégie pour vous.
            </p>
            <Link href="/contact" className="btn-primary">
              → Réserver mon appel gratuit
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <CTAFinal />

      <style>{`
        @media (max-width: 860px) {
          .service-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
