"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("keter_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("keter_cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("keter_cookie_consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 500,
            width: "calc(100% - 48px)",
            maxWidth: "720px",
            background: "#141414",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "10px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
              margin: 0,
              flex: 1,
              minWidth: "200px",
            }}
          >
            Ce site utilise des cookies de mesure d'audience pour améliorer votre expérience.{" "}
            <Link href="/mentions-legales#cookies" style={{ color: "#D4AF37", textDecoration: "underline" }}>
              En savoir plus
            </Link>
          </p>
          <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={decline}
              style={{
                padding: "8px 16px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
                color: "rgba(255,255,255,0.45)",
                fontSize: "12px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
              }}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              style={{
                padding: "8px 20px",
                background: "#D4AF37",
                border: "1px solid #D4AF37",
                borderRadius: "4px",
                color: "#0B0B0B",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E8C84A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4AF37";
              }}
            >
              Accepter
            </button>
          </div>
          <button
            onClick={decline}
            aria-label="Fermer"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.3)",
              cursor: "pointer",
              padding: "4px",
              lineHeight: 1,
            }}
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
