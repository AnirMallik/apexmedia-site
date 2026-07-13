import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        message,
      },
    });

    return Response.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return Response.json(
      { error: 'Failed to create submission' },
      { status: 500 }
    );
  }
}
