import React, { useState } from 'react';
import { Crosshair, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

const iconMap = {
  Crosshair: Crosshair,
  BookOpen: BookOpen,
  ShieldCheck: ShieldCheck,
};

export default function About() {
  const [imgError, setImgError] = useState(false);
  const [profileImgError, setProfileImgError] = useState(false);
  const [aboutView, setAboutView] = useState('profile'); // 'profile' | 'survey'

  const aboutImg = imgError
    ? '/images/about-civil.svg'
    : 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';

  const profileImg = profileImgError
    ? '/images/profile-civil.svg'
    : (profileData.profileImage || '/images/profile-civil.svg');

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-lightBg border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Engineering Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-card border border-[#D9E2EC] bg-white">
              {/* Profile / Field Study Toggle */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-lightBg border-b border-[#D9E2EC]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-textSecondary">
                  Candidate Profile
                </span>
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#D9E2EC]">
                  <button
                    type="button"
                    onClick={() => setAboutView('profile')}
                    className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-all ${
                      aboutView === 'profile'
                        ? 'bg-primaryNavy text-white'
                        : 'text-textSecondary hover:text-primaryNavy'
                    }`}
                  >
                    Civil Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setAboutView('survey')}
                    className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-all ${
                      aboutView === 'survey'
                        ? 'bg-primaryNavy text-white'
                        : 'text-textSecondary hover:text-primaryNavy'
                    }`}
                  >
                    Field Study
                  </button>
                </div>
              </div>

              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={aboutView === 'profile' ? profileImg : aboutImg}
                  alt={aboutView === 'profile' ? 'Ty Sophally - Civil Engineering Student' : 'Engineering blueprints, surveying equipment, and technical drafting tools'}
                  onError={() => {
                    if (aboutView === 'profile') setProfileImgError(true);
                    else setImgError(true);
                  }}
                  className="w-full h-full object-cover object-[center_top]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#D9E2EC] text-xs text-textSecondary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold text-primaryNavy">Ty Sophally</span>
                </div>
                <span>National University of Battambang</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
                ABOUT ME
              </span>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
              >
                {profileData.about.heading}
              </h2>
              <p className="mt-2 text-base sm:text-lg font-medium text-secondaryNavy">
                {profileData.about.subtitle}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-textSecondary leading-relaxed">
              {profileData.about.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Three Value Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profileData.about.values.map((v) => {
                const IconComponent = iconMap[v.icon] || Crosshair;
                return (
                  <div
                    key={v.id}
                    className="p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle hover:border-accentBlue/40 transition-colors space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-primaryNavy">
                      {v.title}
                    </h3>
                    <p className="text-xs text-textSecondary leading-normal">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
