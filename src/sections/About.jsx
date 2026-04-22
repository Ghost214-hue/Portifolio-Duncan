// sections/About.jsx
import React, { useEffect, useRef, useState } from 'react';

/* ─── Data ─────────────────────────────────────────────────── */
const hardSkills = [
  { label: "JavaScript" }, { label: "TypeScript" }, { label: "Java" },
  { label: "PHP" },        { label: "Node.js" },    { label: "Express" },
  { label: "React" },      { label: "HTML5" },      { label: "CSS3" },
  { label: "TailwindCSS" },{ label: "SQL" },         { label: "PostgreSQL" },
  { label: "JWT" },        { label: "Clerk" },       { label: "REST APIs" },
  { label: "Git" },        { label: "Power BI" },    { label: "Testing" },
];

const softSkills = [
  { label: "Collaborative Leadership", width: 88 },
  { label: "Adaptability",             width: 82 },
  { label: "Time Management",          width: 95 },
  { label: "Critical Thinking",        width: 85 },
  { label: "Open-mindedness",          width: 78 },
  { label: "Negotiation",              width: 80 },
  { label: "Advocacy & Persistence",   width: 86 },
];

const achievements = [
  { metric: "30%",      desc: "Reduction in administrative workload through HRM automation" },
  { metric: "2 hrs",    desc: "WASREB report compilation — down from multiple days" },
  { metric: "KES 1.2M", desc: "Unbilled consumption restored through billing data audit" },
  { metric: "91→98%",   desc: "Billing accuracy improvement across 3 operational zones" },
  { metric: "12 hrs",   desc: "Weekly manual reporting eliminated via Power BI dashboard" },
  { metric: "100%",     desc: "On-time WASREB regulatory submissions with zero rejections" },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Murang'a Water & Sanitation Co.",
    period: "09.2025 – Present",
    location: "Murang'a, Kenya",
    active: true,
    bullets: [
      "Designed & deployed a comprehensive HRM system — automated employee records, leave tracking and payroll, cutting data retrieval time by 50%.",
      "Engineered a dynamic monthly report generator for WASREB submissions, slashing compilation time from days to under 2 hours.",
      "Currently architecting a CRM system projected to improve lead-tracking efficiency by 40% with real-time analytics.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Murang'a Water & Sanitation Co.",
    period: "06.2025 – 08.2025",
    location: "Murang'a, Kenya",
    active: false,
    bullets: [
      "Audited and reconciled 12,487 customer billing records across 3 zones, correcting 167 duplicates and restoring KES 1.2M in unbilled consumption.",
      "Designed an interactive Power BI dashboard monitoring 6 core KPIs, automating 12 hrs/week of manual Excel reporting.",
      "Validated 9 monthly WASREB submissions — 100% on-time, zero rejections; cut validation time from 8 hrs to 2.5 hrs per report.",
    ],
  },
];

/* ─── Intersection observer ─────────────────────────────────── */
function useVisible(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Reusable components ───────────────────────────────────── */
const GlassCard = ({ children, className = '', style = {} }) => (
  <div className={`about-glass-card ${className}`} style={style}>{children}</div>
);

const SectionLabel = ({ children }) => (
  <h3 style={{
    fontFamily: "'Syne', sans-serif",
    fontSize: '11px', letterSpacing: '0.18em',
    color: '#0284c7', textTransform: 'uppercase',
    marginBottom: '18px',
    display: 'flex', alignItems: 'center', gap: '10px',
  }}>
    <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(14,165,233,0.40), transparent)' }} />
    {children}
    <span style={{ flex: 1, height: 1, background: 'linear-gradient(to left,  rgba(14,165,233,0.40), transparent)' }} />
  </h3>
);

