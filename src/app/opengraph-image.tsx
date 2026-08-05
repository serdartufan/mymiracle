import { ImageResponse } from 'next/og';

export const alt = 'My Miracle — Gecertificeerd LPG Endermologie Centrum Den Haag';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a0a2e 0%, #4a1a7a 100%)',
          color: '#faf7f4',
          fontFamily: 'sans-serif',
          padding: '80px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#d4a8b8',
            marginBottom: 28,
          }}
        >
          LPG Endermologie · Den Haag
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>My Miracle</div>
        <div
          style={{
            marginTop: 40,
            fontSize: 34,
            color: '#faf7f4',
            opacity: 0.85,
            maxWidth: 900,
          }}
        >
          Gecertificeerd centrum voor lichaam en gezicht. Niet-invasief en wetenschappelijk onderbouwd.
        </div>
      </div>
    ),
    { ...size },
  );
}
