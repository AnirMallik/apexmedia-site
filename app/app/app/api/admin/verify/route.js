export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === process.env.ADMIN_PASSWORD) {
      return Response.json({ authenticated: true }, { status: 200 });
    } else {
      return Response.json({ authenticated: false }, { status: 401 });
    }
  } catch (error) {
    console.error('Error verifying password:', error);
    return Response.json(
      { error: 'Failed to verify password' },
      { status: 500 }
    );
  }
}
