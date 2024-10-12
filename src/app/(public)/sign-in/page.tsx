import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInAction } from "../../actions";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-medium mb-4">Sign in</h1>
        <p className="text-sm text-foreground mb-6">
          Don&apos;t have an account?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required className="mt-1" />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                className="text-xs text-foreground underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              required
              className="mt-1"
            />
          </div>
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
