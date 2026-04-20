import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'MoiLab - Desarrollo de Software y Aplicaciones Web';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          }}
        />
        {/* Glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            position: 'relative',
            zIndex: 10,
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          {/* Logo / brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
              fontSize: 36,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            M
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            MoiLab
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
              borderRadius: 2,
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: 26,
              color: '#9ca3af',
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Desarrollo de Software y Aplicaciones Web
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 20,
              color: '#60a5fa',
              marginTop: 8,
            }}
          >
            moilab.es
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
