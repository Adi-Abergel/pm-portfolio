'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Screenshot {
  src: string;
  title: string;
  description: string;
}

export default function ScreenshotLightbox({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState<Screenshot | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close]);

  const modal = active ? (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={close}
    >
      {/* Backdrop */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} />

      {/* Modal */}
      <div
        style={{ position: 'relative', zIndex: 10000, width: '100%', maxWidth: '72rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.6)', border: '1px solid rgba(248,241,221,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ background: '#0a1a18' }}>
          <Image
            src={active.src}
            alt={active.title}
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            style={{ maxHeight: '80vh' }}
            unoptimized
          />
        </div>
        <div style={{ background: 'rgba(17,43,40,0.97)', borderTop: '1px solid rgba(248,241,221,0.06)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <p style={{ fontWeight: 700, color: '#f8f1dd', fontSize: '0.875rem' }}>{active.title}</p>
            <p style={{ color: '#8a8070', fontSize: '0.75rem', marginTop: '0.125rem' }}>{active.description}</p>
          </div>
          <button
            onClick={close}
            style={{ flexShrink: 0, width: '2rem', height: '2rem', borderRadius: '9999px', border: '1px solid rgba(248,241,221,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8a8070', background: 'transparent', cursor: 'pointer' }}
            aria-label="Close"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Screenshot cards */}
      <div className="space-y-10">
        {screenshots.map((s) => (
          <div key={s.src} className="glass-card glow-border rounded-2xl overflow-hidden">
            <button
              onClick={() => setActive(s)}
              className="relative w-full bg-[#0a2220]/60 border-b border-[#f8f1dd]/[0.06] block group cursor-zoom-in"
              aria-label={`View full size: ${s.title}`}
            >
              <Image
                src={s.src}
                alt={s.title}
                width={1200}
                height={675}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-[#0a2220]/0 group-hover:bg-[#0a2220]/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#143930]/80 backdrop-blur-sm border border-[#bead89]/30 rounded-full px-4 py-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#bead89]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-[#bead89] text-xs font-medium">Full view</span>
                </div>
              </div>
            </button>
            <div className="px-6 py-5">
              <h3 className="font-bold text-[#f8f1dd] text-lg mb-1">{s.title}</h3>
              <p className="text-[#c4ba9c] text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Portal — renders directly on document.body, outside all parent constraints */}
      {mounted && createPortal(modal, document.body)}
    </>
  );
}
