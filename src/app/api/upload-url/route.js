import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function OPTIONS() {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
    };
    return new Response(null, { headers });
}

export async function POST(request) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
    };

    try {
        const body = await request.json();
        const response = await fetch('https://hook.eu2.make.com/7qjlk5e4prz3dk3nlxwxlf9373yr80sl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        let data;
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        return NextResponse.json({ data }, { headers });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500, headers });
    }
}
