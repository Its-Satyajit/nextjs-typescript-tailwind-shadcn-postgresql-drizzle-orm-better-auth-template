"use client";
import { signOut } from "@/lib/auth-client";
import { AuthSignIn, AuthSignUp, Home } from "@/routes";

import Logo from "../custom/logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex h-12 items-center justify-between">
      <Home.Link>
        <Logo className="h-full w-auto py-3" />
      </Home.Link>
      <div className="flex items-center space-x-3">
        <div>
          <p>name</p>
        </div>

        <AuthSignIn.Link>
          <Button variant={"outline"}>Sign In</Button>
        </AuthSignIn.Link>
        <AuthSignUp.Link>
          <Button variant={"default"}>Sign Up</Button>
        </AuthSignUp.Link>
        <Button onClick={() => signOut()} variant={"outline"}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
