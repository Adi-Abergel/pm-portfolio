'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'ToolKit', href: '#tools' },
  { label: 'Case Study', href: '#case-study' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#143930]/90 backdrop-blur-xl border-b border-[#f8f1dd]/[0.06] shadow-lg shadow-black/20'
          : 'bg-[#143930]/75 backdrop-blur-md border-b border-[#f8f1dd]/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo / Name — LinkedIn icon links to profile */}
        <a
          href="https://www.linkedin.com/in/adi-abergel"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-sm border border-[#bead89]/60 flex items-center justify-center group-hover:border-[#bead89] transition-colors duration-200">
            <svg className="w-4 h-4 text-[#bead89]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <span className="text-base font-semibold text-[#f8f1dd] tracking-tight group-hover:text-[#bead89] transition-colors">
            Adi Abergel
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-[#c4ba9c] hover:text-[#f8f1dd] rounded-lg hover:bg-[#f8f1dd]/[0.06] transition-all duration-200 font-medium"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/about"
            className="px-4 py-2 text-sm text-[#c4ba9c] hover:text-[#f8f1dd] rounded-lg hover:bg-[#f8f1dd]/[0.06] transition-all duration-200 font-medium"
          >
            My Story
          </Link>
          <button
            onClick={() => handleNavClick('#contact')}
            className="ml-3 px-4 py-2 text-sm font-medium bg-[#bead89] hover:bg-[#cfc09e] text-[#143930] rounded-lg transition-all duration-200 shadow-lg shadow-[#a07840]/20 hover:shadow-[#bead89]/30"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#f8f1dd]/[0.06] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#c4ba9c] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#c4ba9c] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#c4ba9c] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#143930]/95 backdrop-blur-xl border-b border-[#f8f1dd]/[0.06]`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-sm text-[#c4ba9c] hover:text-[#f8f1dd] rounded-lg hover:bg-[#f8f1dd]/[0.06] transition-all font-medium"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-left px-4 py-3 text-sm text-[#c4ba9c] hover:text-[#f8f1dd] rounded-lg hover:bg-[#f8f1dd]/[0.06] transition-all font-medium"
          >
            My Story
          </Link>
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 px-4 py-3 text-sm font-medium bg-[#bead89] hover:bg-[#cfc09e] text-[#143930] rounded-lg transition-all text-center"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}
