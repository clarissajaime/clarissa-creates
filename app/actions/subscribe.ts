'use server';

// OUTDATED, NOT CURRENTLY IN USE

import { query } from '@/lib/db';

export async function subscribe(email: string | string[]) {
  if (!email || !email.includes('@')) {
    return 'Please enter a valid email address';
  }

  try {
    await query('INSERT INTO subscribers (email) VALUES ($1)', [email]);
    return 'Thanks for subscribing!';
  } catch (err) {
    console.error(err);
    return 'Something went wrong!';
  }
}
