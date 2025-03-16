"use client";

import { useRouter } from "next/navigation";

import { Home } from "@/routes";

import { signOut } from "@/lib/auth/auth-client";

import { Button } from "../ui/button";

interface Props {
  className?: string;
}
export default function LogoutButton({ className }: Props) {
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() =>
        signOut({
          fetchOptions: {
            onSuccess: () => router.push(Home()),
          },
        })
      }
      variant={"outline"}
    >
      Sign Out
    </Button>
  );
}
