/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Share2, 
  Eye, 
  Sliders, 
  X, 
  Check, 
  Copy, 
  RotateCcw, 
  Settings, 
  Globe, 
  Sparkles, 
  AlertCircle 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GlassCard, GlowButton } from "./StyledElements";

// Define default SEO meta text for both languages
const DEFAULT_SEO_DATA = {
  en: {
    title: "Ghassen Ben Taher | Full Stack Developer & AI Integration Specialist",
    description: "Professional portfolio of Ghassen Ben Taher, a full-stack developer engineering clean TypeScript/Go architectures and custom intelligent AI agent integrations.",
    keywords: "full stack, software engineer, TypeScript, React, Go, Node.js, AI integrations, portfolio, Ghassen Ben Taher",
    ogTitle: "Ghassen Ben Taher - Full Stack Developer",
    ogDescription: "Crafting high-performance full-stack web architectures, designing intelligent automation systems, and engineering sleek user experiences.",
    author: "Ghassen Ben Taher",
  },
  fr: {
    title: "Ghassen Ben Taher | Développeur Full Stack & Spécialiste IA",
    description: "Portfolio professionnel de Ghassen Ben Taher, ingénieur logiciel spécialisé dans les architectures TypeScript/Go propres et l'intégration de modèles IA.",
    keywords: "développeur full stack, ingénieur logiciel, TypeScript, React, Go, Node.js, intégrations IA, portfolio, Ghassen Ben Taher",
    ogTitle: "Ghassen Ben Taher - Développeur Full Stack",
    ogDescription: "Conception d'architectures web de haute performance, de systèmes d'automatisation intelligents et d'interfaces utilisateur fluides.",
    author: "Ghassen Ben Taher",
  }
};

// Available OG image mock previews
const OG_IMAGES = [
  {
    id: "tech_gradient",
    label: "Creative Tech Gradient",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80",
  },
  {
    id: "minimal_terminal",
    label: "Minimalist Terminal",
    url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80",
  },
  {
    id: "ai_mesh",
    label: "AI Neural Mesh",
    url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&h=630&q=80",
  }
];

