# 🎵 Music Academy — Modern Frontend Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-Framer_Motion-FF4154?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

> 🚀 **An interactive, high-performance Music School web application built while mastering Next.js via the renowned [Chai aur Code](https://youtube.com/@chaiaurcode) playlist by Hitesh Choudhary.**

---

## 🌟 Overview

Welcome to **Music Academy**! This project focuses on building a modern, visually stunning, dark-themed frontend experience using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Aceternity UI** motion components. 

The goal of this project was to step beyond typical web apps and build a production-grade, immersive user experience with complex micro-interactions, smooth canvas animations, 3D effects, and clean modular component architecture.

---

## ⚡ Key Highlights & Visual Components

| Feature Section | Visual Effect / Component | Experience |
| :--- | :--- | :--- |
| **Hero Section** | Spotlight Effect & Moving Borders | Dynamic focal beam with glowing animated CTA button |
| **Featured Courses** | Background Gradients & JSON-driven catalog | Smooth color-shifting borders filtering top music courses |
| **Why Choose Us** | Sticky Scroll Reveal | Synchronized text-and-visual scroll interaction |
| **Testimonials** | Infinite Moving Cards | Smooth marquee effect sharing student success stories |
| **Upcoming Webinars** | Card Hover Effect | Interactive grid hover highlights for music masterclasses |
| **Instructors** | Animated Tooltip & Wavy Canvas | Fluid math-driven canvas waves with floating mentor avatars |
| **Courses Page** | 3D Interactive Cards | Realistic 3D tilt perspective on mouse hover |
| **Contact Page** | Meteors Animation | Atmospheric falling meteor shower background |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router & Server/Client Components)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Type-safe schemas & props)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) & [Aceternity UI](https://ui.aceternity.com/)
- **Canvas Math:** Simplex Noise for dynamic generative waves
- **Icons & Utilities:** `clsx`, `tailwind-merge`

---

## 🧭 Application Routes

- `/` — **Landing Page**: Immersive showcase including Hero, Featured Courses, Testimonials, Webinars, and Instructors.
- `/courses` — **Course Catalog**: Complete grid of music courses with interactive 3D perspective cards.
- `/contact` — **Contact & Inquiries**: Support page backed with meteor shower visual effects.

---

## 💡 What I Learned

Building this frontend project through the **Chai aur Code** series unlocked several core Next.js & modern UI concepts:

1. **Next.js App Router Architecture:** Understanding `'use client'` vs Server Components and knowing when to push client boundary components to the leaves of the render tree.
2. **Mastering Aceternity UI & Framer Motion:** Implementing complex animations—spotlights, 3D hover effects, sticky scroll synchronization, and canvas shaders.
3. **TypeScript Integration:** Writing structured TypeScript interfaces for course data, navigation items, and polymorphic UI components.
4. **Tailwind CSS Composition:** Leveraging `clsx` and `tailwind-merge` for predictable conditional styling without class conflicts.
5. **Component Reusability:** Architecting modular UI primitives located under `src/components/ui` that can be dropped into any project.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.17 or higher recommended)
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to explore the application.

---

## 📂 Project Architecture

```text
src/
├── app/
│   ├── contact/           # Contact page with meteor background
│   ├── courses/           # Course catalog with 3D cards
│   ├── globals.css        # Global CSS & Tailwind configuration
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   └── page.tsx           # Main landing page
├── components/
│   ├── ui/                # Aceternity UI animation primitives (Spotlight, 3D card, etc.)
│   ├── FeaturedCourses.tsx
│   ├── HeroSection.tsx
│   ├── Instructors.tsx
│   ├── Navbar.tsx
│   ├── TestimonialCards.tsx
│   ├── UpcomingWebinars.tsx
│   └── WhyChooseUs.tsx
├── data/
│   └── music_courses.json # Structured courses dataset
└── lib/
    └── utils.ts           # Class merging utilities
```

---

## 🔮 What's Next? (Roadmap)

- [ ] Connect Backend & Database (PostgreSQL / MongoDB) for dynamic course management
- [ ] User Authentication (NextAuth / Clerk) for enrolled students
- [ ] Payment Gateway Integration (Stripe / Razorpay) for course checkout
- [ ] User Dashboard to track learning progress

---

## 💖 Acknowledgments & Credits

- Huge thanks to **[Hitesh Choudhary](https://github.com/hiteshchoudhary)** and the **[Chai aur Code](https://youtube.com/@chaiaurcode)** community for providing high quality, hands-on, free developer education! ☕✨
- Animation inspirations from [Aceternity UI](https://ui.aceternity.com/).

---

## 📬 Connect With Me

If you liked this project or have feedback, feel free to reach out!

- **LinkedIn:** [Your Name](https://www.linkedin.com/in/your-profile)
- **GitHub:** [@your-username](https://github.com/your-username)
- **Portfolio:** [yourportfolio.com](https://yourportfolio.com)

---

⭐ *If you found this repository helpful, consider giving it a star!*
