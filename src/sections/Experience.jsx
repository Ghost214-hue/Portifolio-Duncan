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
    accent: "#00d8ff",
    icon: "💻",
    summary: "Architecting and shipping production-grade internal tools that automate critical operations across HR, compliance and CRM.",
    achievements: [
      { metric: "30%",   text: "reduction in administrative workload — HRM system automated employee records, leave tracking and payroll processing." },
      { metric: "50%",   text: "cut in data-retrieval time for HR personnel through optimised database queries and caching." },
      { metric: "2 hrs", text: "WASREB report compilation — down from several days — via a dynamic report generator with automated data aggregation." },
      { metric: "40%",   text: "projected improvement in lead-tracking efficiency once the CRM system ships, with real-time sales analytics." },
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
    accent: "#a855f7",
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
    accent: "#00d8ff",
    icon: "🛡️",
    tag: "Professional Certificate",
  },
  {
    name: "Full-Stack Web Development",
    issuer: "Various Platforms",
    collab: null,
    year: "2024 – 2025",
    accent: "#a855f7",
    icon: "🚀",
    tag: "Specialisation",
  },
];

const impactStats = [
  { value: "30%",      label: "Workload Reduced" },
  { value: "98%",      label: "Billing Accuracy" },
  { value: "100%",     label: "On-time Delivery" },
];

const tabs = [
  { id: "work",   label: "Work",            icon: "💼" },
  { id: "edu",    label: "Education",       icon: "🎓" },
  { id: "certs",  label: "Certifications",  icon: "🏆" },
];

