# Youssef Khemiri — Portfolio

A modern, responsive portfolio site showcasing my work across **AI engineering, data science, automation, and software engineering**. Currently open to full-time and freelance roles.

🌐 **Live site:** [youssefkhemiri.github.io](https://youssefkhemiri.github.io)

## Overview

A dependency-free static site: one HTML file, one stylesheet, no build step and no framework. Navigation, project modals, and the photo gallery are handled by vanilla JavaScript embedded at the bottom of `index.html`.

**Sections:** Home (about, what I do, education, certifications, skills) · Career · Projects · Involvements

## Project structure

```
youssefkhemiri.github.io/
├── index.html                  # Entire site: markup + inline JS
├── static/
│   ├── css/
│   │   └── style.css           # All styling, dark theme, responsive
│   └── assets/
│       ├── images/
│       │   ├── profile.jpg     # Sidebar profile photo
│       │   ├── projects/       # Project card images
│       │   └── involvements/   # Photo gallery images
│       └── *.pdf               # Résumé files
└── README.md
```

## Tech stack

- **Markup & styling:** HTML5, CSS3 (Grid, Flexbox, custom properties)
- **Scripting:** Vanilla JavaScript (ES6+), no dependencies
- **Icons:** Font Awesome 6.0.0 (CDN)
- **Fonts:** Inter (Google Fonts)
- **Hosting:** GitHub Pages

## Local development

```bash
git clone https://github.com/youssefkhemiri/youssefkhemiri.github.io.git
cd youssefkhemiri.github.io
python -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly also works, since there is no build step.

## Editing content

Everything lives in `index.html`:

| What to change | Where |
| --- | --- |
| Name, roles, availability, social links | `<aside class="sidebar">` |
| About text, what I do, education, certifications, skills | `<section id="home">` |
| Work history | `<section id="career">` — one `.timeline-item` per role |
| Project cards | `<section id="projects">` — one `.project-card` per project |
| Project modal content | `projectData` object in the inline `<script>` |
| Awards, teaching, leadership, photo gallery | `<section id="involvements">` |

**Adding a project** takes two edits: a `.project-card` in the projects grid, and a matching entry in `projectData` keyed by the same `data-project` value. Mismatched keys mean the "View Details" modal silently won't open.

**Adding gallery photos:** drop the image in `static/assets/images/involvements/`, then add a `.gallery-item` with a `data-category` matching one of the existing filter buttons.

The availability banner on the home page is commented out — uncomment the `.internship-banner` block in `<section id="home">` to display it.

## Deployment

Pushing to `main` deploys automatically via GitHub Pages (Settings → Pages → deploy from `main`, `/` root).

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

## Responsive behaviour

- **Desktop:** fixed sidebar with main content area
- **Tablet:** sidebar collapses, layout reflows to a single column
- **Mobile:** stacked cards, touch-friendly navigation

## License

Personal portfolio. Feel free to use the structure as inspiration for your own, but please don't reuse the personal content.

---

**Built with ❤️ by Youssef Khemiri**
