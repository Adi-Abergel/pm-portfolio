import Link from 'next/link';
import ScreenshotLightbox from '@/components/ScreenshotLightbox';

const screenshots = [
  {
    src: '/make/issue-notification.png',
    title: 'Issue Notification — Site to Warehouse',
    description: 'A Google Form submission on-site triggers Make, which formats the report and delivers a structured alert to the warehouse team via Slack.',
  },
  {
    src: '/make/message-to-slack.png',
    title: 'Smart Message Processor — Flow View',
    description: 'The Make scenario that receives free-text from a Google Form and processes it into a concise, actionable message.',
  },
  {
    src: '/make/message-to-slack-channel.png',
    title: 'Smart Message Processor — Slack Output',
    description: 'The processed message lands in the correct Slack channel — clean, structured, and routed automatically.',
  },
  {
    src: '/make/czech-email.png',
    title: 'Daily Czech Text Email',
    description: 'Every day at 12:00, Make sends an email with a short A1-level Czech text. The student reads it and replies with their translation.',
  },
  {
    src: '/make/czech-feedback.png',
    title: 'AI Translation Feedback',
    description: 'When the student\'s reply arrives, Make passes it to Gemini, which compares it to the correct translation and sends back detailed, personalised feedback within seconds.',
  },
];

const automations = [
  {
    id: 'issue-notification',
    title: 'Issue Notification System',
    context: 'Physical Sites Project',
    contextColor: 'bg-[#1a3a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40',
    description:
      'Field staff submit issue reports via Google Form directly from the site. Make picks up the submission, formats it into a clear alert, and routes it to the warehouse team on Slack — replacing ad hoc calls and messages with a consistent, trackable notification flow.',
    trigger: 'Google Form submission',
    triggerIcon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    flow: ['Google Forms', 'Make', 'Slack'],
    outcome: 'Site teams report issues in seconds. Warehouse gets a clean, structured alert — no miscommunication or lost requests.',
  },
  {
    id: 'smart-message',
    title: 'Smart Message Processor',
    context: 'Cross-Project',
    contextColor: 'bg-[#2a1a3a]/60 text-[#b09ac8] border border-[#7a5a9a]/40',
    description:
      'Users submit free-text through a Google Form — no structure required. Make processes the raw input, extracts the key information, and transforms it into a concise, actionable message that gets posted to the right Slack channel automatically. The result: complex or messy communication becomes clear and routable without any manual editing.',
    trigger: 'Google Form free-text submission',
    triggerIcon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    flow: ['Google Forms', 'Make', 'Slack Channel'],
    outcome: 'Messy free-text in, clean actionable message out — routed to the right channel automatically.',
  },
  {
    id: 'czech-suite',
    title: 'Czech Learning Suite',
    context: 'Personal Project',
    contextColor: 'bg-[#1a3a2a]/60 text-[#7ab09a] border border-[#4a8a6a]/40',
    description:
      'Two automations that turn language learning into a structured daily loop — no apps, no subscriptions, just email. The first sends a short A1-level Czech text every day at noon. The second receives the student\'s translation, passes it to Gemini inside Make, and sends back detailed, personalised feedback within seconds.',
    trigger: 'Schedule · Incoming email',
    triggerIcon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    flow: ['Make', 'Gemini', 'Email'],
    subAutomations: [
      { name: 'Daily Czech Text', schedule: 'Every day · 12:00 PM', detail: 'A short A1-level Czech text is sent by email. The student reads it and replies with their translation.' },
      { name: 'Translation Feedback', schedule: 'On every new email reply', detail: 'Make receives the reply, sends it to Gemini for comparison, and returns detailed personalised feedback within seconds.' },
    ],
    outcome: 'A full learning loop — text delivered, translation submitted, feedback returned — entirely automated.',
  },
];

const capabilities = [
  { title: 'Form-triggered workflows', description: 'Any Google Form submission can kick off a multi-step automation — no code, no delay.' },
  { title: 'AI-powered message processing', description: 'Raw free-text transformed into structured, actionable output before it reaches anyone.' },
  { title: 'Scheduled data delivery', description: 'Timed automations that pull from databases and deliver exactly what\'s needed, when it\'s needed.' },
  { title: 'Cross-app routing', description: 'Data moves between Google Forms, Gemini, Slack, and Email without any manual handoffs.' },
  { title: 'AI-powered feedback loops', description: 'Make passes user input to Gemini, which processes and evaluates it, then returns personalised feedback automatically — in seconds.' },
  { title: 'Zero-maintenance pipelines', description: 'Once built, these flows run silently in the background — reliable and hands-off.' },
];

