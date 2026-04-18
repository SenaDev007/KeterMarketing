"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Rocket, LayoutGrid, Target, RefreshCw, HelpCircle } from "lucide-react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ketermarketing";
const TOTAL_STEPS = 4;

type FormState = {
  need: string;
  horizon: string;
  fullName: string;
  email: string;
  activity: string;
  message: string;
  honeypot: string;
};

const needOptions = [
  { value: "one-page", label: "Site One-Page", desc: "Idéal pour les consultants, coachs et solopreneurs", icon: <Rocket size={22} strokeWidth={1.5} /> },
  { value: "multi-pages", label: "Site Multi-Pages", desc: "Pour les agences, PME et entreprises établies", icon: <LayoutGrid size={22} strokeWidth={1.5} />, popular: true },
  { value: "landing-page", label: "Landing Page", desc: "Optimisée pour un produit ou une offre précise", icon: <Target size={22} strokeWidth={1.5} /> },
  { value: "refonte", label: "Refonte Stratégique", desc: "Votre site existe mais ne convertit pas", icon: <RefreshCw size={22} strokeWidth={1.5} /> },
  { value: "unknown", label: "Je ne sais pas encore", desc: "On définit ça ensemble lors de l'appel", icon: <HelpCircle size={22} strokeWidth={1.5} /> },
];

const horizonOptions = [
  { value: "launch", label: "Je lance mon activité", desc: "J'ai besoin d'une présence en ligne dès maintenant" },
  { value: "accelerate", label: "Je veux accélérer", desc: "Mon activité tourne mais mon site ne génère pas de leads" },
  { value: "refonte", label: "Je veux refondre mon site", desc: "Mon site ne convertit pas ou ne me ressemble plus" },
  { value: "unknown", label: "Pas encore défini", desc: "Je veux d'abord discuter de mes options avec vous" },
];

const stepLabels = ["Type de projet", "Votre situation", "Qui êtes-vous ?", "Votre message"];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const inputStyle = (hasError?: boolean): React.CSSProperties => ({
  width: "100%", padding: "14px 18px", background: "#111111",
  border: `1px solid ${hasError ? "rgba(255,80,80,0.5)" : "#2A2A2A"}`,
  borderRadius: "6px", color: "#FFFFFF", fontSize: "15px", outline: "none",
  transition: "border-color 0.2s ease", fontFamily: "inherit", boxSizing: "border-box",
});

