import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req) {
    try {
        const { firstName, lastName, bio, imageUrl } = await req.json();

        // Here you would handle the form submission, e.g., save to a database
        // For demonstration purposes, we'll just log the received data
        console.log({ firstName, lastName, bio, imageUrl });

        return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}
