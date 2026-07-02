/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Github, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FF416C] shadow-md ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand/Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="font-display font-bold text-lg md:text-xl tracking-tight text-white flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF416C] text-base font-bold shadow-md shadow-rose-950/20 group-hover:scale-105 transition-transform duration-200">
                G
              </span>
              <span className="text-white hover:opacity-90 transition-opacity">
                Ghassen ben taher
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Panel (GitHub, Language Toggle & Theme) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/ghassenbentaher"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
              className="p-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 font-mono text-xs uppercase"
            >
              <Languages className="w-4 h-4" />
              <span>{language}</span>
            </button>

            <button
              onClick={onToggleTheme}
              aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
              className="p-2 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1 font-mono text-xs uppercase"
            >
              <Languages className="w-4 h-4" />
              <span>{language}</span>
            </button>

            <button
              onClick={onToggleTheme}
              aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#FF416C] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between px-3">
                <span className="text-sm font-medium text-white/70">
                  {t.nav.repo}
                </span>
                <a
                  href="https://github.com/bentaherghassen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
