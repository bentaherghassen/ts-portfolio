/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Calendar, User, Layers, ArrowUpRight, X } from "lucide-react";
import { TRANSLATED_PROJECTS_DATA, ProjectTranslated } from "../translations";
import { GlassCard, TechBadge, GlowButton } from "./StyledElements";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDetailsProject, setActiveDetailsProject] = useState<ProjectTranslated | null>(null);

  const categories = ["All", "Full Stack", "AI & ML", "UI & UX", "System"];

  const filteredProjects = selectedCategory === "All"
    ? TRANSLATED_PROJECTS_DATA
    : TRANSLATED_PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.projects.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {category === "All" ? (language === "en" ? "All" : "Tout") : category}
              </button>
            ))}
          </div>

          {/* Projects Visual Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="flex flex-col h-full overflow-hidden !p-0 group">
                    {/* Media Header with Framer Motion Hover */}
                    <motion.div 
                      className="relative h-52 sm:h-60 overflow-hidden bg-slate-900 flex-shrink-0 cursor-pointer"
                      whileHover="hover"
                      initial="initial"
                      onClick={() => setActiveDetailsProject(project)}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title[language]}
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.08 }
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />

                      {/* Overlay with View Project details */}
                      <motion.div
                        variants={{
                          initial: { opacity: 0 },
                          hover: { opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs z-20 flex flex-col items-center justify-center p-4 text-center"
                      >
                        <motion.div
                          variants={{
                            initial: { scale: 0.9, opacity: 0, y: 10 },
                            hover: { scale: 1, opacity: 1, y: 0 }
                          }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                          className="space-y-2 text-white"
                        >
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 bg-blue-500/15 px-2.5 py-1 rounded-md border border-blue-500/30">
                            {t.projects.caseStudy}
                          </span>
                          <h4 className="font-display font-bold text-lg tracking-tight text-white">{project.title[language]}</h4>
                          <p className="text-[11px] text-slate-300 max-w-[220px] mx-auto leading-normal">
                            {language === "en" ? "Explore full architecture specs, system stats, and demo stack." : "Explorez les specs architecturales, stats système et démo."}
                          </p>
                        </motion.div>
                      </motion.div>

                      {/* Category Pill Over Media */}
                      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-blue-400 border border-white/10">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Content Meta */}
                    <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                          {project.title[language]}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                          {project.description[language]}
                        </p>
                      </div>

                      {/* Tech Badges Array */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.slice(0, 4).map((tag, tIdx) => (
                          <TechBadge key={tIdx}>{tag}</TechBadge>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[10px] font-mono text-slate-400 self-center">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Links Tray */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <button
                          onClick={() => setActiveDetailsProject(project)}
                          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          {t.projects.caseStudy}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-all"
                            title="View Github"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-all"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Case Study Detailed Overlay Drawer / Modal */}
      <AnimatePresence>
        {activeDetailsProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailsProject(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/60 dark:border-slate-800 overflow-hidden z-10 flex flex-col max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDetailsProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Close case study details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Contents */}
              <div className="overflow-y-auto flex-1">
                {/* Visual Header */}
                <div className="relative h-48 sm:h-56 bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <img
                    src={activeDetailsProject.image}
                    alt={activeDetailsProject.title[language]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-2.5 py-1 rounded-md bg-blue-600/90 text-[10px] font-mono text-white tracking-wider uppercase">
                      {activeDetailsProject.category}
                    </span>
                  </div>
                </div>

                {/* Info Metadata */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                      {activeDetailsProject.title[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-mono">
                      {activeDetailsProject.role[language]} &bull; {activeDetailsProject.duration[language]}
                    </p>
                  </div>

                  {/* Fact Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4.5 h-4.5 text-blue-500" />
                      <div className="text-xs">
                        <div className="text-slate-400 dark:text-slate-500">{t.projects.timeline}</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {activeDetailsProject.duration[language].split(" ")[0]}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <User className="w-4.5 h-4.5 text-purple-500" />
                      <div className="text-xs">
                        <div className="text-slate-400 dark:text-slate-500">{t.projects.role}</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 font-sans truncate max-w-[120px]">
                          {activeDetailsProject.role[language].split(" ")[0]}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4.5 h-4.5 text-emerald-500" />
                      <div className="text-xs">
                        <div className="text-slate-400 dark:text-slate-500">{t.projects.scope}</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {activeDetailsProject.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Case Body */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                      {t.projects.caseStudyTitle}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeDetailsProject.longDescription[language] || activeDetailsProject.description[language]}
                    </p>
                  </div>

                  {/* Complete Tags block */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">
                      {t.projects.engineStack}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDetailsProject.tags.map((tag) => (
                        <TechBadge key={tag}>{tag}</TechBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 sm:px-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900 flex justify-end gap-3 flex-shrink-0">
                <a
                  href={activeDetailsProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <GlowButton variant="secondary" className="w-full !py-1.5 !px-4 !text-xs">
                    <Github className="w-4 h-4" />
                    {t.projects.repoLink}
                  </GlowButton>
                </a>
                <a
                  href={activeDetailsProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <GlowButton variant="primary" className="w-full !py-1.5 !px-4 !text-xs">
                    <ExternalLink className="w-4 h-4" />
                    {t.projects.launchDemo}
                  </GlowButton>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