/* ─── Main Component ─────────────────────────────────────────── */
const Experience = () => {
  const [active, setActive] = useState('work');
  const [sectionRef, visible] = useVisible();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Glass base card ── */
        .exp-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05);
          border-radius: 20px;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
          overflow: hidden;
        }
        .exp-card:hover {
          border-color: rgba(0,216,255,0.20);
          box-shadow: 0 28px 72px rgba(0,0,0,0.55), 0 0 30px rgba(0,216,255,0.07), inset 0 1px 0 rgba(255,255,255,0.07);
          transform: translateY(-4px);
        }

        /* ── Tab pill ── */
        .tab-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 22px; border-radius: 99px; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.08em;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
        }
        .tab-pill:hover { color: #e2e8f0; border-color: rgba(0,216,255,0.22); background: rgba(0,216,255,0.05); }
        .tab-pill.on {
          background: linear-gradient(135deg, rgba(0,216,255,0.16), rgba(168,85,247,0.16));
          border-color: rgba(0,216,255,0.38); color: #00d8ff;
          box-shadow: 0 0 22px rgba(0,216,255,0.14);
        }

        /* ── Achievement metric badge ── */
        .metric-chip {
          display: inline-block; min-width: 72px; text-align: center;
          padding: 6px 10px; border-radius: 10px;
          background: linear-gradient(135deg, rgba(0,216,255,0.10), rgba(168,85,247,0.10));
          border: 1px solid rgba(0,216,255,0.22);
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 13px; color: #00d8ff;
          flex-shrink: 0;
          box-shadow: 0 0 14px rgba(0,216,255,0.10);
        }

        /* ── Tech pill ── */
        .tech-pill {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          padding: 5px 11px; border-radius: 7px;
          background: rgba(0,216,255,0.06); border: 1px solid rgba(0,216,255,0.14);
          color: #7dd3e8; transition: all 0.2s ease; cursor: default;
        }
        .tech-pill:hover { background: rgba(0,216,255,0.12); border-color: rgba(0,216,255,0.30); color: #00d8ff; }

        /* ── Impact row card ── */
        .impact-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(0,216,255,0.10);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border-radius: 16px; text-align: center; padding: 18px 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .impact-card:hover {
          border-color: rgba(0,216,255,0.28);
          box-shadow: 0 16px 48px rgba(0,0,0,0.45), 0 0 18px rgba(0,216,255,0.10);
          transform: translateY(-3px);
        }

        /* ── Cert card ── */
        .cert-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(22px) saturate(150%);
          -webkit-backdrop-filter: blur(22px) saturate(150%);
          border-radius: 18px; padding: 24px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0,216,255,0.25);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 24px rgba(0,216,255,0.08);
        }

        /* ── Edu panel ── */
        .edu-panel {
          background: linear-gradient(140deg, rgba(0,216,255,0.04), rgba(168,85,247,0.04));
          border: 1px solid rgba(0,216,255,0.12);
          backdrop-filter: blur(26px) saturate(160%);
          -webkit-backdrop-filter: blur(26px) saturate(160%);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { opacity: 0; }
        .fu.in { animation: fadeUp 0.6s ease forwards; }

        /* ── Timeline spine ── */
        .tl-line {
          width: 1px; flex-grow: 1; margin: 6px 0;
          background: linear-gradient(to bottom, rgba(0,216,255,0.30), rgba(0,216,255,0.04));
        }
        .tl-dot-on  { width:14px; height:14px; border-radius:50%; background:#00d8ff; flex-shrink:0; margin-top:3px; box-shadow: 0 0 0 4px rgba(0,216,255,0.15), 0 0 16px rgba(0,216,255,0.5); }
        .tl-dot-off { width:14px; height:14px; border-radius:50%; background:#1e293b; border:2px solid rgba(0,216,255,0.22); flex-shrink:0; margin-top:3px; }

        /* ── Section label divider ── */
        .sec-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.18em;
          color: #00d8ff; text-transform: uppercase;
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .sec-label::before, .sec-label::after {
          content:''; flex:1; height:1px;
          background: linear-gradient(to right, rgba(0,216,255,0.30), transparent);
        }
        .sec-label::after { background: linear-gradient(to left, rgba(0,216,255,0.30), transparent); }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        style={{ background: '#060a0f', fontFamily: "'Syne', sans-serif", position: 'relative', overflowX: 'hidden' }}
        className="py-24 md:py-32"
      >
        {/* ── Ambient blobs ── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div style={{ position:'absolute', top:'20%', right:'8%', width:480, height:480, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(0,216,255,0.07) 0%, transparent 70%)', filter:'blur(80px)',
            animation:'pulse 8s ease-in-out infinite' }} />
          <div style={{ position:'absolute', bottom:'15%', left:'5%', width:420, height:420, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', filter:'blur(80px)',
            animation:'pulse 10s ease-in-out infinite 3s' }} />
          <div style={{ position:'absolute', inset:0,
            backgroundImage:'radial-gradient(rgba(0,216,255,0.035) 1px, transparent 1px)',
            backgroundSize:'32px 32px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          {/* ── Section header ── */}
          <div className={`text-center mb-14 fu ${visible ? 'in' : ''}`}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(0,216,255,0.07)', border:'1px solid rgba(0,216,255,0.18)',
              backdropFilter:'blur(14px)', borderRadius:99, padding:'6px 20px', marginBottom:20,
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.15em', color:'#00d8ff' }}>
                MY JOURNEY
              </span>
            </div>
            <h2 style={{
              fontWeight:800, fontSize:'clamp(2.2rem,5vw,3.6rem)', lineHeight:1.05,
              background:'linear-gradient(90deg, #f1f5f9 15%, #00d8ff 50%, #f1f5f9 85%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              marginBottom:12,
            }}>
              Experience & Education
            </h2>
            <p style={{ color:'#475569', fontSize:13, fontFamily:"'JetBrains Mono',monospace", maxWidth:460, margin:'0 auto 16px', lineHeight:1.8 }}>
              A track record of delivering measurable impact through code and data
            </p>
            <div style={{ width:64, height:3, borderRadius:99, margin:'0 auto',
              background:'linear-gradient(90deg,#00d8ff,#a855f7)' }} />
          </div>

          {/* ── Tab bar ── */}
          <div className={`fu ${visible ? 'in' : ''}`}
            style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:10, marginBottom:44, animationDelay:'0.08s' }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)}
                className={`tab-pill ${active === t.id ? 'on' : ''}`}>
                <span>{t.icon}</span>{t.label}
              </button>
            ))}
          </div>

          {/* ══════════ WORK TAB ══════════ */}
          {active === 'work' && (
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {workExperience.map((exp, ei) => (
                <div key={exp.id}
                  className={`fu ${visible ? 'in' : ''}`}
                  style={{ animationDelay: `${0.1 + ei * 0.12}s` }}>

                  {/* Timeline + card row */}
                  <div style={{ display:'flex', gap:16 }}>

                    {/* Spine */}
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, paddingTop:6 }}>
                      <div className={exp.status === 'current' ? 'tl-dot-on' : 'tl-dot-off'} />
                      {ei < workExperience.length - 1 && <div className="tl-line" />}
                    </div>

                    {/* Card */}
                    <div className="exp-card" style={{ flex:1 }}>

                      {/* Header band */}
                      <div style={{
                        padding:'22px 26px 18px',
                        background:`linear-gradient(135deg, rgba(${ac(exp.accent)},0.08) 0%, rgba(0,0,0,0) 100%)`,
                        borderBottom:'1px solid rgba(255,255,255,0.05)',
                        position:'relative', overflow:'hidden',
                      }}>
                        {/* Glow orb */}
                        <div style={{ position:'absolute', top:-40, right:-40, width:140, height:140, borderRadius:'50%',
                          background:exp.accent, filter:'blur(60px)', opacity:0.14 }} />

                        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:12 }}>
                          {/* Left */}
                          <div>
                            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6 }}>
                              <span style={{ fontSize:22 }}>{exp.icon}</span>
                              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:20, color:'#f1f5f9' }}>
                                {exp.title}
                              </h3>
                              {exp.status === 'current' && (
                                <span style={{
                                  fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:'0.1em',
                                  background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.30)',
                                  color:'#22c55e', borderRadius:99, padding:'3px 10px',
                                }}>● CURRENT</span>
                              )}
                            </div>
                            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color: exp.accent, marginBottom:3 }}>
                              {exp.company}
                            </p>
                            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>
                              📍 {exp.location}
                            </p>
                          </div>
                          {/* Right */}
                          <div style={{ textAlign:'right' }}>
                            <span style={{
                              fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:'0.1em',
                              background:`rgba(${ac(exp.accent)},0.10)`, border:`1px solid rgba(${ac(exp.accent)},0.22)`,
                              color: exp.accent, borderRadius:99, padding:'4px 12px', display:'inline-block', marginBottom:6,
                            }}>{exp.type}</span>
                            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>{exp.period}</p>
                          </div>
                        </div>

                        <p style={{ color:'#64748b', fontSize:13, lineHeight:1.75, marginTop:12 }}>{exp.summary}</p>
                      </div>

                      {/* Achievements */}
                      <div style={{ padding:'20px 26px' }}>
                        <div className="sec-label">Key Achievements</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                          {exp.achievements.map((a, ai) => (
                            <div key={ai} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                              <span className="metric-chip">{a.metric}</span>
                              <span style={{ color:'#94a3b8', fontSize:13.5, lineHeight:1.75, paddingTop:4 }}>{a.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech */}
                        <div style={{ marginTop:20, paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569', letterSpacing:'0.12em', marginBottom:10, textTransform:'uppercase' }}>
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
              <div className="edu-panel" style={{ padding:'32px 30px', marginBottom:20 }}>
                <div style={{ display:'flex', flexWrap:'wrap', gap:20, alignItems:'flex-start', marginBottom:28 }}>
                  <div style={{
                    width:60, height:60, borderRadius:16, fontSize:28, flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background:'linear-gradient(135deg, rgba(0,216,255,0.12), rgba(168,85,247,0.12))',
                    border:'1px solid rgba(0,216,255,0.22)',
                  }}>🎓</div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:22, color:'#f1f5f9', marginBottom:6 }}>
                      {education.degree}
                    </h3>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'#00d8ff', marginBottom:4 }}>
                      {education.institution} · {education.location}
                    </p>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>
                      {education.period}
                    </p>
                  </div>
                </div>

                <div className="sec-label">Course Highlights</div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:10 }}>
                  {education.highlights.map((h, hi) => (
                    <div key={hi} style={{ display:'flex', alignItems:'center', gap:10,
                      background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
                      borderRadius:10, padding:'10px 14px' }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background:'#a855f7', flexShrink:0 }} />
                      <span style={{ color:'#94a3b8', fontSize:13 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic stat tiles */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:14 }}>
                {[
                  { icon:'📅', val:'2021 – 2025', sub:'Academic Journey' },
                  { icon:'💻', val:'Full-Stack',  sub:'Development Focus' },
                  { icon:'🔒', val:'Cybersecurity', sub:'Additional Training' },
                  { icon:'📐', val:'CS Degree',   sub:'St. Paul\'s University' },
                ].map((s,si) => (
                  <div key={si} className="impact-card">
                    <div style={{ fontSize:26, marginBottom:8 }}>{s.icon}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:16, color:'#00d8ff', marginBottom:4 }}>{s.val}</div>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════ CERTIFICATIONS TAB ══════════ */}
          {active === 'certs' && (
            <div className={`fu ${visible ? 'in' : ''}`}
              style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,360px),1fr))', gap:16, animationDelay:'0.1s' }}>

              {certifications.map((c, ci) => (
                <div key={ci} className="cert-card"
                  style={{ borderColor: `rgba(${ac(c.accent)},0.16)` }}>
                  <div style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                    <div style={{
                      width:52, height:52, borderRadius:14, fontSize:24, flexShrink:0,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      background:`rgba(${ac(c.accent)},0.10)`, border:`1px solid rgba(${ac(c.accent)},0.22)`,
                    }}>{c.icon}</div>
                    <div style={{ flex:1 }}>
                      <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:16, color:'#f1f5f9', marginBottom:6 }}>
                        {c.name}
                      </h3>
                      <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color: c.accent, marginBottom:3 }}>
                        {c.issuer}
                      </p>
                      {c.collab && (
                        <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569', marginBottom:10 }}>
                          in collaboration with {c.collab}
                        </p>
                      )}
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:12,
                        paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{
                          fontFamily:"'JetBrains Mono',monospace", fontSize:9,
                          background:`rgba(${ac(c.accent)},0.08)`, border:`1px solid rgba(${ac(c.accent)},0.20)`,
                          color: c.accent, borderRadius:99, padding:'3px 10px',
                        }}>{c.tag}</span>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>{c.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continuous learning card — full width */}
              <div className="cert-card" style={{ gridColumn:'1/-1' }}>
                <div style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                  <div style={{
                    width:52, height:52, borderRadius:14, fontSize:24, flexShrink:0,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background:'rgba(16,185,129,0.10)', border:'1px solid rgba(16,185,129,0.22)',
                  }}>🌱</div>
                  <div>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:16, color:'#f1f5f9', marginBottom:6 }}>
                      Continuous Learning
                    </h3>
                    <p style={{ color:'#94a3b8', fontSize:13.5, lineHeight:1.8, maxWidth:580 }}>
                      Actively pursuing further certifications in cloud computing, advanced system design, and
                      modern DevOps practices — committed to staying at the forefront of software engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Impact strip (always visible) ── */}
          <div className={`fu ${visible ? 'in' : ''}`}
            style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:12, marginTop:44, animationDelay:'0.35s' }}>
            {impactStats.map((s, si) => (
              <div key={si} className="impact-card">
                <div style={{
                  fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:22, marginBottom:6,
                  background:'linear-gradient(135deg,#00d8ff,#a855f7)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                }}>{s.value}</div>
                <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:'#475569', letterSpacing:'0.1em', textTransform:'uppercase' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

/* ─── tiny hex→rgb helper ──────────────────────────────────── */
function ac(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

export default Experience;