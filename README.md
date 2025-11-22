# ZAYMAR Creatives Website

A modern, clean website for ZAYMAR Creatives - a full-service marketing and design agency. Built with Next.js, TypeScript, and Tailwind CSS, inspired by Tesla and Apple's minimalist design philosophy.

## Features

- 🎨 **Modern Design**: Clean, minimal aesthetic inspired by Tesla and Apple
- ⚡ **Performance**: Built with Next.js 14 for optimal performance and SEO
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🎭 **Subtle Animations**: Smooth, elegant animations using Framer Motion
- 🎯 **Type-Safe**: Built with TypeScript for better developer experience
- 🚀 **Fast**: Optimized for speed and user experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Formspree endpoint:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
   - See `.env.example` for reference (if it exists)

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── Pricing.tsx      # Pricing plans
│   ├── About.tsx        # About section
│   ├── FAQ.tsx          # FAQ section
│   └── Contact.tsx      # Contact & footer
└── public/              # Static assets
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Content**: Update component files in the `components/` directory
- **Styling**: Modify Tailwind classes or add custom CSS in `globals.css`

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Your Formspree form endpoint URL

Create a `.env.local` file in the root directory with your values. This file is already in `.gitignore` and will not be committed.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard (Settings → Environment Variables)
4. Vercel will automatically detect Next.js and deploy

**Important**: Make sure to add your environment variables in your hosting platform's settings (Vercel, Netlify, etc.) before deploying.

Alternatively, you can build and deploy to any Node.js hosting service.

## License

© 2024 ZAYMAR Creatives. All rights reserved.
