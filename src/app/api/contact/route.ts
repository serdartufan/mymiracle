import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { resendRecipientEmail } from '@/data/content';
import { checkRateLimit } from '@/lib/rate-limit';

const GESLACHT_WHITELIST = ['Vrouw', 'Man'];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  const { allowed, retryAfter } = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

  if (!allowed) {
    return NextResponse.json(
      { error: 'Te veel verzoeken. Probeer het later opnieuw.' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } },
    );
  }

  try {
    const body = await request.json();
    const { geslacht, voornaam, achternaam, telefoonnummer, email, geboortedatum, toelichting, website } = body;

    if (website) {
      console.log('[honeypot] Bot geblokkeerd, IP:', ip);
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!geslacht || !voornaam || !achternaam || !telefoonnummer || !email || !geboortedatum) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 });
    }

    if (!GESLACHT_WHITELIST.includes(geslacht)) {
      return NextResponse.json({ error: 'Ongeldig geslacht.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres.' }, { status: 400 });
    }

    if (voornaam.length > 100 || achternaam.length > 100) {
      return NextResponse.json({ error: 'Naam te lang.' }, { status: 400 });
    }

    if (telefoonnummer.length > 20 || !/^[0-9+\-\s()]+$/.test(telefoonnummer)) {
      return NextResponse.json({ error: 'Ongeldig telefoonnummer.' }, { status: 400 });
    }

    if (toelichting && toelichting.length > 2000) {
      return NextResponse.json({ error: 'Toelichting mag maximaal 2000 tekens bevatten.' }, { status: 400 });
    }

    const safe = {
      geslacht: escapeHtml(geslacht),
      voornaam: escapeHtml(voornaam),
      achternaam: escapeHtml(achternaam),
      telefoonnummer: escapeHtml(telefoonnummer),
      email: escapeHtml(email),
      geboortedatum: escapeHtml(geboortedatum),
      toelichting: toelichting ? escapeHtml(toelichting) : null,
    };

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'My Miracle <noreply@mymiracle.nl>',
      to: resendRecipientEmail,
      replyTo: safe.email,
      subject: `Nieuwe aanvraag via mymiracle.nl: ${safe.voornaam} ${safe.achternaam}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1c1c1e;">
          <div style="background: #1a0a2e; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nieuwe aanvraag via mymiracle.nl</h1>
          </div>
          <div style="background: #faf7f4; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 160px; font-size: 14px;">Geslacht</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${safe.geslacht}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Voornaam</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${safe.voornaam}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Achternaam</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${safe.achternaam}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefoonnummer</td>
                <td style="padding: 8px 0; font-size: 14px;">${safe.telefoonnummer}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">E-mailadres</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${safe.email}">${safe.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Geboortedatum</td>
                <td style="padding: 8px 0; font-size: 14px;">${safe.geboortedatum}</td>
              </tr>
            </table>
            ${safe.toelichting ? `
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px;">Toelichting:</p>
            <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${safe.toelichting}</p>
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
