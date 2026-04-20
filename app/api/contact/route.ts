import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://ketermarketing.com");
const LOGO_URL = `${SITE_URL}/images/logo-keter-marketing.png`;

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contact.ketermarketing@gmail.com";
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "noreply@academiahelm.com";

  try {
    const body = await req.json();
    const {
      firstName, lastName, email, phone,
      consent, websiteProblem, monthlyRevenue,
      message, honeypot,
    } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !lastName || !email || !phone || !websiteProblem || !monthlyRevenue) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: "Consentement requis" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const websiteProblemLabels: Record<string, string> = {
      "ugly":           "Site peu professionnel / vieillissant",
      "low-conversion": "Visiteurs mais pas de leads",
      "low-traffic":    "Pas assez de trafic",
      "no-website":     "Pas encore de site",
      "technical":      "Problèmes techniques / lenteur",
    };

    const monthlyRevenueLabels: Record<string, string> = {
      "under-5k": "Moins de 5 000 €/mois",
      "5k-15k":   "5 000 € – 15 000 €/mois",
      "15k-30k":  "15 000 € – 30 000 €/mois",
      "30k-60k":  "30 000 € – 60 000 €/mois",
      "60k+":     "Plus de 60 000 €/mois",
    };

    const fullName = `${firstName} ${lastName}`;
    const problemLabel = websiteProblemLabels[websiteProblem] ?? websiteProblem;
    const revenueLabel = monthlyRevenueLabels[monthlyRevenue] ?? monthlyRevenue;

    const emailSubject = encodeURIComponent(`Suite à votre demande — Keter Marketing`);
    const emailBody = encodeURIComponent(
      `Bonjour ${firstName},\n\nMerci pour votre demande. J'ai bien pris note de votre situation et je souhaite vous proposer...\n\nCordialement,\nKeter Marketing`
    );
    const replyHref = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
    const callHref = `tel:${phone.replace(/\s/g, "")}`;

    const tableRow = (label: string, value: string) => `
      <tr>
        <td style="padding:12px 16px;background:#161616;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(212,175,55,0.7);width:160px;border-bottom:1px solid #222;">${label}</td>
        <td style="padding:12px 16px;background:#111111;font-size:15px;color:#FFFFFF;border-bottom:1px solid #222;">${value}</td>
      </tr>`;

    // ── Notification email to Keter ──────────────────────────────────────
    await resend.emails.send({
      from: `Keter Marketing <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `🔔 Nouvelle demande — ${fullName}`,
      html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0B0B0B;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:620px;margin:0 auto;padding:32px 16px;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#111111 0%,#181408 100%);border:1px solid rgba(212,175,55,0.25);border-radius:12px 12px 0 0;padding:32px 36px;text-align:center;">
      <img src="${LOGO_URL}" alt="Keter Marketing" width="160" style="display:block;margin:0 auto 20px;max-width:160px;" />
      <div style="display:inline-block;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.3);border-radius:100px;padding:6px 18px;margin-bottom:16px;">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#D4AF37;">Nouvelle demande</span>
      </div>
      <h1 style="margin:0;font-size:24px;font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;">${fullName}</h1>
      <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.4);">vient de soumettre le formulaire de contact</p>
    </div>

    <!-- Fiche client -->
    <div style="background:#0E0E0E;border:1px solid #222;border-top:none;">
      <div style="padding:20px 36px 8px;">
        <p style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(212,175,55,0.5);margin:0 0 12px;">Fiche contact</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${tableRow("Prénom", firstName)}
        ${tableRow("Nom", lastName)}
        ${tableRow("Email", `<a href="mailto:${email}" style="color:#D4AF37;text-decoration:none;">${email}</a>`)}
        ${tableRow("Téléphone", `<a href="${callHref}" style="color:#D4AF37;text-decoration:none;">${phone}</a>`)}
        ${tableRow("Problème site", problemLabel)}
        ${tableRow("CA mensuel", revenueLabel)}
      </table>
    </div>

    ${message ? `
    <!-- Message -->
    <div style="background:#0E0E0E;border:1px solid #222;border-top:none;padding:20px 36px;">
      <p style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(212,175,55,0.5);margin:0 0 12px;">Message du client</p>
      <div style="background:#161616;border-left:3px solid #D4AF37;border-radius:0 6px 6px 0;padding:16px 20px;">
        <p style="font-size:15px;color:rgba(255,255,255,0.75);line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
      </div>
    </div>
    ` : ""}

    <!-- Actions -->
    <div style="background:#131208;border:1px solid rgba(212,175,55,0.2);border-top:3px solid #D4AF37;border-radius:0 0 12px 12px;padding:28px 36px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(212,175,55,0.6);margin:0 0 16px;text-align:center;">Actions rapides</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="${replyHref}" style="display:inline-flex;align-items:center;gap:8px;background:#D4AF37;color:#0B0B0B;padding:13px 24px;border-radius:6px;font-weight:700;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;">
          ✉ Répondre à ${firstName}
        </a>
        <a href="${callHref}" style="display:inline-flex;align-items:center;gap:8px;background:transparent;color:#D4AF37;padding:13px 24px;border-radius:6px;font-weight:700;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border:1.5px solid rgba(212,175,55,0.4);">
          📞 Appeler ${firstName}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <p style="text-align:center;font-size:12px;color:rgba(255,255,255,0.18);margin-top:24px;">
      Keter Marketing · <a href="mailto:${CONTACT_EMAIL}" style="color:rgba(212,175,55,0.4);text-decoration:none;">${CONTACT_EMAIL}</a>
    </p>

  </div>
</body>
</html>`,
    });

    // ── Auto-reply to the prospect ───────────────────────────────────────
    await resend.emails.send({
      from: `Keter Marketing <${FROM_EMAIL}>`,
      to: [email],
      subject: `Votre demande a bien été reçue — Keter Marketing`,
      html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F4F4F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">

    <!-- Header -->
    <div style="background:#0B0B0B;border-radius:10px 10px 0 0;padding:32px 36px;text-align:center;">
      <img src="${LOGO_URL}" alt="Keter Marketing" width="140" style="display:block;margin:0 auto 16px;max-width:140px;" />
      <p style="color:rgba(255,255,255,0.4);font-size:13px;margin:0;font-style:italic;">Nous concevons des sites web qui génèrent des clients.</p>
    </div>

    <!-- Body -->
    <div style="background:#FFFFFF;padding:36px;border-radius:0 0 10px 10px;border:1px solid #E8E8E8;border-top:none;">
      <p style="font-size:18px;font-weight:700;color:#111111;margin:0 0 16px;">Bonjour ${firstName} 👋</p>
      <p style="font-size:15px;color:#4A4A4A;line-height:1.75;margin:0 0 12px;">
        Votre demande a bien été reçue. Notre équipe l'examine et vous répond sous <strong style="color:#0B0B0B;">24h ouvrées</strong>.
      </p>
      <p style="font-size:15px;color:#4A4A4A;line-height:1.75;margin:0 0 28px;">
        Si vous souhaitez aller plus vite, réservez directement un créneau de 30 minutes dans notre agenda — c'est gratuit et sans engagement.
      </p>
      <div style="text-align:center;margin-bottom:28px;">
        <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ketermarketing"}" style="display:inline-block;padding:15px 36px;background:#D4AF37;color:#0B0B0B;font-weight:700;font-size:13px;text-decoration:none;border-radius:6px;letter-spacing:0.08em;text-transform:uppercase;">
          → Réserver mon créneau gratuit
        </a>
      </div>
      <hr style="border:none;border-top:1px solid #F0F0F0;margin:24px 0;" />
      <p style="font-size:13px;color:#888;margin:0;text-align:center;">
        Keter Marketing · <a href="mailto:${CONTACT_EMAIL}" style="color:#D4AF37;text-decoration:none;">${CONTACT_EMAIL}</a>
      </p>
    </div>

  </div>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
