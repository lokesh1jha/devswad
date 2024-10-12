'use client'

import { useState } from "react";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInAction } from "../../actions";

export default function SignUp({ searchParams }: { searchParams: Message }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      event.preventDefault();
      setErrorMessage("Passwords do not match.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium mb-4">Sign up</h1>
        <p className="text-sm text-foreground mb-6">
          Already have an account?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-in">
            Sign In
          </Link>
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              name="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <SubmitButton pendingText="Signing Up..." formAction={signInAction}>
            Sign up
          </SubmitButton>
          
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
