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
    // First test the connection
    await prisma.$queryRaw`SELECT 1`;
    console.log('Database connection successful');

    // Then try to get votes
    const votes = await prisma.vote.groupBy({
      by: ['activityId'],
      _count: {
        _all: true
      }
    });
    console.log('Retrieved votes:', votes);

    const voteCounts = Object.fromEntries(
      votes.map(v => [v.activityId, v._count._all])
    );
    console.log('Transformed votes:', voteCounts);

    return NextResponse.json(voteCounts);
  } catch (error) {
    console.error('Get votes detailed error:', error);
    return NextResponse.json({ 
      error: 'Failed to get votes', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 