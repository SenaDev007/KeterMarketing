"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Mail, Clock, Shield, MessageSquare, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const schema = z.object({
  fullName: z.string().min(2, "Prénom et nom requis"),
  email: z.string().email("Email invalide"),
  activity: z.string().min(3, "Décrivez votre activité"),
  need: z.string().min(1, "Sélectionnez votre besoin"),
  horizon: z.string().min(1, "Sélectionnez votre horizon"),
  message: z.string().min(10, "Message trop court (min. 10 caractères)"),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const reassurances = [
  { icon: <Clock size={18} strokeWidth={1.5} />, text: "Réponse garantie sous 24h ouvrées" },
  { icon: <Shield size={18} strokeWidth={1.5} />, text: "Appel de diagnostic 100% gratuit" },
  { icon: <MessageSquare size={18} strokeWidth={1.5} />, text: "Aucun engagement après l'appel" },
  { icon: <CheckCircle size={18} strokeWidth={1.5} />, text: "On vous dit honnêtement si on peut vous aider" },
];

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ketermarketing";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: FormData) {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSubmitted(true);
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer ou nous écrire directement à contact@ketermarketing.com");
    } finally {
      setSending(false);
    }
  }

  const inputStyle = (hasError?: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "14px 18px",
    background: "#111111",
    border: `1px solid ${hasError ? "rgba(255,80,80,0.5)" : "#2A2A2A"}`,
    borderRadius: "6px",
    color: "#FFFFFF",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    marginBottom: "8px",
  };

  const errorStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "rgba(255,100,100,0.9)",
    marginTop: "6px",
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#0B0B0B",
          padding: "160px 32px 80px",
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
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span className="section-label">Prenons contact</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                maxWidth: "600px",
              }}
            >
              Parlons de{" "}
              <span style={{ color: "#D4AF37" }}>votre projet.</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                maxWidth: "520px",
              }}
            >
              Un appel de 30 minutes suffit pour savoir si on peut vous aider —
              et comment. C'est gratuit, sans engagement, et 100% utile même si
              on ne travaille pas ensemble.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "#0B0B0B", padding: "40px 32px 120px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Left */}
          <div style={{ position: "sticky", top: "120px" }}>
            <ScrollReveal>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "40px" }}>
                On répond à tous les messages sous 24h ouvrées. Si vous préférez
                choisir directement un créneau dans notre agenda, le lien
                Calendly est juste en dessous.
              </p>

              {/* Calendly CTA */}
              <div
                style={{
                  padding: "24px",
                  background: "rgba(212,175,55,0.05)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "8px",
                  marginBottom: "40px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <Calendar size={20} color="#D4AF37" strokeWidth={1.5} />
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#FFFFFF" }}>
                    Vous préférez choisir un créneau ?
                  </span>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "16px", lineHeight: 1.6 }}>
                  Réservez directement 30 minutes dans notre agenda.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "13px", padding: "12px 20px", width: "100%", justifyContent: "center" }}
                >
                  → Réserver 30 minutes dans notre agenda
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Contact email */}
              <a
                href="mailto:contact@ketermarketing.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  fontSize: "14px",
                  marginBottom: "40px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D4AF37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                <Mail size={16} />
                contact@ketermarketing.com
              </a>

              {/* Reassurances */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {reassurances.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.38)" }}>
                    <span style={{ color: "#D4AF37", flexShrink: 0 }}>{r.icon}</span>
                    {r.text}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "12px",
                  padding: "64px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <CheckCircle size={28} color="#D4AF37" strokeWidth={1.5} />
                </div>
                <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
                  Message envoyé !
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px" }}>
                  On vous répond sous 24h ouvrées. Vous pouvez aussi réserver
                  directement un créneau dans notre agenda.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    background: "#D4AF37",
                    color: "#0B0B0B",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  → Réserver 30 minutes
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  background: "#111111",
                  border: "1px solid #2A2A2A",
                  borderRadius: "12px",
                  padding: "clamp(32px, 5vw, 52px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Honeypot */}
                <input
                  {...register("honeypot")}
                  type="text"
                  autoComplete="off"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                />

                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Prénom & Nom *</label>
                    <input
                      {...register("fullName")}
                      type="text"
                      placeholder="Votre nom complet"
                      style={inputStyle(!!errors.fullName)}
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = errors.fullName ? "rgba(255,80,80,0.5)" : "#2A2A2A")}
                    />
                    {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email professionnel *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="vous@exemple.com"
                      style={inputStyle(!!errors.email)}
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? "rgba(255,80,80,0.5)" : "#2A2A2A")}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>
                </div>

                {/* Activity */}
                <div>
                  <label style={labelStyle}>Votre activité en une phrase *</label>
                  <input
                    {...register("activity")}
                    type="text"
                    placeholder="Ex : Coach business pour entrepreneurs, agence de recrutement B2B..."
                    style={inputStyle(!!errors.activity)}
                    onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                    onBlur={(e) => (e.target.style.borderColor = errors.activity ? "rgba(255,80,80,0.5)" : "#2A2A2A")}
                  />
                  {errors.activity && <p style={errorStyle}>{errors.activity.message}</p>}
                </div>

                {/* Need + Horizon */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row">
                  <div>
                    <label style={labelStyle}>Quel est votre besoin principal ? *</label>
                    <select
                      {...register("need")}
                      style={{ ...inputStyle(!!errors.need), cursor: "pointer" }}
                      defaultValue=""
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = errors.need ? "rgba(255,80,80,0.5)" : "#2A2A2A")}
                    >
                      <option value="" disabled>Choisissez...</option>
                      <option value="one-page">Site one-page</option>
                      <option value="multi-pages">Site multi-pages</option>
                      <option value="landing-page">Landing page</option>
                      <option value="refonte">Refonte</option>
                      <option value="unknown">Je ne sais pas encore</option>
                    </select>
                    {errors.need && <p style={errorStyle}>{errors.need.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Votre horizon de projet *</label>
                    <select
                      {...register("horizon")}
                      style={{ ...inputStyle(!!errors.horizon), cursor: "pointer" }}
                      defaultValue=""
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = errors.horizon ? "rgba(255,80,80,0.5)" : "#2A2A2A")}
                    >
                      <option value="" disabled>Choisissez...</option>
                      <option value="launch">Je démarre</option>
                      <option value="accelerate">Je veux accélérer</option>
                      <option value="refonte">Je veux refontre</option>
                      <option value="unknown">Je ne sais pas encore</option>
                    </select>
                    {errors.horizon && <p style={errorStyle}>{errors.horizon.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Votre message *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Dites-nous en plus sur votre projet, vos objectifs, vos problèmes actuels..."
                    style={{
                      ...inputStyle(!!errors.message),
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? "rgba(255,80,80,0.5)" : "#2A2A2A")}
                  />
                  {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "16px 32px",
                    background: sending ? "rgba(212,175,55,0.5)" : "#D4AF37",
                    color: "#0B0B0B",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                    border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    transition: "all 0.25s ease",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) (e.currentTarget as HTMLElement).style.background = "#E8C84A";
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) (e.currentTarget as HTMLElement).style.background = "#D4AF37";
                  }}
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{ width: "16px", height: "16px", border: "2px solid #0B0B0B", borderTopColor: "transparent", borderRadius: "50%" }}
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      → Envoyer ma demande
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textAlign: "center", margin: 0 }}>
                  Vos données ne sont jamais revendues. Réponse sous 24h ouvrées.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-layout > div:first-child { position: static !important; }
        }
        @media (max-width: 580px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
