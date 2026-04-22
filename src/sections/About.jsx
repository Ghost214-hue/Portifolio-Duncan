// sections/About.jsx
import React, { useEffect, useRef, useState } from 'react';

/* ─── Data ─────────────────────────────────────────────────── */
const hardSkills = [
  { label: "JavaScript", color: "cyan"   },
  { label: "TypeScript", color: "cyan"   },
  { label: "Java",       color: "cyan"   },
  { label: "PHP",        color: "cyan"   },
  { label: "Node.js",    color: "cyan"   },
  { label: "Express",    color: "cyan"   },
  { label: "React",      color: "cyan"   },
  { label: "HTML5",      color: "cyan"   },
  { label: "CSS3",       color: "cyan"   },
  { label: "TailwindCSS",color: "cyan"   },
  { label: "SQL",        color: "cyan"   },
  { label: "PostgreSQL", color: "cyan"   },
  { label: "JWT",        color: "cyan"   },
  { label: "Clerk",      color: "cyan"   },
  { label: "REST APIs",  color: "cyan"   },
  { label: "Git",        color: "cyan"   },
  { label: "Power BI",   color: "cyan"   },
  { label: "Testing",    color: "cyan"   },
];

const softSkills = [
  "Collaborative Leadership",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
  "Open-mindedness",
  "Negotiation",
  "Advocacy & Persistence",
];

