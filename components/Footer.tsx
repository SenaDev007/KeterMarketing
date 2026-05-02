"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";


const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/keter-marketing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    )
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com/ketermarketing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    )
  },
  { 
    name: "X", 
    href: "https://x.com/ketermarketing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )
  },
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

            <h2 style={{ margin: "0 0 8px", color: "#F6F3EA", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
              Un site plus net, plus crédible, plus désirable.
            </h2>
            <p style={{ margin: 0, color: "rgba(246,243,234,0.64)", fontSize: "15px", lineHeight: 1.7, maxWidth: "58ch" }}>
              Même exigence que sur les meilleures agences: meilleure narration, meilleures images, meilleure fluidité.
            </p>
          </div>
          <Link href="/contact" className="btn-primary btn-shine">
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
                src="/images/logo-keter-marketing1.png"
                alt="Keter Marketing"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />

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

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  style={{
                    textDecoration: "none",
                    color: "rgba(246,243,234,0.62)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#D4AF37";
                    el.style.color = "#D4AF37";
                    el.style.background = "rgba(212,175,55,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(246,243,234,0.62)";
                    el.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {social.icon}
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
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="footer-link"
                  style={{ textDecoration: "none", color: "rgba(246,243,234,0.68)", fontSize: "14px", transition: "color 0.2s ease" }}
                >
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
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="footer-link"
                  style={{ textDecoration: "none", color: "rgba(246,243,234,0.68)", fontSize: "14px", transition: "color 0.2s ease" }}
                >
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
              Nos engagements
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
              {[
                "Livraison dans les délais annoncés",
                "Copywriting intégral inclus",
                "Support 30 jours post-livraison",
                "Un seul interlocuteur, de A à Z",
              ].map((item) => (
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
        .footer-link:hover {
          color: #D4AF37 !important;
        }
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
