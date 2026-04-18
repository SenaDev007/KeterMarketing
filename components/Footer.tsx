"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/ketermarketing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ketermarketing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/ketermarketing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const footerLinks = {
  Navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  Légal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/mentions-legales#confidentialite" },
    { label: "Cookies", href: "/mentions-legales#cookies" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0B0B0B",
        borderTop: "1px solid rgba(212,175,55,0.15)",
        paddingTop: "80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        {/* Top CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #E8C84A 100%)",
            borderRadius: "12px",
            padding: "48px 56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(11,11,11,0.6)",
                marginBottom: "8px",
              }}
            >
              Prêt à convertir ?
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#0B0B0B",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Votre site doit travailler pour vous.
              <br />
              Pas contre vous.
            </h3>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0B0B0B",
              color: "#FFFFFF",
              padding: "16px 32px",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.25s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1A1A1A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0B0B0B";
            }}
          >
            Réserver mon appel gratuit
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "64px",
            paddingBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  background: "#D4AF37",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                }}
              >
                KETER<span style={{ color: "#D4AF37" }}> MARKETING</span>
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                lineHeight: 1.7,
                maxWidth: "320px",
                marginBottom: "32px",
              }}
            >
              On transforme vos visiteurs en clients. À chaque fois. Sites web
              premium conçus pour générer des leads qualifiés.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <a
                href="mailto:contact@ketermarketing.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  fontSize: "13px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.5)")
                }
              >
                <Mail size={15} />
                contact@ketermarketing.com
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#D4AF37";
                    el.style.color = "#D4AF37";
                    el.style.background = "rgba(212,175,55,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.background = "transparent";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  marginBottom: "24px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#FFFFFF")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.45)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "13px",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Keter Marketing. Tous droits réservés.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "12px",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Chaque pixel. Chaque mot. Chaque interaction.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid > div:first-child > div:first-child + p {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
