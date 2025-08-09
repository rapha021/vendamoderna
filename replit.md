# Overview

This is a React-based landing page application for an adult content subscription service. Originally built as a full-stack web application, it has been converted to a static build for easy deployment. The application features a modern, mobile-responsive landing page designed to capture leads and process purchases for premium content access at R$14,99.

## Current Status (August 2025)
- ✅ Fully responsive landing page completed
- ✅ Mobile-first design implemented
- ✅ Static build generated in `/public` folder
- ✅ Ready for deployment to any static hosting service

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Animations**: Framer Motion for smooth page transitions and interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type consistency across the stack
- **API Design**: RESTful API endpoints for lead capture and purchase processing
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reloading with Vite middleware integration

## Database Layer
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Data Models**: Users, leads, and purchases with proper relationships

## Component Structure
- **UI Components**: Modular shadcn/ui components (buttons, forms, dialogs, etc.)
- **Page Sections**: Hero, pricing, benefits, FAQ, and footer components
- **Form Handling**: React Hook Form with Zod validation schemas
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Development Workflow
- **Monorepo Structure**: Client and server code in single repository with shared types
- **Type Safety**: Shared schema definitions between frontend and backend
- **Path Aliases**: Configured TypeScript paths for clean imports
- **Development Server**: Vite proxy setup for API requests during development

## Data Flow
- **Lead Capture**: Form submission → validation → database storage
- **Purchase Process**: User input → payment intent creation → external payment processor redirect
- **Error Handling**: Centralized error boundaries with user-friendly messaging
- **Loading States**: Query-based loading indicators and optimistic updates

# External Dependencies

## Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI transitions
- **wouter**: Lightweight routing solution for React
- **react-hook-form**: Form handling with validation
- **@hookform/resolvers**: Form validation resolvers

## UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui**: Headless UI primitives for accessibility
- **shadcn/ui**: Pre-built component library
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

## Backend Services
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

## Validation and Utilities
- **zod**: Schema validation library
- **drizzle-zod**: Zod integration for Drizzle schemas
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation

## Deployment Considerations
- **Static Build**: Complete HTML, CSS, and JavaScript files in `/public` folder
- **No Server Required**: Can be deployed to any static hosting service
- **Mobile Optimized**: Fully responsive design with touch-friendly interfaces
- **SEO Ready**: Meta tags and structured content for search engines
- **Performance**: Optimized assets with modern build tools (61KB CSS, 425KB JS)

## Build Information
- **Build Command**: `npm run build`
- **Output Directory**: `/public`
- **Files Generated**:
  - `index.html` - Main page with SEO meta tags
  - `assets/index-CvwVFtkP.css` - Compiled CSS (61KB)
  - `assets/index-DO8okfOl.js` - Compiled JavaScript (425KB)
- **Ready for**: Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any static host