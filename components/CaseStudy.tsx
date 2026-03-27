const automations = [
  {
    title: 'Daily Vocabulary Automation',
    description:
      'Make sends an email every morning with 5 Czech words to review, pulled from Supabase.',
    tools: ['Make', 'Supabase', 'Email'],
    trigger: 'Every day at 8:00 AM',
  },
  {
    title: 'Weekly Progress Report',
    description:
      'Every Saturday, Make aggregates completed tasks and sends a progress summary by email.',
    tools: ['Make', 'Email'],
    trigger: 'Every Saturday at 9:00 PM',
  },
];

const results = [
  { metric: '~500', label: 'Czech words learned', sub: 'tracked in Google Drive and Supabase' },
  { metric: '5', label: 'Chapters completed', sub: 'in "Krok za Krokem"' },
  { metric: '3', label: 'Advanced tools', sub: 'Make, Supabase and Python' },
  { metric: '4', label: 'Lessons per week', sub: 'for learning and practice' },
];

const statusStyles: Record<string, { badge: string; dot: string }> = {
  'In Progress': {
    badge: 'bg-[#1a4a3a]/60 text-[#bead89] border border-[#bead89]/40',
    dot: 'bg-[#bead89]',
  },
  'Planned': {
    badge: 'bg-transparent/60 text-[#8a8070] border border-[#52504e]/40',
    dot: 'bg-[#62604e]',
  },
  'Done': {
    badge: 'bg-transparent/60 text-[#5a9c78] border border-[#3a7a58]/40',
    dot: 'bg-[#5a9c78]',
  },
};

const toolColors: Record<string, string> = {
  Make: 'bg-[#2a1a3a]/60 text-[#b09ac8] border border-[#7a5a9a]/40',
  Supabase: 'bg-[#1a3a2a]/60 text-[#7ab09a] border border-[#4a8a6a]/40',
  Email: 'bg-[#1a3a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40',
  Notion: 'bg-[#2a2a20]/60 text-[#c8c4b0] border border-[#8a8670]/40',
  TickTick: 'bg-[#3a1a1a]/60 text-[#c89090] border border-[#8a5a5a]/40',
};

export default function CaseStudy() {
  return (
    <section id="case-study" className="pt-10 pb-28 px-6 relative overflow-hidden bg-transparent">

      {/* Subtle top fade & vignette */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a2220]/18 to-transparent" />
      

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Case Study
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f8f1dd] mb-5 tracking-tight">
            Learning Czech Like a PM
          </h2>
          <p className="text-[#c4ba9c] max-w-2xl mx-auto text-lg leading-relaxed">
            Most people treat language learning as a hobby. I treat it as a
            project, with epics, sprints, automations, and a clear goal:{' '}
            <span className="text-[#bead89] font-semibold">reach A2 fluency</span>{' '}
            after 2 years of structured practice.
          </p>
        </div>

        {/* The Challenge */}
        <div className="glass-card rounded-2xl p-8 mb-8 border-l-2 border-[#bead89]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0a2220]/50 border border-[#bead89]/30 flex items-center justify-center text-[#bead89] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[#bead89] text-xs font-semibold uppercase tracking-widest mb-2">The Challenge</p>
              <h3 className="text-xl font-bold text-[#f8f1dd] mb-2">Turning motivation into a sustainable system</h3>
              <p className="text-[#c4ba9c] leading-relaxed">
                Language learning has a notorious dropout rate. Without structure, progress is invisible and motivation fades.
                The challenge was to apply the same project management discipline I&apos;d use professionally: defining clear goals,
                breaking them into measurable tasks, automating consistency, and reviewing progress objectively.
              </p>
            </div>
          </div>
        </div>

        {/* Goal Banner */}
        <div className="relative rounded-2xl p-8 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2220]/80 to-[#112b28]/80 border border-[#bead89]/20 rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#bead89]/5 to-[#e8dfc8]/5 rounded-2xl" />
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-[#bead89] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
                Project Goal
              </p>
              <h3 className="font-display text-2xl font-bold text-[#f8f1dd] mb-1">Reach A2 level proficiency in Czech language</h3>
              <p className="text-[#8a8070] text-sm">~2 years · Personal project · Solo PM &amp; Executor</p>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center shrink-0">
              {[
                { value: '~2yr', label: 'Duration' },
                { value: 'A2', label: 'Target' },
                { value: '5', label: 'Tools' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
                  <p className="text-[#8a8070] text-xs mt-1 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Make Automations */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#2a1a3a]/50 border border-[#7a5a9a]/40 flex items-center justify-center text-[#b09ac8]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f8f1dd]">The Make Automations</h3>
          </div>
          <p className="text-[#c4ba9c] mb-6 ml-11">
            Consistency is hard. I automated the boring parts so I only have to show up and learn.
          </p>

          <div className="space-y-4">
            {automations.map((auto) => (
              <div
                key={auto.title}
                className="glass-card glow-border rounded-xl p-6 group transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#b09ac8] animate-pulse" />
                      <p className="text-xs text-[#b09ac8] font-semibold uppercase tracking-widest">Automation</p>
                    </div>
                    <h4 className="font-bold text-[#f8f1dd] text-lg mb-2 group-hover:text-[#dcd1b0] transition-colors">{auto.title}</h4>
                    <p className="text-[#c4ba9c] text-sm leading-relaxed">{auto.description}</p>
                    <p className="text-xs text-[#e8dfc8] mt-3 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Trigger: {auto.trigger}
                    </p>
                  </div>

                  {/* Right: Flow visualization */}
                  <div className="flex items-center gap-2 md:flex-col md:items-end justify-start md:justify-center">
                    <p className="text-xs text-[#e8dfc8] uppercase tracking-widest mb-0 md:mb-2 md:self-start sr-only md:not-sr-only">Flow</p>
                    <div className="flex items-center gap-2 flex-wrap md:flex-col md:items-end">
                      {auto.tools.map((tool, i) => (
                        <div key={tool} className="flex items-center gap-2">
                          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${toolColors[tool] ?? 'bg-[#2a2a20]/60 text-[#c8c4b0] border border-[#8a8670]/40'}`}>
                            {tool}
                          </span>
                          {i < auto.tools.length - 1 && (
                            <svg className="w-3 h-3 text-[#e8dfc8] shrink-0 md:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2220]/60 via-[#112b28]/40 to-[#143930] border border-[#f8f1dd]/[0.08] rounded-2xl" />
          <div className="relative p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[#1a3a2a]/50 border border-[#3a7a58]/40 flex items-center justify-center text-[#5a9c78]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#f8f1dd]">Results So Far</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {results.map((r) => (
                <div key={r.label} className="text-center">
                  <p className="font-display text-3xl font-bold gradient-text mb-1">{r.metric}</p>
                  <p className="text-[#f8f1dd] text-sm font-medium">{r.label}</p>
                  <p className="text-[#e8dfc8] text-xs mt-0.5">{r.sub}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#f8f1dd]/[0.06]">
              <p className="text-xs text-[#bead89] uppercase tracking-[0.2em] font-semibold mb-3">What I Learned</p>
              <p className="text-[#c4ba9c] leading-relaxed text-sm">
                Treating a personal project with PM rigor doesn&apos;t just improve outcomes; it builds the muscle memory for
                professional project work. The discipline of sprint planning, retrospectives, and automation thinking transfers
                directly. Learning Czech didn&apos;t get easier, the process did. And when the process is right, results follow.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
