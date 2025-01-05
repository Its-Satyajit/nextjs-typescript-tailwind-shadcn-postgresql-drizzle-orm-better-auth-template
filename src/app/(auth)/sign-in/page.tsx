"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
// import LoadingButton from "@/components/loading-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { AuthForgotPassword, Home } from "@/routes";
import { signInSchema } from "@/zod/zod";
import type { ErrorContext } from "@better-fetch/fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function SignIn() {
  const router = useRouter();

  // const [pendingCredentials, setPendingCredentials] = useState(false);
  // const [pendingGithub, setPendingGithub] = useState(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleCredentialsSignIn = async (
    values: z.infer<typeof signInSchema>,
  ) => {
    await signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onRequest: () => {
          // setPendingCredentials(true);
        },
        onSuccess: async () => {
          router.push(Home());
          router.refresh();
          toast.success("Successfully signed in!", {
            description: "You have successfully signed in!",
          });
        },
        onError: (ctx: ErrorContext) => {
          toast.error("Something went wrong!", {
            description: ctx.error.message ?? "Something went wrong.",
          });
        },
      },
    );
    // setPendingCredentials(false);
  };

  const handleSignInWithGithub = async () => {
    await signIn.social(
      {
        provider: "github",
      },
      {
        onRequest: () => {
          // setPendingGithub(true);
        },
        onSuccess: async () => {
          router.push(Home());
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          toast.error("Something went wrong!", {
            description: ctx.error.message ?? "Something went wrong.",
          });
        },
      },
    );
    // setPendingGithub(false);
  };

  return (
    <div className="flex grow items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCredentialsSignIn)}
              className="space-y-6"
            >
              {["email", "password"].map((field) => (
                <FormField
                  control={form.control}
                  key={field}
                  name={field as keyof z.infer<typeof signInSchema>}
                  render={({ field: fieldProps }) => (
                    <FormItem>
                      <FormLabel>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={field === "password" ? "password" : "email"}
                          placeholder={`Enter your ${field}`}
                          {...fieldProps}
                          autoComplete={
                            field === "password" ? "current-password" : "email"
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button className="w-full">Sign in</Button>
            </form>
          </Form>
          <div className="mt-4">
            <Button
              className="w-full"
              // pending={pendingGithub}
              onClick={handleSignInWithGithub}
            >
              <SiGithub className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            <AuthForgotPassword.Link className="text-primary hover:underline">
              Forgot password?
            </AuthForgotPassword.Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
