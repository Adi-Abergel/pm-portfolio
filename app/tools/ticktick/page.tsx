import Link from 'next/link';
import ScreenshotLightbox from '@/components/ScreenshotLightbox';

const screenshots = [
  {
    src: '/ticktick/folder 2.png',
    title: 'Folder View',
    description: 'The FitTrack Launch folder with all 4 lists visible in the sidebar — Daily Standup, In Progress, This Week, and Backlog.',
  },
  {
    src: '/ticktick/standup 2.png',
    title: 'Daily Standup',
    description: 'A living standup agenda — each task represents one talking point covering what\'s done, in progress, or blocked.',
  },
  {
    src: '/ticktick/in-progress 2.png',
    title: 'In Progress',
    description: 'Active PM tasks with priority flags and due dates — what\'s being worked on right now.',
  },
  {
    src: '/ticktick/this-week 2.png',
    title: 'This Week',
    description: 'Tasks scoped for the current week, with completed items marked and open ones still in view.',
  },
  {
    src: '/ticktick/backlog 2.png',
    title: 'Backlog',
    description: 'Upcoming tasks ordered by rough timeline — prioritised and tagged, ready to be pulled into the week.',
  },
];

const lists = [
  {
    emoji: '📋',
    name: 'Daily Standup',
    purpose: 'A living agenda for daily standups — done, in progress, and blocked items as individual tasks.',
    tag: '#pm · #dev · #blocker',
  },
  {
    emoji: '🔵',
    name: 'In Progress',
    purpose: 'Active PM tasks being worked on right now, with priority flags and due dates.',
    tag: '#pm · #dev · #qa · #docs',
  },
  {
    emoji: '📅',
    name: 'This Week',
    purpose: 'Tasks scoped for the current week — a lightweight sprint board for day-to-day execution.',
    tag: '#meeting · #notion · #qa · #comms',
  },
  {
    emoji: '🗂️',
    name: 'Backlog',
    purpose: 'Upcoming tasks not yet scheduled, ordered by rough timeline and ready to be pulled in.',
    tag: '#qa · #launch · #dev · #comms',
  },
];

const useCases = [
  { title: 'Daily task triage', description: 'The standup list acts as a living agenda — every talking point is a task, making standups structured and actionable.' },
  { title: 'Priority management', description: 'High, Medium, and Low flags across active tasks ensure the most important work always surfaces first.' },
  { title: 'Weekly scoping', description: '"This Week" acts as a lightweight sprint board — tasks pulled in on Monday, closed out by Friday.' },
  { title: 'Backlog grooming', description: 'Future tasks are ordered by estimated timeline and tagged, so pulling them into the week is frictionless.' },
  { title: 'Tool complementarity', description: 'TickTick handles day-to-day execution while Notion holds the source of truth — each tool doing what it does best.' },
  { title: 'Progress tracking', description: 'Completed tasks build a visible record of output over time, making it easy to review what got done and identify patterns week over week.' },
];

export default function TickTickPage() {
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

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border border-[#4a7a9a]/50 bg-[#1a2a4a]/50">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#4772FA">
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3-5.128 0-9.3-4.172-9.3-9.3 0-5.128 4.172-9.3 9.3-9.3V0Zm7.4 2.583-7.505 9.371L8.388 9.08l-2.002 2.436 4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617L19.4 2.583Z" />
          </svg>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#f8f1dd] mb-4 tracking-tight">
          TickTick
        </h1>
        <p className="text-[#8a8070] text-sm mb-4">Productivity Tracking · TickTick</p>
        <p className="text-[#c4ba9c] text-lg leading-relaxed max-w-2xl mx-auto">
          Where strategy meets execution. TickTick handles the day-to-day — standups, active tasks,
          weekly planning, and backlog grooming — keeping the project moving at ground level while
          Notion holds the bigger picture.
        </p>
      </section>

      {/* ── Use cases ── */}
      <section className="relative z-10 px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((u) => (
            <div key={u.title} className="glass-card glow-border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-[#1a2a4a]/50 border border-[#4a7a9a]/40 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#7ab0c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#f8f1dd] text-sm mb-1">{u.title}</p>
                  <p className="text-[#c4ba9c] text-sm leading-relaxed">{u.description}</p>
                </div>
              </div>
            </div>
          ))}
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

      {/* ── Lists breakdown ── */}
      <section className="relative z-10 px-6 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Project Structure</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">4 Lists · 1 Folder</h2>
          <p className="text-[#c4ba9c] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            All lists are nested inside the <span className="text-[#f8f1dd] font-medium">FitTrack Launch</span> folder — one place for everything project-related.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {lists.map((list) => (
            <div key={list.name} className="glass-card glow-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{list.emoji}</span>
                <h3 className="font-bold text-[#f8f1dd] text-lg">{list.name}</h3>
              </div>
              <p className="text-[#c4ba9c] text-sm leading-relaxed mb-4">{list.purpose}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#f8f1dd]/[0.06]">
                {list.tag.split(' · ').map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#1a2a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40 font-medium">
                    {tag}
                  </span>
                ))}
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
