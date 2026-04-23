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
    accent: "#0ea5e9",
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
    accent: "#6366f1",
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
    tech: ["React", "Node.js" ,"sanity CMS","TailwindCSS", "Vite"],
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
    accent: "#0ea5e9",
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
    accent: "#6366f1",
    description:
      "Modern animated portfolio with glassmorphism, typed-role animation, scroll-triggered reveals and full responsiveness.",
    highlights: [
      "Light glassmorphism across all sections",
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
  { id: "all",       label: "All",        icon: "◈" },
  { id: "fullstack", label: "Full-Stack", icon: "⚡" },
  { id: "frontend",  label: "Frontend",   icon: "🎨" },
  { id: "backend",   label: "Backend",    icon: "⚙️" },
  { id: "data",      label: "Data",       icon: "📊" },
];

const statusMeta = {
  live: { label: "Live",    color: "#16a34a", bg: "rgba(34,197,94,0.10)",  border: "rgba(34,197,94,0.30)"  },
  wip:  { label: "In Dev",  color: "#b45309", bg: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.30)" },
};

/* ─── hex → rgb helper ─────────────────────────────────────── */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

/* ─── Project Card ──────────────────────────────────────────── */
const ProjectCard = ({ project, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const st = statusMeta[project.status];
  const ac = project.accent;
  const rgb = hexToRgb(ac);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s, box-shadow 0.35s ease, border-color 0.35s ease`,
        background: hovered
          ? `linear-gradient(145deg, rgba(${rgb},0.07), rgba(255,255,255,0.88))`
          : 'rgba(255,255,255,0.70)',
        border: `1px solid ${hovered ? `rgba(${rgb},0.45)` : 'rgba(255,255,255,0.90)'}`,
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: hovered
          ? `0 24px 60px rgba(${rgb},0.18), 0 8px 24px rgba(100,130,200,0.14), inset 0 2px 0 rgba(255,255,255,1)`
          : '0 8px 32px rgba(100,130,200,0.10), 0 2px 8px rgba(100,130,200,0.06), inset 0 2px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(180,210,255,0.25)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* ── Header band ── */}
      <div style={{
        padding: '22px 22px 16px',
        borderBottom: '1px solid rgba(200,220,255,0.30)',
        background: hovered
          ? `linear-gradient(135deg, rgba(${rgb},0.10) 0%, rgba(255,255,255,0) 100%)`
          : `linear-gradient(135deg, rgba(${rgb},0.05) 0%, rgba(255,255,255,0) 100%)`,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s ease',
      }}>
        {/* Decorative orb */}
        <div style={{
          position: 'absolute', top: -30, right: -30, width: 110, height: 110,
          borderRadius: '50%', background: ac, filter: 'blur(55px)',
          opacity: hovered ? 0.20 : 0.10,
          transition: 'opacity 0.4s',
        }} />

        {/* Icon + status row */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
          <div style={{
            width:46, height:46, borderRadius:12, fontSize:22,
            display:'flex', alignItems:'center', justifyContent:'center',
            background: `rgba(${rgb},0.10)`,
            border: `1px solid rgba(${rgb},0.25)`,
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.9)`,
          }}>
            {project.emoji}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap', justifyContent:'flex-end' }}>
            <span style={{
              fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.08em',
              background: st.bg, border:`1px solid ${st.border}`, color: st.color,
              borderRadius:99, padding:'3px 10px', fontWeight:600,
            }}>
              ● {st.label}
            </span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#94a3b8' }}>
              {project.period}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:19,
          color: hovered ? ac : '#0f172a',
          transition:'color 0.3s ease', marginBottom:4,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily:"'JetBrains Mono',monospace", fontSize:11,
          color:'#64748b', letterSpacing:'0.05em',
        }}>
          {project.company}
        </p>
      </div>

      {/* ── Body ── */}
      <div style={{ padding:'16px 22px', flex:1, display:'flex', flexDirection:'column', gap:14 }}>
        <p style={{ color:'#475569', fontSize:14, lineHeight:1.78 }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:7 }}>
          {project.highlights.slice(0,3).map((h,i) => (
            <li key={i} style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
              <span style={{ color:ac, fontSize:12, marginTop:2, flexShrink:0 }}>▹</span>
              <span style={{ color:'#475569', fontSize:13, lineHeight:1.65 }}>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:'auto' }}>
          {project.tech.map((t,i) => (
            <span key={i} style={{
              fontFamily:"'JetBrains Mono',monospace", fontSize:11,
              background:`rgba(${rgb},0.07)`,
              border:`1px solid rgba(${rgb},0.22)`,
              borderRadius:6, padding:'4px 10px',
              color: ac === '#10b981' ? '#065f46' : ac === '#f59e0b' ? '#92400e' : '#0369a1',
              fontWeight:600,
              boxShadow:'inset 0 1px 0 rgba(255,255,255,0.8)',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Footer links ── */}
      <div style={{
        padding:'12px 22px 18px',
        borderTop:'1px solid rgba(200,220,255,0.30)',
        display:'flex', gap:10,
      }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6,
            fontFamily:"'JetBrains Mono',monospace", fontSize:12, fontWeight:600,
            background:'rgba(255,255,255,0.70)',
            border:'1px solid rgba(200,220,255,0.60)',
            borderRadius:10, padding:'9px 0', color:'#334155',
            textDecoration:'none', transition:'all 0.25s ease',
            boxShadow:'inset 0 1px 0 rgba(255,255,255,1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color='#0f172a';
            e.currentTarget.style.borderColor='rgba(14,165,233,0.40)';
            e.currentTarget.style.background='rgba(255,255,255,0.92)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color='#334155';
            e.currentTarget.style.borderColor='rgba(200,220,255,0.60)';
            e.currentTarget.style.background='rgba(255,255,255,0.70)';
          }}
        >
          <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>

        {project.live !== '#' ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6,
              fontFamily:"'JetBrains Mono',monospace", fontSize:12, fontWeight:600,
              background:`rgba(${rgb},0.09)`,
              border:`1px solid rgba(${rgb},0.28)`,
              borderRadius:10, padding:'9px 0', color:ac,
              textDecoration:'none', transition:'all 0.25s ease',
              boxShadow:`inset 0 1px 0 rgba(255,255,255,0.80)`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background=`rgba(${rgb},0.18)`;
              e.currentTarget.style.boxShadow=`0 4px 16px rgba(${rgb},0.20), inset 0 1px 0 rgba(255,255,255,0.9)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background=`rgba(${rgb},0.09)`;
              e.currentTarget.style.boxShadow=`inset 0 1px 0 rgba(255,255,255,0.80)`;
            }}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Site
          </a>
        ) : (
          <div style={{
            flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6,
            fontFamily:"'JetBrains Mono',monospace", fontSize:12, fontWeight:600,
            background:'rgba(245,158,11,0.08)',
            border:'1px solid rgba(245,158,11,0.28)',
            borderRadius:10, padding:'9px 0', color:'#92400e',
            boxShadow:'inset 0 1px 0 rgba(255,255,255,0.9)',
          }}>
            🔧 In Progress
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main Section ──────────────────────────────────────────── */
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

        /* ── Section background ── */
        .projects-bg {
          background:
            radial-gradient(ellipse 65% 50% at 10% 25%, rgba(186,230,255,0.38) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 90% 75%, rgba(199,210,254,0.32) 0%, transparent 60%),
            linear-gradient(160deg, #eef2ff 0%, #f0f8ff 50%, #f8fafc 100%);
          width: 100%;
        }

        /* ── Filter pills ── */
        .filter-pill {
          border-radius: 99px;
          padding: 8px 20px;
          font-size: 12px;
          letter-spacing: 0.07em;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(200,220,255,0.55);
          background: rgba(255,255,255,0.55);
          color: #64748b;
          backdrop-filter: blur(14px);
          font-weight: 500;
          box-shadow: inset 0 1px 0 rgba(255,255,255,1);
        }
        .filter-pill:hover {
          color: #0369a1;
          border-color: rgba(14,165,233,0.40);
          background: rgba(255,255,255,0.80);
          box-shadow: 0 4px 14px rgba(14,165,233,0.12), inset 0 1px 0 rgba(255,255,255,1);
        }
        .filter-pill.active {
          background: linear-gradient(135deg, rgba(14,165,233,0.14), rgba(99,102,241,0.12));
          border-color: rgba(14,165,233,0.45);
          color: #0284c7;
          font-weight: 700;
          box-shadow: 0 4px 18px rgba(14,165,233,0.16), inset 0 1px 0 rgba(255,255,255,1);
        }

        /* ── Fade-up ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .su      { opacity:0; }
        .su.in   { animation: fadeUp 0.65s ease forwards; }

        /* ── Dot grid ── */
        .projects-dot-grid {
          background-image: radial-gradient(rgba(14,165,233,0.10) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }

        /* ── Shimmer heading ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-heading {
          background: linear-gradient(90deg, #0f172a 15%, #0ea5e9 50%, #0f172a 85%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 6s linear infinite;
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        className="projects-bg relative py-24 md:py-32 overflow-x-hidden"
        style={{ fontFamily:"'Syne',sans-serif", width:'100%' }}
      >
        {/* Dot grid */}
        <div className="projects-dot-grid absolute inset-0 z-0 pointer-events-none opacity-60" />

        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div style={{ position:'absolute', top:'12%', left:'5%', width:520, height:520, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(186,230,255,0.48) 0%, transparent 70%)', filter:'blur(80px)' }} />
          <div style={{ position:'absolute', bottom:'8%', right:'5%', width:440, height:440, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(199,210,254,0.42) 0%, transparent 70%)', filter:'blur(80px)' }} />
        </div>

        {/* ── Full-width inner container ── */}
        <div className="relative z-10 w-full px-6 md:px-10 xl:px-16">

          {/* ── Header ── */}
          <div className={`text-center mb-14 su ${sectionVisible ? 'in' : ''}`}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(255,255,255,0.65)',
              border:'1px solid rgba(14,165,233,0.28)',
              backdropFilter:'blur(16px)',
              borderRadius:99, padding:'7px 22px', marginBottom:20,
              boxShadow:'0 4px 16px rgba(14,165,233,0.10), inset 0 1px 0 rgba(255,255,255,1)',
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.15em', color:'#0284c7', fontWeight:600 }}>
                MY WORK
              </span>
            </div>

            <h2 className="shimmer-heading"
              style={{ fontWeight:800, fontSize:'clamp(2.2rem,5vw,3.6rem)', lineHeight:1.05, marginBottom:12 }}>
              Featured Projects
            </h2>
            <p style={{
              color:'#475569', fontSize:15, maxWidth:500, margin:'0 auto 16px',
              fontFamily:"'JetBrains Mono',monospace", lineHeight:1.75,
            }}>
              Real-world solutions — deployed, measurable, and built to last.
            </p>
            <div style={{ width:64, height:3, borderRadius:99, margin:'0 auto',
              background:'linear-gradient(90deg,#0ea5e9,#6366f1)' }} />
          </div>

          {/* ── Filter bar ── */}
          <div
            className={`su ${sectionVisible ? 'in' : ''}`}
            style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:8, marginBottom:44, animationDelay:'0.1s' }}
          >
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

          {/* ── Grid — truly full width ── */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap:20,
            width:'100%',
          }}>
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
          <div className={`text-center mt-16 su ${sectionVisible ? 'in' : ''}`} style={{ animationDelay:'0.4s' }}>
            <a
              href="https://github.com/Ghost214-hue"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:'inline-flex', alignItems:'center', gap:10,
                fontFamily:"'JetBrains Mono',monospace", fontSize:13, letterSpacing:'0.05em', fontWeight:600,
                background:'rgba(255,255,255,0.65)',
                border:'1px solid rgba(200,220,255,0.70)',
                backdropFilter:'blur(16px)',
                borderRadius:99, padding:'13px 30px', color:'#334155',
                textDecoration:'none', transition:'all 0.3s ease',
                boxShadow:'0 4px 16px rgba(100,130,200,0.10), inset 0 1px 0 rgba(255,255,255,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor='rgba(14,165,233,0.45)';
                e.currentTarget.style.color='#0284c7';
                e.currentTarget.style.boxShadow='0 8px 28px rgba(14,165,233,0.18), inset 0 1px 0 rgba(255,255,255,1)';
                e.currentTarget.style.transform='translateY(-2px)';
                e.currentTarget.style.background='rgba(255,255,255,0.88)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor='rgba(200,220,255,0.70)';
                e.currentTarget.style.color='#334155';
                e.currentTarget.style.boxShadow='0 4px 16px rgba(100,130,200,0.10), inset 0 1px 0 rgba(255,255,255,1)';
                e.currentTarget.style.transform='translateY(0)';
                e.currentTarget.style.background='rgba(255,255,255,0.65)';
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