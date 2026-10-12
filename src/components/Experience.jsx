import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight, ShieldCheck, HardHat, Phone, Award, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceData, internshipReadiness } from '../data/experience';
import { profileData } from '../data/profile';

export default function Experience() {
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
      id="experience"
      className="py-16 sm:py-24 bg-white border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
            PROVEN WORK HISTORY
          </span>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
          >
            Work Experience &amp; Field Practice
          </h2>
          <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
            Verified construction and civil engineering field experience in surveying, site supervision, and infrastructure development across Cambodia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Work Experience Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D9E2EC] shadow-card hover:border-accentBlue/40 transition-colors"
              >
                {/* Header with Role and Badges */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-[#D9E2EC]/70">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-paleBlue text-primaryNavy border border-accentBlue/20 mb-2">
                      {exp.badge}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-primaryNavy">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-secondaryNavy mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-textSecondary gap-1 shrink-0">
                    <span className="inline-flex items-center gap-1 font-semibold text-primaryNavy bg-lightBg px-2 py-0.5 rounded border border-[#D9E2EC]">
                      <Calendar className="w-3.5 h-3.5 text-accentBlue" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accentBlue" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-textSecondary leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-textPrimary">
                    Key Work Responsibilities:
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-textSecondary">
                        <CheckCircle2 className="w-4 h-4 text-accentBlue shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competency Tags */}
                <div className="mt-5 pt-4 border-t border-[#D9E2EC]/60 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-lightBg border border-[#D9E2EC] text-primaryNavy text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* References Card */}
            <div id="references" className="pt-4 scroll-mt-24">
              <div className="p-6 sm:p-7 rounded-2xl bg-lightBg/80 border border-[#D9E2EC] shadow-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accentBlue block">
                      VERIFIED ACADEMIC REFERENCE
                    </span>
                    <h3 className="font-display text-lg font-bold text-primaryNavy">
                      Professional References
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {profileData.references.map((ref) => (
                    <div
                      key={ref.name}
                      className="p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-primaryNavy">
                          {ref.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-secondaryNavy font-medium mt-0.5">
                          {ref.position}
                        </p>
                        <p className="text-xs text-textSecondary mt-0.5">
                          {ref.institution}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-[#D9E2EC] flex items-center justify-between">
                        <span className="text-xs text-textSecondary">Direct Contact:</span>
                        <a
                          href={ref.telLink}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-paleBlue text-primaryNavy hover:text-accentBlue text-xs font-bold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-accentBlue" />
                          <span>{ref.tel}</span>
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-xs flex flex-col justify-center">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-primaryNavy">
                          Official Curriculum Endorsement
                        </h4>
                        <p className="text-xs text-textSecondary mt-1 leading-relaxed">
                          Reference provided by faculty leadership at National University of Battambang (NUBB) in support of civil engineering qualifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Site Engineer Availability Card (4 cols) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="sticky top-24 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-paleBlue/40 via-white to-white border-2 border-accentBlue/25 shadow-card space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{internshipReadiness.status}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-primaryNavy">
                  {internshipReadiness.targetRole}
                </h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  {internshipReadiness.message}
                </p>
              </div>

              {/* Target Roles */}
              <div className="space-y-3 pt-3 border-t border-[#D9E2EC]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-textPrimary flex items-center gap-1.5">
                  <HardHat className="w-4 h-4 text-accentBlue" />
                  Key Position Targets:
                </h4>
                <ul className="space-y-2">
                  {internshipReadiness.targetRoles.map((role, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-white border border-[#D9E2EC] text-xs font-semibold text-primaryNavy flex items-center gap-2 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accentBlue"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability */}
              <div className="p-3.5 rounded-xl bg-lightBg border border-[#D9E2EC] text-xs space-y-1">
                <span className="text-textSecondary block font-medium">Location Base:</span>
                <span className="font-bold text-primaryNavy block">
                  Battambang Province &amp; Surrounding Regions
                </span>
                <span className="text-textSecondary block text-[11px] pt-1 border-t border-[#D9E2EC]">
                  Current Status: Employed as Survey Officer at K.B.H Construction Co.,Ltd
                </span>
              </div>

              {/* Connect CTA */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primaryNavy hover:bg-darkNavy text-white font-semibold text-sm transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue active:scale-98"
              >
                <span>Contact for Employment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
