import React from 'react';
import { GraduationCap, School, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 bg-lightBg border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="education-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
            ACADEMIC BACKGROUND
          </span>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
          >
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
            Formal undergraduate engineering curriculum and foundational training.
          </p>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-[#D9E2EC] shadow-card p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
            {/* Institution Icon */}
            <div className="w-16 h-16 rounded-2xl bg-paleBlue text-accentBlue flex items-center justify-center shrink-0 border border-accentBlue/20">
              <School className="w-8 h-8" aria-hidden="true" />
            </div>

            {/* Program Details */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#D9E2EC] pb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primaryNavy">
                    {profileData.degree}
                  </h3>
                  <p className="text-base font-semibold text-secondaryNavy mt-0.5">
                    Major: {profileData.major}
                  </p>
                  <p className="text-sm text-textSecondary">
                    {profileData.department} • {profileData.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-textSecondary gap-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBg border border-[#D9E2EC] font-semibold text-primaryNavy">
                    <Calendar className="w-3.5 h-3.5 text-accentBlue" />
                    {profileData.curriculumDuration}
                  </span>
                  <span className="text-xs text-textSecondary">
                    Expected Graduation: {profileData.expectedGraduation}
                  </span>
                </div>
              </div>

              {/* Grid of Key Curriculum Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-lightBg/60 border border-[#D9E2EC]">
                  <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider block">
                    Degree Level
                  </span>
                  <p className="text-sm font-bold text-primaryNavy mt-1">
                    Bachelor of Engineering (B.Eng.)
                  </p>
                  <p className="text-xs text-textSecondary mt-1">
                    National Higher Education Standard
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-lightBg/60 border border-[#D9E2EC]">
                  <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider block">
                    Location &amp; Accreditation
                  </span>
                  <p className="text-sm font-bold text-primaryNavy mt-1">
                    Cambodia
                  </p>
                  <p className="text-xs text-textSecondary mt-1">
                    Department of Civil Engineering
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-lightBg/60 border border-[#D9E2EC]">
                  <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider block">
                    Curriculum Scope
                  </span>
                  <p className="text-sm font-bold text-primaryNavy mt-1">
                    Structural, Geotechnical &amp; Infrastructure
                  </p>
                  <p className="text-xs text-textSecondary mt-1">
                    Rigorous 5-year engineering track
                  </p>
                </div>
              </div>

              {/* Verified academic disclaimer */}
              <div className="pt-4 flex items-center gap-2 text-xs text-textSecondary">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  University information reflects active enrollment. In accordance with portfolio standards, unverified past grades, awards, or completion dates are omitted.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
