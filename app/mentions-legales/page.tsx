import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Keter Marketing",
  description: "Mentions légales, politique de confidentialité et informations sur les cookies du site Keter Marketing.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main style={{ background: "#0B0B0B", minHeight: "100vh", padding: "160px 32px 120px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37" }}>
            Légal
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.025em",
            marginBottom: "64px",
          }}
        >
          Mentions légales
        </h1>

        {[
          {
            title: "Éditeur du site",
            id: "editeur",
            content: (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                {[
                  ["Nom", "Keter Marketing"],
                  ["Forme juridique", "[À compléter : SAS / SARL / Auto-entrepreneur]"],
                  ["Adresse", "[À compléter]"],
                  ["SIRET", "[À compléter]"],
                  ["Email", "contact@ketermarketing.com"],
                  ["Directeurs de publication", "Dawes & Stevens — Co-fondateurs Keter Marketing"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{k}</span>
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>{v}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Hébergeur",
            id: "hebergeur",
            content: (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                {[
                  ["Nom", "Vercel Inc."],
                  ["Adresse", "340 Pine Street, Suite 1301 — San Francisco, CA 94104, États-Unis"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{k}</span>
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>{v}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Propriété intellectuelle",
            id: "propriete",
            content: (
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                L'ensemble du contenu de ce site (textes, visuels, structure) est la propriété
                exclusive de Keter Marketing. Toute reproduction sans autorisation écrite est interdite.
              </p>
            ),
          },
          {
            title: "Données personnelles",
            id: "confidentialite",
            content: (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px" }}>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
                  Les données collectées via le formulaire de contact sont utilisées uniquement pour
                  répondre à vos demandes. Elles ne sont jamais revendues ni transmises à des tiers.
                </p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
                  Conformément au RGPD (Règlement Général sur la Protection des Données), vous disposez
                  d'un droit d'accès, de rectification et de suppression de vos données personnelles.
                  Pour exercer ces droits, contactez-nous à :{" "}
                  <a href="mailto:contact@ketermarketing.com" style={{ color: "#D4AF37", textDecoration: "none" }}>
                    contact@ketermarketing.com
                  </a>
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", fontStyle: "italic", margin: 0 }}>
                  Base légale du traitement : exécution d'un contrat ou mesures précontractuelles (Art. 6.1.b du RGPD).
                  Durée de conservation : 3 ans à compter du dernier contact.
                </p>
              </div>
            ),
          },
          {
            title: "Cookies",
            id: "cookies",
            content: (
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: 0 }}>
                Ce site utilise des cookies de mesure d'audience (Google Analytics 4) pour améliorer
                votre expérience et analyser notre trafic. Vous pouvez les accepter ou les refuser
                via le bandeau de consentement affiché lors de votre première visite. Vous pouvez
                également les désactiver à tout moment dans les paramètres de votre navigateur.
              </p>
            ),
          },
        ].map((section, i) => (
          <section
            key={i}
            id={section.id}
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "40px",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#D4AF37",
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              {section.title}
            </h2>
            {section.content}
          </section>
        ))}
      </div>
    </main>
  );
}
