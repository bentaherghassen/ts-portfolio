/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Slideshow from "./components/Slideshow";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import SEOManager from "./components/SEOManager";
import ScrollProgressBar from "./components/ScrollProgressBar";
import KeyboardShortcutsHelper from "./components/KeyboardShortcutsHelper";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  // Initialize dark mode based on localStorage or default to dark (since dark is a standard modern default)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
    return true; // default dark mode for stylish developer look
  });

  useEffect(() => {
    // Save state preference to localstorage
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

    // Apply or remove .dark class to root element for Tailwind v4
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if the user is currently typing in an input or textarea
      const target = e.target as HTMLElement | null;
      if (target) {
        const tagName = target.tagName.toLowerCase();
        if (tagName === "input" || tagName === "textarea" || target.isContentEditable) {
          return;
        }
      }

      const key = e.key.toLowerCase();
      
      const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      switch (key) {
        case "c":
          scrollToSection("contact");
          break;
        case "h":
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "a":
          scrollToSection("about");
          break;
        case "p":
          scrollToSection("projects");
          break;
        case "s":
          scrollToSection("skills");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Theme object passed to styled-components ThemeProvider
  const theme = {
    isDark,
  };

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
          
          {/* Top Thin Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* Navigation Bar */}
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

          {/* Portfolio Main content */}
          <main id="portfolio-main">
            {/* Home Section */}
            <Hero />

            <SectionDivider glowColor="from-blue-500 via-sky-500 to-indigo-500" />

            {/* About Section */}
            <About />

            <SectionDivider glowColor="from-indigo-500 via-purple-500 to-pink-500" />

            {/* Slideshow Section */}
            <Slideshow />

            <SectionDivider glowColor="from-pink-500 via-rose-500 to-amber-500" />

            {/* Skills Grid */}
            <Skills />

            <SectionDivider glowColor="from-amber-500 via-emerald-500 to-teal-500" />

            {/* Project List */}
            <Projects />

            <SectionDivider glowColor="from-teal-500 via-blue-500 to-indigo-500" />

            {/* Contact Coordinates */}
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Dynamic SEO Meta Tag Head Controller */}
          {/* <SEOManager /> */}

          {/* Floating Keyboard Shortcuts Guide (Bottom Left) */}
          <KeyboardShortcutsHelper />
          
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
