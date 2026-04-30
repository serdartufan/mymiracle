import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { resendRecipientEmail } from '@/data/content';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, email, telefoon, behandeling, bericht } = body;

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres.' }, { status: 400 });
    }

    // TODO: Set RESEND_API_KEY in .env.local before go-live
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'My Miracle <noreply@mymiracle.be>',
      to: resendRecipientEmail,
      replyTo: email,
      subject: `Nieuw contactformulier — ${naam}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1c1c1e;">
          <div style="background: #1a0a2e; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nieuw bericht via My Miracle</h1>
          </div>
          <div style="background: #faf7f4; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px; font-size: 14px;">Naam</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${naam}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">E-mail</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${telefoon ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefoon</td><td style="padding: 8px 0; font-size: 14px;">${telefoon}</td></tr>` : ''}
              ${behandeling ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Interesse in</td><td style="padding: 8px 0; font-size: 14px;">${behandeling}</td></tr>` : ''}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px;">Bericht:</p>
            <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${bericht}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Er is iets misgegaan.' }, { status: 500 });
  }
}
