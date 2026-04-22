// sections/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: ["Nairobi, Kenya"],
      action: null
    },
    {
      icon: "📧",
      title: "Email",
      details: ["karenjuduncan750@gmail.com"],
      action: "mailto:karenjuduncan750@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      details: ["+254-112-554479"],
      action: "tel:+254112554479"
    },
    {
      icon: "💻",
      title: "GitHub",
      details: ["github.com/Ghost214-hue"],
      action: "https://github.com/Ghost214-hue"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/Ghost214-hue",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      url: "www.linkedin.com/in/duncan-karenju-b4727026b",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: "✉️",
      url: "mailto:karenjuduncan750@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
            <span className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Looking to collaborate? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side - Contact Information */}
          <div className="flex-1 space-y-6">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in tech. Feel free to reach out through any of these channels!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Syne',sans-serif] text-sm font-semibold text-cyan-400 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        info.action ? (
                          <a
                            key={idx}
                            href={info.action}
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="text-gray-300 text-sm block hover:text-cyan-400 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-gray-300 text-sm">
                            {detail}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 glass-card rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:scale-105 hover:border-cyan-400/50`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-sm font-['JetBrains_Mono',monospace]">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-green-400 font-['JetBrains_Mono',monospace]">Available for Opportunities</span>
              </div>
              <p className="text-xs text-gray-500">
                Currently open for internships, freelance work, and collaborations
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-['JetBrains_Mono',monospace] text-gray-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-['JetBrains_Mono',monospace] text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-['JetBrains_Mono',monospace] text-gray-400 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-['JetBrains_Mono',monospace] text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full btn-cyan py-3 rounded-lg font-['JetBrains_Mono',monospace] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center animate-fade-in">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-['JetBrains_Mono',monospace]">
            © 2026 Karen Ju Duncan. All rights reserved. | Built with React & TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;