import React, { useState } from 'react';
import { User, GraduationCap, School, MapPin, ArrowDown, Mail, Download, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';
import EngineeringBackground from './EngineeringBackground';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [profileImgError, setProfileImgError] = useState(false);
  const [activeHeroTab, setActiveHeroTab] = useState('profile'); // 'profile' | 'site'

  const heroImageUrl = imgError
    ? '/images/engineer-hero.svg'
    : 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80';

  const profileImageUrl = profileImgError
    ? '/images/profile-civil.svg'
    : (profileData.profileImage || '/images/profile-civil.svg');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-lightBg via-white to-white overflow-hidden scroll-mt-20"
      aria-label="Hero Section"
    >
      {/* Animated Civil Engineering Blueprint & Truss Background */}
      <EngineeringBackground variant="light" className="opacity-75" />

      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paleBlue border border-[#CBD5E1] text-primaryNavy text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-accentBlue" aria-hidden="true" />
              <span>CIVIL ENGINEERING PORTFOLIO</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primaryNavy tracking-tight leading-[1.18]">
              Building Strong Foundations for a Better Future.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-textSecondary leading-relaxed max-w-2xl">
              {profileData.heroDescription}
            </p>

            {/* Key Information Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle hover:border-accentBlue/40 transition-colors">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-paleBlue border border-[#D9E2EC] flex items-center justify-center shrink-0">
                  <img
                    src={profileImageUrl}
                    alt={profileData.fullName}
                    className="w-full h-full object-cover"
                    onError={() => setProfileImgError(true)}
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-textSecondary block font-medium">Name</span>
                  <span className="text-sm font-semibold text-primaryNavy truncate block">
                    {profileData.fullName}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle hover:border-accentBlue/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-textSecondary block font-medium">Degree</span>
                  <span className="text-sm font-semibold text-primaryNavy truncate block" title={profileData.degree}>
                    {profileData.degree}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle hover:border-accentBlue/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                  <School className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-textSecondary block font-medium">Institution</span>
                  <span className="text-sm font-semibold text-primaryNavy truncate block" title={profileData.institution}>
                    {profileData.institution}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle hover:border-accentBlue/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-textSecondary block font-medium">Location</span>
                  <span className="text-sm font-semibold text-primaryNavy truncate block">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primaryNavy text-white font-semibold text-sm hover:bg-darkNavy transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#D9E2EC] text-primaryNavy font-semibold text-sm hover:bg-lightBg hover:border-primaryNavy/30 transition-all shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue active:scale-95"
              >
                <Mail className="w-4 h-4 text-accentBlue" aria-hidden="true" />
                <span>Contact Me</span>
              </a>

              {/* Download CV - Rendered ONLY if a real CV file is configured */}
              {profileData.cvFile && (
                <a
                  href={profileData.cvFile}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-paleBlue text-primaryNavy border border-accentBlue/20 font-semibold text-sm hover:bg-paleBlue/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
                >
                  <Download className="w-4 h-4 text-accentBlue" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: High-quality engineering image & Civil Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-[#D9E2EC] bg-white group">
              {/* Tab Selector: Civil Profile vs Site Inspection */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-lightBg border-b border-[#D9E2EC]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-textSecondary flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Engineering View
                </span>
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#D9E2EC]">
                  <button
                    type="button"
                    onClick={() => setActiveHeroTab('profile')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                      activeHeroTab === 'profile'
                        ? 'bg-primaryNavy text-white shadow-xs'
                        : 'text-textSecondary hover:text-primaryNavy'
                    }`}
                  >
                    Civil Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveHeroTab('site')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                      activeHeroTab === 'site'
                        ? 'bg-primaryNavy text-white shadow-xs'
                        : 'text-textSecondary hover:text-primaryNavy'
                    }`}
                  >
                    Site Inspection
                  </button>
                </div>
              </div>

              {/* Image Container with Consistent Aspect Ratio */}
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                {activeHeroTab === 'profile' ? (
                  <img
                    src={profileImageUrl}
                    alt="Ty Sophally - Civil Engineering Student with safety hardhat and technical drawings"
                    onError={() => setProfileImgError(true)}
                    className="w-full h-full object-cover object-[center_top] group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                ) : (
                  <img
                    src={heroImageUrl}
                    alt="Civil engineer with safety helmet reviewing technical drawings at an active construction site"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                )}
              </div>

              {/* Caption Overlay */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#D9E2EC]">
                <p className="text-sm font-medium text-textPrimary italic text-center">
                  "{profileData.heroCaption}"
                </p>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-textSecondary">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>
                    {activeHeroTab === 'profile'
                      ? 'Ty Sophally • Department of Civil Engineering'
                      : 'Active Academic Practice • Field & Laboratory Studies'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
