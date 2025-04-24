import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    // Try to connect and run a simple query
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: 'Database connected!' });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}