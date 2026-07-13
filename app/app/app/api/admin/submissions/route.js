import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export async function GET(request) {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return Response.json(submissions, { status: 200 });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return Response.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
