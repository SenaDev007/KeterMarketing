"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, border-color 0.3s ease, padding 0.3s ease",
          background: scrolled
            ? "rgba(11, 11, 11, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212, 175, 55, 0.15)"
            : "1px solid transparent",
          padding: scrolled ? "16px 0" : "24px 0",
        }}
      >
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ opacity: 0.85 }}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <Image
                src="/images/logo-keter-marketing.png"
                alt="Keter Marketing"
                width={36}
                height={36}
                priority
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ color: "#D4AF37" }}>ETER</span>
                <span style={{ color: "#FFFFFF" }}> MARKETING</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: pathname === link.href ? "#D4AF37" : "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: pathname === link.href ? 600 : 400,
                    letterSpacing: "0.02em",
                    transition: "color 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      pathname === link.href ? "#D4AF37" : "rgba(255,255,255,0.7)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden-mobile">
            <Link href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "11px 22px" }}>
              Réserver un appel
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              padding: "8px",
              display: "none",
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "400px",
              background: "#0B0B0B",
              borderLeft: "1px solid rgba(212,175,55,0.2)",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              padding: "80px 40px 40px",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                color: "#FFFFFF",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              <X size={24} />
            </button>

            <nav style={{ flex: 1 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      padding: "20px 0",
                    }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        color: pathname === link.href ? "#D4AF37" : "#FFFFFF",
                        textDecoration: "none",
                        fontSize: "22px",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <Link href="/contact" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
              Réserver un appel <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
