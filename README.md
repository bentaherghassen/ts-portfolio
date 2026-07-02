# Ghassen Ben Taher - Full Stack portfolio

Welcome to the professional, high-performance developer portfolio of **Ghassen Ben Taher**. This interactive web application is designed with **React 18+**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**, presenting a clean, modern aesthetic with smooth micro-animations and intuitive interactive interfaces.

---

## 🎨 Core Design Concept & Aesthetic

- **High-Contrast Slate Aesthetic**: A customized layout featuring eye-safe, spacious off-whites and dark twilight slates.
- **Dynamic Scroll Progress Bar**: A sleek, thin progress bar anchored to the very top of the browser window that tracks reading progress using smooth spring-physics transitions.
- **Micro-Animations & Reveal Effects**: Powered by Framer Motion, content smoothly fades, springs, and scales into view on scroll, using lazy viewport-based rendering.
- **Animate-on-Scroll Section Dividers**: Reusable custom separators featuring double-directional expanding bounds and centered glowing light indicators that shift gradient colors as you progress down the page.

---

## ⚙️ Key Technical Features

### 1. Dynamic SEO Head Meta Manager
A persistent floating utility panel allowing you to adjust primary searchability indicators and social OpenGraph tags directly in your browser:
* **Google SERP Desktop Preview**: Real-time mock rendering of your search results snippet exactly how it would appear on Google's desktop search page.
* **OpenGraph Media Embed Card**: Visual mockup preview of standard social share attachments (e.g., LinkedIn, Facebook) using a selectable list of rich imagery (Creative Gradient, Terminal, Neural Network).
* **Twitter/X Post Snippet**: Adaptive live preview supporting both *Large Image Attachment* and *Small Summary Thumbnail* layouts.
* **Third-Party Script Embeds**: Active dynamic integration of **Google Analytics (GA4)** and **Google AdSense** scripts, loading them asynchronously on-the-fly when custom measurement IDs or publisher clients are defined.
* **HTML Generation**: Single-click export of complete `<head>` metadata code blocks for copy-pasting during final static production deployments.

### 2. Multi-Language Localization Engine
A high-fidelity localization system structured around a global React Context (`LanguageContext`) enabling immediate seamless toggle between:
* 🇺🇸 **English** (default)
* 🇫🇷 **French**
*(Includes dynamic syncing with default SEO tag definitions when language swap occurs).*

### 3. Desktop Keyboard Shortcut Navigation
Fast, accessible keyboard triggers for power users to navigate around the site without touchpads or mice:
* <kbd>H</kbd> : Scroll smoothly to **Home/Hero**
* <kbd>A</kbd> : Scroll smoothly to **About**
* <kbd>S</kbd> : Scroll smoothly to **Skills**
* <kbd>P</kbd> : Scroll smoothly to **Projects**
* <kbd>C</kbd> : Scroll smoothly to **Contact**
* <kbd>←</kbd> / <kbd>→</kbd> : Swap active project visual cards inside the interactive carousel slider
* **Visual Shortcut Toast**: Slide-in indicator panel appears on key triggers confirming key recognition.
* **A11y Guard**: Automatically disables during active text inputs, search queries, or form submissions to prevent navigation interruptions.

---

## 📂 File Architecture

```bash
├── package.json               # Dependency declarations (React, Vite, Framer Motion, Lucide)
├── vite.config.ts             # Vite asset Bundling & CSS injection setup
├── index.html                 # Primary HTML single-page document entry
├── src
│   ├── main.tsx               # Main application renderer bootstrap
│   ├── App.tsx                # Core container rendering sections, controllers & providers
│   ├── index.css              # Global tailwind stylesheet and theme variable declarations
│   ├── translations.ts        # Comprehensive localization database (English & French)
│   ├── context
│   │   └── LanguageContext.tsx# Context state tracking and distributing translation maps
│   └── components
│       ├── Navbar.tsx         # Responsive header, theme switch & language toggler
│       ├── Hero.tsx           # Display greeting with elegant typography & dynamic CV action
│       ├── About.tsx          # Personal biography, educational background & experience
│       ├── Slideshow.tsx      # Multi-item interactive slide carousel with arrows & shortcuts
│       ├── Skills.tsx         # Tech-stack taxonomy sorted by bento category blocks
│       ├── Projects.tsx       # Detail view of key applications and system components
│       ├── Contact.tsx        # Secure form entry with real-time feedback
│       ├── Footer.tsx         # Social handles, direct dialer link & copywrite bounds
│       ├── SEOManager.tsx     # Dynamic page head, Google SERP, and GA/AdSense injection
│       ├── KeyboardShortcutsHelper.tsx # Shortcut toast notifier and modal legends
│       ├── ScrollProgressBar.tsx       # Smooth spring scroll feedback indicator
│       └── SectionDivider.tsx # Reusable animated section break separator lines
```

---

## 🚀 Local Development & Build Commands

Before running or compiling the portfolio, make sure you have standard Node.js environments installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
*(Binds to standard port `3000` behind the reverse proxy)*

### 3. Lint Source Code
Check code for type safety, missing imports, and JSX validation errors:
```bash
npm run lint
```

### 4. Build Production Distribution
Bundle, compress, and optimize static production files in the `/dist` directory:
```bash
npm run build
```

---

## 🛠️ Extensibility and Configuration

### Adding a New Skill or Project Card
To add a new skill to the bento-grid or a new item to the project carousel, edit the `src/translations.ts` catalog inside both the `en` and `fr` keys to ensure your updates translate cleanly without disrupting type safety.

### Tweaking Scroll Progress styling
To adjust the thickness or colors of the top progress line, edit the custom gradients inside `/src/components/ScrollProgressBar.tsx`.
