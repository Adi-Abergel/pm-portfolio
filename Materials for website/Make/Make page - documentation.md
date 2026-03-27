# Make Tool Page — Documentation

**Page route:** `/tools/make`
**File location:** `app/tools/make/page.tsx`
**Screenshots location:** `public/make/`

---

## Page Structure (top to bottom)

### 1. Back Navigation
Simple link back to `/#tools` (the Tools section on the homepage). Appears at the top and again at the very bottom.

---

### 2. Hero Section
- Make logo (SVG, purple `#6D00CC`)
- Title: **Make**
- Subtitle: "No-Code Automation · Make (formerly Integromat)"
- Intro paragraph framing your Make usage as a **broad portfolio across different projects** — not just one context.

---

### 3. Automation Portfolio
**Headline:** "3 Automations · 3 Contexts"

Three large cards, one per automation:

#### Card 1 — Issue Notification System
- **Context badge:** Physical Sites Project
- **Trigger:** Google Form submission
- **Tool flow:** Google Forms → Make → Slack
- **What it does:** Field staff submit issue reports via Google Form on-site. Make picks it up, formats it into a clear alert, and routes it to the warehouse team on Slack.
- **Outcome:** "Site teams report issues in seconds. Warehouse gets a clean, structured alert — no phone tag."
- **Screenshot used:** `issue-notification.png`

#### Card 2 — Smart Message Processor
- **Context badge:** Cross-Project
- **Trigger:** Google Form free-text submission
- **Tool flow:** Google Forms → Make → Slack Channel
- **What it does:** User writes free-text in a Google Form. Make processes the raw input and transforms it into a concise, actionable message posted to the correct Slack channel automatically.
- **Outcome:** "Messy free-text in, clean actionable message out — routed to the right channel automatically."
- **Screenshots used:** `message-to-slack.png`, `message-to-slack-channel.png`

#### Card 3 — Czech Learning Suite
- **Context badge:** Personal Project
- **Trigger:** Schedule (daily + weekly)
- **Tool flow:** Make → Supabase → Email
- **What it does:** Two nested automations:
  - **Daily Vocabulary** — Every day at 8:00 AM, Make pulls 5 Czech words from Supabase and delivers them by email.
  - **Weekly Progress Report** — Every Saturday at 9:00 PM, Make compiles completed tasks into a structured summary email.
- **Outcome:** "Consistency automated — learning happens every day without having to remember to start."
- **Screenshots used:** `czech-email.png`, `czech-feedback.png`

---

### 4. Screenshots (Lightbox)
All 5 screenshots displayed using the `ScreenshotLightbox` component. Click any to expand.

| File | Caption |
|---|---|
| `issue-notification.png` | Issue Notification — Site to Warehouse |
| `message-to-slack.png` | Smart Message Processor — Flow View |
| `message-to-slack-channel.png` | Smart Message Processor — Slack Output |
| `czech-email.png` | Daily Czech Vocabulary Email |
| `czech-feedback.png` | Weekly Progress Report Email |

---

### 5. Capabilities Grid
6 cards summarising what you can build with Make:
1. Form-triggered workflows
2. AI-powered message processing
3. Scheduled data delivery
4. Cross-app routing
5. Progress reporting
6. Zero-maintenance pipelines

---

## Design Notes
- Follows the same design system as the other tool pages (dark forest-green `#143930`, gold accents `#bead89`, warm cream `#f8f1dd`)
- Each tool in the flow badges has its own colour (green for Google Forms, purple for Make, blue for Slack, teal for Supabase, yellow for Email)
- Each automation card has a colour-coded context badge so the reader can immediately see which project it belongs to

---

## Files Changed / Created
| File | Action |
|---|---|
| `app/tools/make/page.tsx` | Created — the full Make page |
| `public/make/issue-notification.png` | Copied from Materials folder |
| `public/make/message-to-slack.png` | Copied from Materials folder |
| `public/make/message-to-slack-channel.png` | Copied from Materials folder |
| `public/make/czech-email.png` | Copied from Materials folder |
| `public/make/czech-feedback.png` | Copied from Materials folder |
| `components/Tools.tsx` | Added `href: '/tools/make'` so the homepage card links to the page |
