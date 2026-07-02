/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Terminal, Shield, Cpu, Sparkles } from "lucide-react";
import { GlassCard } from "./StyledElements";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Terminal className="w-5 h-5 text-blue-500" />,
      title: t.about.card1Title,
      description: t.about.card1Desc
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      title: t.about.card2Title,
      description: t.about.card2Desc
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      title: t.about.card3Title,
      description: t.about.card3Desc
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.about.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Bio Section (6 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                {t.about.heading}
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  {t.about.p1}
                </p>
                {/* <p>
                  My name is <strong className="text-slate-900 dark:text-white">Ghassen ben taher</strong>. {t.about.p1.replace("My name is Ghassen ben taher. ", "")}
                </p> */}
                <p>
                  {t.about.p2}
                </p>
                <p>
                  {t.about.p3}
                </p>
              </div>

              {/* Bio Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-center sm:text-left">
                <div className="p-4 bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1">
                    {t.about.yearsOfCoding}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-purple-600 dark:text-purple-400">
                    5+
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1">
                    {t.about.projectsComplete}
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-600 dark:text-emerald-400">
                    99%
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1">
                    {t.about.uptimeFocus}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Philosophy Cards Section (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {highlights.map((highlight, index) => (
                <GlassCard key={index} className="flex gap-4 items-start">
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
