import React from 'react';
import { Target, ArrowRight, Building, Hammer, Leaf, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';
import EngineeringBackground from './EngineeringBackground';

const interestIcons = [
  Building,
  Hammer,
  Leaf,
];

export default function CareerObjective() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section
      id="career-objective"
      className="py-16 sm:py-24 bg-primaryNavy text-white scroll-mt-20 relative overflow-hidden"
      aria-labelledby="career-heading"
    >
      {/* Animated Dark Blueprint & Structural Node Background */}
      <EngineeringBackground variant="dark" className="opacity-40" />
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridObj" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-width="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridObj)" />
        </svg>
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-paleBlue text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border border-white/10">
            <Target className="w-3.5 h-3.5 text-accentBlue" aria-hidden="true" />
            <span>PROFESSIONAL VISION</span>
          </div>

          <h2
            id="career-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            {profileData.careerObjective.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            "{profileData.careerObjective.content}"
          </p>
        </div>

        {/* Three Career Interests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {profileData.careerObjective.interests.map((interest, idx) => {
            const Icon = interestIcons[idx] || Building;
            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accentBlue/50 transition-colors backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accentBlue/20 text-accentBlue flex items-center justify-center mb-4 border border-accentBlue/30">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {interest.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accentBlue text-white font-semibold text-sm hover:bg-blue-600 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
