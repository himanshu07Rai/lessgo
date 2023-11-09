import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
  });
}
