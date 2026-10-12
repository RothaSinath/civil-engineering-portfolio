import React, { useState } from 'react';
import { Calculator, Building2, HardHat, Mountain, Route, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { courseworkData } from '../data/coursework';

const iconMap = {
  Calculator: Calculator,
  Building2: Building2,
  HardHat: HardHat,
  Mountain: Mountain,
  Route: Route,
};

export default function Coursework() {
  const [showAll, setShowAll] = useState(false);

  // When not showing all, show first 3 categories, or when expanded show all 5 categories
  const displayedCategories = showAll ? courseworkData : courseworkData.slice(0, 3);
  const totalCourses = courseworkData.reduce((acc, cat) => acc + cat.courses.length, 0);
  const visibleCoursesCount = displayedCategories.reduce((acc, cat) => acc + cat.courses.length, 0);

  return (
    <section
      id="coursework"
      className="py-16 sm:py-24 bg-white border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="coursework-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
            ACADEMIC CURRICULUM
          </span>
          <h2
            id="coursework-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
          >
            Relevant Coursework
          </h2>
          <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
            Five-year undergraduate civil engineering curriculum covering structural, geotechnical, water resources, and construction disciplines.
          </p>
        </div>

        {/* Categorized Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => {
              const CategoryIcon = iconMap[category.iconName] || BookOpen;
              return (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="bg-lightBg/60 rounded-2xl border border-[#D9E2EC] p-6 flex flex-col justify-between hover:border-accentBlue/40 transition-colors shadow-subtle"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D9E2EC]">
                      <div className="w-9 h-9 rounded-lg bg-paleBlue text-accentBlue flex items-center justify-center shrink-0">
                        <CategoryIcon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-base font-bold text-primaryNavy">
                        {category.category}
                      </h3>
                    </div>

                    {/* Courses List */}
                    <ul className="space-y-2.5">
                      {category.courses.map((course) => (
                        <li
                          key={course.name}
                          className="flex items-center justify-between text-xs sm:text-sm text-textPrimary py-1 border-b border-[#D9E2EC]/40 last:border-0"
                        >
                          <span className="font-medium">{course.name}</span>
                          <span className="text-[11px] font-mono text-textSecondary bg-white px-1.5 py-0.5 rounded border border-[#D9E2EC]/60 shrink-0 ml-2">
                            {course.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D9E2EC]/50 text-right">
                    <span className="text-[11px] text-textSecondary font-medium">
                      {category.courses.length} courses
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Control */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primaryNavy hover:bg-darkNavy text-white font-semibold text-sm transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue active:scale-95"
            aria-expanded={showAll}
            aria-controls="coursework-grid"
          >
            <span>{showAll ? 'Show Less Coursework' : 'Show All Coursework'}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <span className="text-xs text-textSecondary font-medium">
            Showing {visibleCoursesCount} of {totalCourses} courses across 5 engineering disciplines
          </span>
        </div>
      </div>
    </section>
  );
}
