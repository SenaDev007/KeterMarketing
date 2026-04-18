"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Zap, BarChart2, Lock, Wrench, Globe, Edit3, Bug } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    number: "01",
    icon: <Wrench size={20} strokeWidth={1.5} />,
    title: "Maintenance Technique",
    desc: "Les sites WordPress nécessitent des mises à jour régulières du cœur, des thèmes et des plugins. On gère tout ça et on teste la compatibilité à chaque mise à jour pour éviter les mauvaises surprises.",
  },
  {
    number: "02",
    icon: <Edit3 size={20} strokeWidth={1.5} />,
    title: "Modifications de Contenu Illimitées",
    desc: "Changer un texte, remplacer une image, publier un article de blog, mettre à jour une offre — c'est notre rôle. Votre équipe se concentre sur son cœur de métier, on gère le site.",
  },
  {
    number: "03",
    icon: <Bug size={20} strokeWidth={1.5} />,
    title: "Corrections de Bugs Illimitées",
    desc: "Un élément visuel cassé, un formulaire qui ne s'envoie plus, un bouton défaillant — on intervient rapidement pour corriger tout dysfonctionnement sur votre site, sans facturation supplémentaire.",
  },
  {
    number: "04",
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: "Hébergement Premium",
    desc: "On migre votre site vers un hébergement rapide, sécurisé et optimisé pour votre CMS. Temps de disponibilité garanti, sauvegardes quotidiennes automatiques, CDN inclus.",
  },
  {
    number: "05",
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Accessibilité WCAG",
    desc: "L'accessibilité est une obligation légale et un facteur SEO. On s'assure que votre site respecte les normes WCAG — pour les visiteurs en situation de handicap, et pour votre référencement Google.",
  },
  {
    number: "06",
    icon: <Zap size={20} strokeWidth={1.5} />,
    title: "Optimisation de la Vitesse",
    desc: "Un site lent fait fuir vos visiteurs et pénalise votre positionnement Google. On optimise vos Core Web Vitals, réduit les temps de chargement et améliore directement votre taux de conversion.",
  },
  {
    number: "07",
    icon: <BarChart2 size={20} strokeWidth={1.5} />,
    title: "Analytique Avancée",
    desc: "Suivi des conversions, analyse des sources de trafic, comportements utilisateurs par device, valeur de chaque canal d'acquisition. On transforme vos données en décisions business concrètes.",
  },
  {
    number: "08",
    icon: <Lock size={20} strokeWidth={1.5} />,
    title: "Sécurité & Anti-Malware",
    desc: "Scan régulier des vulnérabilités, suppression de malware, certificat SSL, pare-feu applicatif. Votre site est protégé 24/7 contre les menaces et les tentatives d'intrusion.",
  },
];

const caseStudies = [
  { title: "Coach Business Premium", tag: "Site Multi-Pages", gradient: "linear-gradient(135deg, #1A1A2E 0%, #0F3460 100%)", accent: "#4A90E2" },
  { title: "Infopreneur — Formation en Ligne", tag: "Landing Page", gradient: "linear-gradient(135deg, #2E1A1A 0%, #5A1010 100%)", accent: "#C84A4A" },
  { title: "Agence Recrutement B2B", tag: "Refonte Stratégique", gradient: "linear-gradient(135deg, #1A160A 0%, #3D2E0A 100%)", accent: "#D4AF37" },
];

