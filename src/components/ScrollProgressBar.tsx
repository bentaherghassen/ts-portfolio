/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Use a smooth spring physics curve for the progress bar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 z-50 origin-left shadow-[0_1px_10px_rgba(99,102,241,0.5)] dark:shadow-[0_1px_12px_rgba(139,92,246,0.6)]"
      style={{ scaleX }}
      id="scroll-progress-bar"
    />
  );
}
