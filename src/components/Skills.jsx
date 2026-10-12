import React from 'react';
import { Monitor, Building2, Layers, ClipboardList, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data/skills';

const iconMap = {
  Monitor: Monitor,
  Building2: Building2,
  Layers: Layers,
  ClipboardList: ClipboardList,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 bg-white border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
            CORE COMPETENCIES
          </span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
          >
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
            Engineering knowledge and technical tools developed through academic study.
          </p>
        </div>

        {/* Four Reusable Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((categoryGroup, index) => {
            const CategoryIcon = iconMap[categoryGroup.iconName] || Layers;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D9E2EC] shadow-card hover:border-accentBlue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-primaryNavy">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-xs text-textSecondary">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-5 space-y-3">
                    {categoryGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-lightBg/70 border border-[#D9E2EC]/70 hover:bg-lightBg transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-semibold text-primaryNavy">
                            {skill.name}
                          </span>
                          <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-medium bg-white text-secondaryNavy border border-[#D9E2EC]">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-textSecondary mt-1">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Integrity Note */}
                <div className="pt-4 mt-4 border-t border-[#D9E2EC]/60 flex items-center gap-1.5 text-[11px] text-textSecondary">
                  <CheckCircle className="w-3.5 h-3.5 text-accentBlue" />
                  <span>Verified against undergraduate academic coursework</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
