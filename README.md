# Decrypt · One Page Site
.g
> We decode what others cannot.

A single page marketing site for **Decrypt**, an AI-powered software studio that builds
custom software, AI automation, web apps, mobile apps, ERP systems, websites, and ongoing
maintenance across manufacturing, SaaS, language services, education, healthcare, and
ecommerce.

Dark only, monospace-accented, with a signature **decryption resolve** motif (headlines
render with a green accent word) and an interactive 3D robot hero.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** with CSS-variable design tokens, dark theme only
- **Motion** (Framer Motion) for whileInView reveals and the hero load sequence
- **@splinetool/react-spline** for the interactive 3D robot (lazy loaded, poster fallback)
- **Resend** for contact and careers form email delivery
- Self-hosted **Clash Display** (display), **Geist** (body), **JetBrains Mono** (utility)

## Page sections

Hero → What We Do → Workflow + AI → How We Work → Case Studies (7 case study cards) →
Pricing (6 category cards, modal detail) → About → Contact → Footer

Case study and pricing cards open accessible modal dialogs (`Esc` to close, focus trapped,
backdrop click to dismiss) with full project/package detail.

## Develop

```bash
npm install   # or pnpm install
npm run dev   # http://localhost:3000
npm run build
npm run lint
```

## Fonts

Clash Display is included in `app/fonts/` and loaded locally. Geist Sans and Geist Mono use
`next/font/google`; the production build therefore needs normal network access while Next.js
downloads and self-hosts those font files.

## Vercel deployment preparation

Use this directory as the Vercel project root. Vercel detects Next.js automatically; no custom
build or output settings are required. Before the first production deployment:

1. Add the Resend variables documented in `EMAIL_SETUP.md`.
2. Verify `decrypt-ai.tech` in Resend.
3. Confirm the custom domain points to the Vercel project.
4. Run `npm ci`, `npm run lint`, and `npm run build` locally.

The contact, careers, and quote endpoints require the Node.js runtime and must not be deployed as
a static export.

## Form email delivery (Resend)

Project inquiries, pricing quote requests, and careers submissions send to
**ehtishamulhassanmalik@gmail.com**. The recipient is fixed in
`lib/contact-details.ts` so a Vercel environment variable cannot accidentally redirect forms.

Set environment variables (see `.env.example` if present, or create one):

```
RESEND_API_KEY=re_xxx
RESEND_FROM=Decrypt AI Technologies <info@decrypt-ai.tech>
```

Before deployment, verify `decrypt-ai.tech` in Resend and add both variables to the Vercel
project for Production, Preview, and Development as needed. Without a key, local development
logs valid submissions, but production returns an error instead of falsely reporting success.

## Content

All copy lives in `lib/content.ts`: services, premise points, process steps, 7 case studies,
6 pricing groups (covering 13 original line items), pricing FAQ, homepage FAQ, About section
copy, footer columns, and contact form options. Edit there first for any copy change.

## Notes before further launch prep

- **Case study "Project reflection" quotes are drafts pending client approval.** Each is
  clearly labeled in its modal as draft and not yet a verified testimonial. Replace with
  approved quotes (or remove the block) before treating them as real testimonials.
- The copy follows one hard rule: no em dashes and no en dashes. Use the middle dot,
  slashes, commas, and the word "to" for ranges.
- Dark theme only. No theme toggle, no light-mode tokens.

---

Hero robot component sourced via the 21st.dev Magic MCP (Interactive 3D Robot / Spline Scene).
