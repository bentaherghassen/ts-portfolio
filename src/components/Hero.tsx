/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail, ArrowRight, Code, Download } from "lucide-react";
import { GlowButton, GradientHeading } from "./StyledElements";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();

  const handleDownloadResume = () => {
    // Generate an authentic minimalist mock PDF file content
    const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 120 >>
stream
BT
/F1 18 Tf
72 712 Td
(Ghassen ben taher - Lead Full-Stack Engineer & AI Specialist) Tj
/F1 12 Tf
0 -30 Td
(Contact: bentaherghassen@gmail.com | Phone: +216 50 123 456) Tj
0 -40 Td
(This is a mock PDF generated dynamically for testing purposes.) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000111 00000 n 
0000000203 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
373
%%EOF`;

    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ghassen_ben_taher_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-radial from-blue-50/10 via-transparent to-transparent dark:from-blue-950/5"
    >
      {/* Visual Accent Background Circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-purple-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium">
            <Code className="w-3.5 h-3.5" />
            {t.hero.tagline}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.hero.titlePre}{" "}
              <span className="relative block sm:inline mt-1 sm:mt-0">
                <GradientHeading className="inline-block">{t.hero.titlePost}</GradientHeading>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-display font-medium text-slate-700 dark:text-slate-200 mt-2">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* Call to Actions - Internal Links to Sections as requested */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#projects" className="w-full sm:w-auto">
              <GlowButton className="w-full sm:w-auto" variant="primary">
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
            </a>

            {/* Custom Download Resume Button with Framer Motion bounce on hover */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{
                y: [0, -10, 2, -6, 1, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              className="w-full sm:w-auto text-sm font-semibold font-sans py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm dark:bg-slate-900 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              <Download className="w-4 h-4" />
              {t.hero.downloadResume}
            </motion.button>

            <a href="#contact" className="w-full sm:w-auto">
              <GlowButton className="w-full sm:w-auto" variant="secondary">
                {t.hero.getInTouch}
                <Mail className="w-4 h-4" />
              </GlowButton>
            </a>
          </div>

          {/* Navigation link hints - About and Skills */}
          <div className="pt-8 flex justify-center items-center gap-6 text-xs text-slate-400 dark:text-slate-500 font-mono">
            <a href="#about" className="hover:text-blue-500 transition-colors">
              [{language === "en" ? "About Me" : "À propos de moi"}]
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              [{language === "en" ? "My Core Skills" : "Mes compétences"}]
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
            {t.hero.scrollToExplore}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
