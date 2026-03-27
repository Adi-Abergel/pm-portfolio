import Link from 'next/link';
import ScreenshotLightbox from '@/components/ScreenshotLightbox';

const phases = [
  { phase: 'Phase 1 — Discovery & Planning', start: 'Jan 1, 2025',  end: 'Jan 31, 2025',  status: 'Done' },
  { phase: 'Phase 2 — Design & Prototyping', start: 'Feb 1, 2025',  end: 'Mar 15, 2025',  status: 'Done' },
  { phase: 'Phase 3 — Development',          start: 'Mar 16, 2025', end: 'May 15, 2025',  status: 'In Progress' },
  { phase: 'Phase 4 — Testing & QA',         start: 'May 16, 2025', end: 'Jun 1, 2025',   status: 'To Do' },
  { phase: 'Phase 5 — Launch',               start: 'Jun 2, 2025',  end: 'Jun 30, 2025',  status: 'To Do' },
];

const risks = [
  { risk: 'Android development delays',    status: 'Open',       likelihood: 'High',   impact: 'High',   mitigation: 'Weekly dev syncs, buffer week built into timeline' },
  { risk: 'App Store rejection',           status: 'Monitoring', likelihood: 'Medium', impact: 'High',   mitigation: 'Follow Apple & Google guidelines strictly from day 1' },
  { risk: 'Scope creep from stakeholders', status: 'Monitoring', likelihood: 'High',   impact: 'Medium', mitigation: 'Change request process in place, PM approval required' },
  { risk: 'Key developer leaves team',     status: 'Open',       likelihood: 'Low',    impact: 'High',   mitigation: 'Document all code, cross-train team members' },
  { risk: 'Poor user retention post-launch', status: 'Monitoring', likelihood: 'Medium', impact: 'High', mitigation: 'Beta testing with 50 users before launch, iterate on feedback' },
];

const screenshots = [
  {
    src: '/notion/overview.png',
    title: 'Project Overview',
    description: 'FitTrack project home — goals, timeline, PM details, and phase progress at a glance.',
  },
  {
    src: '/notion/roadmap.png',
    title: 'Roadmap / Timeline',
    description: 'Gantt-style timeline spanning Jan–Jun 2025, mapping each phase from Discovery to Launch.',
  },
  {
    src: '/notion/database.png',
    title: 'Task Board',
    description: 'Board view of the FitTrack task database, grouped by status across all 5 phases.',
  },
  {
    src: '/notion/meeting-notes.png',
    title: 'Meeting Notes',
    description: 'Structured meeting pages — Kickoff & Design Review.',
  },
  {
    src: '/notion/risk-log.png',
    title: 'Risk Log',
    description: 'Risk database tracking 5 project risks with likelihood, impact, and mitigation plans.',
  },
];

const statusStyles: Record<string, { badge: string; dot: string }> = {
  'Done':        { badge: 'bg-[#143930]/60 text-[#5a9c78] border border-[#3a7a58]/40',  dot: 'bg-[#5a9c78]' },
  'In Progress': { badge: 'bg-[#1a4a3a]/60 text-[#bead89] border border-[#bead89]/40',  dot: 'bg-[#bead89]' },
  'To Do':       { badge: 'bg-[#143930]/60 text-[#8a8070] border border-[#52504e]/40',  dot: 'bg-[#62604e]' },
  'Open':        { badge: 'bg-[#3a1a1a]/60 text-[#c87070] border border-[#8a4a4a]/40',  dot: 'bg-[#c87070]' },
  'Monitoring':  { badge: 'bg-[#1a4a3a]/60 text-[#bead89] border border-[#bead89]/40',  dot: 'bg-[#bead89]' },
  'Closed':      { badge: 'bg-[#143930]/60 text-[#5a9c78] border border-[#3a7a58]/40',  dot: 'bg-[#5a9c78]' },
};

const impactStyles: Record<string, string> = {
  High:   'text-[#c87070]',
  Medium: 'text-[#bead89]',
  Low:    'text-[#8a8070]',
};

const successMetrics = [
  { value: '10,000', label: 'Downloads', sub: 'target in first 30 days' },
  { value: '4.0+',   label: 'App Store Rating', sub: 'at launch' },
  { value: '40%',    label: 'D7 Retention', sub: 'target rate' },
  { value: '6mo',    label: 'Timeline', sub: 'Jan – Jun 2025' },
];

