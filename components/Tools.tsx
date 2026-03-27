const tools = [
  {
    name: 'Jira',
    href: '/tools/jira',
    category: 'Project Tracking',
    description: 'Sprint planning, backlog management, and tracking epics from idea to delivery.',
    useFor: 'Structuring sprints & managing backlogs',
    glowColor: 'rgba(38, 132, 255, 0.15)',
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#0052CC" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    href: '/tools/make',
    category: 'Automation',
    description: 'Building no-code workflows that connect apps, automate repetitive tasks, and save hours every week.',
    useFor: 'No-code automation pipelines',
    glowColor: 'rgba(106, 74, 122, 0.15)',
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#6D00CC" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    href: '/tools/notion',
    category: 'Documentation',
    description: 'Structured knowledge bases, project wikis, and roadmaps that keep everyone aligned.',
    useFor: 'Wikis, docs & roadmap planning',
    glowColor: 'rgba(255, 255, 255, 0.08)',
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#f8f1dd" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    href: '/tools/slack',
    category: 'Communication',
    description: 'Async-first communication, organized channels, and integrations that bring all signals into one place.',
    useFor: 'Async team comms & integrations',
    glowColor: 'rgba(74, 194, 107, 0.12)',
    logo: (
      <svg viewBox="0 0 127 127" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A" />
        <path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0" />
        <path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D" />
        <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E" />
      </svg>
    ),
  },
  {
    name: 'TickTick',
    href: '/tools/ticktick',
    category: 'Tracking Productivity',
    description: 'Daily task management — outlining the workflows, tracking teams productivity and backlog.',
    useFor: 'Daily tasks & habit formation',
    glowColor: 'rgba(37, 99, 235, 0.15)',
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#4772FA" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3-5.128 0-9.3-4.172-9.3-9.3 0-5.128 4.172-9.3 9.3-9.3V0Zm7.4 2.583-7.505 9.371L8.388 9.08l-2.002 2.436 4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617L19.4 2.583Z" />
      </svg>
    ),
  },
];

export default function Tools() {
  return (
    <section id="tools" className="pt-10 pb-28 px-6 bg-transparent relative overflow-hidden">
      {/* Checkerboard texture */}
      
      {/* Subtle top fade & vignette */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a2220]/18 to-transparent" />
      

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Toolkit
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f8f1dd] mb-4 tracking-tight">
            The Tools Behind the Process
          </h2>
          <p className="text-[#c4ba9c] mt-4 max-w-xl mx-auto leading-relaxed">
            Every great PM has a stack. These are the tools I use to plan,
            execute, and automate — from big-picture roadmaps to daily tasks.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href ?? '#'}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 34, 32, 0.55) 0%, rgba(20, 57, 48, 0.38) 100%)',
                border: '1px solid rgba(190, 173, 137, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Logo */}
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {tool.logo}
              </div>

              {/* Category label */}
              <p className="text-xs uppercase tracking-widest font-semibold mb-1.5" style={{ color: '#bead89' }}>
                {tool.category}
              </p>

              {/* Tool name */}
              <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: '#f8f1dd' }}>
                {tool.name}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#c4ba9c' }}>
                {tool.description}
              </p>

              {/* "I use it for" tag */}
              <div className="flex items-center gap-2 pt-4" style={{ borderTop: '1px solid rgba(190, 173, 137, 0.15)' }}>
                <svg className="w-3.5 h-3.5 shrink-0" style={{ color: '#bead89' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: '#c4ba9c' }}>{tool.useFor}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
