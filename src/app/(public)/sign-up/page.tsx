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

  // Function to handle form submission and validate passwords
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      event.preventDefault(); // Prevent form submission
      setErrorMessage("Passwords do not match.");
    }
  };

  return (
    <form className="flex-1 flex flex-col min-w-64" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-medium">Sign up</h1>
      <p className="text-sm text-foreground">
        Already have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-in">
          Sign In
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-between items-center">
          <Label htmlFor="confirm-password">Confirm Password</Label>
        </div>
        <Input
          type="password"
          name="confirm-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Display error message if passwords don't match */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          Sign up
        </SubmitButton>
        
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
