"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Notre Processus" },
  { href: "/gestion-de-site", label: "Gestion de site" },
  { href: "/seo-sem", label: "SEO & Google Ads" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 100,
          padding: scrolled ? "16px 0" : "22px 0",
          transition: "padding 220ms ease, background 220ms ease, border-color 220ms ease",
          background: scrolled ? "rgba(15,16,15,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <nav
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="logo-container"
          >
            <div className="logo-sweep" />
            <Image
              src="/images/logo-keter-marketing1.png"
              alt="Keter Marketing"
              width={40}
              height={40}
              priority
              style={{ objectFit: "contain" }}
            />

          </Link>

          <div className="nav-desktop" style={{ display: "flex", justifyContent: "center" }}>
            <ul
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                listStyle: "none",
                margin: 0,
                padding: "8px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center justify-center px-[14px] py-[10px] rounded-full text-[13px] tracking-[0.02em] transition-colors duration-200 ${
                        active
                          ? "bg-[#D4AF37] text-[#101010] font-bold hover:bg-white"
                          : "bg-transparent text-[#F6F3EA]/70 font-medium hover:bg-white hover:text-[#101010]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav-desktop" style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="/contact" className="btn-primary btn-shine">
              Démarrer un projet
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="no-shine nav-mobile-toggle"
            aria-label="Ouvrir le menu"
            style={{
              display: "none",
              justifySelf: "end",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              color: "#F6F3EA",
              cursor: "pointer",
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "420px",
              zIndex: 220,
              padding: "92px 24px 24px",
              background: "#111210",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              display: "grid",
              gridTemplateRows: "1fr auto",
              gap: "24px",
            }}
          >
            <nav>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
                {navLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "16px 18px",
                          borderRadius: "18px",
                          textDecoration: "none",
                          background: active ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.03)",
                          border: active ? "1px solid rgba(212,175,55,0.24)" : "1px solid rgba(255,255,255,0.06)",
                          color: "#F6F3EA",
                        }}
                      >
                        <span style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.03em" }}>{link.label}</span>
                        <ArrowRight size={16} color={active ? "#D4AF37" : "rgba(246,243,234,0.46)"} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div
              style={{
                padding: "20px",
                borderRadius: "22px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p style={{ margin: "0 0 16px", color: "rgba(246,243,234,0.58)", fontSize: "14px", lineHeight: 1.6 }}>
                Direction artistique, structure, copywriting et exécution. Un seul interlocuteur, un seul cap.
              </p>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary btn-shine"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Démarrer un projet
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <style>{`
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: transform 0.3s ease, filter 0.3s ease;
          overflow: hidden;
          padding: 4px 8px;
          margin-left: -8px;
          border-radius: 8px;
        }
        .logo-container:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px rgba(212,175,55,0.4));
        }
        .logo-sweep {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
          transform: skewX(-20deg);
          z-index: 10;
          pointer-events: none;
        }
        .logo-container:hover .logo-sweep {
          animation: sweep 1.5s ease-in-out;
        }
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @media (max-width: 920px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
          nav {
            grid-template-columns: auto 1fr auto !important;
          }
        }
        @media (max-width: 480px) {
          header nav {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </>
  );
}
