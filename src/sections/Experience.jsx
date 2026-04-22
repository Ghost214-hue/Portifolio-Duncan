// sections/Experience.jsx
import React, { useState, useEffect, useRef } from 'react';

/* ─── Intersection observer hook ──────────────────────────── */
function useVisible(threshold = 0.1) {
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

/* ─── hex → rgb helper ─────────────────────────────────────── */
function ac(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

/* ─── Data ─────────────────────────────────────────────────── */
const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Murang'a Water & Sanitation Co.",
    location: "Murang'a, Kenya",
    period: "09.2025 – Present",
    type: "Full-time",
    status: "current",
    accent: "#0ea5e9",
    icon: "💻",
    summary: "Architecting and shipping production-grade internal tools that automate critical operations across HR, compliance and CRM.",
    achievements: [
      { metric: "30%",    text: "reduction in administrative workload — HRM system automated employee records, leave tracking and payroll processing." },
      { metric: "50%",    text: "cut in data-retrieval time for HR personnel through optimised database queries and caching." },
      { metric: "2 hrs",  text: "WASREB report compilation — down from several days — via a dynamic report generator with automated data aggregation." },
      { metric: "40%",    text: "projected improvement in lead-tracking efficiency once the CRM system ships, with real-time sales analytics." },
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST APIs", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Murang'a Water & Sanitation Co.",
    location: "Murang'a, Kenya",
    period: "06.2025 – 08.2025",
    type: "Internship",
    status: "past",
    accent: "#6366f1",
    icon: "📊",
    summary: "Turned raw operational data into actionable intelligence — auditing billing records, building KPI dashboards and owning regulatory submissions.",
    achievements: [
      { metric: "KES 1.2M", text: "in unbilled consumption restored after auditing 12,487 billing records across 3 zones and correcting 167 duplicate entries." },
      { metric: "91→98%",   text: "billing accuracy achieved in 2 months through systematic data validation and correction protocols." },
      { metric: "12 hrs",   text: "of weekly manual Excel reporting eliminated via an interactive Power BI dashboard tracking 6 core KPIs." },
      { metric: "100%",     text: "on-time WASREB submissions — 9 reports, zero rejections; validation time cut from 8 hrs to 2.5 hrs per report." },
    ],
    tech: ["Power BI", "SQL", "Excel", "Python", "DAX", "ETL", "Data Visualisation"],
  },
];

const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "St. Paul's University",
  location: "Limuru, Kenya",
  period: "September 2021 – November 2025",
  highlights: [
    "Full-stack web development specialisation",
    "Database design & optimisation",
    "Cybersecurity fundamentals",
    "Software engineering principles",
    "Algorithms & data structures",
    "Systems analysis & design",
  ],
};

const certifications = [
  {
    name: "Ethical Hacking & Penetration Testing",
    issuer: "Cisco Networking Academy",
    collab: "Cyber Shujaa",
    year: "2025",
    accent: "#0ea5e9",
    icon: "🛡️",
    tag: "Professional Certificate",
  },
  {
    name: "Full-Stack Web Development",
    issuer: "Various Platforms",
    collab: null,
    year: "2024 – 2025",
    accent: "#6366f1",
    icon: "🚀",
    tag: "Specialisation",
  },
];

const impactStats = [
  { value: "30%",  label: "Workload Reduced" },
  { value: "98%",  label: "Billing Accuracy" },
  { value: "100%", label: "On-time Delivery" },
];

const tabs = [
  { id: "work",  label: "Work",           icon: "💼" },
  { id: "edu",   label: "Education",      icon: "🎓" },
  { id: "certs", label: "Certifications", icon: "🏆" },
];