/* ─── Main ──────────────────────────────────────────────────── */
const About = () => {
  const [sectionRef, sectionVisible] = useVisible();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Reset & box-sizing ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Section background ── */
        #about {
          background:
            radial-gradient(ellipse 70% 50% at 88% 12%, rgba(186,230,255,0.42) 0%, transparent 58%),
            radial-gradient(ellipse 60% 45% at  8% 82%, rgba(199,210,254,0.36) 0%, transparent 58%),
            linear-gradient(158deg, #f8fafc 0%, #f0f8ff 50%, #eef2ff 100%);
        }

        /* ── Dot grid ── */
        .about-dot-grid {
          background-image: radial-gradient(rgba(14,165,233,0.09) 1.5px, transparent 1.5px);
          background-size: 26px 26px;
        }

        /* ── Glass card ── */
        .about-glass-card {
          background: rgba(255,255,255,0.54);
          border: 1px solid rgba(255,255,255,0.92);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow:
            0 16px 48px rgba(100,130,200,0.11),
            0 4px 12px rgba(100,130,200,0.06),
            inset 0 2px 0 rgba(255,255,255,1),
            inset 0 -1px 0 rgba(180,210,255,0.28);
          border-radius: 20px;
          transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s;
        }
        .about-glass-card:hover {
          border-color: rgba(14,165,233,0.30);
          box-shadow:
            0 24px 64px rgba(14,165,233,0.13),
            inset 0 2px 0 rgba(255,255,255,1);
          transform: translateY(-3px);
        }

        /* ── Education card ── */
        .edu-card {
          background: linear-gradient(135deg, rgba(224,242,254,0.58), rgba(238,242,255,0.58));
          border: 1px solid rgba(14,165,233,0.22);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow: 0 16px 48px rgba(14,165,233,0.09), inset 0 2px 0 rgba(255,255,255,1);
          border-radius: 20px;
        }

        /* ── Skill pills ── */
        .pill-sky {
          background: rgba(14,165,233,0.09);
          border: 1px solid rgba(14,165,233,0.24);
          color: #0369a1; font-weight: 600;
          transition: all 0.22s ease; cursor: default;
        }
        .pill-sky:hover {
          background: rgba(14,165,233,0.17);
          border-color: rgba(14,165,233,0.48);
          color: #0284c7;
          box-shadow: 0 4px 14px rgba(14,165,233,0.18);
          transform: translateY(-2px);
        }

        /* ── Metric badge ── */
        .metric-badge {
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.94);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 8px 28px rgba(14,165,233,0.10), inset 0 2px 0 rgba(255,255,255,1);
          transition: all 0.3s ease;
          border-radius: 16px;
        }
        .metric-badge:hover {
          border-color: rgba(14,165,233,0.36);
          box-shadow: 0 16px 44px rgba(14,165,233,0.16), inset 0 2px 0 rgba(255,255,255,1);
          transform: translateY(-4px) scale(1.02);
        }

        /* ── Timeline ── */
        .tl-dot-active {
          background: #0ea5e9;
          box-shadow: 0 0 0 4px rgba(14,165,233,0.18), 0 0 18px rgba(14,165,233,0.42);
        }
        .tl-dot-past {
          background: #cbd5e1;
          border: 2px solid rgba(14,165,233,0.28);
        }

        /* ── Progress bar ── */
        @keyframes growBar {
          from { width: 0; }
          to   { width: var(--w); }
        }
        .bar-fill {
          height: 100%; border-radius: 99px;
          animation: growBar 1.2s ease forwards;
        }

        /* ── Fade-up ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up     { opacity: 0; }
        .fade-up.in  { animation: fadeUp 0.65s ease forwards; }

        /* ── Shimmer heading ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-heading {
          background: linear-gradient(90deg, #0f172a 20%, #0ea5e9 50%, #0f172a 80%);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmer 6s linear infinite;
        }

        /* ══════════════════════════════════
           RESPONSIVE LAYOUT GRID
        ══════════════════════════════════ */

        /* Full-width container — 16px gutters on mobile, 32px tablet, 48px desktop */
        .about-container {
          width: 100%;
          padding-left:  16px;
          padding-right: 16px;
        }
        @media (min-width: 640px) {
          .about-container { padding-left: 24px; padding-right: 24px; }
        }
        @media (min-width: 1024px) {
          .about-container { padding-left: 40px; padding-right: 40px; }
        }
        @media (min-width: 1280px) {
          .about-container { padding-left: 56px; padding-right: 56px; }
        }

        /* Two-column grid: stacks on mobile, side-by-side from lg */
        .about-2col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 1024px) {
          .about-2col { grid-template-columns: 1fr 1fr; gap: 20px; }
        }

        /* Achievement grid: 1 col → 2 col → 3 col */
        .achieve-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 480px)  { .achieve-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .achieve-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; } }

        /* Contact chips wrap cleanly on small screens */
        .contact-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }
        .contact-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.70);
          border: 1px solid rgba(14,165,233,0.22);
          backdrop-filter: blur(12px);
          border-radius: 99px; padding: 6px 13px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #334155;
          box-shadow: inset 0 1px 0 rgba(255,255,255,1);
          /* Allow chip to shrink on very small screens */
          min-width: 0; word-break: break-all;
        }
        @media (max-width: 400px) {
          .contact-chip { font-size: 10px; padding: 5px 10px; }
        }

        /* Cert cards side-by-side on sm+, stacked on mobile */
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 480px) {
          .cert-grid { grid-template-columns: 1fr 1fr; }
        }

        /* Skills pill wrap */
        .skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* Section header spacing */
        .about-header { text-align: center; margin-bottom: 48px; }
        @media (min-width: 768px) { .about-header { margin-bottom: 64px; } }

        /* Card padding — smaller on mobile */
        .card-pad { padding: 20px; }
        @media (min-width: 640px) { .card-pad { padding: 28px; } }
        @media (min-width: 1024px) { .card-pad { padding: 32px; } }

        /* Experience bullet font scaling */
        .exp-bullet-text { font-size: 13.5px; line-height: 1.72; }
        @media (min-width: 768px) { .exp-bullet-text { font-size: 14.5px; } }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="relative py-20 md:py-28 overflow-x-hidden"
        style={{ fontFamily: "'Syne', sans-serif", width: '100%' }}
      >
        {/* Dot grid */}
        <div className="about-dot-grid absolute inset-0 z-0 pointer-events-none opacity-55" />

        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div style={{ position:'absolute', top:'14%', right:'0%', width:'45vw', maxWidth:520, height:'45vw', maxHeight:520,
            borderRadius:'50%', background:'radial-gradient(circle, rgba(186,230,255,0.52) 0%, transparent 70%)', filter:'blur(80px)' }} />
          <div style={{ position:'absolute', bottom:'8%', left:'-3%', width:'40vw', maxWidth:440, height:'40vw', maxHeight:440,
            borderRadius:'50%', background:'radial-gradient(circle, rgba(199,210,254,0.46) 0%, transparent 70%)', filter:'blur(80px)' }} />
        </div>

        {/* ── Content ── */}
        <div className="about-container relative z-10">

          {/* ── Header ── */}
          <div className={`about-header fade-up ${sectionVisible ? 'in' : ''}`}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(255,255,255,0.68)',
              border:'1px solid rgba(14,165,233,0.26)',
              backdropFilter:'blur(16px)', borderRadius:99,
              padding:'7px 22px', marginBottom:18,
              boxShadow:'0 4px 16px rgba(14,165,233,0.10), inset 0 1px 0 rgba(255,255,255,1)',
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.15em', color:'#0284c7', fontWeight:600 }}>
                ABOUT ME
              </span>
            </div>
            <h2 className="shimmer-heading"
              style={{ fontWeight:800, fontSize:'clamp(2.2rem, 6vw, 3.8rem)', lineHeight:1.06, margin:'0 0 14px' }}>
              Who Am I?
            </h2>
            <div style={{ width:60, height:3, borderRadius:99, margin:'0 auto',
              background:'linear-gradient(90deg, #0ea5e9, #6366f1)' }} />
          </div>

          {/* ── Row 1: Bio + Education ── */}
          <div className={`about-2col mb-4 fade-up ${sectionVisible ? 'in' : ''}`} style={{ animationDelay:'0.08s' }}>

            {/* Bio */}
            <GlassCard className="card-pad">
              <SectionLabel>Professional Summary</SectionLabel>
              <p style={{ color:'#475569', lineHeight:1.85, marginBottom:14, fontSize:'15px' }}>
                Innovative{' '}
                <span style={{ color:'#0284c7', fontWeight:700 }}>Full-Stack Developer</span>{' '}
                with a Computer Science degree and demonstrated experience building scalable web
                applications for the water and sanitation sector. Skilled in modern JavaScript
                frameworks, RESTful API design, and database optimisation.
              </p>
              <p style={{ color:'#475569', lineHeight:1.85, fontSize:'15px' }}>
                Proven ability to architect end-to-end solutions — from HRM systems to regulatory
                reporting tools — that automate workflows, eliminate manual errors, and deliver
                data-driven insights. Background in CS has cultivated exceptional empathy,
                cross-functional communication, and the ability to translate complex user needs
                into intuitive technical solutions.
              </p>
              <div className="contact-chips">
                {[
                  { icon:'📍', text:'Nairobi, Kenya' },
                  { icon:'📧', text:'karenjuduncan750@gmail.com' },
                  { icon:'📞', text:'+254 112 554 479' },
                ].map((c,i) => (
                  <span key={i} className="contact-chip">{c.icon} {c.text}</span>
                ))}
              </div>
            </GlassCard>

            {/* Education */}
            <div className="edu-card card-pad">
              <SectionLabel>Education</SectionLabel>
              <div style={{ display:'flex', alignItems:'flex-start', gap:14 }}>
                <div style={{
                  flexShrink:0, width:50, height:50, borderRadius:13,
                  background:'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(99,102,241,0.15))',
                  border:'1px solid rgba(14,165,233,0.28)',
                  boxShadow:'inset 0 1px 0 rgba(255,255,255,0.9)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:22,
                }}>🎓</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <h4 style={{ color:'#0f172a', fontWeight:700, fontSize:'clamp(15px,2.5vw,18px)', marginBottom:4 }}>
                    BSc. Computer Science
                  </h4>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'#0284c7', fontWeight:600, marginBottom:5 }}>
                    St. Paul's University · Limuru, Kenya
                  </p>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>
                    September 2021 – November 2025
                  </p>
                </div>
              </div>

              <div style={{ margin:'20px 0 16px', height:1, background:'rgba(14,165,233,0.14)' }} />

              <SectionLabel>Certifications</SectionLabel>
              <div className="cert-grid">
                {[
                  { name:'Cisco Networking Academy', tag:'Cybersecurity' },
                  { name:'Cyber Shujaa',              tag:'Ethical Hacking & Pen Testing' },
                ].map((c,i) => (
                  <div key={i} style={{
                    background:'rgba(255,255,255,0.68)',
                    border:'1px solid rgba(14,165,233,0.20)',
                    borderRadius:12, padding:'12px 14px',
                    boxShadow:'inset 0 1px 0 rgba(255,255,255,1)',
                  }}>
                    <p style={{ color:'#0284c7', fontWeight:700, fontSize:13, marginBottom:3 }}>{c.name}</p>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>{c.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Row 2: Work Experience ── */}
          <GlassCard
            className={`card-pad mb-4 fade-up ${sectionVisible ? 'in' : ''}`}
            style={{ animationDelay:'0.16s' }}
          >
            <SectionLabel>Work Experience</SectionLabel>
            <div style={{ display:'flex', flexDirection:'column' }}>
              {experience.map((job, ji) => (
                <div key={ji} style={{ display:'flex', gap:16, position:'relative' }}>

                  {/* Spine */}
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                    <div className={job.active ? 'tl-dot-active' : 'tl-dot-past'}
                      style={{ width:13, height:13, borderRadius:'50%', marginTop:4 }} />
                    {ji < experience.length - 1 && (
                      <div style={{
                        width:1, flexGrow:1, marginTop:6, marginBottom:6,
                        background:'linear-gradient(to bottom, rgba(14,165,233,0.38), rgba(14,165,233,0.05))',
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex:1, minWidth:0, paddingBottom: ji < experience.length - 1 ? 28 : 0 }}>
                    <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:8, marginBottom:5 }}>
                      <h4 style={{ color:'#0f172a', fontWeight:700, fontSize:'clamp(15px,2.5vw,17px)', margin:0 }}>{job.role}</h4>
                      {job.active && (
                        <span style={{
                          fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:'0.1em',
                          background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.32)',
                          color:'#16a34a', borderRadius:99, padding:'2px 9px',
                        }}>CURRENT</span>
                      )}
                    </div>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'#0284c7', fontWeight:600, marginBottom:3 }}>
                      {job.company}
                    </p>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b', marginBottom:12 }}>
                      {job.period} · {job.location}
                    </p>
                    <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:8 }}>
                      {job.bullets.map((b,bi) => (
                        <li key={bi} style={{ display:'flex', gap:9, alignItems:'flex-start' }}>
                          <span style={{ color:'#0ea5e9', marginTop:2, flexShrink:0, fontSize:12 }}>▹</span>
                          <span className="exp-bullet-text" style={{ color:'#475569' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* ── Row 3: Skills ── */}
          <div className={`about-2col mb-4 fade-up ${sectionVisible ? 'in' : ''}`} style={{ animationDelay:'0.22s' }}>

            {/* Hard skills */}
            <GlassCard className="card-pad">
              <SectionLabel>Technical Skills</SectionLabel>
              <div className="skills-wrap">
                {hardSkills.map((s,i) => (
                  <span key={i} className="pill-sky"
                    style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, borderRadius:8, padding:'7px 13px' }}>
                    {s.label}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Soft skills */}
            <GlassCard className="card-pad">
              <SectionLabel>Soft Skills</SectionLabel>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {softSkills.map((s,i) => (
                  <div key={i}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'#334155', fontWeight:600 }}>{s.label}</span>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#94a3b8' }}>{s.width}%</span>
                    </div>
                    <div style={{ height:5, borderRadius:99, background:'rgba(14,165,233,0.10)', overflow:'hidden' }}>
                      {sectionVisible && (
                        <div className="bar-fill" style={{
                          '--w': `${s.width}%`,
                          background: 'linear-gradient(to right, #0ea5e9, #6366f1)',
                          animationDelay: `${0.35 + i * 0.07}s`,
                        }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* ── Row 4: Achievements ── */}
          <div className={`fade-up ${sectionVisible ? 'in' : ''}`} style={{ animationDelay:'0.30s' }}>
            <div style={{ textAlign:'center', marginBottom:20 }}>
              <span style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.18em',
                color:'#0284c7', textTransform:'uppercase', fontWeight:600,
              }}>Key Achievements</span>
            </div>
            <div className="achieve-grid">
              {achievements.map((a,i) => (
                <div key={i} className="metric-badge card-pad" style={{ textAlign:'center', cursor:'default' }}>
                  <div style={{
                    fontFamily:"'Syne',sans-serif", fontWeight:800,
                    fontSize:'clamp(1.4rem, 4vw, 2rem)',
                    background:'linear-gradient(135deg, #0ea5e9, #6366f1)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                    marginBottom:8,
                  }}>
                    {a.metric}
                  </div>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b', lineHeight:1.65, margin:0 }}>
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;