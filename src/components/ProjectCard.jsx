import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const [imgError, setImgError] = useState(false);

  const imageSrc = imgError ? `/images/${project.fallbackSvg}` : project.image;

  return (
    <article className="h-full flex flex-col bg-white rounded-2xl border border-[#D9E2EC] shadow-card hover:shadow-card-hover hover:border-accentBlue/50 transition-all duration-300 overflow-hidden group">
      {/* Image Container with Consistent Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={imageSrc}
          alt={project.imageAlt || project.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-md bg-primaryNavy/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
            {project.category}
          </span>
        </div>
        {/* Sample Academic Concept Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-50/95 backdrop-blur-sm border border-amber-200 text-amber-900 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {project.badge || 'Sample Academic Concept'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="font-display text-lg sm:text-xl font-bold text-primaryNavy group-hover:text-accentBlue transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-textSecondary line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="pt-5 mt-4 border-t border-[#D9E2EC]/70 space-y-4">
          {/* Skill Tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Skills applied">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-md bg-lightBg border border-[#D9E2EC] text-primaryNavy text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* View Details Button */}
          <button
            type="button"
            onClick={(e) => onSelect(project, e.currentTarget)}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-lightBg hover:bg-paleBlue text-primaryNavy font-semibold text-sm transition-colors border border-[#D9E2EC] hover:border-accentBlue/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
            aria-label={`View details for ${project.title}`}
          >
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 text-accentBlue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
