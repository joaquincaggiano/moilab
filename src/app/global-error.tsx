'use client';

export default function GlobalError({
  error,
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
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          color: '#fff',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <p
          style={{
            marginBottom: '8px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#60a5fa',
          }}
        >
          Error inesperado
        </p>
        <h1
          style={{
            marginBottom: '16px',
            fontSize: '32px',
            fontWeight: 700,
          }}
        >
          Algo salió mal
        </h1>
        <p
          style={{
            marginBottom: '32px',
            maxWidth: '400px',
            color: '#9ca3af',
            lineHeight: 1.6,
          }}
        >
          Ocurrió un error crítico. Puedes intentar recargar la página.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: '12px 28px',
            borderRadius: '9999px',
            border: '1px solid #374151',
            background: 'transparent',
            color: '#fff',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
