import React from 'react';
import { Mail, Phone, MapPin, Globe, Link2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';
import ContactForm from './ContactForm';

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.92 0-1.66.74-1.66 1.66 0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-lightBg border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading and Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
                GET IN TOUCH
              </span>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
              >
                Let's Build Something Meaningful
              </h2>
              <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
                I welcome opportunities to learn, collaborate, and contribute to civil engineering projects. Please feel free to contact me regarding internships, academic collaboration, or professional opportunities.
              </p>
            </div>

            {/* Configured Contact Cards (Hides unconfigured ones strictly) */}
            <div className="space-y-3.5 pt-2">
              {/* Telephone */}
              {profileData.phone && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-textSecondary block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm sm:text-base font-bold text-primaryNavy hover:text-accentBlue transition-colors focus:outline-none focus-visible:underline"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              {profileData.location && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-textSecondary block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-primaryNavy">
                      {profileData.location}
                    </span>
                    <span className="text-xs text-textSecondary block">
                      National University of Battambang
                    </span>
                  </div>
                </div>
              )}

              {/* Email - Displayed ONLY if configured */}
              {profileData.email && profileData.email.trim() !== '' && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-textSecondary block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm sm:text-base font-bold text-primaryNavy hover:text-accentBlue transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
              )}

              {/* LinkedIn - Displayed ONLY if configured */}
              {profileData.linkedIn && profileData.linkedIn.trim() !== '' && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-textSecondary block">
                      LinkedIn
                    </span>
                    <a
                      href={profileData.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-primaryNavy hover:text-accentBlue transition-colors"
                    >
                      View Professional Profile
                    </a>
                  </div>
                </div>
              )}

              {/* Portfolio URL - Displayed ONLY if configured */}
              {profileData.portfolioUrl && profileData.portfolioUrl.trim() !== '' && (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#D9E2EC] shadow-subtle">
                  <div className="w-10 h-10 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-textSecondary block">
                      Portfolio
                    </span>
                    <a
                      href={profileData.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-primaryNavy hover:text-accentBlue transition-colors"
                    >
                      {profileData.portfolioUrl}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Information Policy Assurance */}
            <div className="p-4 rounded-xl bg-white/70 border border-[#D9E2EC] text-xs text-textSecondary flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-accentBlue shrink-0 mt-0.5" />
              <span>
                To safeguard student privacy and adhere strictly to portfolio guidelines, only verified personal contact methods are rendered.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
