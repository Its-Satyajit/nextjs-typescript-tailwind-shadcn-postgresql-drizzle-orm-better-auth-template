"use client";

import { useRouter } from "next/navigation";

import { signOut } from "@/lib/auth-client";
import { Home } from "@/routes";

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
