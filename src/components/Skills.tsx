/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Layout, Server, Cloud, ShieldCheck } from "lucide-react";
import { TRANSLATED_SKILLS_DATA } from "../translations";
import { GlassCard, SkillProgressBarContainer, SkillProgressFill } from "./StyledElements";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language, t } = useLanguage();

  // Dynamically resolve icon based on string key
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.skills.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Responsive Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRANSLATED_SKILLS_DATA.map((group, index) => (
              <GlassCard key={index} className="flex flex-col h-full space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 bg-blue-50 dark:bg-slate-800/60 rounded-lg flex-shrink-0">
                    {renderCategoryIcon(group.iconName)}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg">
                    {group.category[language]}
                  </h3>
                </div>

                {/* Skills Level Metrics */}
                <div className="flex-1 space-y-5">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2 group">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-500 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Styled component animated progress bar */}
                      <SkillProgressBarContainer>
                        <SkillProgressFill
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </SkillProgressBarContainer>
                      
                      {/* Short helper comment */}
                      {skill.description && (
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-normal opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                          {skill.description[language]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
