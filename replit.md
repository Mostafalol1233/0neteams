# ONE TEAM Soft Skills Program

## Overview

ONE TEAM is a comprehensive soft skills mastery program designed to empower individuals through practical training in essential life and work skills. The project is a modern web application featuring a landing page for a 7-session intensive program that covers communication, leadership, time management, and professional development. The application supports both English and Arabic languages with automatic dark/light theme switching based on time of day.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using **React 18** with **TypeScript** for type safety. The architecture follows a component-based approach with:

- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and data fetching
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable UI components
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming

### Component Structure
Components are organized into logical groups:
- **UI Components**: Reusable design system components in `/components/ui/`
- **Feature Components**: Business logic components like `HeroSection`, `ProgramOverview`, `Navigation`
- **Provider Components**: Context providers for theme, language, and other global state

### Backend Architecture
The server uses **Express.js** with TypeScript in ESM format:

- **Modular routing** system with routes defined in `server/routes.ts`
- **Storage abstraction layer** with an interface-based approach allowing for easy database switching
- **Development/Production environment handling** with Vite integration in development
- **Middleware setup** for JSON parsing, CORS, and request logging

### State Management
The application uses multiple state management approaches:
- **React Context** for global state (theme, language)
- **TanStack Query** for server state and caching
- **Local component state** for UI interactions

### Internationalization
Custom internationalization system supporting English and Arabic:
- **Language switching** with automatic RTL/LTR direction handling
- **Font switching** between Inter (Latin) and Noto Sans Arabic
- **Translation keys** centralized in `/lib/translations.ts`

### Theming System
Automatic theme switching based on time of day:
- **CSS custom properties** for color theming
- **Dark/light mode** automatically applied between 6 PM - 6 AM (dark) and 6 AM - 6 PM (light)
- **Tailwind integration** with theme-aware utilities

### Database Layer
The application is prepared for database integration:
- **Drizzle ORM** configured for PostgreSQL
- **Schema definition** in `shared/schema.ts` for user management
- **Migration system** set up with Drizzle Kit
- **Memory storage fallback** for development without database

### Build System
Modern build configuration:
- **TypeScript** with strict mode and path aliases
- **ESM modules** throughout the application
- **Vite** for frontend bundling with React plugin
- **esbuild** for server-side bundling in production

## External Dependencies

### Database Services
- **Neon Database** (@neondatabase/serverless) - Serverless PostgreSQL database
- **Drizzle ORM** - Type-safe SQL query builder and migration tool
- **PostgreSQL** - Primary database (configured but not required for basic functionality)

### UI and Styling
- **Radix UI** - Comprehensive set of accessible, unstyled UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Embla Carousel** - Modern carousel library
- **Lucide React** - Icon library
- **Font Awesome** - Additional icon library for social media icons

### Development Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Static type checking
- **PostCSS** with Autoprefixer - CSS processing
- **Replit integration** - Development environment plugins and error handling

### External Services
- **Google Forms** - Registration form integration (https://forms.gle/hZqWiy8GRXdG1jMy8)
- **Social Media Platforms** - Facebook and Instagram integration for marketing
- **Google Fonts** - Inter and Noto Sans Arabic font families

### Runtime Dependencies
- **React Query** - Server state management
- **React Hook Form** with Zod validation - Form handling and validation
- **Date-fns** - Date manipulation utilities
- **Nanoid** - Unique ID generation
- **Connect PG Simple** - PostgreSQL session store (configured but not actively used)