function FeatureAccordion({ feature, defaultOpen }: { feature: typeof features[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", gap: "20px", padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, color: open ? "#D4AF37" : "rgba(255,255,255,0.2)", letterSpacing: "0.1em", minWidth: "28px" }}>{feature.number}</span>
        <span style={{ color: open ? "#D4AF37" : "rgba(255,255,255,0.3)", flexShrink: 0 }}>{feature.icon}</span>
        <span style={{ flex: 1, fontSize: "16px", fontWeight: 600, color: open ? "#FFFFFF" : "rgba(255,255,255,0.65)" }}>{feature.title}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} color={open ? "#D4AF37" : "rgba(255,255,255,0.25)"} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, paddingBottom: "24px", paddingLeft: "48px", margin: 0 }}>
              {feature.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GestionSiteContent() {
  return (
    <>
      {/* Hero */}
      <section className="gestion-hero" style={{ background: "#0B0B0B", padding: "160px 32px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
            <span className="section-label">Service</span>
            <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "24px" }}>
            La Gestion de Votre Site Web,{" "}
            <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C84A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Simplifiée.
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "580px", margin: "0 auto 44px" }}>
            On s'occupe de tout — maintenance, sécurité, contenu, performance. Vous vous concentrez sur votre business.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", padding: "16px 32px" }}>
              Réserver un appel <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="gestion-features" style={{ background: "#0B0B0B", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }} className="features-layout">
            <ScrollReveal>
              <div style={{ position: "sticky", top: "120px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
                  <span className="section-label">Ce qui est inclus</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "20px" }}>
                  Tout ce dont votre site a besoin.
                </h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: "32px" }}>
                  Une gestion complète, sans surprises. Vous savez exactement ce qu'on fait pour vous chaque mois.
                </p>
                <Link href="/contact" className="btn-secondary" style={{ fontSize: "13px" }}>
                  Voir les tarifs <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>

            <div>
              {features.map((feature, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <FeatureAccordion feature={feature} defaultOpen={i === 0} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <ScrollReveal>
        <section className="gestion-testimonial" style={{ background: "#111111", padding: "100px 32px", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "28px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote style={{ fontSize: "22px", fontWeight: 500, color: "#FFFFFF", lineHeight: 1.65, fontStyle: "italic", marginBottom: "32px" }}>
              "Keter Marketing a considérablement amélioré les performances de notre site et nous a aidés à développer le contenu pour mieux répondre aux besoins de nos clients."
            </blockquote>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>Paul Connolly</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>Water to Go — Client Gestion de Site</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Case studies */}
      <section className="gestion-cases" style={{ background: "#0B0B0B", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginBottom: "52px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
                  <span className="section-label">Portfolio</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", margin: 0 }}>
                  Sites que nous avons créés
                </h2>
              </div>
              <Link href="/portfolio" className="btn-secondary" style={{ fontSize: "13px" }}>
                Voir toutes les réalisations <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="cases-grid">
            {caseStudies.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href="/portfolio" style={{ display: "block", textDecoration: "none" }}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ background: "#111111", borderRadius: "10px", overflow: "hidden", border: "1px solid #2A2A2A" }}>
                    <div style={{ height: "160px", background: c.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: c.accent, letterSpacing: "0.06em", background: "rgba(0,0,0,0.45)", padding: "4px 12px", borderRadius: "100px", border: `1px solid ${c.accent}40` }}>
                        {c.tag}
                      </span>
                    </div>
                    <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>{c.title}</span>
                      <ArrowRight size={16} color="rgba(255,255,255,0.25)" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "48px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Obtenir un devis <ArrowRight size={15} /></Link>
              <Link href="/portfolio" className="btn-secondary">Plus de réalisations <ArrowRight size={15} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <ScrollReveal>
        <section className="gestion-services" style={{ background: "#111111", padding: "100px 32px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
                <span className="section-label">Ce que nous faisons</span>
                <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>Nos services</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="services-grid">
              {[
                { title: "Création de Site Web", desc: "Un site stratégique qui convertit vos visiteurs en clients, avec copywriting intégré et design premium.", href: "/services" },
                { title: "Gestion de Site Web", desc: "Hébergement, sécurité, mises à jour, corrections de bugs, modifications de contenu — on s'occupe de tout.", href: "/gestion-de-site" },
                { title: "Refonte Stratégique", desc: "Votre site existe mais ne performe pas ? On repense l'architecture, le copy et le design pour convertir.", href: "/contact" },
              ].map((s, i) => (
                <Link key={i} href={s.href} style={{ textDecoration: "none" }}>
                  <motion.div whileHover={{ borderColor: "rgba(212,175,55,0.3)" }} style={{ background: "#0B0B0B", borderRadius: "10px", padding: "32px", border: "1px solid #2A2A2A", height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{s.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0, flex: 1 }}>{s.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#D4AF37", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em" }}>
                      En savoir plus <ArrowRight size={13} />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <style>{`
        @media (max-width: 1024px) {
          .features-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .features-layout > div:first-child { position: static !important; }
        }
        @media (max-width: 860px) {
          .gestion-hero { padding: 100px 20px 64px !important; }
          .gestion-features, .gestion-cases, .gestion-testimonial, .gestion-services { padding: 64px 20px !important; }
        }
        @media (max-width: 768px) {
          .cases-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .gestion-hero { padding: 80px 16px 48px !important; }
          .gestion-features, .gestion-cases, .gestion-testimonial, .gestion-services { padding: 48px 16px !important; }
        }
      `}</style>
    </>
  );
}
