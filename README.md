## Next.js Template with TypeScript, Tailwind CSS, Shadcn/Ui, PostgreSQL, Drizzle ORM, and Better Auth.

### Overview
This Next.js template gives you a solid platform for creating modern, scalable, and high-performance web apps. It includes strong tools such as React, TypeScript, Tailwind CSS, Shadcn/Ui, PostgreSQL, Drizzle ORM, and Better Auth to assist developers in creating efficient, maintainable, and secure apps with ease.

### Table of Contents
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

### Core Technologies

- **[Next.js](https://nextjs.org/)**: Next.js is a powerful React framework for creating fast, SEO-friendly, and optimised online applications. It includes server-side rendering (SSR) and static site generation (SSG) by default.
- **[TypeScript](https://www.typescriptlang.org/)**: TypeScript improves JavaScript by introducing static types, enhancing tools, and detecting problems early on, making code easier to maintain.
- **[React](https://reactjs.org/)**: A popular library for creating dynamic user interfaces. React's component-based structure increases reusability and simplifies development.
- **[Tailwind CSS](https://tailwindcss.com/)**: Tailwind is a utility-first CSS framework that makes responsive design easier and speeds up the process of making current web apps that look good.
- **[Better Auth](https://www.better-auth.com//)**: This is a complete authentication solution for TypeScript that makes web apps safe and scalable.
  
### Key Packages & Integrations

- **[Drizzle ORM](https://orm.drizzle.team)**: Drizzle ORM is a modern, type-safe Object-Relational Mapping (ORM) library that makes it easier to work with databases by cutting down on repetitive code and mistakes.
- **[React Query](https://tanstack.com/query)**: A robust library for requesting, caching, and synchronising data in React, which improves efficiency and consistency.
- **[PostgreSQL](https://www.postgresql.org/)**: PostgreSQL is a cutting-edge, open-source relational database system noted for its production-grade stability, data integrity, and scalability.

### Development Tools

- **[pnpm](https://pnpm.io/)**: A fast, disk-efficient package manager for large JavaScript and TypeScript applications that speeds up installation and improves dependency management.
- **[ESLint](https://eslint.org/)**: A tool for detecting and resolving issues in JavaScript/TypeScript code, maintaining code quality and consistency.
- **[Prettier](https://prettier.io/)**: An automatic code formatter that assists developers in maintaining a consistent code style, boosting readability, and minimising formatting errors.

---
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=database&logoColor=black)](https://orm.drizzle.team)[![React Query](https://img.shields.io/badge/React_Query_5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query)[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white)](https://www.radix-ui.com/)[![Better Auth](https://img.shields.io/badge/Better_Auth-5E35CA?style=for-the-badge&logo=better_auth0&logoColor=white)](https://www.better-auth.com/)[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white)](https://ui.shadcn.com/)[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)[![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)[![Prettier](https://img.shields.io/badge/Prettier_3-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)[![Winston](https://img.shields.io/badge/Winston_3-231F20?style=for-the-badge&logo=winston&logoColor=white)](https://github.com/winstonjs/winston)[![React Compiler](https://img.shields.io/badge/React_Compiler_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://www.npmjs.com/package/babel-plugin-react-compiler)[![TypeScript](https://img.shields.io/badge/Strict_TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)[![Zod](https://img.shields.io/badge/Zod_3-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

---

### Project Setup

#### Prerequisites

Before getting started, make sure that you have the following tools installed on your system:

- **Node.js 20+**
- **pnpm 9+**
- **PostgreSQL 16+**

#### Installation Instructions

Follow these steps to set up the project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Its-Satyajit/nextjs-template.git
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

### Project Structure

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

### Key Features

#### Authentication and Authorization
- A complete **authentication flow** with **Better Auth** for secure user login and session management.
- Integrated **email verification**, **password reset**, and **role-based access control** (Admin/User).
- Middleware for route protection and limiting sensitive data access to authorised users.

#### Database Integration
- **Type-safe database interactions** with **Drizzle ORM** to prevent errors and assure efficient queries.
- Complete PostgreSQL integration, including **automatic migrations** and **schema versioning** for more efficient database management.

#### UI and Responsive Design
- Create intuitive and accessible **user interfaces** with **Radix UI** and **shadcn/ui**.
- Tailwind CSS is used to create fully **responsive** designs, with support for **dark mode** and bespoke theme management for modern web experiences.

Use the following commands to manage development, database, and quality assurance tasks:

```bash
# Development
pnpm dev              # Start the development server
pnpm dev:turbo        # Start with Turbo mode
pnpm dr:build:watch   # Watch routing changes

# Database
pnpm db:generate      # Generate database schemas
pnpm db:push          # Push schema changes to the database
pnpm db:studio        # Open the database UI

# Quality Assurance
pnpm check            # Run all checks
pnpm lint:fix         # Fix linting issues
pnpm format:write     # Format the codebase
```

### Configuration Files

Key configuration files for managing project settings:

- `next.config.ts` - Next.js configuration for routing and optimization.
- `drizzle.config.ts` - Configuration for **Drizzle ORM** and database interactions.
- `tailwind.config.ts` - Tailwind CSS setup for custom styling.
- `eslint.config.mjs` - ESLint configuration for consistent code quality.

### Environment Variables

Make sure to set the following environment variables in the `.env` file:

```env
#Server 
NODE_ENV=development
DATABASE_URL=postgresql://postgres:password@host:5432/db
BETTER_AUTH_SECRET=secret
BETTER_AUTH_URL=http://localhost:3000
REACT_EDITOR=atom

MAIL_HOST=gmail
MAIL_USERNAME=email@gmail.com
MAIL_PASSWORD=password
MAIL_FROM=email@gmail.com
EMAIL_VERIFICATION_CALLBACK_URL=http://localhost:3000

GITHUB_CLIENT_ID=secret
GITHUB_CLIENT_SECRET=secret

#Client
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

### Troubleshooting

#### Common Issues

1. **Database Connection Problems**
   - Ensure PostgreSQL is running and verify the `DATABASE_URL`.
   - Make sure the specified database exists and can be accessed.

2. **Build Failures**
   - Run `pnpm check` to detect and fix any type errors.
   - Clear the `.next` directory if the build persists with errors.
   - Make sure all dependencies are up to date.

3. **Authentication Errors**
   - Verify your environment variables, especially those related to authentication and email settings.
   - Clear browser cookies and try again if login issues occur.

### Support and Community

-  [GitHub Repository](https://github.com/Its-Satyajit/nextjs-template)
-  [Issue Tracker](https://github.com/Its-Satyajit/nextjs-template/issues)

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Its-Satyajit/nextjs-template/blob/main/LICENSE.md) file for more details.
