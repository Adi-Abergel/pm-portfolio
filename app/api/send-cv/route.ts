import { NextRequest, NextResponse } from 'next/server';

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL ?? '';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  if (!MAKE_WEBHOOK_URL) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  const res = await fetch(MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to trigger automation' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
