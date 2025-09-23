import Breadcrumbs from '@/app/components/seo/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de uso de MoiLab. Conoce las condiciones para utilizar nuestros servicios.',
};

const TermsAndConditionsPage = () => {
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Términos y Condiciones', href: '/terms-and-conditions' },
  ];

  return (
    <article className='max-w-4xl mx-auto py-16 px-5 sm:px-10'>
      <Breadcrumbs items={breadcrumbItems} />
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          Términos y Condiciones
        </h1>
        <p className='text-gray-300'>
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </header>

      <div className='prose prose-invert max-w-none'>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            1. Aceptación de los términos
          </h2>
          <p className='text-gray-300 mb-4'>
            Al acceder y utilizar este sitio web, aceptas cumplir con estos
            términos y condiciones de uso.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            2. Servicios ofrecidos
          </h2>
          <p className='text-gray-300 mb-4'>
            MoiLab ofrece servicios de desarrollo de software, aplicaciones web
            y landing pages personalizadas.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            3. Propiedad intelectual
          </h2>
          <p className='text-gray-300 mb-4'>
            Todo el contenido de este sitio web, incluyendo textos, gráficos,
            logotipos y software, es propiedad de MoiLab y está protegido por
            las leyes de derechos de autor.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            4. Limitación de responsabilidad
          </h2>
          <p className='text-gray-300 mb-4'>
            MoiLab no será responsable por daños directos, indirectos,
            incidentales o consecuenciales que puedan resultar del uso de este
            sitio web.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            5. Modificaciones
          </h2>
          <p className='text-gray-300 mb-4'>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Las modificaciones entrarán en vigor inmediatamente después
            de su publicación.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            6. Contacto
          </h2>
          <p className='text-gray-300 mb-4'>
            Si tienes preguntas sobre estos términos y condiciones, puedes
            contactarnos a través de nuestro formulario de contacto.
          </p>
        </section>
      </div>
    </article>
  );
};

export default TermsAndConditionsPage;
