"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { sherStyleHighlights } from "@/lib/showcase";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/keter-marketing" },
  { name: "Instagram", href: "https://instagram.com/ketermarketing" },
  { name: "X", href: "https://x.com/ketermarketing" },
];

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gestion de site", href: "/gestion-de-site" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/mentions-legales#confidentialite" },
  { label: "Cookies", href: "/mentions-legales#cookies" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f100f", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 32px 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: "28px",
            alignItems: "center",
            padding: "34px 36px",
            borderRadius: "30px",
            background: "linear-gradient(135deg, rgba(212,175,55,0.16), rgba(212,175,55,0.05))",
            border: "1px solid rgba(212,175,55,0.18)",
            marginBottom: "34px",
          }}
          className="footer-top"
        >
          <div>
            <p style={{ margin: "0 0 10px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
              Keter Marketing
            </p>
            <h2 style={{ margin: "0 0 8px", color: "#F6F3EA", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
              Un site plus net, plus crédible, plus désirable.
            </h2>
            <p style={{ margin: 0, color: "rgba(246,243,234,0.64)", fontSize: "15px", lineHeight: 1.7, maxWidth: "58ch" }}>
              Même exigence que sur les meilleures agences: meilleure narration, meilleures images, meilleure fluidité.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Réserver un appel
            <ArrowRight size={16} />
          </Link>
        </motion.section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 0.8fr) minmax(0, 0.8fr) minmax(0, 1fr)",
            gap: "28px",
            padding: "20px 0 42px",
          }}
          className="footer-grid"
        >
          <div
            style={{
              padding: "24px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <Image
                src="/images/logo-keter-marketing.png"
                alt="Keter Marketing"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <span style={{ color: "#F6F3EA", fontSize: "17px", fontWeight: 700, letterSpacing: "-0.03em" }}>
                Keter <span style={{ color: "#D4AF37" }}>Marketing</span>
              </span>
            </div>

            <p style={{ margin: "0 0 18px", color: "rgba(246,243,234,0.62)", fontSize: "14px", lineHeight: 1.75 }}>
              Sites web premium conçus pour clarifier votre offre, rassurer vite et pousser vers l’action.
            </p>

            <a
              href="mailto:contact.ketermarketing@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "#F6F3EA",
                textDecoration: "none",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              <Mail size={15} />
              contact.ketermarketing@gmail.com
            </a>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "rgba(246,243,234,0.62)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    padding: "10px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ margin: "0 0 14px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
              Navigation
            </p>
            <div style={{ display: "grid", gap: "10px" }}>
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none", color: "rgba(246,243,234,0.68)", fontSize: "14px" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ margin: "0 0 14px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
              Cadre
            </p>
            <div style={{ display: "grid", gap: "10px" }}>
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none", color: "rgba(246,243,234,0.68)", fontSize: "14px" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: "22px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p style={{ margin: "0 0 14px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
              Alignement Sher
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
              {sherStyleHighlights.map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", color: "rgba(246,243,234,0.62)", fontSize: "13px", lineHeight: 1.6 }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AF37", marginTop: "7px", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "18px 0 28px",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            color: "rgba(246,243,234,0.38)",
            fontSize: "12px",
          }}
        >
          <span>© {new Date().getFullYear()} Keter Marketing. Tous droits réservés.</span>
          <span>Structure. Images. Rythme. Conversion.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-top,
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer {
            padding: 24px 16px 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
