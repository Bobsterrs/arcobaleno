import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not defined');
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }

    // MailerLite API v2 (new)
    // https://developers.mailerlite.com/docs/subscribers.html#create-upsert-subscriber
    console.log('Subscribing email:', email, 'to MailerLite');
    
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name || '',
        },
        groups: ['183714267474691628'], // Updated to 'Clienti' group ID
        status: 'active',
      }),
    });

    let responseData;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      console.error('MailerLite Error Response:', {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      });
      return NextResponse.json(
        { error: 'Failed to subscribe', details: responseData },
        { status: response.status }
      );
    }

    console.log('MailerLite Success:', responseData);
    return NextResponse.json(
      { message: 'Success', data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Newsletter API Exception:', error.message);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
