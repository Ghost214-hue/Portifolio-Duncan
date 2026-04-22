// components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

// ── CV file path — update this to wherever the PDF is served from ──
const CV_PATH = '/KARENJU_CV.pdf';
const CV_FILENAME = 'KarenJuDuncan_CV.pdf';

export const Navbar = () => {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink]             = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = async () => {
    try {
      const response = await fetch(CV_PATH);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = CV_FILENAME;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // release memory after a short delay
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
    } catch (err) {
      console.error('CV download failed:', err);
      // Fallback: open in new tab so the user can save manually
      window.open(CV_PATH, '_blank');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;600&display=swap');

        .glass-nav {
          background: rgba(6,10,15,0.55);
          border: 1px solid rgba(0,216,255,0.10);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .glass-nav-scrolled {
          background: rgba(6,10,15,0.72);
          border-color: rgba(0,216,255,0.15);
          box-shadow: 0 12px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,216,255,0.07), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        /* Active nav pill */
        .nav-pill-active {
          background: rgba(0,216,255,0.10);
          color: #00d8ff;
          border: 1px solid rgba(0,216,255,0.20);
          box-shadow: 0 0 14px rgba(0,216,255,0.12);
        }
        .nav-pill-idle {
          color: #64748b;
          border: 1px solid transparent;
          transition: all 0.25s ease;
        }
        .nav-pill-idle:hover {
          color: #e2e8f0;
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
        }

        /* Download CV button */
        .btn-cv {
          position: relative;
          background: linear-gradient(135deg, rgba(0,216,255,0.12), rgba(168,85,247,0.12));
          border: 1px solid rgba(0,216,255,0.30);
          color: #00d8ff;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 18px rgba(0,216,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-cv::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,216,255,0.18), rgba(168,85,247,0.18));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-cv:hover::before { opacity: 1; }
        .btn-cv:hover {
          box-shadow: 0 0 28px rgba(0,216,255,0.3), 0 0 60px rgba(0,216,255,0.12);
          transform: translateY(-1px);
          border-color: rgba(0,216,255,0.55);
        }

        /* Mobile overlay */
        .glass-overlay {
          background: rgba(6,10,15,0.90);
          backdrop-filter: blur(32px) saturate(150%);
          -webkit-backdrop-filter: blur(32px) saturate(150%);
        }

        /* Hamburger lines */
        .ham-line {
          display: block;
          height: 2px;
          background: #e2e8f0;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>

      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className={`glass-nav rounded-full px-5 py-3 transition-all duration-500 ${isScrolled ? 'glass-nav-scrolled' : ''}`}>
            <div className="flex items-center justify-between gap-4">

              {/* Logo */}
              <a href="#home" onClick={e => { e.preventDefault(); scrollToSection('home'); }}
                className="flex items-center gap-1 flex-shrink-0 group cursor-pointer"
                style={{ textDecoration: 'none' }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800 }}>
                  <span style={{ color: '#f1f5f9', transition: 'color 0.3s' }}
                    className="group-hover:text-cyan-400">DK</span>
                  <span style={{ color: '#00d8ff' }}>.</span>
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className={`relative px-4 py-1.5 rounded-full text-xs tracking-widest uppercase cursor-pointer transition-all duration-250 ${
                      activeLink === link.href.substring(1) ? 'nav-pill-active' : 'nav-pill-idle'
                    }`}
                    style={{ fontSize: '10px', letterSpacing: '0.1em' }}
                  >
                    {link.label}
                    {activeLink === link.href.substring(1) && (
                      <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: '#00d8ff' }} />
                    )}
                  </button>
                ))}
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Download CV button — desktop */}
                <button
                  onClick={handleDownloadCV}
                  className="hidden md:flex btn-cv items-center gap-2 px-5 py-2 rounded-full cursor-pointer font-semibold relative"
                  style={{ fontSize: '11px', letterSpacing: '0.06em' }}
                  title="Download CV"
                >
                  {/* Download icon */}
                  <svg className="w-3.5 h-3.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="relative z-10">Download CV</span>
                </button>

                {/* Hamburger — mobile */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(12px)',
                  }}
                  aria-label="Toggle menu"
                >
                  <span className="ham-line w-5"
                    style={{ transform: isMobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
                  <span className="ham-line"
                    style={{ width: isMobileMenuOpen ? 0 : '14px', opacity: isMobileMenuOpen ? 0 : 1 }} />
                  <span className="ham-line w-5"
                    style={{ transform: isMobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 glass-overlay flex flex-col items-center justify-center gap-7 p-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative blobs inside overlay */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,216,255,0.06), transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06), transparent)', filter: 'blur(60px)' }} />

        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href.substring(1))}
            className="relative text-2xl font-bold cursor-pointer transition-all duration-300 group"
            style={{
              fontFamily: "'Syne', sans-serif",
              color: activeLink === link.href.substring(1) ? '#00d8ff' : '#94a3b8',
              animationDelay: `${i * 0.05}s`,
            }}
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ background: '#00d8ff' }} />
          </button>
        ))}

        {/* Download CV — mobile */}
        <button
          onClick={() => { handleDownloadCV(); setIsMobileMenuOpen(false); }}
          className="btn-cv flex items-center gap-2 px-7 py-3 rounded-full cursor-pointer font-semibold mt-2 relative"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.06em' }}
        >
          <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="relative z-10">Download CV</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;