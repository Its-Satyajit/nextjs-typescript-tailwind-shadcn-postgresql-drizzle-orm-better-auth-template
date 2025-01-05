import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AuthSignIn } from "@/routes";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-4">
          <div className="text-center text-3xl font-bold text-gray-800">
            Welcome to Next.js Template
          </div>
          <div className="text-center text-lg text-gray-500">
            This is a Next.js template for creating a full-stack application
            with authentication, authorization, and more.
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-4">
            <Link href="https://github.com/new?template_name=nextjs-template&template_owner=Its-Satyajit">
              {" "}
              <Button className="w-full">Get Started</Button>
            </Link>
            <div className="text-center text-sm text-gray-500">or</div>
            <AuthSignIn.Link className="text-primary hover:underline">
              Sign in
            </AuthSignIn.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
