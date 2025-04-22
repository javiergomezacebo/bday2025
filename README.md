# Birthday Planning App

A Next.js application for planning birthday activities in Ericeira and Troia, Portugal.

## Setup

```bash
# Install dependencies
npm install

# Create .env.local file and add your Google Maps API key
cp .env.local.example .env.local
# Edit .env.local with your actual API key

# Run development server
npm run dev
```

## Deployment

This app can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fbirthday-planner)

### Environment Variables

Add these environment variables in your Vercel project settings:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Your Google Maps API key

### Alternative Deployment Options

1. **Docker**
   - Dockerfile included for containerized deployment
   - Can be deployed to any cloud provider supporting Docker (AWS, GCP, DigitalOcean)

2. **Static Export**
   - Run `npm run build` followed by `npm run export`
   - Deploy the `out` directory to any static hosting (Netlify, GitHub Pages)

## Development

```bash
# Run tests
npm test

# Run linter
npm run lint

# Build for production
npm run build
```

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Maps API
- React

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
