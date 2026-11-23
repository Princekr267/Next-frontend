# Music Academy

A modern music-school website built with Next.js, React, TypeScript, and Tailwind CSS. The site presents music courses, instructors, testimonials, webinars, and a contact experience through a dark, animation-focused interface.

## Features

- Responsive landing page with:
  - Hero section and course call-to-action
  - Featured courses
  - Benefits of learning with the academy
  - Testimonials
  - Upcoming webinars
  - Instructor showcase
- Course catalog powered by local JSON data
- Animated navigation and interactive UI components
- Dedicated courses and contact pages
- Local course imagery served from `public/courses`
- Geist font loading through `next/font`

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Motion](https://motion.dev/) for animation
- `clsx` and `tailwind-merge` for class name composition
- `simplex-noise` for visual effects

## Getting started

### Prerequisites

- Node.js and npm

### Installation

Clone the repository, move into the project directory, and install dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint |

## Routes

| Route | Description |
| --- | --- |
| `/` | Main landing page |
| `/courses` | Full course catalog |
| `/contact` | Contact form and support information |

## Project structure

```text
src/
├── app/                 # App Router pages and global styles
├── components/          # Page sections and reusable UI components
├── data/                # Local course data
└── lib/                 # Shared utilities
public/
└── courses/             # Course images
```

## Updating course content

Course cards are generated from [`src/data/music_courses.json`](src/data/music_courses.json). Add or update entries in the `courses` array to change the catalog.

Each course can include:

```json
{
  "id": 1,
  "title": "Guitar Fundamentals",
  "slug": "guitar-fundamentals",
  "description": "Learn the basics of playing guitar.",
  "price": 99.99,
  "instructor": "John Doe",
  "isFeatured": true,
  "image": "/courses/guitar.jpg"
}
```

When adding an image, place it in `public/courses` and reference it with a path beginning with `/courses/`.

## Development notes

- Use the `@/*` import alias for files inside `src`.
- Shared visual primitives are located in `src/components/ui`.
- The contact form currently provides the interface only; it is not connected to a submission service or API.
- Course data is static and local. A database or API can be added later if courses need to be managed dynamically.

## Deployment

Build and run the production version locally with:

```bash
npm run build
npm run start
```

The project can be deployed to [Vercel](https://vercel.com/) or another platform that supports Next.js applications.
