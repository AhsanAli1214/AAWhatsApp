# AAWhatsApp APK Download Website

## Overview

This is a modern, SEO-optimized landing page for AAWhatsApp APK, a WhatsApp mod application. The website showcases features, provides download links, and includes comparison tables with other WhatsApp mods. Built as a full-stack application with a React frontend and Express backend, it includes subscriber email collection and download tracking functionality.

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