const toolColors: Record<string, string> = {
  'Google Forms':  'bg-[#1a3a1a]/60 text-[#7ac87a] border border-[#4a8a4a]/40',
  'Make':          'bg-[#2a1a3a]/60 text-[#b09ac8] border border-[#7a5a9a]/40',
  'Slack':         'bg-[#1a3a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40',
  'Slack Channel': 'bg-[#1a3a4a]/60 text-[#7ab0c8] border border-[#4a7a9a]/40',
  'Gemini':        'bg-[#1a2a3a]/60 text-[#7a9ac8] border border-[#4a6a9a]/40',
  'Email':         'bg-[#3a3a1a]/60 text-[#c8c87a] border border-[#8a8a4a]/40',
};

export default function MakePage() {
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

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border border-[#7a5a9a]/50 bg-[#2a1a3a]/50">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#6D00CC">
            <path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
          </svg>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#f8f1dd] mb-4 tracking-tight">
          Make
        </h1>
        <p className="text-[#8a8070] text-sm mb-4">No-Code Automation · Make (formerly Integromat)</p>
        <p className="text-[#c4ba9c] text-lg leading-relaxed max-w-2xl mx-auto">
          Make is where I turn repetitive work into automated pipelines. From routing
          site reports to the right team, to processing free-text into structured Slack messages,
          or keeping a language learning project running on schedule — these automations run silently
          so nothing falls through the cracks.
        </p>
      </section>

      {/* ── Automations ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Automation Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">3 Automations · 3 Contexts</h2>
          <p className="text-[#c4ba9c] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Built across different projects — each one solving a communication or consistency problem.
          </p>
        </div>

        <div className="space-y-6">
          {automations.map((auto) => (
            <div key={auto.id} className="glass-card glow-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5">

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                <div className="flex items-center gap-3 flex-1">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-[#f8f1dd] text-xl">{auto.title}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${auto.contextColor}`}>
                        {auto.context}
                      </span>
                    </div>
                    <p className="text-xs text-[#62604e] flex items-center gap-1.5 mt-1">
                      {auto.triggerIcon}
                      Trigger: {auto.trigger}
                    </p>
                  </div>
                </div>

                {/* Tool flow */}
                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  {auto.flow.map((tool, i) => (
                    <div key={tool} className="flex items-center gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${toolColors[tool] ?? 'bg-[#2a2a20]/60 text-[#c8c4b0] border border-[#8a8670]/40'}`}>
                        {tool}
                      </span>
                      {i < auto.flow.length - 1 && (
                        <svg className="w-3 h-3 text-[#62604e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#c4ba9c] text-sm leading-relaxed mb-5">{auto.description}</p>

              {/* Sub-automations (Czech suite) */}
              {'subAutomations' in auto && auto.subAutomations && (
                <div className="space-y-3 mb-5">
                  {auto.subAutomations.map((sub) => (
                    <div key={sub.name} className="rounded-xl p-4 bg-[#0a2220]/40 border border-[#f8f1dd]/[0.05]">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7ab09a]" />
                          <p className="font-semibold text-[#f8f1dd] text-sm">{sub.name}</p>
                        </span>
                        <span className="text-xs text-[#62604e] flex items-center gap-1 ml-3 sm:ml-0">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {sub.schedule}
                        </span>
                      </div>
                      <p className="text-[#8a8070] text-xs ml-3">{sub.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Outcome */}
              <div className="flex items-start gap-2 pt-4 border-t border-[#f8f1dd]/[0.06]">
                <svg className="w-4 h-4 text-[#bead89] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-[#c4ba9c]"><span className="text-[#bead89] font-semibold">Outcome: </span>{auto.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Screenshots</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">Inside the Scenarios</h2>
        </div>
        <ScreenshotLightbox screenshots={screenshots} />
      </section>

      {/* ── Capabilities ── */}
      <section className="relative z-10 px-6 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#f8f1dd] tracking-tight">What I Build With Make</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="glass-card glow-border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-[#2a1a3a]/50 border border-[#7a5a9a]/40 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#b09ac8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#f8f1dd] text-sm mb-1">{cap.title}</p>
                  <p className="text-[#c4ba9c] text-sm leading-relaxed">{cap.description}</p>
                </div>
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
