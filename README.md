# pidgeon.dev - a modern, interactive resume website

![Terminal Preview](https://github.com/user-attachments/assets/3022ddf7-6dfb-4cd4-9b39-a74d63f914d9)

This is my personal portfolio/resume website. It is designed as a modern, interactive showcase of my experience, projects, and skills, featuring a sleek, Discord-inspired theme and an interactive"UNIX" terminal.
As a developer more comfortable with backend systems and automation, building this took me out of my comfort zone and forced me to learn a lot about modern frontend development.

The live url is [https://www.pidgeon.dev](https://www.pidgeon.dev), check it out!

## Tech Stack

This project is built using a modern frontend stack:

- **Astro:** Used as the core framework for its performance benefits and static site generation capabilities.
- **Tailwind CSS:** Utilized for rapid, utility-first styling and maintaining a consistent design system.
- **DaisyUI:** Added for pre-built, semantic UI components that integrate seamlessly with Tailwind CSS.

## Key Features

- **Interactive Terminal Component:** A custom-built, bash-inspired terminal feature that includes an in-memory "file system" with implemented commands such as `ls`, `cd`, and `cat`.
- **Dynamic Animations:** Scroll-triggered entrance animations, custom CSS keyframes, and a JavaScript typewriter cycling text effect in the hero section.
- **Responsive Layout:** A fully responsive design adjusting seamlessly from mobile to desktop, managed via Astro layouts and Tailwind utility classes.
- **Discord-Inspired Aesthetic:** A deliberate, clean "dark mode" UI drawing structural and color inspiration from modern desktop applications.
- **Fast and Lightweight:** Using Astro allows me to keep the site static and very fast without sacrificing design or functionality (99/100 on Lighthouse)

## AI / External Tool Usage

Google Antigravity agentic AI features were used for initial website skeleton and some feature implementations and design tweaks, allowing me to move quickly and focus on the overall architecture and content.
Models used include Gemini 3.1 Pro, Gemini 3 Flash, Claude Opus 4.6 and Sonnet 4.6.

Favicons were created using [favicon.io](https://favicon.io/) and OpenGraph
image was created using [MyOGImage](https://myogimage.com/) with SVG files from [svgrepo](https://www.svgrepo.com/).

## Running Locally

To run this project locally, you will need to have Node.js installed.

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the Astro development server: `npm run dev`
4. Open [http://localhost:4321/](http://localhost:4321/) in your browser to view the site and see changes in real-time.

## License

This is a personal repository.
