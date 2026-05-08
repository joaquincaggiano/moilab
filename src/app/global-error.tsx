'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='es'>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: '#000',
          color: '#fff',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '24px',
          gap: '16px',
        }}
      >
        <p style={{ color: '#60a5fa', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>
          Error crítico
        </p>
        <h1 style={{ fontSize: '36px', fontWeight: 700, margin: 0 }}>
          Algo salió mal
        </h1>
        <p style={{ color: '#9ca3af', maxWidth: '380px', lineHeight: 1.6, margin: 0 }}>
          Ocurrió un error crítico. Podés intentar recargar la página.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 28px',
              borderRadius: '9999px',
              border: '1px solid #4b5563',
              background: 'transparent',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Reintentar
          </button>
          <a
            href='/'
            style={{
              padding: '12px 28px',
              borderRadius: '9999px',
              border: 'none',
              background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
              color: '#fff',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Volver al inicio
          </a>
        </div>
      </body>
    </html>
  );
}
