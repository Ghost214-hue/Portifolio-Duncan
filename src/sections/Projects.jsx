// sections/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "HRM System",
      category: "fullstack",
      company: "Murang'a Water and Sanitation Company",
      period: "09.2025 - Present",
      description: "Comprehensive Human Resource Management system automating employee records, leave tracking, and payroll processing.",
      highlights: [
        "Reduced administrative workload by an estimated 30%",
        "Cut data retrieval time by 50% for HR personnel",
        "Automated employee onboarding and document management",
        "Real-time attendance tracking and reporting"
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "React", "TailwindCSS"],
      image: "/src/assets/HRM.png",
      github: "muwascoerp.co.ke",
      live: "#"
    },
    {
      id: 2,
      title: "WASREB Report Generator",
      category: "fullstack",
      company: "Murang'a Water and Sanitation Company",
      period: "2025",
      description: "Dynamic monthly report generator template for water service providers, automating data aggregation and visualization for regulatory submissions.",
      highlights: [
        "Reduced report compilation time from several days to under 2 hours",
        "Eliminated manual calculation errors for regulatory compliance data",
        "Automated data visualization with interactive charts",
        "100% on-time delivery with zero rejections"
      ],
      tech: ["PHP", "JavaScript", "MySQL", "PowerBI", "HTML5", "CSS3"],
      image: "/src/assets/monthly.png",
      github: "muwasco.co.ke/monthly_report/",
      live: "#"
    },
    {
      id: 3,
      title: "CRM System",
      category: "fullstack",
      company: "Murang'a Water and Sanitation Company",
      period: "Present",
      description: "Customer Relationship Management system designed to centralize client interactions and sales pipelines.",
      highlights: [
        "Projected to improve lead tracking efficiency by 40%",
        "Real-time analytics for data-driven decision making",
        "Automated follow-up reminders and task management",
        "Interactive dashboard for sales team performance"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Clerk", "Socket.io"],
      image: "/src/assets/CRM.png",
      github: "muwasco.co.ke/crm-system",
      live: "#"
    },
    {
      id: 4,
      title: "Billing Analytics Dashboard",
      category: "data",
      company: "Murang'a Water and Sanitation Company",
      period: "2025",
      description: "Interactive Power BI dashboard monitoring core KPIs for water service operations.",
      highlights: [
        "Automated 12 hours of weekly manual Excel reporting",
        "Improved billing accuracy from 91% to 98% in two months",
        "Detected 16.4Lm³/month physical loss in Zone C",
        "Restored KES 1.2M in unbilled consumption"
      ],
      tech: ["PowerBI", "SQL", "Excel", "Python", "DAX"],
      image: "/projects/billing-dashboard.jpg",
      github: "https://github.com/Ghost214-hue/billing-analytics",
      live: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      company: "Personal Project",
      period: "2026",
      description: "Modern, animated portfolio website showcasing skills, projects, and professional experience.",
      highlights: [
        "Fully responsive design with glass morphism effects",
        "Interactive typing animation and particle effects",
        "Optimized performance with lazy loading",
        "SEO-friendly architecture"
      ],
      tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      image: "/projects/portfolio.jpg",
      github: "https://github.com/Ghost214-hue/portfolio",
      live: "/"
    },
    {
      id: 6,
      title: "API Integration Suite",
      category: "backend",
      company: "Various Projects",
      period: "2025-2026",
      description: "Comprehensive API integration solutions for various third-party services and internal systems.",
      highlights: [
        "RESTful API design and documentation",
        "JWT and Clerk authentication implementation",
        "Automated testing and error handling",
        "Rate limiting and security best practices"
      ],
      tech: ["Node.js", "Express", "JWT", "Clerk", "Jest", "Postman"],
      image: "/projects/api-suite.jpg",
      github: "https://github.com/Ghost214-hue/api-integration",
      live: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'fullstack', label: 'Full-Stack', icon: '⚡' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '🔧' },
    { id: 'data', label: 'Data Analytics', icon: '📊' }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6">
            <span className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 tracking-wider">MY WORK</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Transforming ideas into innovative solutions through code and creativity
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`group px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-sm transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">
                      {project.category === 'fullstack' && '⚡'}
                      {project.category === 'frontend' && '🎨'}
                      {project.category === 'backend' && '🔧'}
                      {project.category === 'data' && '📊'}
                    </div>
                    <p className="text-gray-400 text-sm font-['JetBrains_Mono',monospace]">Project Preview</p>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Company & Period */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs text-cyan-400 font-['JetBrains_Mono',monospace] bg-cyan-400/10 px-2 py-1 rounded">
                    {project.company}
                  </span>
                  <span className="text-xs text-gray-500 font-['JetBrains_Mono',monospace]">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                  {project.highlights.length > 2 && (
                    <li className="text-xs text-cyan-400 pl-4">
                      +{project.highlights.length - 2} more achievements
                    </li>
                  )}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-1 bg-gray-800 rounded text-gray-300 font-['JetBrains_Mono',monospace]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] px-2 py-1 bg-gray-800 rounded text-gray-300">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-3 border-t border-gray-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="text-xs">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-xs">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group btn-outline px-8 py-3 rounded-full font-['JetBrains_Mono',monospace] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer mx-auto">
            <span>View All on GitHub</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;