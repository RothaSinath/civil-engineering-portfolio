import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';
import { profileData } from '../data/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Track active section and navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'skills', 'education', 'experience', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update browser URL hash without jump
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-[#D9E2EC] ${
        scrolled ? 'shadow-subtle' : ''
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3.5">
          {/* Left Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-md"
            aria-label="Civil Engineering Portfolio - Ty Sophally"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-primaryNavy text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-darkNavy transition-colors border border-[#D9E2EC] relative shrink-0">
              <span className="select-none">{profileData.initials || 'TS'}</span>
              {profileData.profileImage && (
                <img
                  src={profileData.profileImage}
                  alt={profileData.fullName}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-primaryNavy tracking-tight leading-tight group-hover:text-accentBlue transition-colors">
                Civil Engineering Portfolio
              </span>
              <span className="text-xs text-textSecondary font-medium">
                {profileData.fullName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 ${
                    isActive
                      ? 'text-accentBlue bg-paleBlue/70 font-semibold'
                      : 'text-textPrimary hover:text-primaryNavy hover:bg-lightBg'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primaryNavy text-white text-sm font-semibold hover:bg-darkNavy transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-textPrimary hover:text-primaryNavy hover:bg-lightBg focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#D9E2EC] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-accentBlue bg-paleBlue font-semibold'
                      : 'text-textPrimary hover:bg-lightBg'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primaryNavy text-white font-semibold hover:bg-darkNavy text-center text-sm shadow-sm"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
