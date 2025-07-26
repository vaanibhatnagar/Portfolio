# Portfolio Website - Engineering to UX Design

## Overview

This is a modern, full-stack portfolio website showcasing the career transition from mechanical engineering to UX design. The application features a clean, professional design with interactive components, a contact form system, and responsive layout optimized for both desktop and mobile viewing. The site includes comprehensive accessibility features with WCAG 2.1 AA compliance, full dark mode support, and enhanced user experience for all abilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api` prefix
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Session Management**: Prepared for PostgreSQL session storage with connect-pg-simple

### Build and Development
- **Development**: Hot module replacement with Vite dev server
- **Production**: Static asset serving with Express
- **Bundling**: esbuild for server-side code bundling
- **TypeScript**: Strict mode enabled with path mapping for clean imports

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons and social links
- **About Section**: Career transition story with skills breakdown
- **Portfolio Section**: Filterable project gallery with categories (UX, Engineering, Product)
- **Resume Section**: Experience timeline, education, and skills visualization
- **Contact Section**: Form with real-time validation and submission handling
- **Footer**: Social media links and copyright information

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted interface supporting both in-memory and database storage
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Request logging with response time tracking

### Shared Schema
- **Database Schema**: Drizzle schema definitions for contacts table
- **Validation**: Zod schemas for type-safe data validation
- **Types**: Shared TypeScript interfaces between client and server

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with validation
   - Form data validated client-side with Zod
   - POST request to `/api/contacts` endpoint
   - Server validates data and stores in memory/database
   - Success/error feedback displayed to user

2. **Navigation**:
   - Smooth scrolling navigation between sections
   - Active section highlighting based on scroll position
   - Mobile-responsive hamburger menu

3. **Portfolio Filtering**:
   - Client-side filtering of projects by category
   - Dynamic UI updates without server requests

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (Dribbble, Twitter)

### Data and State Management
- **TanStack Query**: Server state caching and synchronization
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation

### Database and ORM
- **Drizzle ORM**: Type-safe SQL toolkit
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool with HMR
- **esbuild**: Fast JavaScript bundler
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API
- **Hot Reloading**: Full-stack development with automatic refresh
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Replit Integration**: Special handling for Replit development environment

### Production Build
- **Frontend**: Static assets built to `dist/public`
- **Backend**: Server code bundled to `dist/index.js`
- **Asset Serving**: Express serves static files in production
- **Database**: Ready for PostgreSQL deployment with Drizzle migrations

### Database Setup
- **Schema Management**: Drizzle Kit for migrations in `./migrations`
- **Connection**: PostgreSQL via environment variable
- **Fallback**: In-memory storage for development without database

The application is structured to easily transition from development with in-memory storage to production with PostgreSQL database, requiring only environment variable configuration and running database migrations.