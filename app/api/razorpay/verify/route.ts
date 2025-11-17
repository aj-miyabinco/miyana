import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = await request.json();
  const secret = process.env.RAZORPAY_KEY_SECRET || '';
  const payload = `${razorpayOrderId}|${razorpayPaymentId}`;
  const expectedSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  const valid = expectedSignature === razorpaySignature;
  return NextResponse.json({ valid, note: 'Signature validation placeholder' });
}
