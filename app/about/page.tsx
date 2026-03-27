import Link from 'next/link';

const essentials = [
  'Based in Prague',
  'Free access to the Czech labor market',
  'Lean Practitioner',
  'Learning Czech',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#143930] text-white">
      <div className="fixed inset-0 checker-bg pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#143930_80%)] pointer-events-none" />

      {/* ── Back nav ── */}
      <div className="relative z-10 pt-8 px-6 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8a8070] hover:text-[#bead89] text-sm font-medium transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 pt-14 pb-16 px-6 max-w-4xl mx-auto">
        <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-6">My Story</p>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.05]">
          <span className="gradient-text-light italic">Adi Abergel</span>
        </h1>

        {/* Tagline */}
        <div className="max-w-2xl">
          <div className="w-8 h-px bg-[#bead89]/60 mb-6" />
          <p className="text-[#c4ba9c] text-xl md:text-2xl leading-relaxed font-light italic">
            I came to project management from a field where getting the process wrong had real consequences. That changes how you think about it.
          </p>
        </div>
      </section>

      {/* ── Story sections ── */}
      <section className="relative z-10 px-6 pb-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">

          {/* My Story */}
          <div className="glass-card glow-border rounded-2xl p-8">
            <p className="text-[#f8f1dd] text-xs font-semibold uppercase tracking-[0.2em] mb-5">The Story</p>
            <div className="space-y-4 text-[#c4ba9c] leading-relaxed">
              <p>
                I started my career as a nurse in an oncology day ward. Every shift was a live project: multiple patients,
                overlapping treatments, tight protocols, and a team that had to stay perfectly in sync. Nobody called it
                project management, but that&apos;s exactly what it was.
              </p>
              <p>
                When I moved into operations at IQVIA, I brought that same instinct with me, the need to know where
                everything stands, who owns what, and what happens if something slips. Working across international teams
                on complex multi-stakeholder projects, I started formalising what had always come naturally: mapping
                processes, closing gaps, and building workflows that don&apos;t depend on one person holding everything
                together. I got certified in Lean, started building automations, and realised I&apos;d been a PM long
                before I had the title.
              </p>
            </div>
          </div>

          {/* What drives me */}
          <div className="glass-card glow-border rounded-2xl p-8">
            <p className="text-[#f8f1dd] text-xs font-semibold uppercase tracking-[0.2em] mb-5">What Drives Me</p>
            <div className="space-y-4 text-[#c4ba9c] leading-relaxed">
              <p>
                I believe a great PM&apos;s job isn&apos;t to control a project; it&apos;s to build the conditions where
                the project runs well without constant input. That means clear structure, the right mindset, and processes
                that scale. My approach is creating visibility, reducing friction, and designing workflows that the team
                can actually trust, whatever the toolstack looks like.
              </p>
              <p>
                I recently moved to Prague and I&apos;m looking for a PM or Operations role in an international team
                where process and structure are seen as enablers, not obstacles, and where I can help build something
                that lasts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── The Essentials ── */}
      <section className="relative z-10 px-6 pb-24 max-w-4xl mx-auto">
        <p className="text-[#f8f1dd] text-xs font-semibold uppercase tracking-[0.2em] mb-5">The Essentials</p>
        <div className="flex flex-wrap gap-3">
          {essentials.map((item) => (
            <span
              key={item}
              className="text-sm px-4 py-2 rounded-full text-[#c4ba9c] border border-[#bead89]/30 bg-[#0a2220]/40"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 px-6 pb-20 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2220]/80 to-[#112b28]/80 border border-[#bead89]/20 rounded-2xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#bead89]/40 to-transparent" />
          <div className="relative px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#f8f1dd] font-semibold text-lg mb-1">Want to work together?</p>
              <p className="text-[#8a8070] text-sm">I&apos;m actively looking for PM and Operations roles in Prague.</p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#bead89] hover:bg-[#cfc09e] text-[#143930] px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#bead89]/20 hover:-translate-y-0.5"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
