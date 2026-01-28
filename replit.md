# AA Mods Website (aa-mods.vercel.app)

## Overview

This is a comprehensive, SEO-optimized website for AA WhatsApp, the most secure WhatsApp modification. The website includes download functionality, detailed feature documentation, a full blog section with 16 SEO-optimized articles, and comparison tables with other WhatsApp mods. Built as a full-stack application with a React frontend and Express backend, it includes subscriber email collection, download tracking, and extensive content marketing.

## Recent Changes (January 2026)

- **Streamlined Download Flow**: Home page redirects to download page, download page uses 2-click system (first click shows ad, second click opens MediaFire)
- **Enhanced Download Page**: Comprehensive download experience with live download counter, version history, changelog, package details, safety verification badges, and installation guide
- **Version Information**: AAWhatsApp V 2.0 (Base 2.25.36.73) with all version details consistent across pages
- **Sitemap Fix**: Fixed sitemap.xml to correctly list all active pages and blog posts.
- **Home Page Optimization**: Removed direct download links and FAQ section for a cleaner user experience.
- **SEO Boost**: Enhanced metadata for Blog and FAQ pages with high-power keywords.
- **Live Stats**: Dynamic download counter showing 10M+ downloads with real-time increments
- **Version History**: Full changelog showing V 2.0, V 1.9, V 1.8 with detailed changes
- Enhanced all 16 blog posts with comprehensive, definitive-guide-level content (8-20 min reads)
- Added FAQ sections with Schema.org FAQPage markup for rich search results
- Implemented Article Schema.org structured data for all blog posts
- Added detailed comparison tables, feature matrices, and security analyses
- Integrated Google Analytics (G-339VLBF7PM) for tracking
- Updated all URLs and SEO metadata to aa-mods.vercel.app domain

## Blog Content Structure

The blog contains 16 fully SEO-optimized articles across 6 categories:
- **Download (2)**: AA WhatsApp download guide, V 2.0 update
- **Features (2)**: Complete features guide, security analysis  
- **Comparison (5)**: vs Official, vs GB WhatsApp, vs FM WhatsApp, best mods ranking, best for privacy
- **Guide (2)**: Installation guide, update guide
- **Troubleshooting (4)**: App not installed fix, ban recovery, verification fix, general troubleshooting
- **Update (2)**: V 2.0 changelog, security patches explained

Each blog post includes:
- Comprehensive content (8-20 minute reads)
- Multiple comparison tables and feature matrices
- FAQ section with 3-6 questions
- Schema.org Article + FAQPage structured data
- Optimized meta titles, descriptions, and keywords
- Open Graph and Twitter Card tags

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme (tech/Aero-inspired design)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for scroll reveals and interactions
- **Smooth Scrolling**: react-scroll for navigation links
- **State Management**: TanStack React Query for server state
- **Fonts**: Outfit (display) and Plus Jakarta Sans (body) via Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ES modules
- **Build Tool**: esbuild for production bundling, Vite for development
- **API Design**: REST endpoints defined in shared routes with Zod validation

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Validation**: drizzle-zod for generating Zod schemas from database tables
- **Tables**:
  - `subscribers`: Email collection for updates (id, email, createdAt)
  - `downloads`: Download tracking by version and platform (id, version, platform, count)

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components including shadcn/ui
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Page components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod
└── migrations/       # Drizzle database migrations
```

### Development Workflow
- **Dev Server**: `npm run dev` runs tsx with hot reload
- **Database Push**: `npm run db:push` syncs schema to database
- **Build**: `npm run build` creates production bundle
- **Type Checking**: `npm run check` runs TypeScript compiler

### Path Aliases
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*`
- `@assets` maps to `attached_assets/`

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently used)

### UI/Styling
- **Radix UI**: Full suite of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS with custom theme configuration
- **class-variance-authority**: Component variant management
- **embla-carousel-react**: Carousel functionality
- **cmdk**: Command menu component
- **vaul**: Drawer component
- **react-day-picker**: Calendar/date picker
- **lucide-react**: Icon library

### Build/Dev Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Production server bundling
- **drizzle-kit**: Database migration tooling
- **@replit/vite-plugin-***: Replit-specific development plugins

### Data Validation
- **Zod**: Runtime type validation for API inputs/outputs
- **@hookform/resolvers**: Form validation integration
- **react-hook-form**: Form state management