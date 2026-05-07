import { NextResponse } from 'next/server';
import { signToken, comparePassword } from '@/lib/auth';

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || ''; // Needs to be generated and added to .env

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!ADMIN_PASSWORD_HASH) {
      // For initial setup if no hash is provided, allow a default (INSECURE - for setup only)
      if (password === '281106') {
        const token = signToken({ role: 'admin' });
        const response = NextResponse.json({ success: true });
        response.cookies.set('admin_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 86400, // 1 day
        });
        return response;
      }
    }

    const isValid = await comparePassword(password, ADMIN_PASSWORD_HASH);

    if (isValid) {
      const token = signToken({ role: 'admin' });
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 86400,
      });
      return response;
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
