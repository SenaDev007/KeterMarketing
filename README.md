# Keter Marketing — Site Web Officiel

> On transforme vos visiteurs en clients. À chaque fois.

Site web de l'agence **Keter Marketing**, conçu pour convertir des visiteurs en leads qualifiés.

## Stack technique

- **Framework** : Next.js 16 (App Router, TypeScript)
- **Style** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Formulaire** : React Hook Form + Zod
- **Emails** : Resend
- **Déploiement** : Vercel

## Pages

| Page | URL |
|---|---|
| Accueil (8 sections) | `/` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| À Propos | `/a-propos` |
| Contact | `/contact` |
| Mentions légales | `/mentions-legales` |

## Développement local

```bash
# 1. Cloner le repo
git clone https://github.com/SenaDev007/KeterMarketing.git
cd KeterMarketing

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos vraies valeurs

# 4. Lancer le serveur
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Variables d'environnement

Voir `.env.example` pour la liste complète. Variables requises en production :

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails |
| `CONTACT_EMAIL` | Email de destination des formulaires |
| `RESEND_FROM_EMAIL` | Email expéditeur (domaine vérifié sur Resend) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID Google Analytics 4 |
| `NEXT_PUBLIC_CALENDLY_URL` | URL de votre page Calendly |
| `NEXT_PUBLIC_SITE_URL` | URL du site en production |

## Déploiement Vercel

### Import depuis GitHub
1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Importer `SenaDev007/KeterMarketing`
3. Le projet sera auto-détecté comme Next.js
4. Configurer les variables d'environnement dans `Settings > Environment Variables`
5. Déployer

### Variables à configurer sur Vercel
Copier toutes les variables du `.env.example` dans le dashboard Vercel (`Settings > Environment Variables`) avec les vraies valeurs.

## À compléter avant mise en ligne

- [ ] Remplacer `[À compléter]` dans `/app/mentions-legales/page.tsx` (SIRET, adresse, hébergeur)
- [ ] Configurer le domaine Resend (vérifier `ketermarketing.com` sur resend.com)
- [ ] Configurer Google Analytics 4 et renseigner `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Renseigner `NEXT_PUBLIC_CALENDLY_URL` avec le vrai lien Calendly
- [ ] Ajouter le fichier `public/og-image.jpg` (1200×630px) pour les réseaux sociaux
- [ ] Configurer Google Search Console après mise en ligne
- [ ] Connecter le domaine `ketermarketing.com` dans Vercel

---

**Keter Marketing** — contact@ketermarketing.com
