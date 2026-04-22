// components/HomePage.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────────
   CODE RAIN CANVAS
   Soft sky-blue / indigo characters drift downward at low
   opacity. A frosted overlay sits above the canvas so the
   characters look as if they're visible *through* glass.
───────────────────────────────────────────────────────────── */
const CodeRain = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const colsRef   = useRef([]);

  // Mix of katakana + code symbols for that dev aesthetic
  const CHARS =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\=+*&%$#@!?|~^;:_アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\=+*&%$#@!?|~^;:_';

  const buildCols = useCallback((W, H) => {
    const FONT   = 13;
    const count  = Math.floor(W / FONT);
    const rows   = Math.ceil(H / FONT) + 6;
    colsRef.current = Array.from({ length: count }, () => ({
      y:       -(Math.random() * rows * FONT),   // stagger start above
      speed:   0.35 + Math.random() * 0.75,
      rows,
      chars:   Array.from({ length: rows }, () =>
                 CHARS[Math.floor(Math.random() * CHARS.length)]),
      alpha:   0.045 + Math.random() * 0.08,     // very subtle
      hue:     Math.random() < 0.65 ? 201 : 243, // sky-blue : indigo
      sat:     70 + Math.random() * 20,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx    = canvas.getContext('2d');
    const FONT   = 13;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      buildCols(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let last = 0;
    const FPS = 24; // low FPS keeps it subtle & cheap
    const STEP = 1000 / FPS;

    const draw = (ts) => {
      animRef.current = requestAnimationFrame(draw);
      if (ts - last < STEP) return;
      last = ts;

      const W = canvas.width;
      const H = canvas.height;

      // Very slow fade — long, wispy trails
      ctx.fillStyle = 'rgba(240,248,255,0.18)';
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${FONT}px 'JetBrains Mono', monospace`;

      colsRef.current.forEach((col, ci) => {
        const x = ci * FONT;

        col.chars.forEach((ch, ri) => {
          const y = col.y + ri * FONT;
          if (y < 0 || y > H) return;

          const isHead  = ri === col.chars.length - 1;
          const fade    = 1 - ri / col.rows;
          const a       = isHead
            ? Math.min(col.alpha * 4, 0.50)
            : col.alpha * fade * 0.9;

          ctx.globalAlpha = a;
          ctx.fillStyle   = `hsl(${col.hue},${col.sat}%,42%)`;
          ctx.fillText(ch, x, y);

          // Random char mutation (rare)
          if (Math.random() < 0.004)
            col.chars[ri] = CHARS[Math.floor(Math.random() * CHARS.length)];
        });

        col.y += col.speed;

        // Reset when fully off-screen
        if (col.y > H + col.rows * FONT) {
          col.y     = -(col.rows * FONT * (0.3 + Math.random() * 0.7));
          col.speed = 0.35 + Math.random() * 0.75;
          col.alpha = 0.045 + Math.random() * 0.08;
          col.hue   = Math.random() < 0.65 ? 201 : 243;
        }
      });

      ctx.globalAlpha = 1;
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [buildCols]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 1, pointerEvents: 'none',
      }}
    />
  );
};

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
const Hero = () => {
  const [typedText,  setTypedText]  = useState('');
  const [roleIndex,  setRoleIndex]  = useState(0);
  const [charIndex,  setCharIndex]  = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'Software Engineer',
    'Backend Architect',
    'CS Graduate',
  ];

  useEffect(() => {
    const current = roles[roleIndex];
    let t;
    if (isDeleting) {
      if (charIndex > 0) t = setTimeout(() => setCharIndex(c => c - 1), 48);
      else { setIsDeleting(false); setRoleIndex(r => (r + 1) % roles.length); }
    } else {
      if (charIndex < current.length) t = setTimeout(() => setCharIndex(c => c + 1), 95);
      else t = setTimeout(() => setIsDeleting(true), 2200);
    }
    setTypedText(current.substring(0, charIndex));
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { value: '2+',  label: 'Years Exp'      },
    { value: '3+',  label: 'Major Projects' },
    { value: '2',   label: 'Certifications' },
    { value: '20+', label: 'Technologies'   },
  ];

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-14px); }
        }
        @keyframes spin-cw  { to { transform:rotate(360deg); } }
        @keyframes spin-ccw { to { transform:rotate(-360deg); } }
        @keyframes shimmer {
          0%   { background-position:-220% center; }
          100% { background-position: 220% center; }
        }
        @keyframes riseIn {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50%      { opacity:0; }
        }
        @keyframes scrollBounce {
          0%,100% { transform:translateX(-50%) translateY(0);   }
          50%      { transform:translateX(-50%) translateY(6px); }
        }

        .hero-float    { animation:float   4.6s ease-in-out infinite; }
        .spin-cw       { animation:spin-cw  20s linear infinite; }
        .spin-ccw      { animation:spin-ccw 16s linear infinite; }
        .hero-rise     { animation:riseIn  0.85s ease forwards; }
        .hero-rise-2   { animation:riseIn  0.85s ease 0.25s forwards; opacity:0; }
        .cursor-blink  { animation:blink    1s step-end infinite; }
        .scroll-bounce { animation:scrollBounce 2.2s ease-in-out infinite; }

        /* ── Background ── */
        .hero-bg {
          background:
            radial-gradient(ellipse 80% 60% at 15% 18%, rgba(186,230,255,0.58) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 85% 82%, rgba(199,210,254,0.48) 0%, transparent 55%),
            linear-gradient(158deg, #f0f8ff 0%, #eef2ff 48%, #f8fafc 100%);
        }

        /* ── Frosted glass layer over the canvas ──
           Opacity 0.60 = code rain is visible but feels behind glass.
           Raise it toward 0.78 to make rain more subtle. ── */
        .frost-veil {
          position:absolute; inset:0;
          background:rgba(240,249,255,0.60);
          backdrop-filter:blur(0.5px);
          -webkit-backdrop-filter:blur(0.5px);
          z-index:2; pointer-events:none;
        }

        /* ── Glass UI components ── */
        .glass-badge {
          background:rgba(255,255,255,0.84);
          border:1px solid rgba(14,165,233,0.28);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          box-shadow:0 4px 18px rgba(14,165,233,0.10), inset 0 1px 0 rgba(255,255,255,1);
        }
        .stat-card {
          background:rgba(255,255,255,0.66);
          border:1px solid rgba(255,255,255,0.96);
          backdrop-filter:blur(22px) saturate(180%);
          -webkit-backdrop-filter:blur(22px) saturate(180%);
          box-shadow:
            0 8px 28px rgba(100,130,200,0.10),
            inset 0 2px 0 rgba(255,255,255,1),
            inset 0 -1px 0 rgba(180,210,255,0.20);
          transition:all 0.35s ease;
        }
        .stat-card:hover {
          background:rgba(255,255,255,0.88);
          border-color:rgba(14,165,233,0.32);
          box-shadow:0 14px 40px rgba(14,165,233,0.13), inset 0 2px 0 rgba(255,255,255,1);
          transform:translateY(-4px);
        }
        .btn-primary {
          background:linear-gradient(135deg,#0ea5e9,#0284c7);
          color:#fff;
          border:1px solid rgba(14,165,233,0.50);
          box-shadow:0 8px 28px rgba(14,165,233,0.30), inset 0 1px 0 rgba(255,255,255,0.20);
          transition:all 0.3s ease;
        }
        .btn-primary:hover {
          background:linear-gradient(135deg,#38bdf8,#0ea5e9);
          box-shadow:0 14px 42px rgba(14,165,233,0.46), inset 0 1px 0 rgba(255,255,255,0.28);
          transform:translateY(-2px);
        }
        .btn-glass {
          background:rgba(255,255,255,0.68);
          color:#334155;
          border:1px solid rgba(255,255,255,0.96);
          backdrop-filter:blur(14px);
          box-shadow:0 4px 20px rgba(100,130,200,0.11), inset 0 2px 0 rgba(255,255,255,1);
          transition:all 0.3s ease;
        }
        .btn-glass:hover {
          background:rgba(255,255,255,0.90);
          border-color:rgba(14,165,233,0.35);
          box-shadow:0 8px 28px rgba(14,165,233,0.15), inset 0 2px 0 rgba(255,255,255,1);
          transform:translateY(-2px);
          color:#0284c7;
        }

        /* ── Name shimmer ── */
        .shimmer-text {
          background:linear-gradient(90deg,#0ea5e9,#6366f1,#0ea5e9,#6366f1);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 5s linear infinite;
        }

        /* ── Photo ── */
        .photo-frame {
          border:4px solid rgba(255,255,255,0.97);
          box-shadow:
            0 0 0 1px rgba(14,165,233,0.20),
            0 24px 56px rgba(14,165,233,0.20),
            0 8px 22px rgba(100,130,200,0.13),
            inset 0 0 0 1px rgba(255,255,255,0.80);
          background:white;
          transition:box-shadow 0.45s ease, transform 0.45s ease;
        }
        .photo-frame:hover {
          box-shadow:
            0 0 0 2px rgba(14,165,233,0.40),
            0 32px 72px rgba(14,165,233,0.28),
            inset 0 0 0 1px rgba(255,255,255,0.90);
          transform:scale(1.016);
        }

        /* ── Location chip ── */
        .loc-chip {
          background:rgba(255,255,255,0.92);
          border:1px solid rgba(14,165,233,0.26);
          border-radius:100px;
          padding:8px 20px;
          box-shadow:0 8px 22px rgba(14,165,233,0.13), inset 0 1px 0 rgba(255,255,255,1);
          font-family:'JetBrains Mono',monospace;
          font-size:12px; font-weight:600; color:#0284c7;
          white-space:nowrap;
        }
      `}</style>

      <section
        id="home"
        className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
        style={{ fontFamily:"'Syne',sans-serif" }}
      >
        {/* Layer 1 — canvas code rain */}
        <CodeRain />

        {/* Layer 2 — frosted veil (makes canvas look like rain through glass) */}
        <div className="frost-veil" />

        {/* Layer 3 — large ambient colour blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex:3 }}>
          <div style={{
            position:'absolute', top:'-10%', left:'-6%',
            width:640, height:640, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(186,230,255,0.52) 0%, transparent 70%)',
            filter:'blur(90px)',
          }} />
          <div style={{
            position:'absolute', bottom:'-6%', right:'-9%',
            width:540, height:540, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(199,210,254,0.46) 0%, transparent 70%)',
            filter:'blur(90px)',
          }} />
        </div>

        {/* Layer 4 — main content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10" style={{ zIndex:4 }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">

            {/* ── LEFT ── */}
            <div className="flex-1 text-center lg:text-left hero-rise">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 glass-badge rounded-full px-5 py-2.5 mb-8 hero-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inset-0 rounded-full opacity-60"
                    style={{ background:'#22c55e' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background:'#16a34a' }} />
                </span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'12px', letterSpacing:'0.08em', color:'#0284c7', fontWeight:600 }}>
                  Available for Opportunities
                </span>
              </div>

              {/* Name */}
              <h1 style={{ lineHeight:1.08 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-5">
                <span style={{ color:'#0f172a' }}>Karenju</span>
                <br />
                <span className="shimmer-text">Duncan</span>
              </h1>

              {/* Typed role */}
              <div className="flex items-center gap-2 mb-7 justify-center lg:justify-start">
                <span style={{ fontFamily:"'JetBrains Mono',monospace", color:'#94a3b8', fontSize:'18px' }}>&gt;</span>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'20px', color:'#0284c7', fontWeight:600 }}>
                  {typedText}
                  <span className="cursor-blink inline-block ml-0.5 align-middle"
                    style={{ width:'2px', height:'22px', background:'#0284c7', display:'inline-block', verticalAlign:'middle' }} />
                </div>
              </div>

              {/* Bio */}
              <p style={{ color:'#475569', lineHeight:1.78, maxWidth:'560px', fontSize:'15px' }}
                className="mb-9 mx-auto lg:mx-0">
                Innovative Full-Stack Developer with a Computer Science degree and demonstrated experience
                building scalable web applications for the water and sanitation sector. Skilled in modern
                JavaScript frameworks, RESTful API design, and database optimization — architecting solutions
                from HRM systems to regulatory reporting tools trained by{' '}
                <span style={{ color:'#0284c7', fontWeight:700 }}>St. Paul's University</span>.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button onClick={() => scrollTo('projects')}
                  className="btn-primary px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group cursor-pointer"
                  style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'13px' }}>
                  View Projects
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
                <button onClick={() => scrollTo('contact')}
                  className="btn-glass px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group cursor-pointer"
                  style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'13px' }}>
                  Get in Touch
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
                {stats.map((s, i) => (
                  <div key={i} className="stat-card rounded-2xl p-4 text-center cursor-default">
                    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:'30px', fontWeight:800, color:'#0284c7' }}
                      className="mb-1">{s.value}</div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'10px', color:'#64748b', letterSpacing:'0.10em', textTransform:'uppercase' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Photo ── */}
            <div className="flex-1 flex justify-center lg:justify-end hero-rise-2">
              <div className="relative group">

                {/* Glow halos */}
                <div className="absolute -inset-12 rounded-full pointer-events-none"
                  style={{ background:'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)', filter:'blur(48px)' }} />
                <div className="absolute -inset-6 rounded-full pointer-events-none"
                  style={{ background:'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter:'blur(28px)' }} />

                {/* Spinning rings */}
                <div className="absolute inset-0 rounded-full spin-cw pointer-events-none"
                  style={{ border:'2px dashed rgba(14,165,233,0.28)' }} />
                <div className="absolute -inset-9 rounded-full spin-ccw pointer-events-none"
                  style={{ border:'1.5px dotted rgba(99,102,241,0.20)' }} />

                {/* Photo */}
                <div className="photo-frame w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative">
                  <img
                    src="/src/assets/port.jpeg"
                    alt="Karenju Duncan — Full-Stack Developer"
                    className="w-full h-full object-cover"
                    style={{ objectPosition:'center 20%' }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background:'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }} />
                </div>

                {/* Floating dots */}
                {[
                  { top:'-5%',   right:'-5%',  size:13, color:'#0ea5e9', delay:'0s'   },
                  { bottom:'-3%',left:'-4%',   size:10, color:'#38bdf8', delay:'0.6s' },
                  { top:'48%',   right:'-8%',  size:8,  color:'#6366f1', delay:'1.1s' },
                  { top:'18%',   left:'-7%',   size:9,  color:'#818cf8', delay:'1.6s' },
                ].map((d, i) => (
                  <span key={i} className="absolute rounded-full animate-pulse pointer-events-none"
                    style={{
                      top:d.top, bottom:d.bottom, left:d.left, right:d.right,
                      width:d.size, height:d.size,
                      background:d.color, filter:'blur(1.5px)',
                      animationDelay:d.delay,
                      boxShadow:`0 0 10px ${d.color}`,
                    }} />
                ))}

                {/* Location chip */}
                <div className="loc-chip absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                  📍 Nairobi, Kenya
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-bounce" style={{ position:'absolute', bottom:28, left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:6, zIndex:10 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'9px', color:'#94a3b8', letterSpacing:'0.18em' }}>SCROLL</span>
          <div style={{ width:1, height:32, background:'linear-gradient(to bottom, #0ea5e9, transparent)' }} />
        </div>
      </section>
    </>
  );
};

export default Hero;