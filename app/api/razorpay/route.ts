import { NextResponse } from 'next/server';

export async function POST() {
  const key = process.env.RAZORPAY_KEY_ID;
  if (!key) {
    return NextResponse.json({ error: 'Missing Razorpay keys' }, { status: 500 });
  }
  return NextResponse.json({ orderId: 'placeholder-order', key, note: 'Create order via Razorpay Orders API' });
}
