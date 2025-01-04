import { buttonVariants } from "@/components/ui/button";
import { Home } from "@/routes";

export default async function EmailVerifiedPage() {
  return (
    <div className="flex grow flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold text-green-500">
        Email Verified!
      </h1>
      <p className="mb-4 text-gray-600">
        Your email has been successfully verified.
      </p>
      <Home.Link
        className={buttonVariants({
          variant: "default",
        })}
      >
        Go to home
      </Home.Link>
    </div>
  );
}
