export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-transparent">
      {/* Checkerboard texture */}
      
      {/* Subtle vignette */}
      

      {/* Content */}
      <div className="relative z-10 max-w-3xl pt-20 pb-24">
        {/* Logo */}
        <div className="relative inline-block mb-6 w-full max-w-xl mx-auto">
          <img src="/logo-bg.svg" alt="" className="absolute inset-0 w-full h-full rounded-2xl object-cover opacity-80" />
          <img src="/logo.svg" alt="Adi Abergel" className="relative w-full px-8 py-6" />
        </div>

        {/* Subheadline */}
        <p className="text-[#c4ba9c] text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          I turn complex goals into structured systems,{' '}
          <span className="text-[#f8f1dd] font-medium">because the right process is what makes results possible</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tools"
            className="group inline-flex items-center gap-2 border border-[#f8f1dd]/20 hover:border-[#bead89]/60 text-[#c4ba9c] hover:text-[#f8f1dd] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#f8f1dd]/[0.04] hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
            View My Toolkit
          </a>
          <a
            href="#case-study"
            className="group inline-flex items-center gap-2 border border-[#f8f1dd]/20 hover:border-[#bead89]/60 text-[#c4ba9c] hover:text-[#f8f1dd] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#f8f1dd]/[0.04] hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Case Study
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-[#f8f1dd]/20 hover:border-[#bead89]/60 text-[#c4ba9c] hover:text-[#f8f1dd] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#f8f1dd]/[0.04] hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          {[
            { value: '5+', label: 'PM Tools' },
            { value: '3', label: 'PM Workflows' },
            { value: '1', label: 'Project in progress' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-[#8a8070] mt-0.5 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#e8dfc8] animate-float">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#62604e] to-transparent" />
      </div>
    </section>
  );
}
