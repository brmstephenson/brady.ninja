# brady.ninja

Personal portfolio and interactive resume for [Brady Stephenson](https://brady.ninja) — a frontend-leaning full stack software engineer with 12+ years of experience building web applications.

**Live site:** [https://brady.ninja](https://brady.ninja)

## About

This is the source code for my personal website. It doubles as an online resume and a playground for side projects — styled like a code editor with syntax-highlighted UI elements, resizable panels, and a tabbed navigation system that feels familiar to developers.

The repository is structured as a pnpm workspace with a Next.js web app and a Node.js API. The API is intentionally focused on resume content so the Experience page, AI chat context, and future admin workflows can share one typed source of truth instead of duplicating resume data in React components.

The site is designed to give hiring managers and collaborators a quick sense of who I am, what I've built professionally, and how I approach frontend engineering.

## Features

- **About page** — Introduction, skills overview, and contact links (LinkedIn, GitHub, email)
- **Experience page** — Full work history, education, skills, and downloadable resume PDF
- **Resume content API** — Node.js, Express, tRPC, Prisma, and PostgreSQL service for structured resume data
- **Minesweeper** — Playable classic minesweeper built in React and TypeScript
- **AI chat assistant** — Browser-local LLM powered by [WebLLM](https://webllm.mlc.ai/) that answers questions about me and this site (runs entirely client-side via WebGPU — no API keys or server costs)
- **Code editor aesthetic** — Custom syntax-highlighted typography, multiple editor-inspired themes, dark/light mode
- **IDE-like layout** — Resizable sidebar, tabbed pages, persistent layout state via cookies
- **Responsive design** — Mobile-friendly with sheet-based navigation on smaller screens

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| API | Node.js, Express, tRPC |
| Database | PostgreSQL via Prisma |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) |
| AI | [@mlc-ai/web-llm](https://www.npmjs.com/package/@mlc-ai/web-llm) (SmolLM2, client-side inference) |
| Layout | [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) |
| Deployment | [Vercel](https://vercel.com/) with [Analytics](https://vercel.com/analytics) |
| Tooling | ESLint, Prettier, React Compiler |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) (recommended) or npm

### Install and run

```bash
git clone https://github.com/brmstephenson/brady.ninja.git
cd brady.ninja
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The API runs on [http://localhost:4000](http://localhost:4000).

### Database setup

Create `.env` from `apps/api/.env.example` and set `DATABASE_URL` to a PostgreSQL connection string. For Vercel, attach a Postgres database to the API project and expose the provided `DATABASE_URL` environment variable.

```bash
pnpm db:generate
pnpm db:migrate
pnpm db:seed
```

### Other commands

```bash
pnpm dev       # Run web and API workspaces
pnpm build     # Production build for all workspaces
pnpm lint      # Run ESLint for all workspaces
pnpm format    # Run Prettier for all workspaces
```

### Vercel deployment

Deploy this repository as two Vercel projects:

- `apps/web` as the Next.js project
- `apps/api` as the Node.js API project

Set `NEXT_PUBLIC_API_URL` on the web project to the deployed API origin. Set `DATABASE_URL` and `WEB_ORIGIN` on the API project. `WEB_ORIGIN` should include the deployed web origin, and can be comma-separated for preview/local origins.

> **Note:** The AI chat feature requires a browser with [WebGPU](https://caniuse.com/webgpu) support (Chrome or Edge recommended). Other pages work in all modern browsers.

## Project Structure

```
apps/
├── web/              # Next.js app
│   ├── app/          # Route pages (About, Experience, Minesweeper, etc.)
│   └── public/       # Static assets (images, resume PDF, favicon)
└── api/              # Node.js, Express, tRPC, Prisma API
    ├── api/          # Vercel serverless entrypoint
    ├── prisma/       # Prisma schema and seed data
    └── src/          # Express app and tRPC routers
```

## About the Author

**Brady Stephenson** — Lead Software Engineer with deep frontend expertise in React, Remix, TypeScript, and Tailwind CSS, plus full stack experience in Ruby on Rails, Node.js, and PostgreSQL.

Most recently at Design Pickle, I led frontend modernization (Remix + Vite), cloud migration (Heroku → AWS), and AI-assisted engineering workflows.

- Website: [brady.ninja](https://brady.ninja)
- LinkedIn: [linkedin.com/in/brady-stephenson-3480a091](https://www.linkedin.com/in/brady-stephenson-3480a091/)
- GitHub: [github.com/brmstephenson](https://github.com/brmstephenson)
- Email: [brmstephenson@gmail.com](mailto:brmstephenson@gmail.com)

## License

[MIT](LICENSE) — feel free to use this as reference or inspiration for your own portfolio.
