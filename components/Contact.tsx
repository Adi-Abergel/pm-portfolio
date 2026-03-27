'use client';

import { useState } from 'react';

const EMAIL = 'adiabargel09@gmail.com';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adi-abergel',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'linkedin.com/in/adi-abergel',
    color: 'hover:text-[#7ab0c8] hover:border-[#4a7a9a]/50',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Adi-Abergel',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: 'github.com/Adi-Abergel',
    color: 'hover:text-[#c8bfa8] hover:border-[#8a8070]/50',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cvEmail, setCvEmail] = useState('');
  const [cvStatus, setCvStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCvSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCvStatus('loading');
    try {
      const res = await fetch('/api/send-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cvEmail }),
      });
      if (res.ok) {
        setCvStatus('success');
        setCvEmail('');
      } else {
        setCvStatus('error');
      }
    } catch {
      setCvStatus('error');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCvStatus('idle');
    setCvEmail('');
  };

  return (
    <section id="contact" className="py-28 px-6 bg-transparent relative overflow-hidden">
      {/* Checkerboard texture */}
      
      {/* Subtle top fade & vignette */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a2220]/18 to-transparent" />
      

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Main CTA panel */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2220]/90 via-[#112b28]/80 to-[#143930]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#bead89]/6 to-[#e8dfc8]/6" />
          <div className="absolute inset-0 border border-[#f8f1dd]/[0.08] rounded-3xl" />

          {/* Decorative gradient line at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#bead89]/50 to-transparent" />

          <div className="relative px-8 py-14 text-center">
            <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Get In Touch
            </p>

            <h2 className="font-display text-[40px] font-bold gradient-text-light italic mb-5 tracking-tight leading-tight">
              Let&apos;s Build Something Together
            </h2>

            <p className="text-[#c4ba9c] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              I&apos;m actively looking for PM opportunities where I can bring
              structure, automation, and clarity to complex projects. If that
              sounds like a match, I&apos;d love to chat.
            </p>

            <p className="text-[#e8dfc8] text-sm mb-1">+420 604 963 525</p>
            <p className="text-[#e8dfc8] text-sm mb-8">{EMAIL}</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCopy}
                className="group inline-flex items-center gap-3 bg-[#bead89] hover:bg-[#e8dfc8] text-[#143930] px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md shadow-[#bead89]/10 hover:shadow-lg hover:shadow-[#bead89]/15 hover:-translate-y-0.5"
              >
                {copied ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
                {copied ? 'Email Copied!' : "Let's Connect"}
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-3 border border-[#bead89]/50 hover:border-[#bead89] text-[#bead89] hover:bg-[#bead89]/10 px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get my CV
              </button>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-5 py-3 rounded-xl glass-card border border-[#f8f1dd]/[0.08] text-[#8a8070] transition-all duration-300 hover:-translate-y-0.5 ${social.color}`}
            >
              <span className="transition-colors">{social.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#f8f1dd] group-hover:text-inherit transition-colors">{social.name}</p>
                <p className="text-xs text-[#e8dfc8]">{social.label}</p>
              </div>
              <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-[#f8f1dd]/[0.05]">
          <div className="flex items-center justify-center gap-2 text-[#e8dfc8] text-xs">
            <span>Built with</span>
            <span className="text-[#e8dfc8] font-medium">Next.js</span>
            <span className="text-[#4a4030]">·</span>
            <span className="text-[#e8dfc8] font-medium">Tailwind CSS</span>
            <span className="text-[#4a4030]">·</span>
            <span className="text-[#e8dfc8] font-medium">Vercel</span>
            <span className="text-[#4a4030]">·</span>
            <span>Adi Abergel {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
      {/* CV Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          {/* Panel */}
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a2220]/95 via-[#112b28]/95 to-[#143930]/95" />
            <div className="absolute inset-0 border border-[#f8f1dd]/[0.1] rounded-2xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#bead89]/50 to-transparent" />

            <div className="relative px-8 py-10">
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#8a8070] hover:text-[#f8f1dd] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {cvStatus === 'success' ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a4a3a]/60 border border-[#3a7a58]/40 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#5a9c78]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#f8f1dd] mb-2">On its way!</h3>
                  <p className="text-[#c4ba9c] text-sm">Check your inbox, my CV should arrive shortly.</p>
                </div>
              ) : (
                <>
                  <p className="text-[#bead89] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Get my CV</p>
                  <h3 className="font-display text-2xl font-bold text-[#f8f1dd] mb-2">Enter your email</h3>
                  <p className="text-[#c4ba9c] text-sm mb-6">I&apos;ll send my CV straight to your inbox.</p>

                  <form onSubmit={handleCvSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={cvEmail}
                      onChange={(e) => setCvEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a2220]/60 border border-[#f8f1dd]/[0.1] text-[#f8f1dd] placeholder-[#52504e] text-sm focus:outline-none focus:border-[#bead89]/50 transition-colors"
                    />

                    {cvStatus === 'error' && (
                      <p className="text-[#c87070] text-xs">Something went wrong. Please try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={cvStatus === 'loading'}
                      className="w-full bg-[#bead89] hover:bg-[#e8dfc8] disabled:opacity-60 text-[#143930] py-3 rounded-full font-semibold text-sm transition-all duration-300"
                    >
                      {cvStatus === 'loading' ? 'Sending…' : 'Send me the CV'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
