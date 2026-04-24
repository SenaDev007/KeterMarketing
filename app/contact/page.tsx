import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact - Réserver un appel gratuit de 30 min | Keter Marketing",
  description:
    "Parlons de votre projet. Un appel de 30 minutes suffit pour savoir si Keter Marketing peut vous aider. Gratuit, sans engagement, réponse sous 24h.",
  alternates: {
    canonical: "https://ketermarketing.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