export default function NotionPage() {
  return (
    <main className="min-h-screen bg-[#143930] text-white">
      <div className="fixed inset-0 checker-bg pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#143930_80%)] pointer-events-none" />

      {/* ── Back nav ── */}
      <div className="relative z-10 pt-8 px-6 max-w-5xl mx-auto">
        <Link
          href="/#tools"
          className="inline-flex items-center gap-2 text-[#8a8070] hover:text-[#bead89] text-sm font-medium transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 pt-14 pb-16 px-6 text-center max-w-3xl mx-auto">
        <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Tool Deep-Dive</p>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border border-[#8a8670]/50 bg-[#2a2a20]/50">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#f8f1dd">
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
          </svg>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#f8f1dd] mb-4 tracking-tight">
          Notion
        </h1>
        <p className="text-[#8a8070] text-sm mb-4">Documentation · Notion</p>
        <p className="text-[#c4ba9c] text-lg leading-relaxed max-w-2xl mx-auto">
          A mock Notion workspace simulating a full PM setup for a mobile fitness app launch —
          covering the complete project lifecycle from discovery to App Store release.
        </p>
      </section>

      {/* ── Success metrics ── */}
      <section className="relative z-10 px-6 pb-16 max-w-5xl mx-auto">
        <div className="relative rounded-2xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2220]/80 to-[#112b28]/80 border border-[#bead89]/20 rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#bead89]/5 to-[#e8dfc8]/5 rounded-2xl" />
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-[#bead89] text-xs uppercase tracking-[0.2em] font-semibold mb-2">Project Goal</p>
              <h3 className="font-display text-2xl font-bold text-[#f8f1dd] mb-1">FitTrack — Mobile App Launch</h3>
              <p className="text-[#8a8070] text-sm">Jan – Jun 2025 · Mock project · PM: Adi Abergel</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center shrink-0">
              {successMetrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold gradient-text">{m.value}</p>
                  <p className="text-[#f8f1dd] text-xs font-medium mt-1">{m.label}</p>
                  <p className="text-[#e8dfc8] text-xs mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Screenshots</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Inside the Workspace</h2>
        </div>

        <ScreenshotLightbox screenshots={screenshots} />
      </section>

      {/* ── Roadmap table ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Project Structure</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">5 Phases · Full Roadmap</h2>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f8f1dd]/[0.07]">
                  <th className="text-left px-6 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest">Phase</th>
                  <th className="text-left px-4 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest">Status</th>
                  <th className="text-left px-4 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest hidden sm:table-cell">Start</th>
                  <th className="text-left px-4 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest hidden sm:table-cell">End</th>
                </tr>
              </thead>
              <tbody>
                {phases.map((p, i) => {
                  const style = statusStyles[p.status];
                  return (
                    <tr
                      key={p.phase}
                      className={`transition-colors hover:bg-[#f8f1dd]/[0.03] ${i < phases.length - 1 ? 'border-b border-[#f8f1dd]/[0.05]' : ''}`}
                    >
                      <td className="px-6 py-4 font-medium text-[#f8f1dd]">{p.phase}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                          {p.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[#8a8070] hidden sm:table-cell">{p.start}</td>
                      <td className="px-4 py-4 text-[#8a8070] hidden sm:table-cell">{p.end}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Risk log ── */}
      <section className="relative z-10 px-6 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Risk Management</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Risk Log</h2>
        </div>

        <div className="space-y-4">
          {risks.map((r) => {
            const style = statusStyles[r.status];
            return (
              <div key={r.risk} className="glass-card glow-border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-[#f8f1dd] mb-2">{r.risk}</p>
                    <p className="text-[#c4ba9c] text-sm leading-relaxed">{r.mitigation}</p>
                  </div>
                  <div className="flex flex-wrap sm:flex-col items-start gap-2 sm:items-end shrink-0">
                    <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {r.status}
                    </span>
                    <span className="text-xs text-[#8a8070]">
                      Likelihood: <span className={`font-semibold ${impactStyles[r.likelihood]}`}>{r.likelihood}</span>
                    </span>
                    <span className="text-xs text-[#8a8070]">
                      Impact: <span className={`font-semibold ${impactStyles[r.impact]}`}>{r.impact}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Footer nav ── */}
      <div className="relative z-10 pb-12 px-6 text-center">
        <Link
          href="/#tools"
          className="inline-flex items-center gap-2 text-[#8a8070] hover:text-[#bead89] text-sm font-medium transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
