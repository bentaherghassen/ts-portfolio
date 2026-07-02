/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, ExternalLink } from "lucide-react";
import { TRANSLATED_SLIDESHOW_ITEMS } from "../translations";
import { SlideshowFrame, GlowButton } from "./StyledElements";
import { useLanguage } from "../context/LanguageContext";

export default function Slideshow() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Restart timer when play state or current slide index changes
  useEffect(() => {
    if (isPlaying) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 5000); // 5 seconds autoplay interval
    } else {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    }

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isPlaying, currentIndex]);

  // Keyboard shortcut listener for arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in any inputs, textareas, or editable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const tagName = target.tagName.toLowerCase();
        if (tagName === "input" || tagName === "textarea" || target.isContentEditable) {
          return;
        }
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
        setIsPlaying(false); // Pause autoplay on manual selection
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
        setIsPlaying(false); // Pause autoplay on manual selection
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TRANSLATED_SLIDESHOW_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TRANSLATED_SLIDESHOW_ITEMS.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false); // Pause autoplay on manual selection
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const activeSlide = TRANSLATED_SLIDESHOW_ITEMS[currentIndex];

  return (
    <section id="slideshow-section" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200/40 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.slideshow.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              {t.slideshow.subtitle}
            </p>
          </div>

          {/* Slideshow Player Frame */}
          <div className="relative max-w-5xl mx-auto">
            <SlideshowFrame className="relative h-[550px] sm:h-[450px] md:h-[400px] flex flex-col md:flex-row overflow-hidden">
              
              {/* Animated Slides Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col md:flex-row w-full h-full"
                >
                  {/* Left Column: Media Preview */}
                  <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full relative overflow-hidden bg-slate-950">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeSlide.colorClass} mix-blend-multiply z-10`} />
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title[language]}
                      className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating badge inside visual */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-[10px] font-mono text-blue-400 border border-white/10">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      {activeSlide.accentText[language]}
                    </div>
                  </div>

                  {/* Right Column: Metadata details */}
                  <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between h-[300px] sm:h-auto bg-white dark:bg-slate-800">
                    <div className="space-y-4">
                      <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 block uppercase">
                        {activeSlide.subtitle[language]}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                        {activeSlide.title[language]}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                        {activeSlide.description[language]}
                      </p>
                    </div>

                    {/* Interaction Buttons inside slide info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                      <a href="#projects">
                        <GlowButton variant="secondary" className="!py-1.5 !px-3.5 !text-xs">
                          {t.slideshow.examineCode}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </GlowButton>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Autoplay & Direction overlays inside the visual card */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={toggleAutoplay}
                  className="p-1.5 rounded-md bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer border border-white/10"
                  title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </SlideshowFrame>

            {/* Slideshow External Controller Bar (Prev / Next Buttons & Indicators) */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Progress dots indicators */}
              <div className="flex gap-2.5">
                {TRANSLATED_SLIDESHOW_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-8 bg-blue-600 dark:bg-blue-500"
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
