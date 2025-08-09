# Overview

This is a React-based landing page application for an adult content subscription service. It's built as a full-stack web application with a modern tech stack including React frontend, Express.js backend, and PostgreSQL database. The application features a landing page designed to capture leads and process purchases for premium content access.

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
- **Environment Variables**: DATABASE_URL for database connection
- **Build Output**: Static frontend assets and bundled server code
- **Session Storage**: PostgreSQL-backed sessions for user state
- **Payment Integration**: Placeholder for external payment processor integration