/* ─── Main Component ─────────────────────────────────────────── */
const Experience = () => {
  const [active, setActive] = useState('work');
  const [sectionRef, visible] = useVisible();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Full width section bg (no max-width restriction) ── */
        .exp-section-bg {
          width: 100%;
          background:
            radial-gradient(ellipse 70% 50% at 90% 20%, rgba(186,230,255,0.40) 0%, transparent 60%),
            radial-gradient(ellipse 60% 45% at 5%  80%, rgba(199,210,254,0.35) 0%, transparent 60%),
            linear-gradient(160deg, #f8fafc 0%, #f0f8ff 50%, #eef2ff 100%);
        }

        /* ── Glass base card ── */
        .exp-card {
          background: rgba(255,255,255,0.52);
          border: 1px solid rgba(255,255,255,0.90);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow:
            0 16px 48px rgba(100,130,200,0.12),
            0 4px 12px rgba(100,130,200,0.07),
            inset 0 2px 0 rgba(255,255,255,1),
            inset 0 -1px 0 rgba(180,210,255,0.25);
          border-radius: 20px;
          overflow: hidden;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
        }
        .exp-card:hover {
          border-color: rgba(14,165,233,0.38);
          box-shadow:
            0 28px 64px rgba(14,165,233,0.14),
            0 4px 16px rgba(14,165,233,0.08),
            inset 0 2px 0 rgba(255,255,255,1);
          transform: translateY(-4px);
        }

        /* ── Tab pills ── */
        .tab-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 24px; border-radius: 99px; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.07em;
          font-weight: 500;
          border: 1px solid rgba(200,220,255,0.55);
          background: rgba(255,255,255,0.55);
          color: #64748b;
          backdrop-filter: blur(14px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,1);
          transition: all 0.25s ease;
        }
        .tab-pill:hover {
          color: #0369a1;
          border-color: rgba(14,165,233,0.40);
          background: rgba(255,255,255,0.80);
          box-shadow: 0 4px 14px rgba(14,165,233,0.12), inset 0 1px 0 rgba(255,255,255,1);
        }
        .tab-pill.on {
          background: linear-gradient(135deg, rgba(14,165,233,0.14), rgba(99,102,241,0.12));
          border-color: rgba(14,165,233,0.45);
          color: #0284c7;
          font-weight: 700;
          box-shadow: 0 4px 18px rgba(14,165,233,0.16), inset 0 1px 0 rgba(255,255,255,1);
        }

        /* ── Achievement metric chip ── */
        .metric-chip {
          display: inline-block; min-width: 78px; text-align: center;
          padding: 7px 10px; border-radius: 10px;
          background: linear-gradient(135deg, rgba(14,165,233,0.11), rgba(99,102,241,0.10));
          border: 1px solid rgba(14,165,233,0.28);
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 14px; color: #0284c7;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(14,165,233,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        /* ── Tech pill ── */
        .tech-pill {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600;
          padding: 5px 12px; border-radius: 7px;
          background: rgba(14,165,233,0.08); border: 1px solid rgba(14,165,233,0.22);
          color: #0369a1; transition: all 0.2s ease; cursor: default;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .tech-pill:hover {
          background: rgba(14,165,233,0.16);
          border-color: rgba(14,165,233,0.42);
          color: #0284c7;
          box-shadow: 0 4px 12px rgba(14,165,233,0.16), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        /* ── Impact stat card ── */
        .impact-card {
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.90);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 16px; text-align: center; padding: 20px 14px;
          box-shadow:
            0 8px 28px rgba(100,130,200,0.10),
            inset 0 2px 0 rgba(255,255,255,1),
            inset 0 -1px 0 rgba(180,210,255,0.20);
          transition: all 0.3s ease;
        }
        .impact-card:hover {
          border-color: rgba(14,165,233,0.35);
          box-shadow:
            0 16px 44px rgba(14,165,233,0.15),
            inset 0 2px 0 rgba(255,255,255,1);
          transform: translateY(-3px);
        }

        /* ── Cert card ── */
        .cert-card {
          background: rgba(255,255,255,0.52);
          border: 1px solid rgba(255,255,255,0.90);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-radius: 18px; padding: 26px;
          box-shadow:
            0 12px 36px rgba(100,130,200,0.10),
            inset 0 2px 0 rgba(255,255,255,1);
          transition: all 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: rgba(14,165,233,0.35);
          box-shadow: 0 24px 56px rgba(14,165,233,0.14), inset 0 2px 0 rgba(255,255,255,1);
        }

        /* ── Education panel ── */
        .edu-panel {
          background: linear-gradient(140deg, rgba(224,242,254,0.55), rgba(238,242,255,0.55));
          border: 1px solid rgba(14,165,233,0.22);
          backdrop-filter: blur(26px) saturate(180%);
          -webkit-backdrop-filter: blur(26px) saturate(180%);
          border-radius: 20px;
          box-shadow:
            0 16px 48px rgba(14,165,233,0.10),
            inset 0 2px 0 rgba(255,255,255,1);
        }

        /* ── Timeline ── */
        .tl-line {
          width: 1px; flex-grow: 1; margin: 6px 0;
          background: linear-gradient(to bottom, rgba(14,165,233,0.40), rgba(14,165,233,0.05));
        }
        .tl-dot-on {
          width:14px; height:14px; border-radius:50%; background:#0ea5e9; flex-shrink:0; margin-top:3px;
          box-shadow: 0 0 0 4px rgba(14,165,233,0.18), 0 0 16px rgba(14,165,233,0.45);
        }
        .tl-dot-off {
          width:14px; height:14px; border-radius:50%; background:#cbd5e1;
          border:2px solid rgba(14,165,233,0.30); flex-shrink:0; margin-top:3px;
        }

        /* ── Section label divider ── */
        .sec-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em;
          color: #0284c7; text-transform: uppercase; font-weight: 600;
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .sec-label::before, .sec-label::after {
          content:''; flex:1; height:1px;
        }
        .sec-label::before { background: linear-gradient(to right, rgba(14,165,233,0.35), transparent); }
        .sec-label::after  { background: linear-gradient(to left,  rgba(14,165,233,0.35), transparent); }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu     { opacity: 0; }
        .fu.in  { animation: fadeUp 0.6s ease forwards; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-heading {
          background: linear-gradient(90deg, #0f172a 15%, #0ea5e9 50%, #0f172a 85%);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmer 6s linear infinite;
        }

        /* ── Dot grid ── */
        .exp-dot-grid {
          background-image: radial-gradient(rgba(14,165,233,0.10) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }

        /* ── FULL WIDTH container (no max-width restriction) ── */
        .exp-container-full {
          width: 100%;
          padding: 0 5%;
        }
        @media (max-width: 768px) {
          .exp-container-full {
            padding: 0 4%;
          }
        }
        @media (max-width: 480px) {
          .exp-container-full {
            padding: 0 5%;
          }
        }
        @media (min-width: 1920px) {
          .exp-container-full {
            padding: 0 8%;
          }
        }

        /* ── Timeline responsiveness ── */
        @media (max-width: 640px) {
          .timeline-gap {
            gap: 0.75rem;
          }
          .metric-chip {
            min-width: 65px;
            font-size: 12px;
            padding: 5px 8px;
          }
          .exp-card .card-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .card-header-right {
            text-align: left;
            margin-top: 0.5rem;
          }
        }

        /* ── Grid responsiveness ── */
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
          gap: 1rem;
        }
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.875rem;
        }
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 0.875rem;
        }
        @media (max-width: 560px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Highlight list responsiveness ── */
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.625rem;
        }
        @media (max-width: 480px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Tab pills wrap fix ── */
        .tabs-wrapper {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.625rem;
          margin-bottom: 2.75rem;
        }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        className="exp-section-bg relative py-24 md:py-32 overflow-x-hidden"
        style={{ fontFamily:"'Syne',sans-serif" }}
      >
        {/* Dot grid */}
        <div className="exp-dot-grid absolute inset-0 z-0 pointer-events-none opacity-60" />

        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div style={{ position:'absolute', top:'18%', right:'6%', width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(186,230,255,0.48) 0%, transparent 70%)', filter:'blur(80px)' }} />
          <div style={{ position:'absolute', bottom:'12%', left:'3%', width:440, height:440, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(199,210,254,0.42) 0%, transparent 70%)', filter:'blur(80px)' }} />
        </div>

        {/* FULL WIDTH container - no max-width restriction! */}
        <div className="relative z-10 exp-container-full">

          {/* ── Section header ── */}
          <div className={`text-center mb-14 fu ${visible ? 'in' : ''}`}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(255,255,255,0.65)',
              border:'1px solid rgba(14,165,233,0.28)',
              backdropFilter:'blur(16px)', borderRadius:99, padding:'7px 22px', marginBottom:20,
              boxShadow:'0 4px 16px rgba(14,165,233,0.10), inset 0 1px 0 rgba(255,255,255,1)',
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.15em', color:'#0284c7', fontWeight:600 }}>
                MY JOURNEY
              </span>
            </div>
            <h2 className="shimmer-heading"
              style={{ fontWeight:800, fontSize:'clamp(2rem,5vw,3.6rem)', lineHeight:1.05, marginBottom:12 }}>
              Experience & Education
            </h2>
            <p style={{ color:'#475569', fontSize:15, fontFamily:"'JetBrains Mono',monospace", maxWidth:480, margin:'0 auto 16px', lineHeight:1.8 }}>
              A track record of delivering measurable impact through code and data
            </p>
            <div style={{ width:64, height:3, borderRadius:99, margin:'0 auto',
              background:'linear-gradient(90deg,#0ea5e9,#6366f1)' }} />
          </div>

          {/* ── Tab bar ── */}
          <div className={`fu ${visible ? 'in' : ''}`} style={{ animationDelay:'0.08s' }}>
            <div className="tabs-wrapper">
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActive(t.id)}
                  className={`tab-pill ${active === t.id ? 'on' : ''}`}>
                  <span>{t.icon}</span>{t.label}
                </button>
              ))}
            </div>
          </div>

          {/* ══════════ WORK TAB ══════════ */}
          {active === 'work' && (
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {workExperience.map((exp, ei) => (
                <div key={exp.id}
                  className={`fu ${visible ? 'in' : ''}`}
                  style={{ animationDelay:`${0.1 + ei * 0.12}s` }}>

                  <div style={{ display:'flex', gap:16 }}>
                    {/* Timeline spine */}
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, paddingTop:6 }}>
                      <div className={exp.status === 'current' ? 'tl-dot-on' : 'tl-dot-off'} />
                      {ei < workExperience.length - 1 && <div className="tl-line" />}
                    </div>

                    {/* Card - now stretches full width */}
                    <div className="exp-card" style={{ flex:1 }}>

                      {/* Header band */}
                      <div style={{
                        padding:'24px 26px 18px',
                        background:`linear-gradient(135deg, rgba(${ac(exp.accent)},0.07) 0%, rgba(255,255,255,0) 100%)`,
                        borderBottom:'1px solid rgba(200,220,255,0.30)',
                        position:'relative', overflow:'hidden',
                        transition:'background 0.4s ease',
                      }}>
                        {/* Glow orb */}
                        <div style={{ position:'absolute', top:-40, right:-40, width:140, height:140, borderRadius:'50%',
                          background:exp.accent, filter:'blur(60px)', opacity:0.12 }} />

                        <div className="card-header" style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:12 }}>
                          {/* Left */}
                          <div>
                            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6, flexWrap:'wrap' }}>
                              <span style={{ fontSize:24 }}>{exp.icon}</span>
                              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(18px,4vw,21px)', color:'#0f172a' }}>
                                {exp.title}
                              </h3>
                              {exp.status === 'current' && (
                                <span style={{
                                  fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:'0.1em',
                                  background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.32)',
                                  color:'#16a34a', borderRadius:99, padding:'3px 10px', fontWeight:600,
                                }}>● CURRENT</span>
                              )}
                            </div>
                            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:exp.accent, fontWeight:600, marginBottom:3 }}>
                              {exp.company}
                            </p>
                            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>
                              📍 {exp.location}
                            </p>
                          </div>
                          {/* Right */}
                          <div className="card-header-right" style={{ textAlign:'right' }}>
                            <span style={{
                              fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:600,
                              background:`rgba(${ac(exp.accent)},0.09)`,
                              border:`1px solid rgba(${ac(exp.accent)},0.28)`,
                              color:exp.accent, borderRadius:99, padding:'4px 14px',
                              display:'inline-block', marginBottom:6,
                              boxShadow:`inset 0 1px 0 rgba(255,255,255,0.9)`,
                            }}>{exp.type}</span>
                            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>{exp.period}</p>
                          </div>
                        </div>

                        <p style={{ color:'#475569', fontSize:14, lineHeight:1.8, marginTop:14 }}>{exp.summary}</p>
                      </div>

                      {/* Achievements */}
                      <div style={{ padding:'20px 26px' }}>
                        <div className="sec-label">Key Achievements</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:13 }}>
                          {exp.achievements.map((a, ai) => (
                            <div key={ai} style={{ display:'flex', gap:12, alignItems:'flex-start', flexWrap:'wrap' }}>
                              <span className="metric-chip">{a.metric}</span>
                              <span style={{ color:'#475569', fontSize:14, lineHeight:1.78, paddingTop:5, flex:1 }}>{a.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stack used */}
                        <div style={{ marginTop:22, paddingTop:18, borderTop:'1px solid rgba(200,220,255,0.35)' }}>
                          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#94a3b8',
                            letterSpacing:'0.14em', marginBottom:10, textTransform:'uppercase', fontWeight:600 }}>
                            Stack Used
                          </p>
                          <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                            {exp.tech.map((t,ti) => <span key={ti} className="tech-pill">{t}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ══════════ EDUCATION TAB ══════════ */}
          {active === 'edu' && (
            <div className={`fu ${visible ? 'in' : ''}`} style={{ animationDelay:'0.1s' }}>
              <div className="edu-panel" style={{ padding:'clamp(1.5rem, 4vw, 2rem)' }}>
                <div style={{ display:'flex', flexWrap:'wrap', gap:20, alignItems:'flex-start', marginBottom:28 }}>
                  <div style={{
                    width:60, height:60, borderRadius:16, fontSize:28, flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background:'linear-gradient(135deg, rgba(14,165,233,0.14), rgba(99,102,241,0.14))',
                    border:'1px solid rgba(14,165,233,0.28)',
                    boxShadow:'inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}>🎓</div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(18px,4vw,22px)', color:'#0f172a', marginBottom:6 }}>
                      {education.degree}
                    </h3>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:'#0284c7', fontWeight:600, marginBottom:4 }}>
                      {education.institution} · {education.location}
                    </p>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>
                      {education.period}
                    </p>
                  </div>
                </div>

                <div className="sec-label">Course Highlights</div>
                <div className="highlights-grid">
                  {education.highlights.map((h, hi) => (
                    <div key={hi} style={{
                      display:'flex', alignItems:'center', gap:10,
                      background:'rgba(255,255,255,0.65)',
                      border:'1px solid rgba(14,165,233,0.18)',
                      borderRadius:10, padding:'11px 16px',
                      boxShadow:'inset 0 1px 0 rgba(255,255,255,1)',
                    }}>
                      <span style={{ width:7, height:7, borderRadius:'50%', background:'#6366f1', flexShrink:0 }} />
                      <span style={{ color:'#334155', fontSize:14 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic stat tiles */}
              <div className="edu-grid" style={{ marginTop: '1.25rem' }}>
                {[
                  { icon:'📅', val:'2021 – 2025',    sub:'Academic Journey' },
                  { icon:'💻', val:'Full-Stack',      sub:'Development Focus' },
                  { icon:'🔒', val:'Cybersecurity',   sub:'Additional Training' },
                  { icon:'📐', val:'CS Degree',       sub:"St. Paul's University" },
                ].map((s,si) => (
                  <div key={si} className="impact-card">
                    <div style={{ fontSize:28, marginBottom:10 }}>{s.icon}</div>
                    <div style={{
                      fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:17, marginBottom:5,
                      background:'linear-gradient(135deg,#0ea5e9,#6366f1)',
                      WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                    }}>{s.val}</div>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════ CERTIFICATIONS TAB ══════════ */}
          {active === 'certs' && (
            <div className={`fu ${visible ? 'in' : ''}`} style={{ animationDelay:'0.1s' }}>
              <div className="certs-grid">
                {certifications.map((c, ci) => (
                  <div key={ci} className="cert-card"
                    style={{ borderColor:`rgba(${ac(c.accent)},0.25)` }}>
                    <div style={{ display:'flex', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
                      <div style={{
                        width:54, height:54, borderRadius:14, fontSize:26, flexShrink:0,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        background:`rgba(${ac(c.accent)},0.10)`,
                        border:`1px solid rgba(${ac(c.accent)},0.28)`,
                        boxShadow:`inset 0 1px 0 rgba(255,255,255,0.9)`,
                      }}>{c.icon}</div>
                      <div style={{ flex:1 }}>
                        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:17, color:'#0f172a', marginBottom:6 }}>
                          {c.name}
                        </h3>
                        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:c.accent, fontWeight:600, marginBottom:3 }}>
                          {c.issuer}
                        </p>
                        {c.collab && (
                          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b', marginBottom:10 }}>
                            in collaboration with {c.collab}
                          </p>
                        )}
                        <div style={{
                          display:'flex', alignItems:'center', justifyContent:'space-between',
                          marginTop:14, paddingTop:14, borderTop:'1px solid rgba(200,220,255,0.35)',
                          flexWrap:'wrap', gap:8,
                        }}>
                          <span style={{
                            fontFamily:"'JetBrains Mono',monospace", fontSize:10, fontWeight:600,
                            background:`rgba(${ac(c.accent)},0.09)`,
                            border:`1px solid rgba(${ac(c.accent)},0.28)`,
                            color:c.accent, borderRadius:99, padding:'4px 12px',
                            boxShadow:'inset 0 1px 0 rgba(255,255,255,0.9)',
                          }}>{c.tag}</span>
                          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#64748b' }}>{c.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continuous learning card */}
                <div className="cert-card" style={{ gridColumn:'1/-1' }}>
                  <div style={{ display:'flex', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
                    <div style={{
                      width:54, height:54, borderRadius:14, fontSize:26, flexShrink:0,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      background:'rgba(16,185,129,0.10)',
                      border:'1px solid rgba(16,185,129,0.28)',
                      boxShadow:'inset 0 1px 0 rgba(255,255,255,0.9)',
                    }}>🌱</div>
                    <div>
                      <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:18, color:'#0f172a', marginBottom:6 }}>
                        Continuous Learning
                      </h3>
                      <p style={{ color:'#475569', fontSize:14.5, lineHeight:1.8, maxWidth:580 }}>
                        Actively pursuing further certifications in cloud computing, advanced system design, and
                        modern DevOps practices — committed to staying at the forefront of software engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Impact strip (always visible) ── */}
          <div className={`fu ${visible ? 'in' : ''}`} style={{ marginTop:44, animationDelay:'0.35s' }}>
            <div className="impact-grid">
              {impactStats.map((s, si) => (
                <div key={si} className="impact-card">
                  <div style={{
                    fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:24, marginBottom:8,
                    background:'linear-gradient(135deg,#0ea5e9,#6366f1)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                  }}>{s.value}</div>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#64748b',
                    letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600 }}>
                    {s.label}
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

export default Experience;