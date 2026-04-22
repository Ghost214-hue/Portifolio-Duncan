// sections/Projects.jsx
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

/* ─── Project data ─────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "HRM System",
    category: "fullstack",
    company: "Murang'a Water & Sanitation Co.",
    period: "09.2025 – Present",
    status: "live",
    emoji: "🏢",
    accent: "#00d8ff",
    description:
      "Comprehensive Human Resource Management system automating employee records, leave tracking and payroll processing end-to-end.",
    highlights: [
      "Reduced administrative workload by ~30%",
      "Cut data-retrieval time by 50% for HR personnel",
      "Automated employee onboarding & document management",
      "Real-time attendance tracking and reporting",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "React", "TailwindCSS"],
    github: "https://github.com/Ghost214-hue",
    live: "https://muwascoerp.co.ke",
  },
  {
    id: 2,
    title: "WASREB Report Generator",
    category: "fullstack",
    company: "Murang'a Water & Sanitation Co.",
    period: "2025",
    status: "live",
    emoji: "📋",
    accent: "#a855f7",
    description:
      "Dynamic monthly report generator automating data aggregation and visualization for WASREB regulatory submissions.",
    highlights: [
      "Compilation time: days → under 2 hours",
      "Eliminated manual calculation errors",
      "Automated charts & interactive visualisations",
      "100% on-time delivery, zero rejections",
    ],
    tech: ["PHP", "JavaScript", "MySQL", "Power BI", "HTML5", "CSS3"],
    github: "https://github.com/Ghost214-hue",
    live: "https://muwasco.co.ke/monthly_report/",
  },
  {
    id: 3,
    title: "Finland Properties",
    category: "fullstack",
    company: "Client Project",
    period: "2025 – 2026",
    status: "live",
    emoji: "🏡",
    accent: "#10b981",
    description:
      "Full-stack real-estate listing platform for Finland Properties — property search, listings management and contact flows, fully deployed.",
    highlights: [
      "Responsive property listings with advanced filters",
      "Admin panel for property CRUD management",
      "Integrated contact & inquiry forms",
      "Deployed & live at finlandproperties.co.ke",
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "Vite"],
    github: "https://github.com/Ghost214-hue/FInland-Properties.git",
    live: "https://finelandproperties.co.ke",
  },
  {
    id: 4,
    title: "CRM System",
    category: "fullstack",
    company: "Murang'a Water & Sanitation Co.",
    period: "Present",
    status: "wip",
    emoji: "🔗",
    accent: "#f59e0b",
    description:
      "Customer Relationship Management system centralising client interactions, sales pipelines and real-time analytics.",
    highlights: [
      "Projected 40% improvement in lead-tracking efficiency",
      "Real-time analytics for data-driven decisions",
      "Automated follow-up reminders & task management",
      "Interactive sales performance dashboard",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Socket.io"],
    github: "https://github.com/Ghost214-hue",
    live: "#",
  },
  {
    id: 5,
    title: "Billing Analytics Dashboard",
    category: "data",
    company: "Murang'a Water & Sanitation Co.",
    period: "2025",
    status: "live",
    emoji: "📊",
    accent: "#00d8ff",
    description:
      "Interactive Power BI dashboard monitoring 6 core KPIs for water-service operations, replacing 12 hrs/week of manual Excel work.",
    highlights: [
      "Billing accuracy lifted from 91% to 98% in 2 months",
      "Detected 16.4 Lm³/month physical loss in Zone C",
      "Restored KES 1.2M in unbilled consumption",
      "12 weekly reporting hours fully automated",
    ],
    tech: ["Power BI", "SQL", "DAX", "Excel", "Python"],
    github: "https://github.com/Dantico12/burst_analyzer",
    live: "https://burst-analyzer.onrender.com/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "frontend",
    company: "Personal Project",
    period: "2026",
    status: "live",
    emoji: "✨",
    accent: "#a855f7",
    description:
      "Modern animated portfolio with glassmorphism, typed-role animation, scroll-triggered reveals and full responsiveness.",
    highlights: [
      "Deep glassmorphism across all sections",
      "Typing animation & particle glow effects",
      "Scroll-triggered IntersectionObserver animations",
      "Fully responsive — mobile to 4K",
    ],
    tech: ["React", "TailwindCSS", "Vite", "CSS Animations"],
    github: "https://github.com/Ghost214-hue/portfolio",
    live: "/",
  },
];

const categories = [
  { id: "all",       label: "All",          icon: "◈" },
  { id: "fullstack", label: "Full-Stack",   icon: "⚡" },
  { id: "frontend",  label: "Frontend",     icon: "🎨" },
  { id: "backend",   label: "Backend",      icon: "⚙️" },
  { id: "data",      label: "Data",         icon: "📊" },
];

const statusMeta = {
  live: { label: "Live",     color: "#22c55e", bg: "rgba(34,197,94,0.10)",  border: "rgba(34,197,94,0.28)"  },
  wip:  { label: "In Dev",   color: "#f59e0b", bg: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.28)" },
};

/* ─── Card ─────────────────────────────────────────────────── */
const ProjectCard = ({ project, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const st = statusMeta[project.status];
  const ac = project.accent;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
        background: hovered
          ? `linear-gradient(145deg, rgba(${hexToRgb(ac)},0.06), rgba(0,0,0,0.0))`
          : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? ac + '44' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: hovered
          ? `0 24px 64px rgba(0,0,0,0.55), 0 0 32px ${ac}22, inset 0 1px 0 rgba(255,255,255,0.07)`
          : '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        transform: hovered ? 'translateY(-6px)' : visible ? 'translateY(0)' : 'translateY(32px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Header band ── */}
      <div style={{
        padding: '22px 22px 16px',
        borderBottom: `1px solid rgba(255,255,255,0.05)`,
        background: `linear-gradient(135deg, rgba(${hexToRgb(ac)},0.08) 0%, rgba(0,0,0,0) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blur orb */}
        <div style={{
          position: 'absolute', top: -30, right: -30, width: 100, height: 100,
          borderRadius: '50%', background: ac, filter: 'blur(50px)', opacity: 0.18,
          transition: 'opacity 0.4s', ...(hovered && { opacity: 0.32 }),
        }} />

        {/* Top row: emoji icon + status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, fontSize: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `rgba(${hexToRgb(ac)},0.12)`,
            border: `1px solid rgba(${hexToRgb(ac)},0.22)`,
          }}>
            {project.emoji}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: '0.1em',
              background: st.bg, border: `1px solid ${st.border}`, color: st.color,
              borderRadius: 99, padding: '3px 10px',
            }}>
              ● {st.label}
            </span>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: '#475569',
            }}>
              {project.period}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18,
          color: hovered ? ac : '#f1f5f9',
          transition: 'color 0.3s ease', marginBottom: 4,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
          color: '#475569', letterSpacing: '0.06em',
        }}>
          {project.company}
        </p>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '16px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.75 }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: ac, fontSize: 11, marginTop: 2, flexShrink: 0 }}>▹</span>
              <span style={{ color: '#64748b', fontSize: 12, lineHeight: 1.6 }}>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 6, padding: '4px 9px', color: '#64748b',
              transition: 'all 0.2s',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Footer links ── */}
      <div style={{
        padding: '12px 22px 16px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', gap: 10,
      }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 10, padding: '8px 0', color: '#64748b',
            textDecoration: 'none', transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
        >
          <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        {project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
              background: `rgba(${hexToRgb(ac)},0.08)`,
              border: `1px solid rgba(${hexToRgb(ac)},0.22)`,
              borderRadius: 10, padding: '8px 0', color: ac,
              textDecoration: 'none', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `rgba(${hexToRgb(ac)},0.16)`; }}
            onMouseLeave={e => { e.currentTarget.style.background = `rgba(${hexToRgb(ac)},0.08)`; }}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Site
          </a>
        )}
        {project.live === '#' && (
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
            background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)',
            borderRadius: 10, padding: '8px 0', color: '#92400e',
          }}>
            🔧 In Progress
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── tiny hex→rgb helper ──────────────────────────────────── */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

/* ─── Main section ─────────────────────────────────────────── */
const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [sectionRef, sectionVisible] = useVisible();

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .filter-pill {
          fontFamily: "'JetBrains Mono',monospace";
          border-radius: 99px;
          padding: 7px 18px;
          font-size: 11px;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          backdrop-filter: blur(12px);
        }
        .filter-pill:hover {
          color: #e2e8f0;
          border-color: rgba(0,216,255,0.25);
          background: rgba(0,216,255,0.06);
        }
        .filter-pill.active {
          background: linear-gradient(135deg, rgba(0,216,255,0.18), rgba(168,85,247,0.18));
          border-color: rgba(0,216,255,0.40);
          color: #00d8ff;
          box-shadow: 0 0 20px rgba(0,216,255,0.14);
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .su { opacity:0; }
        .su.in { animation: fadeUp 0.65s ease forwards; }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        style={{ background: '#060a0f', position: 'relative', overflowX: 'hidden',
          fontFamily: "'Syne', sans-serif" }}
        className="py-24 md:py-32"
      >
        {/* ── Ambient blobs ── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div style={{ position:'absolute', top:'15%', left:'10%', width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(0,216,255,0.07) 0%, transparent 70%)', filter:'blur(80px)',
            animation:'pulse 8s ease-in-out infinite' }} />
          <div style={{ position:'absolute', bottom:'10%', right:'8%', width:420, height:420, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', filter:'blur(80px)',
            animation:'pulse 10s ease-in-out infinite 3s' }} />
          <div style={{ position:'absolute', inset:0,
            backgroundImage:'radial-gradient(rgba(0,216,255,0.035) 1px, transparent 1px)',
            backgroundSize:'32px 32px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          {/* ── Header ── */}
          <div className={`text-center mb-14 su ${sectionVisible ? 'in' : ''}`}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(0,216,255,0.07)', border:'1px solid rgba(0,216,255,0.18)',
              backdropFilter:'blur(14px)', borderRadius:99, padding:'6px 20px', marginBottom:20,
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.15em', color:'#00d8ff' }}>
                MY WORK
              </span>
            </div>

            <h2 style={{
              fontWeight:800, fontSize:'clamp(2.2rem,5vw,3.6rem)', lineHeight:1.05,
              background:'linear-gradient(90deg, #f1f5f9 15%, #00d8ff 50%, #f1f5f9 85%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              marginBottom:12,
            }}>
              Featured Projects
            </h2>
            <p style={{ color:'#475569', fontSize:14, maxWidth:500, margin:'0 auto 16px',
              fontFamily:"'JetBrains Mono',monospace", lineHeight:1.7 }}>
              Real-world solutions — deployed, measurable, and built to last.
            </p>
            <div style={{ width:64, height:3, borderRadius:99, margin:'0 auto',
              background:'linear-gradient(90deg,#00d8ff,#a855f7)' }} />
          </div>

          {/* ── Filter bar ── */}
          <div className={`su ${sectionVisible ? 'in' : ''}`}
            style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:8, marginBottom:40, animationDelay:'0.1s' }}>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`filter-pill ${filter === c.id ? 'active' : ''}`}
                style={{ fontFamily:"'JetBrains Mono',monospace" }}
              >
                <span style={{ marginRight:6 }}>{c.icon}</span>{c.label}
              </button>
            ))}
          </div>

          {/* ── Grid ── */}
          <div
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap:20,
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                visible={sectionVisible}
              />
            ))}
          </div>

          {/* ── GitHub CTA ── */}
          <div className={`text-center mt-14 su ${sectionVisible ? 'in' : ''}`}
            style={{ animationDelay:'0.4s' }}>
            <a
              href="https://github.com/Ghost214-hue"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:'inline-flex', alignItems:'center', gap:10,
                fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.06em',
                background:'rgba(255,255,255,0.03)',
                border:'1px solid rgba(255,255,255,0.10)',
                backdropFilter:'blur(16px)',
                borderRadius:99, padding:'12px 28px', color:'#94a3b8',
                textDecoration:'none', transition:'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor='rgba(0,216,255,0.35)';
                e.currentTarget.style.color='#00d8ff';
                e.currentTarget.style.boxShadow='0 0 24px rgba(0,216,255,0.12)';
                e.currentTarget.style.transform='translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor='rgba(255,255,255,0.10)';
                e.currentTarget.style.color='#94a3b8';
                e.currentTarget.style.boxShadow='none';
                e.currentTarget.style.transform='translateY(0)';
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View all repositories on GitHub
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;