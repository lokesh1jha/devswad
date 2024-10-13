'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { forgotPasswordAction } from '@/app/actions';
import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const result = await forgotPasswordAction(formData);
      if (result) {
        setMessage('Password reset email sent. Please check your inbox.');
        setTimeout(() => {
          router.push('/sign-in');
        }, 3000);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.log("error", error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mt-[-5%]">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Sending...' : 'Reset Password'}
            </button>
          </div>
        </form>

        {message && (
          <div className="mt-4 text-center text-sm">
            <p className={message.includes('error') ? 'text-red-600' : 'text-green-600'}>
              {message}
            </p>
          </div>
        )}

        <div className="text-center">
          <a href="/sign-in" className="text-indigo-600 hover:text-indigo-500">
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
