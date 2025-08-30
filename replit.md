# tweakcn - Visual Theme Editor for Tailwind CSS & shadcn/ui

## Overview

tweakcn.com is a powerful visual theme editor designed for Tailwind CSS and shadcn/ui components. The platform allows users to visually customize themes, preview changes in real-time, and export themes for use in their projects. The application includes AI-powered theme generation, a comprehensive component library for previews, and user management features for saving and sharing custom themes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router (Webpack-based, Turbopack disabled for Replit compatibility)
- **State Management**: Zustand for global state with persistence via IndexedDB
- **Styling**: Tailwind CSS v4 with custom CSS variables for theme tokens
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Type Safety**: TypeScript with strict configuration
- **Real-time Updates**: Custom theme application system that updates CSS variables dynamically

### Backend Architecture
- **Runtime**: Next.js API routes with Server Actions
- **Authentication**: Better Auth with social providers (Google, GitHub)
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Theme Storage**: JSON-based theme styles with validation schemas using Zod
- **AI Integration**: Google Generative AI (Gemini 2.5 Pro) for theme generation
- **File Handling**: Image upload and processing for AI prompt enhancement

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless
- **Schema**: User accounts, sessions, themes, AI usage tracking, and subscription management
- **Client Storage**: IndexedDB for offline state persistence and draft storage
- **Static Assets**: Theme registry files stored in public directory

### Authentication and Authorization
- **Provider**: Better Auth with Drizzle adapter
- **Social Login**: Google and GitHub OAuth integration
- **Session Management**: Secure token-based sessions with database storage
- **Route Protection**: Middleware-based authentication for protected routes
- **Access Control**: Subscription-based feature gating for premium functionality

### External Dependencies

#### Third-party Services
- **Neon Database**: PostgreSQL hosting and serverless database access
- **Polar**: Subscription management and checkout processing
- **PostHog**: Analytics and user behavior tracking
- **Google Fonts API**: Dynamic font loading for typography customization
- **Vercel**: Hosting and deployment platform

#### APIs and Integrations
- **Google Generative AI**: Theme generation from text and image prompts
- **GitHub API**: Repository information and star counts
- **Polar Checkout**: Payment processing and subscription management
- **Google Fonts**: Font family search and loading

#### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **SWR**: Data fetching and caching for GitHub API
- **React Query**: Server state management and caching
- **Motion**: Animation library for smooth transitions
- **Nuqs**: URL state management for theme presets and navigation