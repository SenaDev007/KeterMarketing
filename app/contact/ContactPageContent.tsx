"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock, Phone, Shield } from "lucide-react";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ketermarketing";

const TOTAL_STEPS = 3;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
  websiteProblem: string;
  monthlyRevenue: string;
  message: string;
  honeypot: string;
};

const websiteProblemOptions = [
  { value: "ugly", label: "Il est peu attrayant ou peu professionnel" },
  { value: "low-conversion", label: "Le taux de conversion est trop faible" },
  { value: "low-traffic", label: "Le trafic organique est insuffisant" },
  { value: "no-website", label: "Je n'ai pas encore de site web" },
  { value: "technical", label: "Le site a des problèmes techniques" },
];

const monthlyRevenueOptions = [
  { value: "under-5k", label: "Moins de 5 000 EUR par mois" },
  { value: "5k-15k", label: "5 000 à 15 000 EUR par mois" },
  { value: "15k-30k", label: "15 000 à 30 000 EUR par mois" },
  { value: "30k-60k", label: "30 000 à 60 000 EUR par mois" },
  { value: "60k+", label: "Plus de 60 000 EUR par mois" },
];

const stepLabels = ["Contact", "Votre site", "Votre activité"];

const inputStyle = (hasError?: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "13px 16px",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${hasError ? "rgba(255,80,80,0.55)" : "rgba(255,255,255,0.1)"}`,
  borderRadius: "8px",
  color: "#FFFFFF",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.2s ease",
  fontFamily: "inherit",
  boxSizing: "border-box",
});

const bubbleStyle = (selected: boolean): React.CSSProperties => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "15px 18px",
  background: selected ? "rgba(212,175,55,0.1)" : "rgba(255,255,255,0.03)",
  border: `1.5px solid ${selected ? "#D4AF37" : "rgba(255,255,255,0.1)"}`,
  borderRadius: "10px",
  cursor: "pointer",
  textAlign: "left",
  transition: "all 0.2s ease",
  color: selected ? "#FFFFFF" : "rgba(255,255,255,0.68)",
  fontSize: "15px",
  fontWeight: selected ? 600 : 400,
  fontFamily: "inherit",
});

function StepProgress({ current }: { current: number }) {
  return (
    <div style={{ marginBottom: "34px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const done = stepNumber < current;
          const active = stepNumber === current;

          return (
            <div key={label} style={{ display: "flex", alignItems: "center", flex: index < 2 ? 1 : "none" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: done ? "#D4AF37" : active ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.04)",
                    border: `2px solid ${done || active ? "#D4AF37" : "rgba(255,255,255,0.1)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: done ? "#0B0B0B" : active ? "#D4AF37" : "rgba(255,255,255,0.25)",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  {done ? <Check size={13} strokeWidth={2.5} /> : stepNumber}
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: active ? "#D4AF37" : "rgba(255,255,255,0.24)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
              </div>
              {index < 2 && (
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: done ? "#D4AF37" : "rgba(255,255,255,0.08)",
                    margin: "0 8px",
                    marginBottom: "22px",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
        <motion.div
          style={{ height: "100%", background: "linear-gradient(90deg, #D4AF37, #E8C84A)" }}
          animate={{ width: `${((current - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default function ContactPageContent() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
    websiteProblem: "",
    monthlyRevenue: "",
    message: "",
    honeypot: "",
  });

  function navigate(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
    setErrors({});
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (step === 1) {
      if (form.firstName.trim().length < 2) nextErrors.firstName = "Prénom requis";
      if (form.lastName.trim().length < 2) nextErrors.lastName = "Nom requis";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Email invalide";
      if (form.phone.trim().length < 6) nextErrors.phone = "Numéro requis";
      if (!form.consent) nextErrors.consent = "Vous devez accepter pour continuer";
    }

    if (step === 2 && !form.websiteProblem) nextErrors.websiteProblem = "Sélectionnez une option";
    if (step === 3 && !form.monthlyRevenue) nextErrors.monthlyRevenue = "Sélectionnez une option";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("submit_failed");
      setSubmitted(true);
    } catch {
      window.alert(
        "Une erreur est survenue. Veuillez réessayer ou écrire à contact.ketermarketing@gmail.com."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ background: "#0B0B0B", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px" }}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ maxWidth: "560px", textAlign: "center" }}>
          <div style={{ width: "72px", height: "72px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Check size={32} color="#D4AF37" strokeWidth={2} />
          </div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "14px" }}>
            Demande reçue
          </p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px" }}>
            Merci d&apos;avoir pris le temps de compléter ce formulaire.
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.46)", lineHeight: 1.75, marginBottom: "34px" }}>
            Notre équipe vous contacte sous <strong style={{ color: "rgba(255,255,255,0.8)" }}>24 heures ouvrées</strong>.
            Vous pouvez aussi réserver directement un créneau dans notre agenda.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#D4AF37", color: "#0B0B0B", padding: "16px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}
          >
            Réserver 30 minutes
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ background: "#0B0B0B", minHeight: "100vh" }}>
      <section className="contact-page-section" style={{ padding: "120px 32px 80px" }}>
        <div className="contact-page-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "120px" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37" }}>
                  Démarrer un projet
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "20px" }}>
                Optimisez votre site pour{" "}
                <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C84A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  augmenter vos ventes.
                </span>
              </h1>

              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "36px" }}>
                Réservez un appel découverte avec notre équipe pour discuter de votre projet et voir si nous pouvons vous aider.
                Nous vous donnerons un cap clair et un devis adapté à votre situation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
                {[
                  "Attirer plus de trafic depuis Google",
                  "Convertir davantage de visiteurs en clients",
                  "Renforcer l'image de votre marque",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "22px", height: "22px", background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={11} color="#D4AF37" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.68)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "24px 28px", background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "10px", marginBottom: "28px" }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg key={index} width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 14px", fontStyle: "italic" }}>
                  &ldquo;Keter Marketing a considérablement amélioré les performances de notre site et nous a aidés à mieux répondre aux besoins de nos clients.&rdquo;
                </p>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Paul Connolly</p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.32)", margin: "2px 0 0" }}>Water to Go</p>
              </div>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {[
                  { icon: <Clock size={14} />, text: "30 min gratuit" },
                  { icon: <Shield size={14} />, text: "Sans engagement" },
                  { icon: <Phone size={14} />, text: "Réponse sous 24h" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.34)", fontSize: "12px" }}>
                    <span style={{ color: "#D4AF37" }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="contact-card" style={{ background: "#0E0E0E", border: "1px solid rgba(212,175,55,0.18)", borderRadius: "14px", padding: "40px 36px" }}>
              <StepProgress current={step} />

              <div style={{ minHeight: "380px", overflow: "hidden", position: "relative" }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    initial={{ x: direction > 0 ? 48 : -48, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -48 : 48, opacity: 0 }}
                    transition={{ duration: 0.26, ease: "easeInOut" }}
                  >
                    {step === 1 && (
                      <div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                          Vos informations
                        </h2>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "28px" }}>
                          Ces informations nous permettent de préparer votre appel.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                          <div className="name-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                            <div>
                              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "7px" }}>
                                Prénom *
                              </label>
                              <input value={form.firstName} onChange={(e) => setForm((current) => ({ ...current, firstName: e.target.value }))} placeholder="Votre prénom" style={inputStyle(Boolean(errors.firstName))} />
                              {errors.firstName && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "4px" }}>{errors.firstName}</p>}
                            </div>
                            <div>
                              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "7px" }}>
                                Nom *
                              </label>
                              <input value={form.lastName} onChange={(e) => setForm((current) => ({ ...current, lastName: e.target.value }))} placeholder="Votre nom" style={inputStyle(Boolean(errors.lastName))} />
                              {errors.lastName && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "4px" }}>{errors.lastName}</p>}
                            </div>
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "7px" }}>
                              Email professionnel *
                            </label>
                            <input value={form.email} onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))} type="email" placeholder="vous@entreprise.com" style={inputStyle(Boolean(errors.email))} />
                            {errors.email && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "4px" }}>{errors.email}</p>}
                          </div>

                          <div>
                            <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "7px" }}>
                              Téléphone *
                            </label>
                            <input value={form.phone} onChange={(e) => setForm((current) => ({ ...current, phone: e.target.value }))} type="tel" placeholder="+33 6 00 00 00 00" style={inputStyle(Boolean(errors.phone))} />
                            {errors.phone && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "4px" }}>{errors.phone}</p>}
                          </div>

                          <div>
                            <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                              <div
                                onClick={() => setForm((current) => ({ ...current, consent: !current.consent }))}
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  flexShrink: 0,
                                  border: `1.5px solid ${errors.consent ? "rgba(255,80,80,0.55)" : form.consent ? "#D4AF37" : "rgba(255,255,255,0.2)"}`,
                                  borderRadius: "4px",
                                  background: form.consent ? "#D4AF37" : "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginTop: "1px",
                                }}
                              >
                                {form.consent && <Check size={10} color="#0B0B0B" strokeWidth={3} />}
                              </div>
                              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
                                En cochant cette case, j&apos;accepte de recevoir des communications de Keter Marketing.
                                Vous pouvez vous désabonner à tout moment.
                              </span>
                            </label>
                            {errors.consent && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "6px" }}>{errors.consent}</p>}
                          </div>
                        </div>

                        <input
                          type="text"
                          value={form.honeypot}
                          onChange={(e) => setForm((current) => ({ ...current, honeypot: e.target.value }))}
                          style={{ display: "none" }}
                          tabIndex={-1}
                          aria-hidden="true"
                          autoComplete="off"
                        />
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                          Quel est le principal problème avec votre site actuellement ?
                        </h2>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "24px" }}>
                          Sélectionnez l&apos;option qui vous correspond le mieux.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {websiteProblemOptions.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => setForm((current) => ({ ...current, websiteProblem: option.value }))}
                              style={bubbleStyle(form.websiteProblem === option.value)}
                            >
                              <div
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "50%",
                                  flexShrink: 0,
                                  border: `2px solid ${form.websiteProblem === option.value ? "#D4AF37" : "rgba(255,255,255,0.2)"}`,
                                  background: form.websiteProblem === option.value ? "#D4AF37" : "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {form.websiteProblem === option.value && <Check size={9} color="#0B0B0B" strokeWidth={3} />}
                              </div>
                              {option.label}
                            </button>
                          ))}
                        </div>
                        {errors.websiteProblem && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "10px" }}>{errors.websiteProblem}</p>}
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
                          Quel est votre chiffre d&apos;affaires mensuel approximatif ?
                        </h2>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "24px" }}>
                          Ces informations restent strictement confidentielles.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {monthlyRevenueOptions.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => setForm((current) => ({ ...current, monthlyRevenue: option.value }))}
                              style={bubbleStyle(form.monthlyRevenue === option.value)}
                            >
                              <div
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "50%",
                                  flexShrink: 0,
                                  border: `2px solid ${form.monthlyRevenue === option.value ? "#D4AF37" : "rgba(255,255,255,0.2)"}`,
                                  background: form.monthlyRevenue === option.value ? "#D4AF37" : "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {form.monthlyRevenue === option.value && <Check size={9} color="#0B0B0B" strokeWidth={3} />}
                              </div>
                              {option.label}
                            </button>
                          ))}
                        </div>
                        {errors.monthlyRevenue && <p style={{ fontSize: "11px", color: "rgba(255,100,100,0.9)", marginTop: "10px" }}>{errors.monthlyRevenue}</p>}

                        <div style={{ marginTop: "28px" }}>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "7px" }}>
                            Message <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "rgba(255,255,255,0.2)" }}>(optionnel)</span>
                          </label>
                          <textarea
                            value={form.message}
                            onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                            placeholder="Décrivez votre projet, vos objectifs ou toute information utile."
                            rows={4}
                            style={{ ...inputStyle(), resize: "vertical", minHeight: "100px", lineHeight: 1.6 }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div style={{ display: "flex", justifyContent: step === 1 ? "flex-end" : "space-between", alignItems: "center", marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {step > 1 && (
                  <button
                    onClick={() => navigate(step - 1)}
                    style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)", padding: "11px 18px", borderRadius: "4px", cursor: "pointer", fontSize: "13px", fontWeight: 600, fontFamily: "inherit" }}
                  >
                    <ArrowLeft size={14} />
                    Retour
                  </button>
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    onClick={() => {
                      if (validate()) navigate(step + 1);
                    }}
                    style={{ display: "flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#0B0B0B", padding: "13px 26px", borderRadius: "4px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "inherit" }}
                  >
                    Suivant
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    style={{ display: "flex", alignItems: "center", gap: "8px", background: sending ? "rgba(212,175,55,0.5)" : "#D4AF37", color: "#0B0B0B", padding: "13px 26px", borderRadius: "4px", border: "none", cursor: sending ? "not-allowed" : "pointer", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "inherit" }}
                  >
                    {sending ? "Envoi..." : "Envoyer la demande"}
                    {!sending && <ArrowRight size={14} />}
                  </button>
                )}
              </div>

              <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.18)", marginTop: "14px", fontStyle: "italic" }}>
                Sans engagement - Réponse sous 24 heures ouvrées
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-page-section { padding: 100px 24px 64px !important; }
          .contact-page-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-page-grid > div:first-child { position: static !important; }
        }
        @media (max-width: 480px) {
          .contact-page-section { padding: 80px 16px 48px !important; }
          .contact-card { padding: 28px 20px !important; }
          .name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
