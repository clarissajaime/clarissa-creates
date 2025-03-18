'use client';

import { useState, useTransition } from 'react';
import { subscribe } from '@/app/actions/subscribe';
import { Button } from '@/components/ui/button'; // Assuming you're using shadcn/ui

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      const response = await subscribe(email);
      setMessage(response);
      setEmail('');
    });
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isPending}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? '...' : 'Subscribe'}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">
        I'll never share your email with anyone else.
      </p>
      {message && (
        <p className="text-xs mt-1">
          {message}
        </p>
      )}
    </div>
  );
}
