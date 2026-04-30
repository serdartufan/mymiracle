import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { resendRecipientEmail } from '@/data/content';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { geslacht, voornaam, achternaam, telefoonnummer, email, geboortedatum, toelichting } = body;

    if (!geslacht || !voornaam || !achternaam || !telefoonnummer || !email || !geboortedatum) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres.' }, { status: 400 });
    }

    // TODO: Set RESEND_API_KEY in .env.local before go-live
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'My Miracle <noreply@mymiracle.nl>',
      to: resendRecipientEmail,
      replyTo: email,
      subject: `Nieuwe aanvraag via mymiracle.nl — ${voornaam} ${achternaam}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1c1c1e;">
          <div style="background: #1a0a2e; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nieuwe aanvraag via mymiracle.nl</h1>
          </div>
          <div style="background: #faf7f4; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 160px; font-size: 14px;">Geslacht</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${geslacht}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Voornaam</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${voornaam}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Achternaam</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${achternaam}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefoonnummer</td>
                <td style="padding: 8px 0; font-size: 14px;">${telefoonnummer}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">E-mailadres</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Geboortedatum</td>
                <td style="padding: 8px 0; font-size: 14px;">${geboortedatum}</td>
              </tr>
            </table>
            ${toelichting ? `
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px;">Toelichting:</p>
            <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${toelichting}</p>
            ` : ''}
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
