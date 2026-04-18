import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contact@ketermarketing.com";
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "noreply@ketermarketing.com";
  try {
    const body = await req.json();
    const { fullName, email, activity, need, horizon, message, honeypot } = body;

    // Anti-spam honeypot
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!fullName || !email || !activity || !need || !horizon || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    const needLabels: Record<string, string> = {
      "one-page": "Site one-page",
      "multi-pages": "Site multi-pages",
      "landing-page": "Landing page",
      "refonte": "Refonte",
      "unknown": "Je ne sais pas encore",
    };

    const horizonLabels: Record<string, string> = {
      "launch": "Je démarre",
      "accelerate": "Je veux accélérer",
      "refonte": "Je veux refontre",
      "unknown": "Je ne sais pas encore",
    };

    await resend.emails.send({
      from: `Keter Marketing <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande — ${fullName} — ${needLabels[need] ?? need}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="background: #0B0B0B; padding: 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #D4AF37; font-size: 22px; margin: 0;">Nouvelle demande de contact</h1>
            <p style="color: rgba(255,255,255,0.5); margin: 8px 0 0; font-size: 14px;">Keter Marketing — Site Web</p>
          </div>
          <div style="background: #F5F5F5; padding: 32px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Nom", fullName],
                ["Email", `<a href="mailto:${email}" style="color: #D4AF37;">${email}</a>`],
                ["Activité", activity],
                ["Besoin", needLabels[need] ?? need],
                ["Horizon", horizonLabels[horizon] ?? horizon],
              ].map(([k, v]) => `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #E0E0E0; font-weight: 600; font-size: 13px; color: #4A4A4A; width: 140px; text-transform: uppercase; letter-spacing: 0.05em;">${k}</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #E0E0E0; font-size: 15px;">${v}</td>
                </tr>
              `).join("")}
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #FFFFFF; border-radius: 6px; border-left: 3px solid #D4AF37;">
              <p style="font-weight: 600; font-size: 13px; color: #4A4A4A; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Votre demande Keter Marketing" style="display: inline-block; padding: 12px 28px; background: #D4AF37; color: #0B0B0B; font-weight: 700; font-size: 13px; text-decoration: none; border-radius: 4px; letter-spacing: 0.08em; text-transform: uppercase;">
                Répondre à ${fullName.split(" ")[0]}
              </a>
            </div>
          </div>
          <p style="text-align: center; font-size: 12px; color: #888; margin-top: 24px;">
            Keter Marketing — contact@ketermarketing.com
          </p>
        </div>
      `,
    });

    // Auto-reply to the prospect
    await resend.emails.send({
      from: `Keter Marketing <${FROM_EMAIL}>`,
      to: [email],
      subject: `Votre demande a bien été reçue — Keter Marketing`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <div style="background: #0B0B0B; padding: 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #D4AF37; font-size: 22px; margin: 0;">Keter Marketing</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 6px 0 0; font-style: italic;">On transforme vos visiteurs en clients. À chaque fois.</p>
          </div>
          <div style="background: #FFFFFF; padding: 36px; border-radius: 0 0 8px 8px; border: 1px solid #E8E8E8; border-top: none;">
            <p style="font-size: 17px; font-weight: 600; margin: 0 0 16px;">Bonjour ${fullName.split(" ")[0]},</p>
            <p style="font-size: 15px; color: #4A4A4A; line-height: 1.75; margin: 0 0 16px;">
              Votre demande a bien été reçue. Nous vous répondons sous <strong>24h ouvrées</strong>.
            </p>
            <p style="font-size: 15px; color: #4A4A4A; line-height: 1.75; margin: 0 0 28px;">
              Si vous souhaitez aller plus vite, vous pouvez réserver directement un créneau de 30 minutes dans notre agenda.
            </p>
            <div style="text-align: center; margin-bottom: 28px;">
              <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/ketermarketing"}" style="display: inline-block; padding: 14px 32px; background: #D4AF37; color: #0B0B0B; font-weight: 700; font-size: 13px; text-decoration: none; border-radius: 4px; letter-spacing: 0.08em; text-transform: uppercase;">
                → Réserver mon créneau
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #F0F0F0; margin: 28px 0;" />
            <p style="font-size: 13px; color: #888; text-align: center; margin: 0;">
              Keter Marketing · <a href="mailto:contact@ketermarketing.com" style="color: #D4AF37; text-decoration: none;">contact@ketermarketing.com</a>
            </p>
          </div>
        </div>
      `,
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
