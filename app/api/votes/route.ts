import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// This would be replaced with a real database
let votes: Record<string, Set<string>> = {};

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
    const votes = await prisma.vote.groupBy({
      by: ['activityId'],
      _count: true,
    });

    const voteCounts = Object.fromEntries(
      votes.map(({ activityId, _count }) => [activityId, _count])
    );

    return NextResponse.json(voteCounts);
  } catch (error) {
    console.error('Get votes error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 