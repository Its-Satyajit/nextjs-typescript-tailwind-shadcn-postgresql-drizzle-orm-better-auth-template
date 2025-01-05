# Next.js Template Documentation

## Overview
This Next.js template provides a comprehensive foundation for building efficient, scalable, and modern web applications. It integrates powerful technologies such as Next.js, TypeScript, React, and Tailwind CSS to ensure high performance, developer productivity, and ease of maintenance.

## Table of Contents
- [Core Technologies](#core-technologies)
- [Key Packages & Integrations](#key-packages-integrations)
- [Development Tools](#development-tools)
- [Testing and Code Quality](#testing-and-code-quality)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Available Scripts](#available-scripts)
- [Configuration Files](#configuration-files)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Support and Community](#support-and-community)
- [License](#license)

## Core Technologies

- **[Next.js](https://nextjs.org/)**: A leading React framework for building fast and optimized web applications with features such as server-side rendering (SSR) and static site generation (SSG).
- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript that provides better tooling, error-checking, and maintainability.
- **[React](https://reactjs.org/)**: A popular JavaScript library for building interactive user interfaces, known for its performance and component-based architecture.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that simplifies responsive design and helps create modern, custom user interfaces.

## Key Packages & Integrations

- **[Drizzle ORM](https://orm.drizzle.team)**: A modern, type-safe Object-Relational Mapping (ORM) library for managing database interactions seamlessly.
- **[React Query](https://tanstack.com/query)**: A library for fetching, caching, and synchronizing server data in React applications.
- **[PostgreSQL](https://www.postgresql.org/)**: An advanced, open-source relational database system that ensures data integrity and scalability.

## Development Tools

- **[pnpm](https://pnpm.io/)**: A fast, disk-space-efficient package manager for JavaScript and TypeScript projects.
- **[ESLint](https://eslint.org/)**: A widely-used linting tool for identifying and fixing issues in JavaScript and TypeScript code.
- **[Prettier](https://prettier.io/)**: A code formatter that helps maintain code style consistency and improves readability.

---
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=database&logoColor=black)](https://orm.drizzle.team)[![React Query](https://img.shields.io/badge/React_Query_5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query)[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white)](https://www.radix-ui.com/)[![Better Auth](https://img.shields.io/badge/Better_Auth-5E35CA?style=for-the-badge&logo=better_auth0&logoColor=white)](https://www.better-auth.com/)[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white)](https://ui.shadcn.com/)[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)[![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)[![Prettier](https://img.shields.io/badge/Prettier_3-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)[![Winston](https://img.shields.io/badge/Winston_3-231F20?style=for-the-badge&logo=winston&logoColor=white)](https://github.com/winstonjs/winston)[![React Compiler](https://img.shields.io/badge/React_Compiler_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://www.npmjs.com/package/babel-plugin-react-compiler)[![TypeScript](https://img.shields.io/badge/Strict_TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)[![Zod](https://img.shields.io/badge/Zod_3-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

---

## Project Setup

### Prerequisites

Before getting started, make sure that you have the following tools installed on your system:

- **Node.js 20+**
- **pnpm 9+**
- **PostgreSQL 16+**

### Installation Instructions

Follow these steps to set up the project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nextjs-template.git
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure environment variables**  
   Follow the detailed instructions in the [Environment Variables](#environment-variables) section.

4. **Initialize the database:**
   ```bash
   pnpm db:push
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```
Your application will be available at `http://localhost:3000`.

## Project Structure

```bash
nextjs-template/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (auth)/           # Authentication routes
│   │   ├── (dashboard)/      # Protected dashboard routes
│   │   └── api/              # API routes
│   ├── components/           # React components
│   │   ├── custom/           # Custom components
│   │   ├── providers/        # React providers
│   │   ├── section/          # Layout sections
│   │   └── ui/               # UI components
│   ├── server/               # Server-side code
│   │   ├── Actions/          # Server actions
│   │   └── db/               # Database schemas
│   ├── lib/                  # Utility functions
│   └── styles/               # Global styles
└── [configuration files]     # Various config files
```

## Key Features

### 🔐 Authentication & Authorization
- Complete authentication flow with Better Auth
- Email verification system
- Password reset functionality
- Role-based access control (Admin/User)
- Protected routes with middleware

### 💾 Database Integration
- Type-safe database operations with Drizzle ORM
- PostgreSQL support
- Automatic migration management
- Database schema versioning
- Visual database management studio

### 🎨 UI Components
- Accessible components with Radix UI & Shadcn/Ui
- Responsive design with Tailwind CSS
- Dark mode support
- Toast notifications
- Form validation with React Hook Form and Zod

### 🔧 Development Features
- Type-safe development with TypeScript
- Fast refresh with Next.js
- Code formatting with Prettier
- Linting with ESLint
- Logging with Winston
- Declarative routing system

## Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm dev:turbo       # Start with Turbo
pnpm dr:build:watch  # Watch routing changes

# Database
pnpm db:generate     # Generate schemas
pnpm db:push        # Push schema changes
pnpm db:studio      # Open database UI

# Quality Assurance
pnpm check          # Run all checks
pnpm lint:fix       # Fix lint issues
pnpm format:write   # Format code
```

## Configuration

### Key Configuration Files
- `next.config.ts` - Next.js configuration
- `drizzle.config.ts` - Database configuration
- `tailwind.config.ts` - Styling configuration
- `eslint.config.mjs` - Linting rules
- `declarative-routing.config.json` - Routing configuration

### Environment Variables
```env

#Server 
NODE_ENV=development
DATABASE_URL=postgresql://postgres:password@host:5432/db
BETTER_AUTH_SECRET=secret
BETTER_AUTH_URL=http://localhost:3000
REACT_EDITOR=atom

MAIL_HOST=gmail
MAIL_USERNAME=username
MAIL_PASSWORD=password
MAIL_FROM=email@example.com
EMAIL_VERIFICATION_CALLBACK_URL=http://localhost:3000

GITHUB_CLIENT_ID=secret
GITHUB_CLIENT_SECRET=secret

#Client
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check DATABASE_URL format
   - Ensure database exists

2. **Build Errors**
   - Run `pnpm check` for type errors
   - Clear `.next` directory
   - Update dependencies

3. **Authentication Issues**
   - Verify environment variables
   - Check email configuration
   - Clear browser cookies

## Community and Support

- 📦 [GitHub Repository](https://github.com/Its-Satyajit/nextjs-template)
- 🐛 [Issue Tracker](https://github.com/Its-Satyajit/nextjs-template/issues)


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Its-Satyajit/nextjs-template/blob/main/LICENSE.md) file for details.

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
