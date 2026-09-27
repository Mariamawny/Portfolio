# Mariam Awny - Mobile-App-Style Personal Portfolio

A luxury smartphone-inspired personal developer portfolio website built for **Mariam Awny**, Flutter Developer.

## 📱 Visual & Architectural Highlights

- **Mobile App UI/UX Experience:** Designed to emulate opening a luxury mobile application on a modern smartphone.
- **Pure Web Technology:** Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**. No heavy JS frameworks, static hosting ready.
- **Luxury Visual Identity:** Deep `#050505` background, dark charcoal cards (`#161619`), clean typography (Inter & Outfit), and subtle Electric Cyan (`#00E5FF`) accents.
- **Interactive App Sheet Modals:** Project details open as smooth app bottom sheets detailing Problem, Solution, Result, Features, Tech Badges, and GitHub links.
- **Single Source of Truth:** All project, skill, education, and contact details are extracted directly from Mariam Awny's verified CV.

## 🚀 Live Local Preview

To run the portfolio locally:

```bash
# Using Python
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

## 📂 Project Structure

```text
portfolio/
│
├── index.html       # Mobile-app viewport layout & semantic sections
├── style.css        # Design tokens, luxury app frame & responsive media queries
├── script.js        # Tab switching, bottom sheet modals, live clock logic
│
├── assets/          # Application screenshots & assets
│   ├── images/
│   ├── icons/
│   └── cv/
│
└── README.md
```

## 🛠️ GitHub Pages Deployment

This project is completely static and ready to deploy on **GitHub Pages**:
1. Push all files to your GitHub repository.
2. Navigate to **Settings > Pages**.
3. Select the `main` branch as the source and click **Save**.
