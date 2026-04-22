// components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

const CV_PATH = '/KARENJU_CV.pdf';
const CV_FILENAME = 'KarenJuDuncan_CV.pdf';

export const Navbar = () => {
  const [isScrolled, setIsScrolled]             = useState(false);
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

  // Fixed CV download — opens in new tab as primary (most reliable across all servers)
  // If you want forced download, ensure your server sends:
  // Content-Disposition: attachment; filename="KarenJuDuncan_CV.pdf"
  const handleDownloadCV = () => {
    // Try fetch-based download first, fallback to new tab
    fetch(CV_PATH)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = CV_FILENAME;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      })
      .catch(() => {
        // Fallback: open PDF in new tab — user can then save it manually
        window.open(CV_PATH, '_blank', 'noopener,noreferrer');
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;600&display=swap');

        /* ── Light glass nav ── */
        .glass-nav {
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.85);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow:
            0 8px 32px rgba(100,120,160,0.12),
            0 2px 8px rgba(100,120,160,0.08),
            inset 0 1px 0 rgba(255,255,255,0.95),
            inset 0 -1px 0 rgba(200,220,255,0.3);
        }
        .glass-nav-scrolled {
          background: rgba(255,255,255,0.72);
          border-color: rgba(255,255,255,0.95);
          box-shadow:
            0 12px 48px rgba(80,110,180,0.18),
            0 2px 10px rgba(80,110,180,0.1),
            inset 0 1px 0 rgba(255,255,255,1),
            inset 0 -1px 0 rgba(180,210,255,0.4);
        }

        /* Active pill */
        .nav-pill-active {
          background: rgba(14,165,233,0.12);
          color: #0284c7;
          border: 1px solid rgba(14,165,233,0.35);
          box-shadow: 0 0 12px rgba(14,165,233,0.15), inset 0 1px 0 rgba(255,255,255,0.8);
          font-weight: 600;
        }
        .nav-pill-idle {
          color: #475569;
          border: 1px solid transparent;
          transition: all 0.25s ease;
        }
        .nav-pill-idle:hover {
          color: #0f172a;
          background: rgba(255,255,255,0.6);
          border-color: rgba(200,220,255,0.6);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
        }

        /* Download CV btn */
        .btn-cv {
          position: relative;
          background: linear-gradient(135deg, rgba(14,165,233,0.15), rgba(99,102,241,0.12));
          border: 1px solid rgba(14,165,233,0.45);
          color: #0284c7;
          backdrop-filter: blur(12px);
          box-shadow:
            0 4px 16px rgba(14,165,233,0.18),
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -1px 0 rgba(14,165,233,0.15);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-cv::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(14,165,233,0.22), rgba(99,102,241,0.18));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-cv:hover::before { opacity: 1; }
        .btn-cv:hover {
          box-shadow:
            0 8px 28px rgba(14,165,233,0.30),
            inset 0 1px 0 rgba(255,255,255,0.95);
          transform: translateY(-1px);
          border-color: rgba(14,165,233,0.65);
          color: #0369a1;
        }

        /* Mobile overlay */
        .glass-overlay {
          background: rgba(240,248,255,0.88);
          backdrop-filter: blur(36px) saturate(180%);
          -webkit-backdrop-filter: blur(36px) saturate(180%);
        }

        /* Hamburger */
        .ham-line {
          display: block;
          height: 2px;
          background: #334155;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>

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
                <span style={{ fontFamily: "sans-serif", fontSize: '24px', fontWeight: 800 }}>
                  <span style={{ color: '#0f172a', transition: 'color 0.3s' }}
                    className="group-hover:text-sky-500">DK</span>
                  <span style={{ color: '#0284c7' }}>.</span>
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className={`relative px-4 py-1.5 rounded-full cursor-pointer transition-all duration-250 ${
                      activeLink === link.href.substring(1) ? 'nav-pill-active' : 'nav-pill-idle'
                    }`}
                    style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  >
                    {link.label}
                    {activeLink === link.href.substring(1) && (
                      <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ background: '#0284c7' }} />
                    )}
                  </button>
                ))}
              </div>

              {/* Right */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleDownloadCV}
                  className="hidden md:flex btn-cv items-center gap-2 px-5 py-2 rounded-full cursor-pointer font-semibold relative"
                  style={{ fontSize: '12px', letterSpacing: '0.06em' }}
                  title="Download CV"
                >
                  <svg className="w-3.5 h-3.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="relative z-10">Download CV</span>
                </button>

                {/* Hamburger */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(200,220,255,0.7)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95)',
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

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 glass-overlay flex flex-col items-center justify-center gap-8 p-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08), transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent)', filter: 'blur(60px)' }} />

        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href.substring(1))}
            className="relative text-2xl font-bold cursor-pointer transition-all duration-300 group"
            style={{
              fontFamily: "'Syne', sans-serif",
              color: activeLink === link.href.substring(1) ? '#0284c7' : '#334155',
            }}
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
              style={{ background: '#0284c7' }} />
          </button>
        ))}

        <button
          onClick={() => { handleDownloadCV(); setIsMobileMenuOpen(false); }}
          className="btn-cv flex items-center gap-2 px-7 py-3 rounded-full cursor-pointer font-semibold mt-2 relative"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.06em' }}
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