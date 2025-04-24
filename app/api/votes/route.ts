import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { activityId, userId } = await request.json();
    
    // Toggle vote using transaction
    const vote = await prisma.$transaction(async (tx) => {
      const existingVote = await tx.vote.findUnique({
        where: {
          activityId_userId: {
            activityId,
            userId,
          },
        },
      });

      if (existingVote) {
        await tx.vote.delete({
          where: { id: existingVote.id },
        });
        return null;
      }

      return tx.vote.create({
        data: {
          activityId,
          userId,
        },
      });
    });

    // Get updated vote count
    const voteCount = await prisma.vote.count({
      where: { activityId },
    });

    return NextResponse.json({ 
      activityId, 
      votes: voteCount,
      hasVoted: !!vote
    });
  } catch (error) {
    console.error('Vote error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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