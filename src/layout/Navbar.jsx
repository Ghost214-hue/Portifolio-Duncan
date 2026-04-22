// components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Animated Background Orbs for Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className={`glass-nav rounded-full transition-all duration-500 ${
            isScrolled ? 'px-4 py-2' : 'px-6 py-3'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="group flex items-center gap-1 cursor-pointer"
              >
                <span className="font-['Syne',sans-serif] text-xl md:text-2xl font-bold tracking-tight">
                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">DK</span>
                  <span className="text-cyan-400 group-hover:text-white transition-colors duration-300">.</span>
                </span>
              </a>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className={`relative px-4 py-2 font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                      activeLink === link.href.substring(1)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {activeLink === link.href.substring(1) && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                <button className="hidden md:block btn-cyan px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-xs font-semibold cursor-pointer">
                  Resume
                </button>
                
                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full glass-card cursor-pointer transition-all duration-300 hover:border-cyan-400/30"
                >
                  <div className="relative w-5 h-5">
                    <span className={`absolute h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 top-2 w-5' : 'top-0 w-5'
                    }`}></span>
                    <span className={`absolute h-0.5 bg-white rounded-full transition-all duration-300 top-2 ${
                      isMobileMenuOpen ? 'opacity-0 w-0' : 'w-5'
                    }`}></span>
                    <span className={`absolute h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 top-2 w-5' : 'top-4 w-5'
                    }`}></span>
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-xl transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href.substring(1))}
              className="font-['Syne',sans-serif] text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              {link.label}
            </button>
          ))}
          <button className="btn-cyan px-8 py-3 rounded-full font-['JetBrains_Mono',monospace] text-sm font-semibold mt-4">
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;