# Dawit Zewdu Menas — Personal Portfolio & Executive Resume Website

> **Live Deployment Ready**: Optimized for direct hosting on **GitHub Pages** (`https://<username>.github.io` or `https://<username>.github.io/portfolio/`).

---

## 🌟 Overview & Identity

A personal portfolio and interactive resume website for **Dawit Zewdu Menas**, highlighting his dual academic foundation and cross-functional leadership:
- **Academic Foundation**: 
  - **M.Sc. Candidate** in Financial Economics & Investment Management — *Addis Ababa University (AAU)*
  - **B.Sc.** in Information Systems — *Addis Ababa University (AAU)*
- **Executive Leadership**: 4+ years spearheading Operations, Agile Project Delivery, Commercial Growth, and FinTech Systems Integration.

---

## 🚀 Key Features

1. **Modern Glassmorphic Design System**: Ambient glowing orbs, fluid CSS backdrop filters, and Swiss typography (`Plus Jakarta Sans` & `JetBrains Mono`).
2. **Interactive Dark / Light Theme**: Zero-flicker CSS variables with local storage persistence and dynamic icon state management.
3. **Filterable Competencies Matrix**: Real-time category filtering (Project Management, Financial Economics, Systems & Software, Commercial Growth).
4. **Interactive Timeline & Quantified Case Studies**: Visual career progression with key SLA, financial, and volume metrics.
5. **Integrated PDF Resume Action**: Direct browser preview and one-click download of the official ATS-compliant executive CV (`assets/Dawit_Zewdu_Menas_CV.pdf`).
6. **Zero-Dependency Architecture**: Pure HTML5, CSS3, and modern Vanilla JS (no Node.js build step, bundlers, or external frameworks required).

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                           # Semantic HTML5 single-page application
├── styles.css                           # Glassmorphic responsive design system
├── script.js                            # Theme toggle, ScrollSpy, filter, and interaction handlers
├── assets/
│   ├── profile.jpg                      # High-resolution headshot
│   └── Dawit_Zewdu_Menas_CV.pdf         # Verified 1-page executive CV
├── .gitignore                           # Git ignore rules
└── README.md                            # Documentation & deployment guide
```

---

## 🌐 How to Deploy to GitHub Pages (2 Minutes)

### Option 1: Root Domain (`https://<username>.github.io`) — Recommended

1. Log into [GitHub](https://github.com) and create a **New Repository**.
2. Name the repository exactly: `<your-github-username>.github.io` (must be public).
3. In your local terminal, navigate to the `portfolio` folder and run:
   ```bash
   cd portfolio
   git add .
   git commit -m "Deploy Dawit Zewdu Menas portfolio to GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```
4. Your website will be live worldwide within ~60 seconds at:
   `https://<your-github-username>.github.io`

---

### Option 2: Project Repository (`https://<username>.github.io/portfolio/`)

1. Create a repository named `portfolio` on GitHub.
2. Push your files:
   ```bash
   cd portfolio
   git add .
   git commit -m "Deploy Dawit Zewdu Menas portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings** > **Pages** in your repository.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live at:
   `https://<your-github-username>.github.io/portfolio/`
