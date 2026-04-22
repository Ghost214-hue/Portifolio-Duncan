// sections/Contact.jsx
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

/* ─── Contact details ──────────────────────────────────────── */
const contactItems = [
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Muranga, Kenya",
    href: null,
    accent: "#00d8ff",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "karenjuduncan750@gmail.com",
    href: "mailto:karenjuduncan750@gmail.com",
    accent: "#a855f7",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+254 112 554 479",
    href: "tel:+254112554479",
    accent: "#10b981",
  },
  {
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Ghost214-hue",
    href: "https://github.com/Ghost214-hue",
    accent: "#f1f5f9",
  },
  {
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "duncan-karenju",
    href: "https://www.linkedin.com/in/duncan-karenju-b4727026b",
    accent: "#0ea5e9",
  },
];

/* ─── Hex → RGB helper ─────────────────────────────────────── */
function rgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

/* ─── Input component ──────────────────────────────────────── */
const Field = ({ label, id, required, children }) => (
  <div>
    <label htmlFor={id} style={{
      display:'block', fontFamily:"'JetBrains Mono',monospace",
      fontSize:10, letterSpacing:'0.12em', color:'#64748b',
      textTransform:'uppercase', marginBottom:8,
    }}>
      {label}{required && <span style={{ color:'#00d8ff', marginLeft:3 }}>*</span>}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width:'100%', padding:'12px 16px', borderRadius:12,
  background:'rgba(255,255,255,0.03)',
  border:'1px solid rgba(255,255,255,0.08)',
  backdropFilter:'blur(12px)',
  color:'#f1f5f9', fontSize:14, outline:'none',
  fontFamily:"'JetBrains Mono',monospace",
  boxSizing:'border-box',
  transition:'border-color 0.25s ease, box-shadow 0.25s ease',
};

