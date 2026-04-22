// sections/About.jsx
import React from 'react';

const About = () => {
  const skills = {
    hard: [
      "Java", "JavaScript", "PHP", "HTML5", "CSS3", "Node.js", 
      "Express", "SQL", "PostgreSQL", "JWT", "Clerk", 
      "API Integration", "Testing", "Git"
    ],
    soft: [
      "Collaborative Leadership", "Adaptability", "Time Management", 
      "Critical Thinking", "Open-mindedness", "Negotiation", 
      "Advocacy & Persistence"
    ]
  };

  const achievements = [
    "Reduced administrative workload by 30% through HRM automation",
    "Cut regulatory report compilation from days to under 2 hours",
    "Restored KES 1.2M in unbilled consumption through data audit",
    "Improved billing accuracy from 91% to 98% in two months",
    "Automated 12 hours of weekly manual Excel reporting",
    "100% on-time WASREB submissions with zero rejections"
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
            <span className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 tracking-wider">ABOUT ME</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
            Who Am I?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side - Bio & Experience */}
          <div className="flex-1 space-y-6">
            <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-cyan-400 mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Innovative <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with a Computer Science degree 
                and demonstrated experience building scalable web applications for the water and sanitation sector. 
                Skilled in modern JavaScript frameworks, RESTful API design, and database optimization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Proven ability to architect end-to-end solutions—from HRM systems to regulatory reporting tools—that 
                automate workflows, eliminate manual errors, and deliver data-driven insights. Background in computer 
                science has cultivated exceptional empathy, cross-functional communication, and the ability to translate 
                complex user needs into intuitive technical solutions.
              </p>
            </div>

            {/* Work Experience Highlight */}
            <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-cyan-400 mb-4">
                Current Role
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-white">Full-stack Developer</h4>
                <p className="text-cyan-400 text-sm font-['JetBrains_Mono',monospace]">Murang'a Water and Sanitation Company | 09.2025 - Present</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Designed and deployed comprehensive HRM system automating employee records, leave tracking, and payroll processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Engineered dynamic monthly report generator for WASREB submissions, reducing compilation time from days to under 2 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Currently architecting CRM system to centralize client interactions and sales pipelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Skills & Achievements */}
          <div className="flex-1 space-y-6">
            {/* Hard Skills */}
            <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-cyan-400 mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.hard.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-sm text-cyan-300 font-['JetBrains_Mono',monospace] hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-cyan-400 mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-purple-400/10 border border-purple-400/30 rounded-lg text-sm text-purple-300 font-['JetBrains_Mono',monospace] hover:bg-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-cyan-400 mb-4">
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>

        {/* Education Section */}
        <div className="mt-12 glass-card rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300">
          <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-cyan-400 mb-6 text-center">
            Education
          </h3>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
            <p className="text-cyan-400 font-['JetBrains_Mono',monospace]">St. Paul's University, Limuru, Kenya | 09.2021 - 11.2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;