import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('mm-indexnow-2026', {
    headers: { 'Content-Type': 'text/plain' },
  });
}
