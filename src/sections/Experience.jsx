// sections/Experience.jsx
import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const workExperience = [
    {
      id: 1,
      title: "Full-stack Developer",
      company: "Murang'a Water and Sanitation Company",
      location: "Murang'a, Kenya",
      period: "09.2025 - Present",
      type: "Full-time",
      achievements: [
        "Designed and deployed a comprehensive Human Resource Management (HRM) system that automated employee records, leave tracking, and payroll processing, reducing administrative workload by an estimated 30% and cutting data retrieval time by 50% for HR personnel",
        "Engineered a dynamic monthly report generator template for water service providers, automating data aggregation and visualization for WASREB (Water Services Regulatory Board) submissions, reducing report compilation time from several days to under 2 hours",
        "Currently architecting a Customer Relationship Management (CRM) system designed to centralize client interactions and sales pipelines, projected to improve lead tracking efficiency by 40%",
        "Implementing real-time analytics dashboards to support data-driven decision-making for the sales team"
      ],
      tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST APIs"]
    },
    {
      id: 2,
      title: "Data Analyst (Internship)",
      company: "Murang'a Water and Sanitation Company",
      location: "Murang'a, Kenya",
      period: "06.2025 - 08.2025",
      type: "Internship",
      achievements: [
        "Audited and reconciled 12,487 customer billing records across three operational zones, detecting and correcting 167 duplicate entries and misallocated charges, restoring KES 1.2M in unbilled consumption",
        "Improved billing accuracy from 91% to 98% within two months through systematic data validation and correction protocols",
        "Designed an interactive Power BI dashboard monitoring six core KPIs including production volume, distribution loss (%), complaint closure rate, and revenue collection efficiency",
        "Automated 12 hours of weekly manual Excel reporting, enabling management to pinpoint a 16.4Lm³/month physical loss in Zone C, triggering a leak detection exercise",
        "Validated and formatted 9 monthly WASREB regulatory submissions across three service areas, achieving 100% on-time delivery with zero rejections",
        "Standardized data extraction templates cut validation time from 8 hours to 2.5 hours per report while maintaining full audit trail compliance"
      ],
      tech: ["PowerBI", "SQL", "Excel", "Python", "Data Visualization", "ETL"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "St. Paul's University",
      location: "Limuru, Kenya",
      period: "09.2021 - 11.2025",
      achievements: [
        "Full-stack web development specialization",
        "Database design and optimization",
        "Cybersecurity fundamentals",
        "Software engineering principles"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Ethical Hacking & Penetration Testing",
      issuer: "Cisco & Cyber Shujaa",
      year: "2025",
      credential: "Professional Certificate"
    },
    {
      id: 2,
      name: "Full-Stack Web Development",
      issuer: "Various Platforms",
      year: "2024-2025",
      credential: "Specialization"
    }
  ];

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
            <span className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 tracking-wider">MY JOURNEY</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A track record of delivering impactful solutions and continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('work')}
            className={`group px-6 py-2 rounded-full font-['JetBrains_Mono',monospace] text-sm transition-all duration-300 ${
              activeTab === 'work'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50'
            }`}
          >
            💼 Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`group px-6 py-2 rounded-full font-['JetBrains_Mono',monospace] text-sm transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50'
            }`}
          >
            🎓 Education
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`group px-6 py-2 rounded-full font-['JetBrains_Mono',monospace] text-sm transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                : 'glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50'
            }`}
          >
            🏆 Certifications
          </button>
        </div>

        {/* Work Experience Content */}
        {activeTab === 'work' && (
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div
                key={exp.id}
                className="glass-card rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-1"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 md:p-8 border-b border-gray-700/50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="text-cyan-400 font-['JetBrains_Mono',monospace]">
                          {exp.company}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-400/10 rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-xs text-cyan-400 font-['JetBrains_Mono',monospace]">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2 font-['JetBrains_Mono',monospace]">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="p-6 md:p-8">
                  <h4 className="font-['Syne',sans-serif] text-lg font-semibold text-cyan-400 mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        </div>
                        <span className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <h4 className="font-['Syne',sans-serif] text-sm font-semibold text-gray-400 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-xs text-cyan-300 font-['JetBrains_Mono',monospace] hover:bg-cyan-400/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Content */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="glass-card rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl">🎓</span>
                        <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-cyan-400 font-['JetBrains_Mono',monospace] text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                    <p className="text-sm text-gray-500 font-['JetBrains_Mono',monospace]">
                      {edu.period}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-['Syne',sans-serif] text-lg font-semibold text-cyan-400 mb-3">
                      Course Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Academic Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-2xl font-bold text-cyan-400">2021-2025</div>
                <p className="text-gray-400 text-sm mt-1">Academic Journey</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all">
                <div className="text-3xl mb-2">💻</div>
                <div className="text-2xl font-bold text-cyan-400">Full-Stack</div>
                <p className="text-gray-400 text-sm mt-1">Development Focus</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-2xl font-bold text-cyan-400">Cybersecurity</div>
                <p className="text-gray-400 text-sm mt-1">Additional Training</p>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Content */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    🏅
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-['JetBrains_Mono',monospace] mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
                        {cert.credential}
                      </span>
                      <span className="text-xs text-gray-500">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional Cert Card */}
            <div className="glass-card rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-1 group md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Actively pursuing additional certifications in cloud computing, advanced cybersecurity, 
                    and modern web development frameworks to stay at the forefront of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Impact Summary - Visible across all tabs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">30%</div>
            <p className="text-xs text-gray-400 mt-1">Workload Reduction</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">KES 1.2M</div>
            <p className="text-xs text-gray-400 mt-1">Revenue Restored</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">98%</div>
            <p className="text-xs text-gray-400 mt-1">Billing Accuracy</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">100%</div>
            <p className="text-xs text-gray-400 mt-1">On-time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;