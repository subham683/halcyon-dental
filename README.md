# Halcyon Dental Studio

A modern, production-quality marketing site for a dental clinic, built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS. Includes an AI-style
chat assistant ("Hal"), an appointment booking form, a contact form, and an
FAQ section — all wired to real API routes with placeholder logic that's
easy to swap for production services.

## Features

- **Chat interface** — `components/ChatWidget.tsx`, backed by
  `app/api/chat/route.ts`. Currently uses lightweight keyword matching
  (`lib/chat-responses.ts`); swap in a real model call (e.g. the Anthropic
  API) without touching any UI code.
- **FAQ section** — accordion with category filters, sourced from
  `lib/faq-data.ts`.
- **Appointment booking form** — `components/AppointmentForm.tsx` posts to
  `app/api/appointment/route.ts`.
- **Contact form** — `components/ContactSection.tsx` posts to
  `app/api/contact/route.ts`.
- Fully responsive, keyboard-accessible, and respects
  `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  api/
    chat/route.ts          # Chat placeholder endpoint
    appointment/route.ts   # Booking form endpoint
    contact/route.ts       # Contact form endpoint
  layout.tsx                # Fonts + global metadata
  page.tsx                  # Assembles all sections
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  TrustBar.tsx
  Services.tsx
  ChatWidget.tsx
  FloatingChatButton.tsx
  FAQ.tsx
  AppointmentForm.tsx
  ContactSection.tsx
  Footer.tsx
  SmileDivider.tsx           # Signature brand motif (SVG)
lib/
  faq-data.ts
  chat-responses.ts          # Placeholder "AI" logic — swap this out
types/
  index.ts
```

## Connecting a real AI model

`lib/chat-responses.ts` exports a single function,
`generateAssistantReply(userMessage: string): string`. To connect a real
model:

1. Add your API key to `.env.local` (see `.env.example`).
2. In `app/api/chat/route.ts`, replace the call to `generateAssistantReply`
   with a call to your model provider (Anthropic, OpenAI, etc.), passing
   the conversation history if you want multi-turn memory.
3. Everything else — the UI, typing indicator, error states — stays the
   same, since the route's response shape (`{ success, data: { reply } }`)
   doesn't change.

## Wiring up real form submissions

`app/api/appointment/route.ts` and `app/api/contact/route.ts` currently log
submissions to the server console. In production, connect them to:

- A database (Postgres, Supabase, etc.) to persist requests
- An email provider (Resend, Postmark, SendGrid) for confirmations
- A scheduling system (Cal.com, Calendly API) for real-time availability

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the placeholder version.
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Customizing the brand

- Colors and type scale: `tailwind.config.ts`
- Clinic name, copy, hours, address: search for "Halcyon Dental" and
  `128 Willowmere Lane` across `components/`
- Services offered: `components/Services.tsx` and the `SERVICES` array in
  `components/AppointmentForm.tsx`
- FAQ content: `lib/faq-data.ts`
