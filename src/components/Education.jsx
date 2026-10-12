import React from 'react';
import { GraduationCap, School, Calendar, MapPin, Award, CheckCircle, BookOpen, Globe2, Languages } from 'lucide-react';
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
            ACADEMIC BACKGROUND &amp; CERTIFICATION
          </span>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
          >
            Education &amp; Training
          </h2>
          <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
            Formal undergraduate engineering degree at National University of Battambang (NUBB) and specialized technical certifications.
          </p>
        </div>

        {/* Education Highlight Cards */}
        <div className="space-y-6">
          {/* Primary University Card */}
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
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 mb-1.5">
                      Completed 2020 – 2025
                    </span>
                    <h3 className="font-display text-2xl font-bold text-primaryNavy">
                      {profileData.degree}
                    </h3>
                    <p className="text-base font-semibold text-secondaryNavy mt-0.5">
                      Major: {profileData.major}
                    </p>
                    <p className="text-sm text-textSecondary">
                      {profileData.institution} • Battambang, Cambodia
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-textSecondary gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBg border border-[#D9E2EC] font-semibold text-primaryNavy">
                      <Calendar className="w-3.5 h-3.5 text-accentBlue" />
                      2020 – 2025
                    </span>
                    <span className="text-xs text-textSecondary">
                      5-Year Civil Engineering Program
                    </span>
                  </div>
                </div>

                {/* Secondary Education Timeline Item: High School */}
                <div className="p-4 rounded-xl bg-lightBg/50 border border-[#D9E2EC] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white text-secondaryNavy border border-[#D9E2EC] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primaryNavy">
                        Ek Phnom High School (Battambang)
                      </h4>
                      <p className="text-xs text-textSecondary">
                        Finished High School Diploma • 2018 – 2020
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-textSecondary px-2.5 py-1 bg-white rounded border border-[#D9E2EC] shrink-0 self-start sm:self-center">
                    Secondary Education
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Training Attended & Completed Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Professional Trainings (8 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9E2EC] shadow-card space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[#D9E2EC]">
                <div className="w-10 h-10 rounded-xl bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accentBlue block">
                    CERTIFIED COURSES
                  </span>
                  <h3 className="font-display text-lg font-bold text-primaryNavy">
                    Training Attended &amp; Completed
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {profileData.trainings.map((tr) => (
                  <div
                    key={tr.course}
                    className="p-4 rounded-xl bg-lightBg/70 border border-[#D9E2EC] hover:bg-lightBg transition-colors"
                  >
                    <span className="text-xs font-semibold text-accentBlue block uppercase tracking-wider">
                      {tr.organizer}
                    </span>
                    <h4 className="font-bold text-sm text-primaryNavy mt-1">
                      {tr.course}
                    </h4>
                    <p className="text-xs text-textSecondary mt-0.5">
                      {tr.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Languages & Personal Skills (4 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9E2EC] shadow-card space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#D9E2EC]">
                  <div className="w-10 h-10 rounded-xl bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accentBlue block">
                      COMMUNICATION
                    </span>
                    <h3 className="font-display text-lg font-bold text-primaryNavy">
                      Language Skills
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {profileData.languages.map((lang) => (
                    <div
                      key={lang.language}
                      className="p-3 rounded-xl bg-lightBg/70 border border-[#D9E2EC] flex items-center justify-between text-xs"
                    >
                      <span className="font-bold text-primaryNavy text-sm">
                        {lang.language}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#D9E2EC] font-semibold text-secondaryNavy">
                        {lang.reading === 'Native' ? 'Native Language' : 'Good Working Proficiency'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Soft Skills */}
              <div className="pt-4 border-t border-[#D9E2EC]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-textPrimary mb-2">
                  Personal Work Attributes:
                </h4>
                <ul className="space-y-1.5 text-xs text-textSecondary">
                  {profileData.personalSkills.slice(0, 3).map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-accentBlue shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
