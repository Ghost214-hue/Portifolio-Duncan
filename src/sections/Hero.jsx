// components/HomePage.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Backend Architect",
    "CS Graduate",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    setTypedText(currentRole.substring(0, charIndex));
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { value: "2+", label: "Years Exp" },
    { value: "3+", label: "Major Projects" },
    { value: "2", label: "Certifications" },
    { value: "20+", label: "Technologies" },
  ];

  return (
    <>
      {/* Inject keyframes + glass utilities into a style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-float       { animation: float 4s ease-in-out infinite; }
        .animate-spin-slow   { animation: spin-slow 14s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 10s linear infinite; }
        .animate-fade-up     { animation: fadeSlideUp 0.7s ease forwards; }

        /* glassmorphism card */
        .glass-card {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.10);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        /* deeper glass panel */
        .glass-deep {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(0,216,255,0.12);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,216,255,0.1);
        }
        /* frosted badge */
        .glass-badge {
          background: rgba(0,216,255,0.08);
          border: 1px solid rgba(0,216,255,0.25);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 0 20px rgba(0,216,255,0.15), inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .btn-cyan {
          background: linear-gradient(135deg, rgba(0,216,255,0.85), rgba(0,180,230,0.9));
          color: #000;
          border: 1px solid rgba(0,216,255,0.6);
          box-shadow: 0 0 24px rgba(0,216,255,0.35), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .btn-cyan:hover {
          box-shadow: 0 0 40px rgba(0,216,255,0.55), 0 0 80px rgba(0,216,255,0.2);
          transform: translateY(-2px);
        }
        .btn-outline {
          background: rgba(255,255,255,0.04);
          color: #e2e8f0;
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07);
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(0,216,255,0.07);
          border-color: rgba(0,216,255,0.35);
          box-shadow: 0 0 24px rgba(0,216,255,0.2);
          transform: translateY(-2px);
        }

        .shimmer-text {
          background: linear-gradient(90deg, #00d8ff, #a855f7, #00d8ff, #a855f7);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(0,216,255,0.1);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,216,255,0.08);
          transition: all 0.35s ease;
        }
        .stat-card:hover {
          background: rgba(0,216,255,0.06);
          border-color: rgba(0,216,255,0.28);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0,216,255,0.15);
          transform: translateY(-3px);
        }
      `}</style>

      <section
        id="home"
        style={{ fontFamily: "'Syne', sans-serif", background: '#060a0f' }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* ── Deep ambient blobs ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,216,255,0.12) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'pulse 6s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'pulse 8s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', filter: 'blur(100px)', transform: 'translate(-50%,-50%)' }} />

          {/* Fine dot-grid */}
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(rgba(0,216,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        {/* ── Main layout ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-24">

            {/* ── LEFT — Text content ── */}
            <div className="flex-1 text-center lg:text-left" style={{ animation: 'fadeSlideUp 0.8s ease forwards' }}>

              {/* Status badge */}
              <div className="inline-flex items-center gap-2.5 glass-badge rounded-full px-5 py-2 mb-8 animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: '#22c55e' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '0.1em', color: '#00d8ff' }}>
                  Available for Opportunities
                </span>
              </div>

              {/* Name */}
              <h1 style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.05 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-5">
                <span style={{ color: '#f1f5f9' }}>Karen Ju</span>
                <br />
                <span className="shimmer-text">Duncan</span>
              </h1>

              {/* Typed role */}
              <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#64748b', fontSize: '15px' }}>&gt;</span>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '18px', color: '#4ade80' }}>
                  {typedText}
                  <span className="inline-block ml-1 align-middle"
                    style={{ width: '2px', height: '20px', background: '#4ade80', animation: 'pulse 1s ease-in-out infinite', display: 'inline-block' }} />
                </div>
              </div>

              {/* Bio */}
              <p style={{ color: '#94a3b8', lineHeight: 1.75, maxWidth: '580px' }}
                className="text-sm md:text-base mb-8 mx-auto lg:mx-0">
                Innovative Full-Stack Developer with a Computer Science degree and demonstrated experience
                building scalable web applications for the water and sanitation sector. Skilled in modern
                JavaScript frameworks, RESTful API design, and database optimization—architecting solutions
                from HRM systems to regulatory reporting tools trained by{' '}
                <span style={{ color: '#00d8ff' }}>St. Paul's University</span>.
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="btn-cyan px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 group"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>
                  View Projects
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="btn-outline px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 group"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>
                  Get in Touch
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-card rounded-2xl p-4 text-center cursor-default"
                    style={{ animationDelay: `${i * 0.1}s` }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 800, color: '#00d8ff' }}
                      className="mb-1">{stat.value}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#475569', letterSpacing: '0.12em' }}
                      className="uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT — Profile image ── */}
            <div className="flex-1 flex justify-center lg:justify-end"
              style={{ animation: 'fadeSlideUp 1s ease 0.2s forwards', opacity: 0 }}>
              <div className="relative group">

                {/* Ambient glow layers */}
                <div className="absolute -inset-10 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(0,216,255,0.22) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse 5s ease-in-out infinite' }} />
                <div className="absolute -inset-6 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)', filter: 'blur(30px)', animation: 'pulse 7s ease-in-out infinite 2s' }} />

                {/* Rotating rings */}
                <div className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
                  style={{ border: '2px dashed rgba(0,216,255,0.35)' }} />
                <div className="absolute inset-10 rounded-full animate-spin-slow-reverse pointer-events-none"
                  style={{ border: '1px dotted rgba(168,85,247,0.3)' }} />

                {/* Image container */}
                <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden"
                  style={{
                    border: '3px solid rgba(0,216,255,0.55)',
                    boxShadow: '0 0 60px rgba(0,216,255,0.4), 0 0 120px rgba(0,216,255,0.15), inset 0 0 40px rgba(0,216,255,0.06)',
                    background: 'linear-gradient(135deg, #0a1628, #060a0f)',
                    transition: 'box-shadow 0.5s ease',
                  }}>
                  <img
                    src="/src/assets/portfolio.jpeg"
                    alt="Karen Ju Duncan"
                    className="w-full h-full object-cover scale-105"
                  />
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(0,216,255,0.18), transparent)' }} />
                  {/* Inner rim */}
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: '1px solid rgba(0,216,255,0.2)', boxShadow: 'inset 0 0 30px rgba(0,216,255,0.08)' }} />
                </div>

                {/* Floating accent dots */}
                {[
                  { top: '-6%', right: '-6%', size: 14, color: '#00d8ff', delay: '0s' },
                  { bottom: '-4%', left: '-4%', size: 11, color: '#00b8e0', delay: '0.5s' },
                  { top: '50%', right: '-8%', size: 7,  color: '#a855f7', delay: '1s' },
                  { top: '20%', left: '-7%', size: 9,   color: '#818cf8', delay: '1.5s' },
                ].map((d, i) => (
                  <span key={i} className="absolute rounded-full animate-pulse pointer-events-none"
                    style={{
                      top: d.top, bottom: d.bottom, left: d.left, right: d.right,
                      width: d.size, height: d.size,
                      background: d.color, filter: 'blur(3px)',
                      animationDelay: d.delay,
                      boxShadow: `0 0 10px ${d.color}`,
                    }} />
                ))}
              </div>
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#475569', letterSpacing: '0.15em' }}>SCROLL</span>
            <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #00d8ff, transparent)' }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;