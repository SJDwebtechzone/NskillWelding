import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, whatsapp, email, interest, experience, message, source_page } = body || {};

    const fields = {};
    if (!full_name || !full_name.trim()) {
      fields.full_name = 'Please provide your full name.';
    }
    if (!whatsapp || !whatsapp.trim()) {
      fields.whatsapp = 'Please provide a valid WhatsApp/Phone number.';
    }

    if (Object.keys(fields).length > 0) {
      return NextResponse.json(
        { error: 'Please fill in required fields.', fields },
        { status: 400 }
      );
    }

    // Console logging for server logs / lead capture
    console.log('[NIW Lead Captured]:', {
      timestamp: new Date().toISOString(),
      full_name,
      whatsapp,
      email: email || 'N/A',
      interest: interest || 'General Enquiry',
      experience: experience || 'N/A',
      message: message || 'N/A',
      source_page: source_page || '/contact',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been registered. Our technical admissions officer will call or WhatsApp you within 2 hours.',
    });
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please call us directly at +91 81100 00330.' },
      { status: 500 }
    );
  }
}