export default function SEOManager() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [isModified, setIsModified] = useState(false);

  // Default translation values based on current language
  const defaults = DEFAULT_SEO_DATA[language];

  // Editable meta tags states
  const [title, setTitle] = useState(defaults.title);
  const [description, setDescription] = useState(defaults.description);
  const [keywords, setKeywords] = useState(defaults.keywords);
  const [author, setAuthor] = useState(defaults.author);
  const [ogTitle, setOgTitle] = useState(defaults.ogTitle);
  const [ogDescription, setOgDescription] = useState(defaults.ogDescription);
  const [ogImage, setOgImage] = useState(OG_IMAGES[0].url);
  const [twitterCard, setTwitterCard] = useState("summary_large_image");

  // Third-party scripts (Google Analytics & Google AdSense)
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState("G-DUMMY123456");
  const [googleAdSenseId, setGoogleAdSenseId] = useState("ca-pub-1234567890123456");

  // Sync state with language changes if not custom modified
  useEffect(() => {
    if (!isModified) {
      setTitle(defaults.title);
      setDescription(defaults.description);
      setKeywords(defaults.keywords);
      setAuthor(defaults.author);
      setOgTitle(defaults.ogTitle);
      setOgDescription(defaults.ogDescription);
    }
  }, [language, isModified, defaults]);

  // Effect to update HEAD meta tags dynamically!
  useEffect(() => {
    // 1. Update title
    document.title = title;

    // Helper to query and set or create meta tag
    const updateMetaTag = (nameAttr: string, value: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${nameAttr}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, nameAttr);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    // 2. Update descriptive and searchability tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // 3. Update Open Graph tags for social platforms
    updateMetaTag("og:title", ogTitle, true);
    updateMetaTag("og:description", ogDescription, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", window.location.href, true);
    updateMetaTag("og:type", "profile", true);

    // 4. Update Twitter Card tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", ogTitle);
    updateMetaTag("twitter:description", ogDescription);
    updateMetaTag("twitter:image", ogImage);
  }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, twitterCard]);

  // Effect to load/update Google Analytics dynamically!
  useEffect(() => {
    if (!googleAnalyticsId) return;

    // Remove any older tags
    const oldExternalScript = document.getElementById("google-analytics-external");
    if (oldExternalScript) oldExternalScript.remove();
    const oldInlineScript = document.getElementById("google-analytics-inline");
    if (oldInlineScript) oldInlineScript.remove();

    // Create the external tag
    const externalScript = document.createElement("script");
    externalScript.id = "google-analytics-external";
    externalScript.async = true;
    externalScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(externalScript);

    // Create the inline config tag
    const inlineScript = document.createElement("script");
    inlineScript.id = "google-analytics-inline";
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(inlineScript);

    return () => {
      const ext = document.getElementById("google-analytics-external");
      if (ext) ext.remove();
      const inl = document.getElementById("google-analytics-inline");
      if (inl) inl.remove();
    };
  }, [googleAnalyticsId]);

  // Effect to load/update Google AdSense dynamically!
  useEffect(() => {
    if (!googleAdSenseId) return;

    const oldAdSenseScript = document.getElementById("google-adsense-script");
    if (oldAdSenseScript) oldAdSenseScript.remove();

    const adsenseScript = document.createElement("script");
    adsenseScript.id = "google-adsense-script";
    adsenseScript.async = true;
    adsenseScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdSenseId}`;
    adsenseScript.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(adsenseScript);

    return () => {
      const script = document.getElementById("google-adsense-script");
      if (script) script.remove();
    };
  }, [googleAdSenseId]);

  const handleReset = () => {
    setTitle(defaults.title);
    setDescription(defaults.description);
    setKeywords(defaults.keywords);
    setAuthor(defaults.author);
    setOgTitle(defaults.ogTitle);
    setOgDescription(defaults.ogDescription);
    setOgImage(OG_IMAGES[0].url);
    setTwitterCard("summary_large_image");
    setGoogleAnalyticsId("G-DUMMY123456");
    setGoogleAdSenseId("ca-pub-1234567890123456");
    setIsModified(false);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    setIsModified(true);
  };

  const generateMetaHtml = () => {
    return `<!-- SEO Primary Search Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">

<!-- Open Graph / Facebook Social Share Card -->
<meta property="og:type" content="website">
<meta property="og:url" content="${window.location.href}">
<meta property="og:title" content="${ogTitle}">
<meta property="og:description" content="${ogDescription}">
<meta property="og:image" content="${ogImage}">

<!-- Twitter / X Social Share Card -->
<meta name="twitter:card" content="${twitterCard}">
<meta name="twitter:url" content="${window.location.href}">
<meta name="twitter:title" content="${ogTitle}">
<meta name="twitter:description" content="${ogDescription}">
<meta name="twitter:image" content="${ogImage}">

<!-- Google Analytics 4 (GA4) Global Site Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${googleAnalyticsId}', { 'anonymize_ip': true });
</script>

<!-- Google AdSense Ad Manager -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdSenseId}" crossorigin="anonymous"></script>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateMetaHtml());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 cursor-pointer font-semibold text-sm transition-shadow duration-300"
          id="seo-floating-toggle"
        >
          <Settings className="w-4 h-4 animate-spin-slow" />
          <span>SEO Head Manager</span>
          {isModified && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </motion.button>
      </div>

      {/* Slide-out Sidebar Drawer Container */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950 z-50 backdrop-blur-xs"
              id="seo-drawer-backdrop"
            />

            {/* Main Panel Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-md md:max-w-lg bg-slate-50 dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col"
              id="seo-drawer-panel"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-950">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-blue-500" />
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                      SEO Head Meta Manager
                    </h3>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-wider">
                      DYNAMIC HEAD & SERP ADJUSTMENT
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="px-5 pt-3 pb-1 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/40 flex gap-2">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                    activeTab === "preview"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Live Previews
                </button>
                <button
                  onClick={() => setActiveTab("edit")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                    activeTab === "edit"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  Modify Head Metadata
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                    activeTab === "code"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Copy className="w-3.5 h-3.5" />
                  Meta HTML Block
                </button>
              </div>

              {/* Scrollable Content Container */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                
                {/* Notice Badge */}
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 flex items-start gap-2.5">
                  <Globe className="w-4.5 h-4.5 text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-blue-700 dark:text-blue-300 leading-normal">
                    <strong>Direct Dynamic Management:</strong> Edits to fields below immediately rewrite the current document’s live <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> tags. Try swapping languages using the global nav language button to see localized defaults sync!
                  </div>
                </div>

                {activeTab === "preview" && (
                  <div className="space-y-6">
                    {/* Google SERP Preview Card */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5 text-blue-500" />
                          Google SERP Preview (Desktop)
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Googlebot Crawler</span>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl font-sans shadow-xs">
                        <div className="text-xs text-[#202124] dark:text-[#bdc1c6] mb-1 flex items-center gap-1">
                          <span className="truncate">https://ghassen.dev</span>
                          <span className="text-[10px] text-slate-400">▼</span>
                        </div>
                        <h4 className="text-[18px] sm:text-[19px] leading-tight text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer font-medium mb-1 line-clamp-1">
                          {title}
                        </h4>
                        <p className="text-[13px] leading-normal text-[#4d5156] dark:text-[#9aa0a6] line-clamp-2">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Social Media OpenGraph Card (Facebook/LinkedIn style) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <Share2 className="w-3.5 h-3.5 text-blue-500" />
                          OpenGraph Card (Facebook/LinkedIn)
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Card Embed Size: 1.91:1</span>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs font-sans">
                        <div className="h-44 overflow-hidden relative border-b border-slate-100 dark:border-slate-800/80 bg-slate-900">
                          <img
                            src={ogImage}
                            alt="SEO Card Media"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400 uppercase">
                            OpenGraph Img
                          </div>
                        </div>
                        <div className="p-3.5 space-y-1">
                          <div className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">
                            ghassen.dev &bull; PORTFOLIO
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 leading-snug">
                            {ogTitle}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                            {ogDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Twitter/X Card Preview */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <Share2 className="w-3.5 h-3.5 text-blue-500" />
                          Twitter/X Post Card Preview
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">{twitterCard}</span>
                      </div>

                      <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl font-sans shadow-xs space-y-3">
                        <div className="flex items-start gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700/50 overflow-hidden shrink-0 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-tr from-blue-600 to-indigo-600">
                            GB
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-bold text-slate-900 dark:text-white hover:underline cursor-pointer">Ghassen Ben Taher</span>
                              <span className="text-xs text-slate-400 dark:text-slate-500">@ghassenbt &bull; Just now</span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                              Check out my full-stack web and artificial intelligence integration portfolio! Let's build together. 🚀
                            </p>
                          </div>
                        </div>

                        {/* Twitter Card Layout */}
                        {twitterCard === "summary_large_image" ? (
                          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:bg-slate-50 dark:hover:bg-slate-900/40 cursor-pointer transition-colors ml-11">
                            <div className="h-36 bg-slate-900 relative">
                              <img
                                src={ogImage}
                                alt="Twitter Media"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="p-2.5 border-t border-slate-200 dark:border-slate-800">
                              <div className="text-[10px] text-slate-400 font-mono tracking-wider">ghassen.dev</div>
                              <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 leading-snug mt-0.5">{ogTitle}</h4>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 leading-normal mt-0.5">{ogDescription}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:bg-slate-50 dark:hover:bg-slate-900/40 cursor-pointer transition-colors flex ml-11 h-20">
                            <div className="p-2.5 flex-1 min-w-0 flex flex-col justify-center">
                              <div className="text-[10px] text-slate-400 font-mono tracking-wider">ghassen.dev</div>
                              <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 leading-snug mt-0.5">{ogTitle}</h4>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 leading-normal mt-0.5">{ogDescription}</p>
                            </div>
                            <div className="w-20 bg-slate-900 relative shrink-0 border-l border-slate-200 dark:border-slate-800">
                              <img
                                src={ogImage}
                                alt="Twitter Media Summary"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "edit" && (
                  <div className="space-y-5">
                    {/* Primary Page Tags Header */}
                    <div className="pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 tracking-wider font-mono uppercase">Primary Head Tags</span>
                      <button
                        onClick={handleReset}
                        className="text-[10px] text-rose-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer font-mono font-medium"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset All To Defaults
                      </button>
                    </div>

                    {/* Document Title */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Page Title (&lt;title&gt;)</span>
                        <span className={`text-[10px] font-mono ${title.length > 60 ? "text-amber-500" : "text-slate-400"}`}>
                          {title.length}/60 chars recommended
                        </span>
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => handleInputChange(setTitle, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Document Description */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Meta Description</span>
                        <span className={`text-[10px] font-mono ${description.length > 160 ? "text-amber-500" : "text-slate-400"}`}>
                          {description.length}/160 chars recommended
                        </span>
                      </label>
                      <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => handleInputChange(setDescription, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Keywords Tag */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Search Keywords</span>
                        <span className="text-[10px] text-slate-400 font-mono">Comma separated list</span>
                      </label>
                      <input
                        type="text"
                        value={keywords}
                        onChange={(e) => handleInputChange(setKeywords, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Author Tag */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Author Name
                      </label>
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => handleInputChange(setAuthor, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Social Cards Content Header */}
                    <div className="pt-4 pb-1 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-400 tracking-wider font-mono uppercase">Open Graph / Social Media Content</span>
                    </div>

                    {/* OG Title */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Social Card Title (og:title)
                      </label>
                      <input
                        type="text"
                        value={ogTitle}
                        onChange={(e) => handleInputChange(setOgTitle, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* OG Description */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Social Card Description (og:description)
                      </label>
                      <textarea
                        rows={2}
                        value={ogDescription}
                        onChange={(e) => handleInputChange(setOgDescription, e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    {/* OG Image Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Social Banner Asset (og:image)</span>
                        <span className="text-[10px] text-slate-400 font-mono">Select a preview canvas</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {OG_IMAGES.map((img) => (
                          <button
                            key={img.id}
                            type="button"
                            onClick={() => handleInputChange(setOgImage, img.url)}
                            className={`p-1.5 rounded-lg border text-left cursor-pointer transition-all ${
                              ogImage === img.url
                                ? "border-blue-500 bg-blue-500/5 ring-1 ring-blue-500"
                                : "border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                            }`}
                          >
                            <div className="h-10 rounded overflow-hidden mb-1 relative bg-slate-950">
                              <img
                                src={img.url}
                                alt={img.label}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="text-[9px] font-medium text-slate-600 dark:text-slate-300 block truncate leading-tight">
                              {img.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="space-y-1 mt-1">
                        <span className="text-[10px] font-mono text-slate-400">Or use a custom direct image link:</span>
                        <input
                          type="text"
                          value={ogImage}
                          onChange={(e) => handleInputChange(setOgImage, e.target.value)}
                          placeholder="https://example.com/social-banner.png"
                          className="w-full px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-[11px] font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Twitter Card Layout Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Twitter/X Card Type
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-300">
                          <input
                            type="radio"
                            name="twitter-card"
                            value="summary_large_image"
                            checked={twitterCard === "summary_large_image"}
                            onChange={() => handleInputChange(setTwitterCard, "summary_large_image")}
                            className="text-blue-500 focus:ring-blue-500"
                          />
                          Large Media attachment (1.91:1)
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 dark:text-slate-300">
                          <input
                            type="radio"
                            name="twitter-card"
                            value="summary"
                            checked={twitterCard === "summary"}
                            onChange={() => handleInputChange(setTwitterCard, "summary")}
                            className="text-blue-500 focus:ring-blue-500"
                          />
                          Small Thumbnail Summary
                        </label>
                      </div>
                    </div>

                    {/* Third-Party Scripts & Integrations */}
                    <div className="pt-4 pb-1 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-400 tracking-wider font-mono uppercase">Third-Party Scripts</span>
                    </div>

                    {/* Google Analytics ID */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Google Analytics Measurement ID</span>
                        <span className="text-[10px] text-slate-400 font-mono">GA4 Tag ID</span>
                      </label>
                      <input
                        type="text"
                        value={googleAnalyticsId}
                        onChange={(e) => handleInputChange(setGoogleAnalyticsId, e.target.value)}
                        placeholder="G-XXXXXXXXXX"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Google AdSense Publisher ID */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Google AdSense Publisher ID</span>
                        <span className="text-[10px] text-slate-400 font-mono">AdSense Client ID</span>
                      </label>
                      <input
                        type="text"
                        value={googleAdSenseId}
                        onChange={(e) => handleInputChange(setGoogleAdSenseId, e.target.value)}
                        placeholder="ca-pub-XXXXXXXXXXXXXXXX"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="space-y-4">
                    <div className="pb-1 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 tracking-wider font-mono uppercase">Production Code snippet</span>
                      <button
                        onClick={handleCopyCode}
                        className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 cursor-pointer font-semibold font-sans"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                            Copied Tags!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy Head Block
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      Copy the custom <code>&lt;head&gt;</code> HTML code below to hard-paste directly into your <code>index.html</code> template during final static deployments, or let this dynamic module manage them on-the-fly inside the client container.
                    </p>

                    <div className="relative">
                      <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[10px] leading-relaxed text-slate-300 overflow-x-auto max-h-96">
                        <code>{generateMetaHtml()}</code>
                      </pre>
                      <button
                        onClick={handleCopyCode}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Copy Code"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer controls */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between gap-3 shrink-0">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                  Dynamic SEO Utility Active
                </span>
                <div className="flex gap-2">
                  <GlowButton
                    variant="secondary"
                    onClick={handleReset}
                    className="!py-1.5 !px-3 !text-xs"
                    disabled={!isModified}
                  >
                    Reset
                  </GlowButton>
                  <GlowButton
                    variant="primary"
                    onClick={() => setIsOpen(false)}
                    className="!py-1.5 !px-4 !text-xs"
                  >
                    Close Head Panel
                  </GlowButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
