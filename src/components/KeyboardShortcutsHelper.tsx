/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Keyboard, X, ArrowLeftRight, HelpCircle, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GlassCard } from "./StyledElements";

export default function KeyboardShortcutsHelper() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState("");

  // Listen to keys to show a nice little visual toast when a shortcut is triggered!
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const tagName = target.tagName.toLowerCase();
        if (tagName === "input" || tagName === "textarea" || target.isContentEditable) {
          return;
        }
      }

      const key = e.key.toLowerCase();
      const validKeys = ["c", "h", "a", "p", "s", "arrowleft", "arrowright"];
      
      if (validKeys.includes(key)) {
        let label = e.key;
        if (key === "arrowleft") label = "←";
        if (key === "arrowright") label = "→";
        
        setLastKeyPressed(label.toUpperCase());
        setShowToast(true);
        const timer = setTimeout(() => setShowToast(false), 1500);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const shortcutItems = [
    { key: "H", desc: language === "fr" ? "Aller à l'Accueil" : "Scroll to Home" },
    { key: "A", desc: language === "fr" ? "Aller à Propos" : "Scroll to About" },
    { key: "S", desc: language === "fr" ? "Aller aux Compétences" : "Scroll to Skills" },
    { key: "P", desc: language === "fr" ? "Aller aux Projets" : "Scroll to Projects" },
    { key: "C", desc: language === "fr" ? "Aller au Contact" : "Scroll to Contact" },
    { key: "← / →", desc: language === "fr" ? "Faire défiler le diaporama" : "Navigate Project Slides" },
  ];

  return (
    <>
      {/* Floating Toggle Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-slate-200 dark:text-slate-100 border border-slate-200/20 dark:border-slate-700/50 shadow-lg hover:shadow-slate-500/10 cursor-pointer font-semibold text-xs transition-shadow backdrop-blur-md"
          id="keyboard-helper-toggle"
          title="Keyboard Shortcuts"
        >
          <Keyboard className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline">Shortcuts</span>
        </motion.button>
      </div>

      {/* Visual Feedback Toast on Key Press */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="px-4 py-2.5 rounded-xl bg-slate-950/90 text-white border border-blue-500/30 flex items-center gap-2.5 shadow-xl backdrop-blur-md">
              <span className="flex items-center justify-center px-2 py-1 rounded bg-blue-600 font-mono text-xs font-bold shadow-sm">
                {lastKeyPressed}
              </span>
              <span className="text-xs font-medium text-slate-300">
                {language === "fr" ? "Raccourci activé !" : "Shortcut Activated!"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950 z-50 backdrop-blur-xs"
              id="keyboard-helper-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-24 sm:inset-auto sm:left-6 sm:bottom-24 sm:w-80 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl shadow-2xl z-50 overflow-hidden"
              id="keyboard-helper-modal"
            >
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900/60">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    {language === "fr" ? "Raccourcis Clavier" : "Keyboard Navigation"}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 space-y-3.5">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  {language === "fr" 
                    ? "Naviguez instantanément dans le portfolio sans utiliser votre souris en appuyant sur les touches ci-dessous :"
                    : "Instantly navigate around this professional portfolio without touching your mouse using the physical keys below:"}
                </p>

                <div className="space-y-2.5">
                  {shortcutItems.map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-350">
                        {item.desc}
                      </span>
                      <kbd className="min-w-[24px] px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-slate-850 dark:text-slate-100 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm text-center">
                        {item.key}
                      </kbd>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{language === "fr" ? "Désactivé lors de la saisie" : "Disabled while typing in inputs"}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
