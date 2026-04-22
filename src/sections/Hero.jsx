// components/HomePage.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Ethical Hacker",
    "CS Student"
  ];
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;
    
    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    }
    
    setTypedText(currentRole.substring(0, charIndex));
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);
  
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "3+", label: "Major Projects" },
    { value: "2", label: "Certifications" },
    { value: "20+", label: "Technologies" },
  ];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Cpath fill=\'none\' stroke=\'rgba(0,216,255,0.03)\' stroke-width=\'1\' d=\'M0 0h64v64H0z\'/%3E%3C/svg%3E')] bg-[length:64px_64px]"></div>
      </div>
      
      {/* Hero Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side - Information */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8 animate-float lg:mx-0 mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-xs text-cyan-400 tracking-wider">Available for Internship</span>
            </div>
            
            {/* Name */}
            <h1 className="font-['Syne',sans-serif] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4">
              <span className="text-white">Karen Ju</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Duncan
              </span>
            </h1>
            
            {/* Typed Role */}
            <div className="flex items-center gap-2 mb-6 lg:justify-start justify-center">
              <span className="font-['JetBrains_Mono',monospace] text-sm md:text-base text-gray-400">&gt;</span>
              <div className="font-['JetBrains_Mono',monospace] text-lg md:text-xl text-green-400">
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-green-400 ml-1 animate-pulse"></span>
              </div>
            </div>
            
            {/* Description */}
            <p className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed mb-8 lg:mx-0 mx-auto">
              Innovative Full-Stack Developer with a Computer Science degree and demonstrated experience building 
              scalable web applications for the water and sanitation sector. Skilled in modern JavaScript frameworks, 
              RESTful API design, and database optimization. Trained in ethical hacking and penetration testing through 
              <span className="text-cyan-400"> Cisco & Cyber Shujaa</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group btn-cyan px-8 py-3 rounded-full font-['JetBrains_Mono',monospace] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
                View Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group btn-outline px-8 py-3 rounded-full font-['JetBrains_Mono',monospace] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
                Get in Touch
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-4 text-center group cursor-pointer hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="font-['Syne',sans-serif] text-2xl md:text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="font-['JetBrains_Mono',monospace] text-[10px] text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - ENLARGED Profile Image with Cyan Shadow */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Enhanced cyan shadow effects - larger and more prominent */}
              <div className="absolute -inset-8 rounded-full bg-cyan-400/30 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-cyan-500/40 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -inset-12 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Main image container - ENLARGED */}
              <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
                {/* Thick cyan gradient border with intense glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 rounded-full opacity-90 blur-xl group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-60 blur-2xl group-hover:opacity-80 transition duration-500"></div>
                
                {/* Secondary border ring */}
                <div className="absolute -inset-8 rounded-full border-4 border-cyan-400/30 blur-sm"></div>
                
                {/* Image circle with intense cyan shadow */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_80px_rgba(0,255,255,0.5)] group-hover:shadow-[0_0_120px_rgba(0,255,255,0.7)] transition-all duration-500 bg-gradient-to-br from-gray-900 to-black">
                  {/* Replace this with your actual image */}
                  <img 
                    src="/src/assets/portfolio.jpeg" 
                    alt="Karen Ju Duncan"
                    className="w-full h-full object-cover scale-105"
                  />
                  
                  {/* Cyan overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Inner cyan glow ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 shadow-inner shadow-cyan-400/50"></div>
                </div>
                
                {/* Enhanced animated cyan particles around the image */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-400 rounded-full blur-md animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-cyan-500 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-8 w-5 h-5 bg-cyan-300 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/4 -left-6 w-6 h-6 bg-purple-400 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/4 -right-5 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-ping" style={{ animationDelay: '0.8s' }}></div>
                
                {/* Rotating cyan ring - thicker and more visible */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-400/60 animate-spin-slow"></div>
                
                {/* Second rotating ring - opposite direction */}
                <div className="absolute inset-12 rounded-full border-2 border-dotted border-purple-400/40 animate-spin-slow-reverse"></div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-['JetBrains_Mono',monospace] text-[10px] text-gray-500 uppercase tracking-wider">Scroll</span>
          <div className="w-0.5 h-8 bg-linear-to-b from-cyan-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;