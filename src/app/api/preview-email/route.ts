import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import { ContactEmail } from '@/emails/ContactEmail';

export async function GET() {
  // Datos de ejemplo para previsualizar
  const html = await render(
    ContactEmail({
      fullName: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      message:
        'Hola, me gustaría saber más sobre sus servicios de desarrollo web.\n\nEstoy interesado en crear una aplicación moderna y necesito un equipo experto.',
    }),
    {
      pretty: true,
    }
  );

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
