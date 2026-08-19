# ⚡ DORKSCOPE v2.0 PRO
### Google Dorks & OSINT Intelligence Matrix

> **Advanced Google Dorking, Subdomain Recon, OSINT & Threat Intelligence Helper Tool**  
> *Designed & Developed by **Mariya Shaikh***

---

## 🌟 Overview

**DORKSCOPE v2.0 PRO** is a web-based threat intelligence and reconnaissance matrix designed for penetration testers, security researchers, bug bounty hunters, and OSINT analysts. It simplifies complex Google Dorking queries and integrates essential OSINT intelligence links into an intuitive, high-performance visual dashboard.

---

## ✨ Key Features

- 🎯 **Target Domain Control Panel**
  - Instant domain input with automated URL sanitization (strips `http/https`, paths, ports, and query parameters).
  - Extracts both clean hostnames and top-level root domains for precision target scope.
  - Deep-link target loading via URL query parameter (`?d=target.com`).

- ⚡ **60+ Pre-Configured Dork Modules**
  - Organized across 7 specialized categories:
    - 📁 **Google Dorks**: Directory listings, config files, database dumps, log files, admin panels, SQL errors, web shells, .env leaks, API key exposures, and endpoints.
    - 🌐 **Recon & Subdomains**: Google 1st-level & multi-level subdomain enumeration, SSL/TLS CRT.sh logs, SecurityHeaders audit, and SSL Labs tests.
    - ☁️ **Cloud & Storage**: AWS S3 buckets, Azure Blob Storage, Google Cloud Storage, and DigitalOcean Spaces queries.
    - 👁️ **OSINT & Intel**: Shodan, Censys, VirusTotal, GitHub Code Search, Pastebin dumps, LinkedIn employees, Urlscan.io, Wappalyzer, BuiltWith, and PublicWWW source code searches.
    - 📄 **Sensitive Files**: `crossdomain.xml`, `robots.txt`, and `sitemap.xml` inspections.
    - 📜 **Archives & History**: Wayback Machine snapshots and Wayback CDX endpoint enumerations.
    - ⭐ **Bookmarked**: Save frequently used dork modules locally for quick reference.

- 🛠️ **Custom Dork Builder Studio**
  - Interactive dork creation modal supporting operators like `site:`, `inurl:`, `intitle:`, `intext:`, `filetype:`, `ext:`, and `cache:`.
  - Live preview with one-click search launch and copy controls.

- 📥 **Automated Markdown Exporter**
  - Export customized Markdown report files (`DorkScope_<target>_Dorks.md`) formatted for documentation, reporting, or bug bounty note-taking.

- 🌐 **External Security Toolbox**
  - Quick access to top-tier external OSINT utilities including DNSDumpster, CyberChef, Hunter.io, Interactsh, HackerTarget, JWT.io, Breach Directory, Regex101, and more.

- 🎨 **Cyberpunk Glassmorphism UI & Particle Matrix**
  - Theme toggler (Cyber Emerald Dark Mode / Sleek Light Mode).
  - Interactive HTML5 ambient particle canvas background.
  - Toast notifications and responsive grid cards layout.

---

## 📁 Repository Structure

```text
Google Dorks/
├── index.html        # Main HTML layout, modals, headers & DOM structure
├── style.css         # Glassmorphism design system, theme variables & animations
├── app.js            # Core application logic, event listeners, state management & canvas
├── dorksData.js      # 60+ Dorks database, categories definition & external tools links
└── README.md         # Project documentation and usage guide
```

---

## 🚀 Quick Start Guide

### Running Locally
No build step, Node.js installation, or backend server is required!

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/google-dorks.git
   ```
2. Open `index.html` directly in any web browser (Chrome, Firefox, Edge, Safari).

### Host on Web (GitHub Pages / Netlify / Vercel)
Simply upload the project folder to GitHub Pages or static host providers to make your personal OSINT tool accessible anywhere.

---

## 💡 Usage Hints

- **URL Auto-Load**: Load targets directly via URL:
  ```text
  index.html?d=example.com
  ```
- **Copy vs Launch**: Click **📋 Copy String** to copy the dork query to your clipboard, or **🚀 Launch** to open Google Search in a new tab.
- **Bookmarks**: Click the star icon (⭐) on any dork card to save it into your persistent local storage bookmark tab.

---

## 🛡️ Disclaimer & Ethical Use

> [!WARNING]
> **Educational & Professional Security Testing Only**  
> DORKSCOPE is intended solely for security professionals, penetration testers, bug bounty hunters, and educational research on systems you own or have explicit authorization to assess. Unauthorized scanning or testing of target systems is illegal.

---

## 👩‍💻 Author

Developed with ❤️ by **Mariya Shaikh**
