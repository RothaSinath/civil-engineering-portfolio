# Civil Engineering Student Portfolio Website

A minimal, elegant, and production-ready portfolio website for **Ty Sophally**, a Civil Engineering student at the **National University of Battambang**, Cambodia.

Designed with a high-contrast white-and-navy aesthetic, engineering photography, CAD and technical drawing illustrations, and responsive layouts adhering to WCAG 2.2 AA principles.

---

## 🏗️ Technology Stack

- **React.js 18** (Functional components, custom hooks, and native state management)
- **Vite 6** (Blazing-fast build tool and local development server)
- **Tailwind CSS 3.4** (Utility-first styling with customized engineering palette)
- **Lucide React** (Crisp, modern iconography for technical disciplines)
- **Motion for React (`motion/react`)** (Subtle entrance animations and responsive micro-interactions)
- **Interactive Engineering Background Animation** (Canvas-powered structural truss nodes, CAD crosshairs, drift coordinates, and mouse stress-line interactions with full `prefers-reduced-motion` compliance)
- **Accessible Native State** (Keyboard navigation, modal focus traps, and expandable curriculum view)

---

## 🎨 Design System & Color Palette

The portfolio features a clean, professional aesthetic inspired by civil engineering consultancies and architectural practices:

| Color Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Navy** | `#102A43` | Main headings, brand text, primary buttons |
| **Dark Navy** | `#0B2545` | Modal backdrop, deep accents, active states |
| **Secondary Navy** | `#243B53` | Section subheadings and secondary emphasis |
| **Accent Blue** | `#3B82F6` | Interactive focus rings, badges, links |
| **Pale Blue** | `#EAF2FF` | Icon containers, subtle pill tags |
| **Light Background** | `#F5F8FC` | Alternating section backgrounds |
| **Primary Text** | `#172B4D` | High-contrast body copy |
| **Secondary Text** | `#627D98` | Captions, metadata, and supporting descriptions |
| **Border Subtle** | `#D9E2EC` | Card borders, dividers, and outlines |

---

## 📐 Project Sections (Single-Page Layout)

1. **Navigation Bar**: Sticky header with initial avatar, brand title, responsive hamburger menu, and active scroll indicators.
2. **Hero Section**: Two-column layout presenting Ty Sophally, degree, university, telephone, and an engineering image with hardhat and drawings on site.
3. **Featured Engineering Projects**: 5 sample academic concept cards (Structural Analysis, AutoCAD Drafting, Soil Mechanics, Highway Design, Construction Management) plus a "More Projects Coming Soon" capstone card.
4. **Project Details Modal**: Accessible dialog displaying objectives, scope of work, methodology, tools, and clear sample-concept notices.
5. **About Me**: Professional biography and three engineering value cards (Technical Precision, Continuous Learning, Sustainable Infrastructure).
6. **Technical Skills**: Four categorized competency cards (Autodesk Robot, AutoCAD, Structural Analysis, Geotechnical, Project Planning).
7. **Education & Certifications**: Bachelor Degree of Civil Engineering (NUBB, 2020–2025), Ek Phnom High School, plus certified training in Autodesk Robot, AutoCAD, Baktouk IT, and English Course Level 6.
8. **Work Experience & References**: Proven industry history (Survey Officer at K.B.H Construction Co.,Ltd; Intern Site Engineer; Chainman at ILSUNG KUMHO JV Co.,Ltd) plus verified Academic Reference (**Mr. No Sinat, Professor at NUBB, Tel: 012 543 334**).
9. **Relevant Coursework**: Expandable course grid across 5 disciplines with "Show All Coursework / Show Less" toggle.
10. **Career Objective**: Targeted application for Site Engineer based in Battambang with direct contact action.
11. **Contact Section & Form**: Telephone (`092850199`), Gmail (`tysophally@gmail.com`), Battambang residential address, validated contact form, and direct calling links.
12. **Footer**: Dynamic year, student name, and "Back to Top" smooth scroll.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or newer (Tested on Node v22.20.0)
- npm 9.x or newer

### Installation

```bash
# Clone or navigate to the repository
cd "Civil Engineering Portfolio"

# Install dependencies
npm install
```

### Local Development

```bash
# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact Form Configuration

To connect the contact form to a live email delivery service (such as [Formspree](https://formspree.io)):

1. Create a `.env` file in the project root:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_formspree_id
   ```
2. If this environment variable is left blank or unconfigured, the contact form will display an honest, transparent notice directing recruiters and visitors to reach out directly via telephone (`092850199`) or official academic channels.

---

## 🛡️ Academic Integrity & Data Accuracy

This portfolio follows rigorous engineering ethics and academic integrity:
- Sample concepts are explicitly tagged as **"Sample Academic Concept"**.
- No fabricated grades, completion dates, commercial achievements, or mock test results are displayed.
- All missing personal information retains accurate placeholders (`[Expected Graduation Year]`).
