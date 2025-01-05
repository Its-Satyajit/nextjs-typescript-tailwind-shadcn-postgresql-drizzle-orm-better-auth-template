import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

const TechBadge = ({ label }: { label: string }) => (
  <div className="rounded-full bg-zinc-50 px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100">
    {label}
  </div>
);

export default function Home() {
  const technologies = {
    core: ["Next.js 15", "TypeScript 5", "React 19", "Tailwind CSS 3"],
    ecosystem: ["Drizzle ORM", "React Query 5", "PostgreSQL", "Radix UI"],
    tools: ["pnpm", "ESLint 9", "Prettier 3", "Winston"],
    ui: ["Shadcn/Ui", "Simple Icons", "Lucide Icons"],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <div className="container mx-auto max-w-5xl px-4">
        <main className="pb-20 pt-32">
          {/* Hero */}
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl font-light leading-tight text-black sm:text-5xl">
              <span className="text-6xl font-semibold uppercase">
                Supercharge
              </span>{" "}
              <br />
              your next Next.js project.
            </h1>

            <p className="text-lg leading-relaxed text-zinc-500">
              Unlock the potential of a cutting-edge Next.js template, equipped
              with seamless authentication, robust database integration, and
              advanced tooling. Empowering developers of all levels to build
              scalable web applications with speed and precision.
            </p>

            {/* Primary actions */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="https://github.com/new?template_name=nextjs-template&template_owner=Its-Satyajit">
                <Button className="w-full rounded-full bg-black px-8 text-white hover:bg-zinc-800 sm:w-auto">
                  Get started
                </Button>
              </Link>
              <Link href="https://github.com/Its-Satyajit/nextjs-template">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-zinc-200 px-8 text-zinc-600 hover:bg-zinc-50 sm:w-auto"
                >
                  <SiGithub className="mr-2 h-4 w-4" />
                  View source
                </Button>
              </Link>
            </div>
          </div>

          {/* Technology sections */}
          <div className="mt-32 space-y-20">
            {Object.entries(technologies).map(([category, techs]) => (
              <section key={category} className="space-y-6">
                <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Features */}
          <section className="mt-32">
            <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-zinc-400">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Authentication",
                  description:
                    "Complete auth flow with email verification and role-based access",
                },
                {
                  title: "Database Integration",
                  description:
                    "Type-safe operations with Drizzle ORM and PostgreSQL",
                },
                {
                  title: "Development Tools",
                  description:
                    "ESLint, Prettier, and TypeScript for robust development",
                },
                {
                  title: "UI Components",
                  description:
                    "Accessible components with Radix UI & Shadcn/UI",
                },
                {
                  title: "API Integration",
                  description: "Built-in API routes and middleware support",
                },
                {
                  title: "Performance",
                  description: "Optimized builds and automatic code splitting",
                },
              ].map((feature) => (
                <div key={feature.title} className="space-y-2">
                  <h3 className="font-medium text-black">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