function StepProgress({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "50%",
              background: i + 1 < current ? "#D4AF37" : i + 1 === current ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.04)",
              border: `2px solid ${i + 1 <= current ? "#D4AF37" : "rgba(255,255,255,0.1)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "12px", fontWeight: 700,
              color: i + 1 < current ? "#0B0B0B" : i + 1 === current ? "#D4AF37" : "rgba(255,255,255,0.25)",
              transition: "all 0.3s ease",
            }}>
              {i + 1 < current ? <Check size={14} strokeWidth={2.5} /> : i + 1}
            </div>
            <span style={{ fontSize: "9px", color: i + 1 === current ? "#D4AF37" : "rgba(255,255,255,0.2)", marginTop: "6px", textAlign: "center", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>
              {stepLabels[i]}
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
        <motion.div
          style={{ height: "100%", background: "linear-gradient(90deg, #D4AF37, #E8C84A)", borderRadius: "2px", position: "absolute", left: 0, top: 0 }}
          animate={{ width: `${((current - 1) / (total - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
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
    need: "", horizon: "", fullName: "", email: "", activity: "", message: "", honeypot: "",
  });

  function navigate(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
    setErrors({});
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (step === 1 && !form.need) e.need = "Sélectionnez un type de projet";
    if (step === 2 && !form.horizon) e.horizon = "Sélectionnez votre situation";
    if (step === 3) {
      if (form.fullName.trim().length < 2) e.fullName = "Prénom et nom requis";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
      if (form.activity.trim().length < 3) e.activity = "Décrivez votre activité";
    }
    if (step === 4 && form.message.trim().length < 10) e.message = "Message trop court (min. 10 caractères)";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer ou écrire à contact@ketermarketing.com");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ background: "#0B0B0B", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 32px" }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ maxWidth: "560px", textAlign: "center" }}>
          <div style={{ width: "72px", height: "72px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
            <Check size={32} color="#D4AF37" strokeWidth={2} />
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>Message envoyé !</h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: "36px" }}>
            On vous répond sous <strong style={{ color: "rgba(255,255,255,0.75)" }}>24h ouvrées</strong>. Vous pouvez aussi réserver directement un créneau dans notre agenda.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#D4AF37", color: "#0B0B0B", padding: "16px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
            → Réserver 30 minutes <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ background: "#0B0B0B", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "120px 32px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37" }}>Démarrer un projet</span>
            <div style={{ width: "28px", height: "1px", background: "#D4AF37" }} />
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "20px" }}>
            Optimisez votre site pour{" "}
            <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C84A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              augmenter vos ventes.
            </span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "36px" }}>
            On prend des sites dépassés et on les transforme en sites qui…
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap" }}>
            {["Attirent plus de trafic depuis Google", "Convertissent plus de visiteurs en leads", "Font rayonner votre marque"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "20px", height: "20px", background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={10} color="#D4AF37" strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "0 32px 140px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <StepProgress current={step} total={TOTAL_STEPS} />

          <div style={{ marginTop: "52px", minHeight: "360px", overflow: "hidden", position: "relative" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={step} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.28, ease: "easeInOut" }}>

                {step === 1 && (
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Quel type de site vous faut-il ?</h2>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>Sélectionnez l'option qui correspond le mieux à votre besoin.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="options-grid">
                      {needOptions.map((opt) => (
                        <button key={opt.value} onClick={() => setForm(f => ({ ...f, need: opt.value }))} style={{
                          background: form.need === opt.value ? "rgba(212,175,55,0.08)" : "#111111",
                          border: `1.5px solid ${form.need === opt.value ? "#D4AF37" : "#2A2A2A"}`,
                          borderRadius: "8px", padding: "20px", cursor: "pointer", textAlign: "left",
                          transition: "all 0.2s", position: "relative", fontFamily: "inherit",
                        }}>
                          {(opt as any).popular && (
                            <span style={{ position: "absolute", top: "-10px", right: "14px", background: "#D4AF37", color: "#0B0B0B", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", padding: "3px 8px", borderRadius: "10px", textTransform: "uppercase" }}>
                              Populaire
                            </span>
                          )}
                          <div style={{ color: form.need === opt.value ? "#D4AF37" : "rgba(255,255,255,0.35)", marginBottom: "10px" }}>{opt.icon}</div>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: form.need === opt.value ? "#FFFFFF" : "rgba(255,255,255,0.7)", marginBottom: "4px" }}>{opt.label}</div>
                          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                    {errors.need && <p style={{ fontSize: "12px", color: "rgba(255,100,100,0.9)", marginTop: "10px" }}>{errors.need}</p>}
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Où en êtes-vous ?</h2>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>Décrivez votre situation pour qu'on puisse vous conseiller au mieux.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {horizonOptions.map((opt) => (
                        <button key={opt.value} onClick={() => setForm(f => ({ ...f, horizon: opt.value }))} style={{
                          background: form.horizon === opt.value ? "rgba(212,175,55,0.08)" : "#111111",
                          border: `1.5px solid ${form.horizon === opt.value ? "#D4AF37" : "#2A2A2A"}`,
                          borderRadius: "8px", padding: "18px 24px", cursor: "pointer", textAlign: "left",
                          display: "flex", alignItems: "center", gap: "16px", transition: "all 0.2s", fontFamily: "inherit",
                        }}>
                          <div style={{ width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0, border: `2px solid ${form.horizon === opt.value ? "#D4AF37" : "#2A2A2A"}`, background: form.horizon === opt.value ? "#D4AF37" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                            {form.horizon === opt.value && <Check size={10} color="#0B0B0B" strokeWidth={3} />}
                          </div>
                          <div>
                            <div style={{ fontSize: "15px", fontWeight: 600, color: form.horizon === opt.value ? "#FFFFFF" : "rgba(255,255,255,0.7)", marginBottom: "2px" }}>{opt.label}</div>
                            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{opt.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.horizon && <p style={{ fontSize: "12px", color: "rgba(255,100,100,0.9)", marginTop: "10px" }}>{errors.horizon}</p>}
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Parlez-nous de vous</h2>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>Ces informations nous permettent de préparer votre appel.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                        <div>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>Prénom & Nom *</label>
                          <input value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} placeholder="Votre nom complet" style={inputStyle(!!errors.fullName)}
                            onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = errors.fullName ? "rgba(255,80,80,0.5)" : "#2A2A2A")} />
                          {errors.fullName && <p style={{ fontSize: "12px", color: "rgba(255,100,100,0.9)", marginTop: "5px" }}>{errors.fullName}</p>}
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>Email *</label>
                          <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} type="email" placeholder="vous@exemple.com" style={inputStyle(!!errors.email)}
                            onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = errors.email ? "rgba(255,80,80,0.5)" : "#2A2A2A")} />
                          {errors.email && <p style={{ fontSize: "12px", color: "rgba(255,100,100,0.9)", marginTop: "5px" }}>{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>Votre activité en une phrase *</label>
                        <input value={form.activity} onChange={e => setForm(f => ({ ...f, activity: e.target.value }))} placeholder="Ex : Coach business pour entrepreneurs, agence de recrutement B2B…" style={inputStyle(!!errors.activity)}
                          onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = errors.activity ? "rgba(255,80,80,0.5)" : "#2A2A2A")} />
                        {errors.activity && <p style={{ fontSize: "12px", color: "rgba(255,100,100,0.9)", marginTop: "5px" }}>{errors.activity}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Dites-nous en plus</h2>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>Décrivez votre projet, vos objectifs, vos problèmes actuels. Plus vous êtes précis, plus notre appel sera utile.</p>
                    <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Mon site actuel ne génère aucun lead malgré 800 visites/mois. Je veux comprendre pourquoi et obtenir un site qui convertit…"
                      rows={8} style={{ ...inputStyle(!!errors.message), resize: "vertical", lineHeight: 1.6 }}
                      onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = errors.message ? "rgba(255,80,80,0.5)" : "#2A2A2A")} />
                    {errors.message && <p style={{ fontSize: "12px", color: "rgba(255,100,100,0.9)", marginTop: "5px" }}>{errors.message}</p>}
                    <input type="text" value={form.honeypot} onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))} style={{ display: "none" }} tabIndex={-1} aria-hidden="true" autoComplete="off" />
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: step === 1 ? "flex-end" : "space-between", alignItems: "center", marginTop: "36px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {step > 1 && (
              <button onClick={() => navigate(step - 1)} style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)", padding: "12px 20px", borderRadius: "4px", cursor: "pointer", fontSize: "13px", fontWeight: 600, transition: "all 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                <ArrowLeft size={15} /> Retour
              </button>
            )}
            {step < TOTAL_STEPS ? (
              <button onClick={() => { if (validate()) navigate(step + 1); }} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#0B0B0B", padding: "14px 28px", borderRadius: "4px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", transition: "background 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#E8C84A")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#D4AF37")}>
                Continuer <ArrowRight size={15} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={sending} style={{ display: "flex", alignItems: "center", gap: "8px", background: sending ? "rgba(212,175,55,0.5)" : "#D4AF37", color: "#0B0B0B", padding: "14px 28px", borderRadius: "4px", border: "none", cursor: sending ? "not-allowed" : "pointer", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", transition: "background 0.2s", fontFamily: "inherit" }}>
                {sending ? "Envoi en cours…" : <>→ Envoyer ma demande <ArrowRight size={15} /></>}
              </button>
            )}
          </div>
          <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.2)", marginTop: "16px", fontStyle: "italic" }}>
            Sans engagement — Réponse sous 24h ouvrées
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 580px) {
          .options-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
