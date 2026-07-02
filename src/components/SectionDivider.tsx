/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface SectionDividerProps {
  glowColor?: string;
}

export default function SectionDivider({ glowColor = "from-blue-500 via-indigo-500 to-purple-600" }: SectionDividerProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4 flex items-center justify-center overflow-hidden">
      {/* Container holding the divider lines and center glowing nodes */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.25 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[1px] w-full bg-gradient-to-r from-transparent to-slate-400 dark:to-slate-700 origin-right flex-1"
        />

        {/* Center Decorative Glowing Icon / Diamond Accent */}
        <div className="relative mx-6 flex items-center justify-center">
          {/* External Pulse Halo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
            viewport={{ once: true }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute w-8 h-8 rounded-full bg-gradient-to-r ${glowColor} blur-md`}
          />

          {/* Core diamond */}
          <motion.div
            initial={{ rotate: 0, scale: 0, opacity: 0 }}
            whileInView={{ rotate: 45, scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className={`w-3.5 h-3.5 bg-gradient-to-br ${glowColor} shadow-[0_0_10px_rgba(99,102,241,0.6)]`}
          />

          {/* Secondary tiny orbital rings / dots */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -left-5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 dark:bg-indigo-400/60"
          />
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -right-5 w-1.5 h-1.5 rounded-full bg-purple-500/60 dark:bg-purple-400/60"
          />
        </div>

        {/* Right Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.25 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[1px] w-full bg-gradient-to-l from-transparent to-slate-400 dark:to-slate-700 origin-left flex-1"
        />
      </div>
    </div>
  );
}
