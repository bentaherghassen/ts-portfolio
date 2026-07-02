/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Simulated asynchronous API fetcher for portfolio traffic analytics
async function fetchMockVisitorCount(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate reading/writing from a persistent database
      const storedCount = localStorage.getItem("portfolio-visitor-count");
      // Start with a realistic baseline of 1482 visits
      let count = storedCount ? parseInt(storedCount, 10) : 1482;
      
      // Increment only once per session to look authentic
      const hasVisitedThisSession = sessionStorage.getItem("portfolio-has-visited");
      if (!hasVisitedThisSession) {
        count += 1;
        localStorage.setItem("portfolio-visitor-count", count.toString());
        sessionStorage.setItem("portfolio-has-visited", "true");
      }
      
      resolve(count);
    }, 600);
  });
}

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch count on component mount
  useEffect(() => {
    let active = true;
    fetchMockVisitorCount().then((count) => {
      if (active) {
        setVisitorCount(count);
        setIsLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/bentaherghassen", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/bouzidighassen", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://www.x.com/bentaherghassen", label: "x formerly twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:bentaherghassen@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand, Phone & Visitor Counter */}
          <div className="text-center md:text-left space-y-3">
            <div>
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                Ghassen ben taher
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.footer.direct}: <a href="tel:+21650139196" className="hover:text-blue-500 font-semibold font-mono">+216 50 139 196</a>
              </p>
            </div>

            {/* Simulated Live Visitor Counter Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 text-xs shadow-xs font-sans">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <Users className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-medium">
                {isLoading ? (
                  <span className="inline-block w-8 h-3 bg-slate-200 dark:bg-slate-800 animate-pulse rounded" />
                ) : (
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    {visitorCount?.toLocaleString()}
                  </span>
                )}
                {" "}
                {language === "fr" ? "visites uniques" : "unique visits"}
              </span>
            </div>
          </div>

          {/* Socials Grid */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all shadow-xs"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              &copy; {currentYear} Ghassen ben taher <span style={{ color: 'red' }}>❤</span>.. {t.footer.rights}
            </p>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg border border-slate-200/50 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll to top of portfolio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