/* ─── Main Component ─────────────────────────────────────────── */
const Contact = () => {
  const [sectionRef, visible] = useVisible();
  const [form, setForm]   = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focused, setFocused] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  /* ── Form submit via mailto fallback (no backend needed) ── */
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      /* ── Option A: EmailJS (recommended — add your IDs below) ──
         Install: npm install @emailjs/browser
         Then uncomment the block below and fill in your IDs from emailjs.com

      import emailjs from '@emailjs/browser';
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setForm({ name:'', email:'', subject:'', message:'' });
      ── End Option A ── */

      /* ── Option B: mailto fallback (works without a backend) ── */
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
      window.location.href = `mailto:karenjuduncan750@gmail.com?subject=${subject}&body=${body}`;

      // Short delay so the OS mail client opens, then show success
      await new Promise(r => setTimeout(r, 1200));
      setStatus('success');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 6000);

    } catch (err) {
      console.error('Send error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const focusStyle = (field) => focused === field
    ? { ...inputStyle, borderColor:'rgba(0,216,255,0.45)', boxShadow:'0 0 0 3px rgba(0,216,255,0.08)' }
    : inputStyle;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ── Base glass card ── */
        .ct-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05);
          border-radius: 20px;
        }

        /* ── Contact item row ── */
        .ct-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px; border-radius: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
          transition: all 0.25s ease; cursor: default;
          text-decoration: none;
        }
        .ct-item:hover {
          background: rgba(0,216,255,0.05);
          border-color: rgba(0,216,255,0.22);
          transform: translateX(4px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
        }

        /* ── Social pill ── */
        .social-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 99px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: #64748b; text-decoration: none;
          transition: all 0.25s ease;
        }
        .social-pill:hover {
          color: #00d8ff; border-color: rgba(0,216,255,0.30);
          background: rgba(0,216,255,0.06);
          box-shadow: 0 0 18px rgba(0,216,255,0.12);
          transform: translateY(-2px);
        }

        /* ── Submit button ── */
        .submit-btn {
          width: 100%; padding: 13px 0; border-radius: 12px; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em;
          background: linear-gradient(135deg, rgba(0,216,255,0.85), rgba(0,160,210,0.9));
          color: #060a0f;
          border: 1px solid rgba(0,216,255,0.60);
          box-shadow: 0 0 28px rgba(0,216,255,0.30), inset 0 1px 0 rgba(255,255,255,0.20);
          transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 0 44px rgba(0,216,255,0.50), 0 0 80px rgba(0,216,255,0.18);
          transform: translateY(-2px);
        }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* ── Availability badge ── */
        .avail-badge {
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.22);
          backdrop-filter: blur(14px);
          border-radius: 99px; padding: 8px 20px;
          display: inline-flex; align-items: center; gap: 8px;
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu { opacity:0; }
        .fu.in { animation: fadeUp 0.6s ease forwards; }

        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin { animation: spinOnce 0.8s linear infinite; }

        /* ── Success / error toast ── */
        .toast-success {
          background: rgba(34,197,94,0.10); border: 1px solid rgba(34,197,94,0.28);
          color: #4ade80; border-radius: 12px; padding: 12px 16px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; text-align: center;
          animation: fadeUp 0.4s ease;
        }
        .toast-error {
          background: rgba(239,68,68,0.10); border: 1px solid rgba(239,68,68,0.28);
          color: #f87171; border-radius: 12px; padding: 12px 16px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; text-align: center;
          animation: fadeUp 0.4s ease;
        }

        /* ── Section label ── */
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

        /* ── Footer ── */
        .footer-bar {
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 56px; padding-top: 28px; text-align: center;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #334155;
        }
        .footer-bar span { color: #00d8ff; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        style={{ background:'#060a0f', fontFamily:"'Syne',sans-serif", position:'relative', overflowX:'hidden' }}
        className="py-24 md:py-32"
      >
        {/* ── Ambient blobs ── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div style={{ position:'absolute', top:'15%', left:'8%', width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(0,216,255,0.07) 0%, transparent 70%)', filter:'blur(80px)',
            animation:'pulse 8s ease-in-out infinite' }} />
          <div style={{ position:'absolute', bottom:'10%', right:'6%', width:440, height:440, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)', filter:'blur(80px)',
            animation:'pulse 10s ease-in-out infinite 3s' }} />
          <div style={{ position:'absolute', inset:0,
            backgroundImage:'radial-gradient(rgba(0,216,255,0.035) 1px, transparent 1px)',
            backgroundSize:'32px 32px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          {/* ── Header ── */}
          <div className={`text-center mb-14 fu ${visible ? 'in' : ''}`}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(0,216,255,0.07)', border:'1px solid rgba(0,216,255,0.18)',
              backdropFilter:'blur(14px)', borderRadius:99, padding:'6px 20px', marginBottom:20,
            }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.15em', color:'#00d8ff' }}>
                GET IN TOUCH
              </span>
            </div>
            <h2 style={{
              fontWeight:800, fontSize:'clamp(2.2rem,5vw,3.6rem)', lineHeight:1.05,
              background:'linear-gradient(90deg, #f1f5f9 15%, #00d8ff 50%, #f1f5f9 85%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              marginBottom:12,
            }}>
              Let's Connect
            </h2>
            <p style={{ color:'#475569', fontSize:13, fontFamily:"'JetBrains Mono',monospace",
              maxWidth:440, margin:'0 auto 16px', lineHeight:1.8 }}>
              Open to internships, freelance work and collaborations — let's build something great.
            </p>
            <div style={{ width:64, height:3, borderRadius:99, margin:'0 auto',
              background:'linear-gradient(90deg,#00d8ff,#a855f7)' }} />
          </div>

          {/* ── Two-column layout ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%,420px),1fr))', gap:20 }}>

            {/* ── LEFT: Info panel ── */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>

              {/* Contact card */}
              <div className={`ct-card p-7 fu ${visible ? 'in' : ''}`} style={{ animationDelay:'0.1s' }}>
                <div className="sec-label">Contact Details</div>
                <p style={{ color:'#64748b', fontSize:13, lineHeight:1.8,
                  fontFamily:"'JetBrains Mono',monospace", marginBottom:20 }}>
                  Always excited to connect with fellow developers, potential collaborators and anyone passionate about tech. Reach out through any channel below.
                </p>

                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {contactItems.map((item, i) => (
                    item.href ? (
                      <a key={i} href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="ct-item"
                        style={{ color:'inherit' }}>
                        <div style={{
                          width:40, height:40, borderRadius:11, flexShrink:0,
                          display:'flex', alignItems:'center', justifyContent:'center',
                          background:`rgba(${rgb(item.accent)},0.10)`,
                          border:`1px solid rgba(${rgb(item.accent)},0.22)`,
                          color: item.accent,
                        }}>{item.icon}</div>
                        <div>
                          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9,
                            color:'#475569', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:3 }}>
                            {item.label}
                          </p>
                          <p style={{ color:'#94a3b8', fontSize:13 }}>{item.value}</p>
                        </div>
                        <div style={{ marginLeft:'auto', color:'#334155' }}>
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </a>
                    ) : (
                      <div key={i} className="ct-item">
                        <div style={{
                          width:40, height:40, borderRadius:11, flexShrink:0,
                          display:'flex', alignItems:'center', justifyContent:'center',
                          background:`rgba(${rgb(item.accent)},0.10)`,
                          border:`1px solid rgba(${rgb(item.accent)},0.22)`,
                          color: item.accent,
                        }}>{item.icon}</div>
                        <div>
                          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9,
                            color:'#475569', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:3 }}>
                            {item.label}
                          </p>
                          <p style={{ color:'#94a3b8', fontSize:13 }}>{item.value}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className={`ct-card p-6 text-center fu ${visible ? 'in' : ''}`}
                style={{ animationDelay:'0.18s' }}>
                <div className="avail-badge" style={{ margin:'0 auto 10px' }}>
                  <span style={{ position:'relative', display:'inline-flex', width:10, height:10 }}>
                    <span style={{
                      position:'absolute', inset:0, borderRadius:'50%', background:'#22c55e',
                      animation:'ping 1.2s cubic-bezier(0,0,0.2,1) infinite', opacity:0.7,
                    }} />
                    <span style={{ position:'relative', width:10, height:10, borderRadius:'50%', background:'#22c55e', display:'block' }} />
                  </span>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'#22c55e' }}>
                    Available for Opportunities
                  </span>
                </div>
                <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569', lineHeight:1.7 }}>
                  Open to internships · freelance · full-time roles
                </p>
              </div>

            </div>

            {/* ── RIGHT: Contact Form ── */}
            <div className={`ct-card p-7 fu ${visible ? 'in' : ''}`} style={{ animationDelay:'0.15s' }}>
              <div className="sec-label">Send a Message</div>

              {/* NOTE banner about EmailJS */}
              <div style={{
                background:'rgba(0,216,255,0.05)', border:'1px solid rgba(0,216,255,0.14)',
                borderRadius:10, padding:'10px 14px', marginBottom:20,
                fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'#475569', lineHeight:1.7,
              }}>
                💡 <span style={{ color:'#00d8ff' }}>Tip:</span> For live email delivery, add your <a
                  href="https://emailjs.com" target="_blank" rel="noopener noreferrer"
                  style={{ color:'#00d8ff', textDecoration:'underline' }}>EmailJS</a> keys in the
                  <code style={{ color:'#a855f7', margin:'0 3px' }}>handleSubmit</code> function.
                  Currently uses your default mail client as fallback.
              </div>

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>

                {/* Name + Email row */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                  <Field label="Your Name" id="name" required>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="John Doe"
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={focusStyle('name')}
                    />
                  </Field>
                  <Field label="Email Address" id="email" required>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="john@example.com"
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={focusStyle('email')}
                    />
                  </Field>
                </div>

                <Field label="Subject" id="subject" required>
                  <input
                    id="subject" name="subject" type="text" required
                    value={form.subject} onChange={handleChange}
                    placeholder="Project Collaboration"
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    style={focusStyle('subject')}
                  />
                </Field>

                <Field label="Message" id="message" required>
                  <textarea
                    id="message" name="message" required rows={6}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={{ ...focusStyle('message'), resize:'vertical', minHeight:130 }}
                  />
                </Field>

                <button type="submit" disabled={status === 'sending'} className="submit-btn">
                  {status === 'sending' ? (
                    <>
                      <svg className="spin" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="toast-success">
                    ✅ Your mail client should open shortly. Thanks for reaching out!
                  </div>
                )}
                {status === 'error' && (
                  <div className="toast-error">
                    ❌ Something went wrong. Please email me directly at karenjuduncan750@gmail.com
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* ── Footer ── */}
          <div className="footer-bar">
            © 2026 <span>Karen Ju Duncan</span>. All rights reserved. &nbsp;·&nbsp;
            Built with <span>React</span> & <span>TailwindCSS</span> &nbsp;·&nbsp;
            <a href="https://github.com/Ghost214-hue" target="_blank" rel="noopener noreferrer"
              style={{ color:'#334155', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => e.target.style.color='#00d8ff'}
              onMouseLeave={e => e.target.style.color='#334155'}>
              github.com/Ghost214-hue
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;