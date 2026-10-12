import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, AlertCircle, Wrench, Layers, Compass, BookOpen, Target, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, triggerElement }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [modalImgError, setModalImgError] = useState(false);

  // Close on Escape & handle focus management
  useEffect(() => {
    if (!isOpen) return;

    // Save previous scroll position and lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button or modal container
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to triggering button
      if (triggerElement && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [isOpen, onClose, triggerElement]);

  if (!isOpen || !project) return null;

  const modalImgSrc = modalImgError ? `/images/${project.fallbackSvg}` : project.image;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-darkNavy/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      ref={modalRef}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-modal border border-[#D9E2EC] overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#D9E2EC] flex items-center justify-between">
          <div className="min-w-0 pr-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accentBlue block">
              {project.category}
            </span>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-display font-bold text-primaryNavy truncate"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-textSecondary hover:text-primaryNavy hover:bg-lightBg focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with internal scrolling */}
        <div className="overflow-y-auto px-6 py-6 space-y-6">
          {/* Sample Academic Concept Notice */}
          {project.isSampleConcept && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="font-semibold block text-amber-950">
                  Sample Academic Concept Notice
                </strong>
                <span>
                  This project represents an academic concept developed as part of civil engineering coursework. It illustrates theoretical mechanics, engineering design standards, and analytical methodology. No completed commercial outcomes or fabricated site achievements are claimed.
                </span>
              </div>
            </div>
          )}

          {/* Project Featured Image Banner */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full bg-slate-100 border border-[#D9E2EC]">
            <img
              src={modalImgSrc}
              alt={project.imageAlt || project.title}
              onError={() => setModalImgError(true)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accentBlue" />
              Project Overview
            </h3>
            <p className="text-textPrimary text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Objectives */}
          {project.objectives && project.objectives.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary flex items-center gap-2">
                <Target className="w-4 h-4 text-accentBlue" />
                Key Learning Objectives
              </h3>
              <ul className="space-y-2">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-textPrimary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scope of Work */}
          {project.scopeOfWork && project.scopeOfWork.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary flex items-center gap-2">
                <Layers className="w-4 h-4 text-accentBlue" />
                Scope of Academic Work
              </h3>
              <ul className="space-y-2">
                {project.scopeOfWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-textPrimary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accentBlue shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Methodology */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary flex items-center gap-2">
              <Compass className="w-4 h-4 text-accentBlue" />
              Engineering Methodology
            </h3>
            <p className="text-textPrimary text-sm leading-relaxed bg-lightBg p-3.5 rounded-xl border border-[#D9E2EC]">
              {project.methodology}
            </p>
          </div>

          {/* Software and Tools */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary flex items-center gap-2">
              <Wrench className="w-4 h-4 text-accentBlue" />
              Software &amp; Analytical Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.softwareAndTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-md bg-paleBlue text-primaryNavy text-xs font-semibold border border-accentBlue/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Drawings & Diagrams */}
          {project.drawingsOrDiagrams && (
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary">
                Drawings &amp; Deliverables
              </h3>
              <p className="text-sm text-textPrimary italic">
                {project.drawingsOrDiagrams}
              </p>
            </div>
          )}

          {/* Verified Results Section - Only rendered if verified information exists */}
          <div className="space-y-2 pt-2 border-t border-[#D9E2EC]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary">
              Project Results &amp; Verification Status
            </h3>
            {project.verifiedResults ? (
              <p className="text-sm text-textPrimary">{project.verifiedResults}</p>
            ) : (
              <p className="text-xs sm:text-sm text-textSecondary bg-lightBg p-3 rounded-lg border border-[#D9E2EC]">
                <strong>Academic Verification Notice:</strong> Formal testing and measured field validation data are pending further laboratory coursework. No fabricated test results or completed commercial performance figures are displayed.
              </p>
            )}
          </div>

          {/* Challenges & Lessons Learned */}
          {project.challengesAndLessons && (
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary">
                Challenges &amp; Lessons Learned
              </h3>
              <p className="text-sm text-textPrimary">
                {project.challengesAndLessons}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-lightBg px-6 py-4 border-t border-[#D9E2EC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-primaryNavy text-white font-semibold text-sm hover:bg-darkNavy focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
