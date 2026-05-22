'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Contact', href: '#contact' },
];

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17" style={{ height: '68px' }}>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-200">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-extrabold text-blue-900 leading-tight tracking-tight">SHIV CLASSES</div>
              <div className="text-xs text-slate-500 leading-none font-medium">Excellence in Education</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+91XXXXXXXXXX"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-blue-700 border border-blue-200 text-sm font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all"
            >
              <PhoneIcon />
              Call Now
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md shadow-blue-200/60"
            >
              Enquire Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-blue-700 border border-blue-200 font-semibold rounded-lg text-sm"
                >
                  <PhoneIcon /> Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg text-sm"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
