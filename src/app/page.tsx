"use client";

import { signIn, signOut, signUp, useSession } from "@/lib/auth-client";

export default function Home() {
  const { data, error, isPending } = useSession();
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={async () => {
          await signIn.email({
            email: "satyajit.bhatt@gmail.com",
            password: "12345678",
            callbackURL: "/",
          });
        }}
      >
        signin
      </button>

      <button
        onClick={async () => {
          await signUp.email({
            email: "satyajit.bhatt@gmail.com",
            password: "12345678",
            name: "Satyajit",
            image: "https://example.com/image.png",
          });
        }}
      >
        signup
      </button>

      <button
        onClick={async () => {
          await signOut();
        }}
      >
        signOut
      </button>

      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Data: {data.user.email}</div>}
      {data && <div>ip: {data?.session.ipAddress}</div>}
      {data && (
        <div>
          data: <code>{JSON.stringify(data)}</code>
        </div>
      )}
    </div>
  );
}
