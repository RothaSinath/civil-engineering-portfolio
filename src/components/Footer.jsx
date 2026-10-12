import React from 'react';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#home');
  };

  return (
    <footer className="bg-white border-t border-[#D9E2EC] py-10 transition-colors">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primaryNavy text-white flex items-center justify-center font-bold text-xs tracking-wider">
              {profileData.initials || 'TS'}
            </div>
            <div>
              <p className="font-display font-bold text-sm text-primaryNavy">
                {profileData.fullName}
              </p>
              <p className="text-xs text-textSecondary">
                Civil Engineering Portfolio • National University of Battambang
              </p>
            </div>
          </div>

          {/* Center Copyright & Year */}
          <div className="text-xs text-textSecondary text-center">
            <p>
              &copy; {currentYear} {profileData.fullName}. All rights reserved.
            </p>
            <p className="text-[11px] mt-0.5 text-[#829AB1]">
              Constructed with React, Vite &amp; Tailwind CSS
            </p>
          </div>

          {/* Right Action: Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-primaryNavy hover:text-accentBlue hover:bg-lightBg border border-[#D9E2EC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
              aria-label="Back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
