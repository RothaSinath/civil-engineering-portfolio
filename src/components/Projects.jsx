import React, { useState } from 'react';
import { HardHat, Compass, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [triggerEl, setTriggerEl] = useState(null);

  const handleOpenModal = (project, buttonElement) => {
    setSelectedProject(project);
    setTriggerEl(buttonElement);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-white border-t border-[#D9E2EC] scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accentBlue block mb-2">
            FEATURED PROJECTS
          </span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-display font-extrabold text-primaryNavy tracking-tight leading-tight"
          >
            Academic Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-textSecondary leading-relaxed">
            Engineering concepts and technical learning that demonstrate problem-solving, analytical thinking, and design skills.
          </p>
        </div>

        {/* Project Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <ProjectCard project={project} onSelect={handleOpenModal} />
            </motion.div>
          ))}

          {/* Additional Card: More Projects Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-full"
          >
            <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-paleBlue/50 border-2 border-dashed border-accentBlue/30 hover:border-accentBlue/60 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-paleBlue border border-accentBlue/30 text-accentBlue flex items-center justify-center">
                  <HardHat className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-primaryNavy">
                  More Projects Coming Soon
                </h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  Drawings, project documentation, and verified results will be added as more academic work is completed.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-accentBlue/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-primaryNavy">
                  <Compass className="w-4 h-4 text-accentBlue" />
                  <span>Curriculum &amp; Capstone in Progress</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseModal}
        triggerElement={triggerEl}
      />
    </section>
  );
}
