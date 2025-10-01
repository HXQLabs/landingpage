import { NextResponse } from 'next/server';

const GUILD_ID = '1412084732501692580';

export async function GET() {
  try {
    const response = await fetch(`https://discord.com/api/v10/invites/dQUh6SY9Uk?with_counts=true&with_expiration=true`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Discord data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Discord data' },
      { status: 500 }
    );
  }
}