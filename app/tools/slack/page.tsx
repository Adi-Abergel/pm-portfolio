import Link from 'next/link';
import ScreenshotLightbox from '@/components/ScreenshotLightbox';

const screenshots = [
  {
    src: '/slack/make-to-slack.png',
    title: 'Automated Messages from Make',
    description: 'Site issues submitted via Google Form are automatically formatted by Make and posted as structured alerts to a dedicated Slack channel.',
  },
];

const integrations = [
  {
    tool: 'Make',
    color: 'bg-[#2a1a3a]/60 text-[#b09ac8] border border-[#7a5a9a]/40',
    dot: 'bg-[#b09ac8]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#6D00CC">
        <path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
      </svg>
    ),
    title: 'Make → Slack',
    description: 'Automated pipelines built in Make deliver messages directly to Slack with no manual work required. Daily reminders and weekly progress reports are triggered on a schedule and posted to dedicated channels.',
    automations: [
      { name: 'Daily Reminder', trigger: 'Daily', detail: 'Automated reminder sent to Slack on a daily schedule' },
      { name: 'Weekly Progress Report', trigger: 'Weekly', detail: 'TickTick completed tasks aggregated and posted to Slack' },
      { name: 'Jira Sprint Auto-Reset', trigger: 'According to project needs', detail: 'New Jira sprint created and summary posted to Slack' },
    ],
  },
  {
    tool: 'Jira',
    color: 'bg-[#1a3a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40',
    dot: 'bg-[#7ab0c8]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0052CC">
        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
      </svg>
    ),
    title: 'Jira → Slack',
    description: 'Sprint updates and task status changes are visible in Slack so nothing gets missed. Sprint summaries are auto-posted at the start of each week, keeping the whole workflow visible in one place.',
    automations: [
      { name: 'Sprint Kick-off Summary', trigger: 'According to project needs', detail: 'New sprint stories listed and posted to Slack' },
    ],
  },
];

const useCases = [
  { title: 'Structured async communication', description: 'Organised channels keep conversations structured and searchable, no information lost in chat.' },
  { title: 'Centralised notifications', description: 'All signals from Jira, Make, and TickTick flow into Slack, making it the single source of live updates.' },
  { title: 'Automation delivery layer', description: 'Slack acts as the output layer for every Make automation: reminders, reports, and sprint updates all land here.' },
  { title: 'Progress visibility', description: 'Dedicated channels for daily tasks and weekly reviews make progress tangible and consistent.' },
];

export default function SlackPage() {
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

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border border-[#4a8a6a]/50 bg-[#1a3a2a]/50">
          <svg viewBox="0 0 127 127" className="w-9 h-9" fill="none">
            <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A" />
            <path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0" />
            <path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D" />
            <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E" />
          </svg>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#f8f1dd] mb-4 tracking-tight">
          Slack
        </h1>
        <p className="text-[#8a8070] text-sm mb-4">Communication · Slack Technologies</p>
        <p className="text-[#c4ba9c] text-lg leading-relaxed max-w-2xl mx-auto">
          More than a messaging app, Slack is the central hub where every tool in the stack delivers its output.
          Jira updates, Make automations, and TickTick reports all converge here, making it the
          single source of live project signals.
        </p>
      </section>

      {/* ── Use cases ── */}
      <section className="relative z-10 px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((u) => (
            <div key={u.title} className="glass-card glow-border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-[#1a3a2a]/50 border border-[#3a7a58]/40 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#5a9c78]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

      {/* ── Screenshot ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Screenshots</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Inside the Workspace</h2>
        </div>
        <ScreenshotLightbox screenshots={screenshots} />
      </section>

      {/* ── Integrations ── */}
      <section className="relative z-10 px-6 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Integrations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Every Tool Talks to Slack</h2>
          <p className="text-[#c4ba9c] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Slack sits at the end of automation pipelines, where all signals arrive and nothing goes unseen.
          </p>
        </div>

        <div className="space-y-6">
          {integrations.map((integration) => (
            <div key={integration.tool} className="glass-card glow-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#0a2220]/50 border border-[#f8f1dd]/[0.08] flex items-center justify-center shrink-0">
                  {integration.icon}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-[#f8f1dd] text-lg">{integration.title}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${integration.color}`}>
                    {integration.tool}
                  </span>
                </div>
              </div>

              <p className="text-[#c4ba9c] text-sm leading-relaxed mb-5">{integration.description}</p>

              {/* Automations */}
              <div className="space-y-3">
                {integration.automations.map((auto) => (
                  <div key={auto.name} className="rounded-xl p-4 bg-[#0a2220]/40 border border-[#f8f1dd]/[0.05]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${integration.dot}`} />
                        <p className="font-semibold text-[#f8f1dd] text-sm">{auto.name}</p>
                      </span>
                      <span className="text-xs text-[#e8dfc8] flex items-center gap-1 ml-3 sm:ml-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {auto.trigger}
                      </span>
                    </div>
                    <p className="text-[#8a8070] text-xs ml-3">{auto.detail}</p>
                  </div>
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
