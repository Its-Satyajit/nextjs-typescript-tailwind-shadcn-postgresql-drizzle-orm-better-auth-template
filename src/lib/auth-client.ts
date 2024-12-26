import { createAuthClient } from "better-auth/react";

import env from "@/env";

export const { signIn, signUp, useSession, signOut } = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
});
