import type { Metadata } from 'next';
import Breadcrumbs from '../../components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de MoiLab. Conoce cómo protegemos y manejamos tu información personal.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://moilab.com/privacy-policy',
  },
};

const PrivacyPolicyPage = () => {
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Política de Privacidad', href: '/privacy-policy' },
  ];

  return (
    <article className='max-w-4xl mx-auto py-16 px-5 sm:px-10'>
      <Breadcrumbs items={breadcrumbItems} />
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          Política de Privacidad
        </h1>
        <p className='text-gray-300'>
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </header>

      <div className='prose prose-invert max-w-none'>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            1. Información que recopilamos
          </h2>
          <p className='text-gray-300 mb-4'>
            Recopilamos información que nos proporcionas directamente, como
            cuando te contactas con nosotros a través de nuestro formulario de
            contacto o cuando solicitas nuestros servicios.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            2. Cómo utilizamos tu información
          </h2>
          <p className='text-gray-300 mb-4'>
            Utilizamos la información recopilada para responder a tus consultas,
            proporcionar nuestros servicios y mejorar la experiencia en nuestro
            sitio web.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            3. Protección de datos
          </h2>
          <p className='text-gray-300 mb-4'>
            Implementamos medidas de seguridad apropiadas para proteger tu
            información personal contra acceso no autorizado, alteración,
            divulgación o destrucción.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            4. Contacto
          </h2>
          <p className='text-gray-300 mb-4'>
            Si tienes preguntas sobre esta política de privacidad, puedes
            contactarnos a través de nuestro formulario de contacto.
          </p>
        </section>
      </div>
    </article>
  );
};

export default PrivacyPolicyPage;
