import { NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/indexnow';

export async function POST() {
  const result = await pingIndexNow();

  if (!result.ok) {
    return NextResponse.json(
      { success: false, status: result.status, error: result.error },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, status: result.status });
}
