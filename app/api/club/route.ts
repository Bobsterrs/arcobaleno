import { NextResponse } from 'next/server';
import { MAILERLITE_API_KEY as INTERNAL_API_KEY } from './config';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;
    
    console.log('Newsletter Form Data Received:', { email, name });

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Ultra-Robust environment variable loading
    let apiKey = process.env.MAILERLITE_API_KEY || INTERNAL_API_KEY;

    if (!apiKey) {
      console.error('CRITICAL: MAILERLITE_API_KEY is still not defined even with internal config');
      const now = new Date().toLocaleTimeString();
      return NextResponse.json(
        { error: 'Internal server error', details: `API configuration missing [debug: ${now}]` },
        { status: 500 }
      );
    }

    // MailerLite API v2 (new)
    // https://developers.mailerlite.com/docs/subscribers.html#create-upsert-subscriber
    console.log('Attempting to subscribe:', email, 'to Group 183714267474691628');
    
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email.trim(),
        fields: {
          name: name ? name.trim() : '',
        },
        groups: ['183714267474691628'], // Clienti group
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
        { error: 'MailerLite API Error', details: responseData },
        { status: 422 } // Usually validation issues
      );
    }

    console.log('MailerLite Success:', responseData);
    return NextResponse.json(
      { message: 'Success', data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Newsletter API Exception:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