const achievements = [
  { metric: "30%",    desc: "Reduction in administrative workload through HRM automation" },
  { metric: "2 hrs",  desc: "WASREB report compilation — down from multiple days" },
  { metric: "KES 1.2M", desc: "Unbilled consumption restored through billing data audit" },
  { metric: "91→98%", desc: "Billing accuracy improvement across 3 operational zones" },
  { metric: "12 hrs", desc: "Weekly manual reporting eliminated via Power BI dashboard" },
  { metric: "100%",   desc: "On-time WASREB regulatory submissions with zero rejections" },
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

/* ─── Intersection-observer hook ───────────────────────────── */
function useVisible(threshold = 0.15) {
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

/* ─── Sub-components ────────────────────────────────────────── */
const GlassCard = ({ children, className = '', style = {} }) => (
  <div className={`glass-about-card ${className}`} style={style}>
    {children}
  </div>
);

const SectionLabel = ({ children }) => (
  <h3 style={{
    fontFamily: "'Syne', sans-serif",
    fontSize: '11px',
    letterSpacing: '0.18em',
    color: '#00d8ff',
    textTransform: 'uppercase',
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }}>
    <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(0,216,255,0.35), transparent)' }} />
    {children}
    <span style={{ flex: 1, height: 1, background: 'linear-gradient(to left, rgba(0,216,255,0.35), transparent)' }} />
  </h3>
);

/* ─── Main Component ─────────────────────────────────────────── */
const About = () => {
  const [sectionRef, sectionVisible] = useVisible();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Core glass card ── */
        .glass-about-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(0,216,255,0.10);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow:
            0 20px 60px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.06),
            inset 0 -1px 0 rgba(0,0,0,0.2);
          border-radius: 20px;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
        }
        .glass-about-card:hover {
          border-color: rgba(0,216,255,0.22);
          box-shadow:
            0 24px 72px rgba(0,0,0,0.55),
            0 0 30px rgba(0,216,255,0.08),
            inset 0 1px 0 rgba(255,255,255,0.07);
          transform: translateY(-3px);
        }

        /* ── Skill pill variants ── */
        .pill-cyan {
          background: rgba(0,216,255,0.07);
          border: 1px solid rgba(0,216,255,0.18);
          color: #7dd3e8;
          transition: all 0.25s ease;
        }
        .pill-cyan:hover {
          background: rgba(0,216,255,0.14);
          border-color: rgba(0,216,255,0.38);
          color: #00d8ff;
          box-shadow: 0 0 14px rgba(0,216,255,0.18);
          transform: translateY(-2px);
        }
        .pill-purple {
          background: rgba(168,85,247,0.07);
          border: 1px solid rgba(168,85,247,0.18);
          color: #c084fc;
          transition: all 0.25s ease;
        }
        .pill-purple:hover {
          background: rgba(168,85,247,0.14);
          border-color: rgba(168,85,247,0.38);
          color: #a855f7;
          box-shadow: 0 0 14px rgba(168,85,247,0.18);
          transform: translateY(-2px);
        }

        /* ── Metric badge ── */
        .metric-badge {
          background: linear-gradient(135deg, rgba(0,216,255,0.10), rgba(168,85,247,0.10));
          border: 1px solid rgba(0,216,255,0.20);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: all 0.3s ease;
        }
        .metric-badge:hover {
          border-color: rgba(0,216,255,0.38);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(0,216,255,0.12);
          transform: translateY(-3px) scale(1.02);
        }

        /* ── Timeline dot ── */
        .tl-dot-active {
          background: #00d8ff;
          box-shadow: 0 0 0 4px rgba(0,216,255,0.15), 0 0 18px rgba(0,216,255,0.5);
        }
        .tl-dot-past {
          background: #334155;
          border: 2px solid rgba(0,216,255,0.20);
        }

        /* ── Fade-up animation ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up   { opacity:0; }
        .fade-up.in { animation: fadeUp 0.65s ease forwards; }

        /* ── Education glass panel ── */
        .edu-card {
          background: linear-gradient(135deg, rgba(0,216,255,0.05), rgba(168,85,247,0.05));
          border: 1px solid rgba(0,216,255,0.14);
          backdrop-filter: blur(28px) saturate(150%);
          -webkit-backdrop-filter: blur(28px) saturate(150%);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
          border-radius: 20px;
        }

        /* ── Progress bar ── */
        @keyframes growBar {
          from { width: 0; }
          to   { width: var(--w); }
        }
        .bar-fill {
          height: 100%;
          border-radius: 99px;
          animation: growBar 1.2s ease forwards;
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        style={{ background: '#060a0f', fontFamily: "'Syne', sans-serif", position: 'relative', overflowX: 'hidden' }}
        className="py-24 md:py-32"
      >
        {/* ── Ambient blobs ── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div style={{ position:'absolute', top:'20%', right:'10%', width:480, height:480, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(0,216,255,0.08) 0%, transparent 70%)', filter:'blur(70px)',
            animation:'pulse 7s ease-in-out infinite' }} />
          <div style={{ position:'absolute', bottom:'15%', left:'5%', width:400, height:400, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', filter:'blur(70px)',
            animation:'pulse 9s ease-in-out infinite 3s' }} />
          {/* Fine dot grid */}
          <div style={{ position:'absolute', inset:0,
            backgroundImage:'radial-gradient(rgba(0,216,255,0.04) 1px, transparent 1px)',
            backgroundSize:'32px 32px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          {/* ── Section header ── */}
          <div className={`text-center mb-16 md:mb-20 fade-up ${sectionVisible ? 'in' : ''}`}
            style={{ animationDelay: '0s' }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(0,216,255,0.07)', border:'1px solid rgba(0,216,255,0.18)',
              backdropFilter:'blur(14px)', borderRadius:99, padding:'6px 20px', marginBottom:20,
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.15em', color:'#00d8ff' }}>
                ABOUT ME
              </span>
            </div>
            <h2 style={{
              fontFamily:"'Syne',sans-serif", fontWeight:800,
              fontSize:'clamp(2.4rem, 5vw, 3.8rem)', lineHeight:1.05,
              background:'linear-gradient(90deg, #f1f5f9 20%, #00d8ff 50%, #f1f5f9 80%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>
              Who Am I?
            </h2>
            <div style={{ width:64, height:3, borderRadius:99, margin:'16px auto 0',
              background:'linear-gradient(90deg, #00d8ff, #a855f7)' }} />
          </div>

          {/* ── Row 1: Bio + Experience Timeline ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* Bio card */}
            <GlassCard
              className={`p-7 md:p-8 fade-up ${sectionVisible ? 'in' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              <SectionLabel>Professional Summary</SectionLabel>
              <p style={{ color:'#94a3b8', lineHeight:1.8, marginBottom:16, fontSize:'14.5px' }}>
                Innovative{' '}
                <span style={{ color:'#00d8ff', fontWeight:600 }}>Full-Stack Developer</span>{' '}
                with a Computer Science degree and demonstrated experience building scalable web
                applications for the water and sanitation sector. Skilled in modern JavaScript
                frameworks, RESTful API design, and database optimisation.
              </p>
              <p style={{ color:'#94a3b8', lineHeight:1.8, fontSize:'14.5px' }}>
                Proven ability to architect end-to-end solutions — from HRM systems to regulatory
                reporting tools — that automate workflows, eliminate manual errors, and deliver
                data-driven insights. Background in CS has cultivated exceptional empathy,
                cross-functional communication, and the ability to translate complex user needs
                into intuitive technical solutions.
              </p>

              {/* Contact snippet */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:22 }}>
                {[
                  { icon:'📍', text:'Nairobi, Kenya' },
                  { icon:'📧', text:'karenjuduncan750@gmail.com' },
                  { icon:'📞', text:'+254 112 554 479' },
                ].map((c,i) => (
                  <span key={i} style={{
                    display:'inline-flex', alignItems:'center', gap:6,
                    background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
                    backdropFilter:'blur(10px)', borderRadius:99, padding:'5px 14px',
                    fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#64748b',
                  }}>
                    {c.icon} {c.text}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Education card */}
            <div className={`edu-card p-7 md:p-8 fade-up ${sectionVisible ? 'in' : ''}`}
              style={{ animationDelay: '0.15s' }}>
              <SectionLabel>Education</SectionLabel>

              <div style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
                <div style={{
                  flexShrink:0, width:48, height:48, borderRadius:14,
                  background:'linear-gradient(135deg, rgba(0,216,255,0.15), rgba(168,85,247,0.15))',
                  border:'1px solid rgba(0,216,255,0.25)', display:'flex', alignItems:'center',
                  justifyContent:'center', fontSize:22,
                }}>🎓</div>
                <div>
                  <h4 style={{ color:'#f1f5f9', fontWeight:700, fontSize:17, marginBottom:4 }}>
                    BSc. Computer Science
                  </h4>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#00d8ff', marginBottom:6 }}>
                    St. Paul's University · Limuru, Kenya
                  </p>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>
                    September 2021 – November 2025
                  </p>
                </div>
              </div>

              <div style={{ margin:'24px 0 8px', height:1, background:'rgba(0,216,255,0.08)' }} />

              {/* Certifications row */}
              <SectionLabel>Certifications</SectionLabel>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                {[
                  { name:'Cisco Networking Academy', tag:'Cybersecurity' },
                  { name:'Cyber Shujaa',              tag:'Ethical Hacking & Pen Testing' },
                ].map((c,i) => (
                  <div key={i} style={{
                    background:'rgba(0,216,255,0.06)', border:'1px solid rgba(0,216,255,0.16)',
                    borderRadius:12, padding:'10px 14px', flex:1, minWidth:160,
                  }}>
                    <p style={{ color:'#00d8ff', fontWeight:600, fontSize:12, marginBottom:3 }}>{c.name}</p>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>{c.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Row 2: Experience Timeline (full-width) ── */}
          <GlassCard
            className={`p-7 md:p-8 mb-6 fade-up ${sectionVisible ? 'in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <SectionLabel>Work Experience</SectionLabel>
            <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
              {experience.map((job, ji) => (
                <div key={ji} style={{ display:'flex', gap:20, position:'relative' }}>

                  {/* Timeline spine */}
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                    <div className={job.active ? 'tl-dot-active' : 'tl-dot-past'}
                      style={{ width:14, height:14, borderRadius:'50%', marginTop:4, flexShrink:0 }} />
                    {ji < experience.length - 1 && (
                      <div style={{ width:1, flexGrow:1, marginTop:6, marginBottom:6,
                        background:'linear-gradient(to bottom, rgba(0,216,255,0.25), rgba(0,216,255,0.04))' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: ji < experience.length - 1 ? 32 : 0, flex:1 }}>
                    <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:10, marginBottom:6 }}>
                      <h4 style={{ color:'#f1f5f9', fontWeight:700, fontSize:16 }}>{job.role}</h4>
                      {job.active && (
                        <span style={{
                          fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:'0.1em',
                          background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.3)',
                          color:'#22c55e', borderRadius:99, padding:'2px 10px',
                        }}>CURRENT</span>
                      )}
                    </div>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#00d8ff', marginBottom:4 }}>
                      {job.company}
                    </p>
                    <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569', marginBottom:14 }}>
                      {job.period} · {job.location}
                    </p>
                    <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:8 }}>
                      {job.bullets.map((b,bi) => (
                        <li key={bi} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                          <span style={{ color:'#00d8ff', marginTop:2, flexShrink:0, fontSize:12 }}>▹</span>
                          <span style={{ color:'#94a3b8', fontSize:13.5, lineHeight:1.7 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* ── Row 3: Skills (2-col) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* Hard Skills */}
            <GlassCard
              className={`p-7 md:p-8 fade-up ${sectionVisible ? 'in' : ''}`}
              style={{ animationDelay: '0.25s' }}
            >
              <SectionLabel>Technical Skills</SectionLabel>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {hardSkills.map((s,i) => (
                  <span key={i} className="pill-cyan"
                    style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, borderRadius:8, padding:'6px 12px', cursor:'default' }}>
                    {s.label}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Soft Skills + mini bars */}
            <GlassCard
              className={`p-7 md:p-8 fade-up ${sectionVisible ? 'in' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              <SectionLabel>Soft Skills</SectionLabel>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {softSkills.map((s,i) => {
                  const widths = [88,82,95,85,78,80,86];
                  return (
                    <div key={i}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#c084fc' }}>{s}</span>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569' }}>{widths[i]}%</span>
                      </div>
                      <div style={{ height:4, borderRadius:99, background:'rgba(168,85,247,0.10)', overflow:'hidden' }}>
                        {sectionVisible && (
                          <div className="bar-fill" style={{
                            '--w': `${widths[i]}%`,
                            background:'linear-gradient(to right, #a855f7, #00d8ff)',
                            animationDelay: `${0.4 + i * 0.08}s`,
                          }} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>

          {/* ── Row 4: Achievements grid ── */}
          <div className={`fade-up ${sectionVisible ? 'in' : ''}`} style={{ animationDelay:'0.35s' }}>
            <div style={{ textAlign:'center', marginBottom:24 }}>
              <span style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.18em',
                color:'#00d8ff', textTransform:'uppercase',
              }}>Key Achievements</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((a,i) => (
                <div key={i} className="metric-badge rounded-2xl p-5 text-center cursor-default">
                  <div style={{
                    fontFamily:"'Syne',sans-serif", fontWeight:800,
                    fontSize:'clamp(1.5rem,3vw,2rem)', color:'#00d8ff', marginBottom:8,
                    background:'linear-gradient(135deg,#00d8ff,#a855f7)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                  }}>
                    {a.metric}
                  </div>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10.5, color:'#64748b', lineHeight:1.6 }}>
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