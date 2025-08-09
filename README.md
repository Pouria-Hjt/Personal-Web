# Personal Web Portfolio

A modern, interactive personal portfolio website built with Next.js 14, React 18, and TypeScript. Features beautiful animations, responsive design, and a component-based architecture.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with animated components
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Animations**: Smooth transitions using Framer Motion and AOS
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable components
- **Dark/Light Theme Support**: Built with Tailwind CSS
- **SEO Optimized**: Next.js App Router with optimized metadata

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Frontend**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (landings)/        # Main landing pages
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   └── _components/   # Landing page components
├── assets/                 # Static assets and icons
│   └── icons/             # Custom SVG icons
├── ui/                     # Reusable UI components
├── features/              # Feature-specific components
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
├── configs/               # Configuration files
├── constants/             # App constants
└── @types/                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Pouria-Hjt/Personal-Web.git
cd personal-web
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Key Components

### Landing Page Cards

- **TitleCard**: Hero section with name and title
- **BiographyCard**: Personal introduction
- **LatestWorksCard**: Showcase of recent projects
- **TechnologiesCard**: Tech stack display
- **SocialsCard**: Social media links
- **MarqueeCard**: Animated text marquee

### About Page Sections

- **AboutCard**: Detailed personal information
- **ExperienceCard**: Professional experience timeline
- **WhatIdoCard**: Services and skills overview
- **StatsCard**: Achievement statistics
- **Profile**: Animated profile component

## 🎭 Animations

The project uses multiple animation libraries for a rich user experience:

- **Framer Motion**: Complex animations and page transitions
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Custom animations**: Tailored interactions for specific components

## 🎯 Pages

- **Home (`/`)**: Main landing page with key information cards
- **About (`/about`)**: Detailed information about experience and skills
- **Projects** (planned): Portfolio showcase
- **Contact** (planned): Contact form and information
- **Blog** (planned): Personal blog section

## 🌐 Deployment

The project is configured for deployment on [Liara](https://liara.ir/), an Iranian cloud platform:

```json
{
  "app": "pouria-hjt",
  "port": 3000,
  "build": {
    "location": "iran"
  }
}
```

For other platforms:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Build command: `pnpm build`, Publish directory: `.next`
- **Docker**: Use the included Next.js Docker configuration

## 🔧 Customization

### Adding New Components

1. Create component in appropriate directory under `src/ui/` or `src/app/`
2. Export from relevant `index.ts` file
3. Add TypeScript types in `src/@types/` if needed

### Styling

- Tailwind CSS configuration in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes

### Icons

- Custom icons in `src/assets/icons/`
- Tech stack icons in `src/assets/icons/techs/`
- All icons exported from index files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Pouria Hajati**

- GitHub: [@Pouria-Hjt](https://github.com/Pouria-Hjt)
- Portfolio: [Your Website URL]

---

⭐ **If you like this project, please give it a star!**
