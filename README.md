# SHIV CLASSES — Official Website

Professional website for **SHIV CLASSES**, a home tuition centre serving students from **Class 1 to Class 12** across all subjects.

**Live site:** [shiv-classes.vercel.app](https://shiv-classes.vercel.app)

---

## Features

- **Hero** — headline, CTAs, floating trust cards, Call Now link
- **Stats bar** — key numbers (students guided, years experience, classes covered)
- **About** — mission, vision, approach, image placeholder ready for real photo
- **Why Choose Us** — 6 feature cards (small batches, doubt clearing, affordable fees, etc.)
- **Courses** — colour-coded cards for Primary / Middle / Secondary / Senior Secondary
- **Faculty** — teacher profile with experience stats
- **Testimonials** — parent & student reviews
- **Enquiry Form** — contact form with class & subject selectors
- **AI Chatbot** — floating assistant powered by Claude Haiku, answers tuition queries
- **Mobile sticky bar** — always-visible Call Now + Enquire Now on mobile

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| AI Chatbot | Anthropic Claude Haiku via `@anthropic-ai/sdk` |
| Hosting | Vercel |

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/suthardivy183-lang/shiv-classes.git
cd shiv-classes

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Add your ANTHROPIC_API_KEY inside .env.local

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | API key from [console.anthropic.com](https://console.anthropic.com) — powers the AI chatbot |

Without the key the chatbot still works — it shows a helpful "please call us" fallback message instead.

## Deployment

The site is deployed on Vercel. To redeploy after changes:

```bash
vercel deploy --prod
```

To activate the AI chatbot on the live site, add `ANTHROPIC_API_KEY` in:
> Vercel Dashboard → Project Settings → Environment Variables → then redeploy

## Customisation Checklist

- [ ] Replace phone number (`+91 XXXXX XXXXX`) across `Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Faculty.tsx`, `EnquiryForm.tsx`, `MobileCTA.tsx`
- [ ] Replace email & address in `EnquiryForm.tsx`
- [ ] Add real tuition photo in `About.tsx` (replace the dashed placeholder)
- [ ] Add teacher name & qualifications in `Faculty.tsx`
- [ ] Replace sample testimonials in `Testimonials.tsx` with real ones
- [ ] Set `ANTHROPIC_API_KEY` on Vercel for the live AI chatbot

## Project Structure

```
app/
  globals.css          # Tailwind base + dot-grid / cross-grid / diagonal-stripe patterns
  layout.tsx           # Root layout, metadata, Inter font
  page.tsx             # Page composition — all sections assembled here
  api/
    chat/route.ts      # AI chatbot API endpoint (Claude Haiku + prompt caching)

components/
  Navbar.tsx           # Sticky navbar with mobile hamburger menu
  Hero.tsx             # Landing hero section
  Stats.tsx            # Stats bar
  About.tsx            # About section with image placeholder
  Features.tsx         # Why Choose Us — 6 feature cards
  Courses.tsx          # Course cards (Primary / Middle / Secondary / Senior)
  Faculty.tsx          # Teacher profile card
  Testimonials.tsx     # Parent & student reviews
  EnquiryForm.tsx      # Contact info + enquiry form
  Footer.tsx           # Site footer
  ChatBot.tsx          # Floating AI chat assistant
  MobileCTA.tsx        # Sticky bottom bar (mobile only)
```

## Author

Built by **Divy Suthar** for SHIV CLASSES.
