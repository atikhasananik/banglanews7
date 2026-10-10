# Bangla News 7

Bangla News 7 is a Bengali-language news website for browsing current headlines, exploring news by category, and reading full articles in one place.

## Key features

1. **News homepage** — Browse news sections, featured stories, and popular articles.
2. **Category browsing** — Find articles grouped by news category.
3. **Article pages** — Read full stories with images, subheadings, publication time, and tags.
4. **Bengali-friendly presentation** — Uses the Noto Serif Bengali font and Bengali date formatting.
5. **Live news feed** — Fetches news from the News API v2 service and revalidates selected content periodically.

## What problem it solves

Keeping up with news can mean jumping between many sources and searching through unorganized headlines. Bangla News 7 brings current stories together in a single, category-based experience, making it easier for Bengali readers to discover and read the news that matters to them.

## Technology

- **Next.js 16** with the App Router
- **React 19** and **TypeScript**
- **Tailwind CSS 4** and **daisyUI 5** for styling
- **MongoDB** and **Better Auth** dependencies for authentication
- **Lucide React** for icons
- **React Fast Marquee** for scrolling headlines
- **Noto Serif Bengali** via `next/font`
- **News API v2** (`news-api-v2.vercel.app`) for news content

## Getting started

### Requirements

- Node.js compatible with the installed Next.js version
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If you use authentication features, configure the required authentication and database environment variables in a local environment file before running the app. Do not commit secrets to version control.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  app/
    api/auth/       Authentication API route
    catagory/       Category news pages
    details/        Article detail pages
    page.tsx        Homepage
  components/
    common/         Shared news components
    details/        Article content components
    footer/         Site footer
    headerSection/  Navigation and scrolling headlines
    home/           Homepage news sections
  types/            Shared TypeScript types
```

## News data

The homepage, category pages, and article pages retrieve content from `https://news-api-v2.vercel.app`. Some requests use Next.js caching and revalidation, so displayed content may not update on every request.

## Deployment

Build the application with `npm run build`, then run it with `npm run start`. The project can also be deployed to a Next.js-compatible hosting platform. Configure any required authentication and database environment variables in the hosting provider before enabling those features.
