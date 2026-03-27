import Link from 'next/link';
import ScreenshotLightbox from '@/components/ScreenshotLightbox';

const epics = [
  { emoji: '⚙️', name: 'PM System Setup',         status: 'Done',        start: 'Jan 2025',   end: 'Jan 2025' },
  { emoji: '🎓', name: 'A1.1 — Beginners',         status: 'Done',        start: 'Jan 2025',   end: 'Jun 2025' },
  { emoji: '📚', name: 'A1.2 — Elementary',         status: 'In Progress', start: 'Jul 2025',   end: 'Dec 2025' },
  { emoji: '📖', name: 'A1.3 — Upper Elementary',   status: 'To Do',       start: 'Jan 2026',   end: 'Jun 2026' },
  { emoji: '🗣️', name: 'A2.1 — Pre-intermediate',  status: 'To Do',       start: 'Jul 2026',   end: 'Dec 2026' },
  { emoji: '🎯', name: 'A2.2 — Pre-intermediate',   status: 'To Do',       start: 'Jan 2027',   end: 'Jun 2027' },
  { emoji: '🏆', name: 'Permanent Residency Test',  status: 'To Do',       start: 'Apr 2027',   end: 'Jul 2027' },
];

const sprints = [
  {
    name: 'Sprint 2: A1.2 Elementary',
    dates: 'Mar 23 – Mar 31, 2026',
    status: 'Active',
    stories: [
      { story: 'Sprint progress review in Google Drive', status: 'In Progress' },
      { story: 'Build Wordwall sets for Ch.5–8',         status: 'In Progress' },
      { story: 'Accusative: Adjectives',                 status: 'Practice' },
      { story: 'Accusative: Nouns',                      status: 'Practice' },
      { story: 'Locative: Adjectives',                   status: 'Actively Learning' },
      { story: 'Locative: Nouns',                        status: 'Actively Learning' },
    ],
  },
  {
    name: 'Sprint 3: A1.2 Elementary',
    dates: 'Apr 1 – Apr 20, 2026',
    status: 'Planned',
    stories: [
      { story: 'Ch.8: Plánujeme víkend — Planning our weekend', status: 'To Do' },
    ],
  },
];

const screenshots = [
  {
    src: '/jira/active-sprints 2.png',
    title: 'Active Sprint Board',
    description: 'Sprint 2: A1.2 Elementary (Mar 23–31, 2026). Stories tracked across In Progress, Actively Learning, Practice, and Done columns.',
  },
  {
    src: '/jira/backlog.png',
    title: 'Backlog View',
    description: 'Full project backlog showing all 7 epics and their stories, color-coded by epic and status.',
  },
  {
    src: '/jira/timeline.png',
    title: 'Timeline / Gantt',
    description: 'Epic-level Gantt chart spanning Jan 2025 – Jul 2027, mapping the full path to the Permanent Residency Test.',
  },
];

const statusStyles: Record<string, { badge: string; dot: string }> = {
  'Done':              { badge: 'bg-[#143930]/60 text-[#5a9c78] border border-[#3a7a58]/40',  dot: 'bg-[#5a9c78]' },
  'In Progress':       { badge: 'bg-[#1a4a3a]/60 text-[#bead89] border border-[#bead89]/40',  dot: 'bg-[#bead89]' },
  'To Do':             { badge: 'bg-[#143930]/60 text-[#8a8070] border border-[#52504e]/40',  dot: 'bg-[#62604e]' },
  'Actively Learning': { badge: 'bg-[#1a2a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40',  dot: 'bg-[#7ab0c8]' },
  'Practice':          { badge: 'bg-[#2a1a3a]/60 text-[#b09ac8] border border-[#7a5a9a]/40',  dot: 'bg-[#b09ac8]' },
};

export default function JiraPage() {
  return (
    <main className="min-h-screen bg-[#143930] text-white">
      {/* Shared texture layers */}
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

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border border-[#4a7a9a]/50 bg-[#1a3a4a]/50">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#0052CC">
            <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
          </svg>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#f8f1dd] mb-4 tracking-tight">
          Jira
        </h1>
        <p className="text-[#8a8070] text-sm mb-4">Project Tracking · Atlassian</p>
        <p className="text-[#c4ba9c] text-lg leading-relaxed max-w-2xl mx-auto">
          A personal Jira space that frames Czech language learning as a structured product initiative:
          7 epics, Scrum sprints, and a 2-year roadmap to A2 fluency and permanent residency.
        </p>
      </section>

      {/* ── Screenshots ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Screenshots</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Inside the Board</h2>
        </div>

        <ScreenshotLightbox screenshots={screenshots} />
      </section>

      {/* ── Epics table ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Project Structure</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">7 Epics · Full Roadmap</h2>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f8f1dd]/[0.07]">
                  <th className="text-left px-6 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest">Epic</th>
                  <th className="text-left px-4 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest">Status</th>
                  <th className="text-left px-4 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest hidden sm:table-cell">Start</th>
                  <th className="text-left px-4 py-4 text-[#bead89] text-xs font-semibold uppercase tracking-widest hidden sm:table-cell">End</th>
                </tr>
              </thead>
              <tbody>
                {epics.map((epic, i) => {
                  const style = statusStyles[epic.status];
                  return (
                    <tr
                      key={epic.name}
                      className={`transition-colors hover:bg-[#f8f1dd]/[0.03] ${i < epics.length - 1 ? 'border-b border-[#f8f1dd]/[0.05]' : ''}`}
                    >
                      <td className="px-6 py-4 font-medium text-[#f8f1dd] flex items-center gap-2.5">
                        <span>{epic.emoji}</span>
                        {epic.name}
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                          {epic.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[#8a8070] hidden sm:table-cell">{epic.start}</td>
                      <td className="px-4 py-4 text-[#8a8070] hidden sm:table-cell">{epic.end}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Sprints ── */}
      <section className="relative z-10 px-6 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Sprints</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Active & Upcoming</h2>
        </div>

        <div className="space-y-8">
          {sprints.map((sprint) => (
            <div key={sprint.name}>
              {/* Sprint header */}
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-[#f8f1dd]">{sprint.name}</h3>
                    <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                      sprint.status === 'Active'
                        ? 'bg-[#1a4a3a]/60 text-[#bead89] border border-[#bead89]/40'
                        : 'bg-[#143930]/60 text-[#8a8070] border border-[#52504e]/40'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sprint.status === 'Active' ? 'bg-[#bead89]' : 'bg-[#62604e]'}`} />
                      {sprint.status}
                    </span>
                  </div>
                  <p className="text-[#8a8070] text-sm mt-0.5">{sprint.dates}</p>
                </div>
              </div>

              {/* Stories grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sprint.stories.map((item) => {
                  const style = statusStyles[item.status] ?? statusStyles['To Do'];
                  return (
                    <div key={item.story} className="glass-card glow-border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium mb-3 ${style.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                        {item.status}
                      </span>
                      <p className="text-[#c4ba9c] text-sm leading-relaxed">{item.story}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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
