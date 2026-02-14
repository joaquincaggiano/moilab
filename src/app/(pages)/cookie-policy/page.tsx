import Breadcrumbs from '@/app/components/seo/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Política de cookies de MoiLab. Información sobre las cookies que utilizamos y cómo gestionarlas.',
};

const CookiePolicyPage = () => {
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Política de Cookies', href: '/cookie-policy' },
  ];

  return (
    <article className='max-w-4xl mx-auto py-16 px-5 sm:px-10'>
      <Breadcrumbs items={breadcrumbItems} />
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          Política de Cookies
        </h1>
        <p className='text-gray-300'>
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </header>

      <div className='prose prose-invert max-w-none'>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            1. ¿Qué son las Cookies?
          </h2>
          <p className='text-gray-300 mb-4'>
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo (ordenador, tablet, smartphone) cuando visitas un sitio
            web. Permiten que el sitio web reconozca tu dispositivo y recuerde
            información sobre tu visita, como tus preferencias y patrones de
            navegación.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            2. ¿Qué Cookies Utilizamos?
          </h2>
          <p className='text-gray-300 mb-4'>
            En este sitio web utilizamos únicamente cookies de análisis
            proporcionadas por Vercel Analytics para mejorar la experiencia del
            usuario y comprender cómo se utiliza nuestro sitio web.
          </p>

          <h3 className='text-xl font-semibold text-white mb-3 mt-6'>
            Cookies de Análisis (Vercel Analytics)
          </h3>
          <div className='bg-gray-800/50 p-4 rounded-lg mb-4'>
            <table className='w-full text-gray-300 text-sm'>
              <tbody>
                <tr className='border-b border-gray-700'>
                  <td className='py-2 pr-4 font-semibold'>Proveedor:</td>
                  <td className='py-2'>Vercel Inc.</td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='py-2 pr-4 font-semibold'>Finalidad:</td>
                  <td className='py-2'>
                    Recopilar estadísticas anónimas sobre cómo los visitantes
                    usan nuestro sitio web (páginas visitadas, tiempo de
                    permanencia, origen del tráfico, etc.)
                  </td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='py-2 pr-4 font-semibold'>Tipo:</td>
                  <td className='py-2'>Cookie de análisis (terceros)</td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='py-2 pr-4 font-semibold'>Caducidad:</td>
                  <td className='py-2'>Hasta 24 meses</td>
                </tr>
                <tr>
                  <td className='py-2 pr-4 font-semibold'>
                    Más información:
                  </td>
                  <td className='py-2'>
                    <a
                      href='https://vercel.com/docs/analytics/privacy-policy'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-400 hover:text-blue-300 underline'
                    >
                      Política de privacidad de Vercel Analytics
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            3. Base Legal para el Uso de Cookies
          </h2>
          <p className='text-gray-300 mb-4'>
            El uso de cookies de análisis en este sitio web se basa en tu{' '}
            <strong>consentimiento explícito</strong>, solicitado mediante el
            banner de cookies que aparece en tu primera visita, de conformidad
            con:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>
                Reglamento General de Protección de Datos (RGPD - UE
                2016/679)
              </strong>
            </li>
            <li>
              <strong>
                Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y de Comercio Electrónico (LSSI-CE)
              </strong>
            </li>
            <li>
              <strong>
                Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
                Personales y garantía de los derechos digitales (LOPDGDD)
              </strong>
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            4. ¿Cómo Gestionar y Eliminar Cookies?
          </h2>
          <p className='text-gray-300 mb-4'>
            Tienes derecho a decidir si aceptas o rechazas las cookies. Puedes
            ejercer tus preferencias de cookies a través de:
          </p>

          <h3 className='text-xl font-semibold text-white mb-3 mt-6'>
            Banner de Consentimiento
          </h3>
          <p className='text-gray-300 mb-4'>
            Cuando visitas nuestro sitio web por primera vez, te mostramos un
            banner de cookies donde puedes aceptar o rechazar el uso de cookies
            de análisis.
          </p>

          <h3 className='text-xl font-semibold text-white mb-3 mt-6'>
            Configuración del Navegador
          </h3>
          <p className='text-gray-300 mb-4'>
            Puedes configurar tu navegador para aceptar, rechazar o eliminar
            cookies. A continuación te indicamos cómo hacerlo en los principales
            navegadores:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <a
                href='https://support.google.com/chrome/answer/95647'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href='https://support.apple.com/es-es/guide/safari/sfri11471/mac'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                Safari (macOS)
              </a>
            </li>
            <li>
              <a
                href='https://support.apple.com/es-es/HT201265'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                Safari (iOS)
              </a>
            </li>
            <li>
              <a
                href='https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p className='text-gray-300 mb-4'>
            Ten en cuenta que si bloqueas o eliminas las cookies, es posible que
            algunas funcionalidades del sitio web no funcionen correctamente.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            5. Cookies de Terceros
          </h2>
          <p className='text-gray-300 mb-4'>
            Las cookies de Vercel Analytics son gestionadas por un tercero
            (Vercel Inc.). No tenemos control sobre estas cookies. Para más
            información sobre cómo Vercel utiliza las cookies, consulta su{' '}
            <a
              href='https://vercel.com/docs/analytics/privacy-policy'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:text-blue-300 underline'
            >
              Política de Privacidad
            </a>
            .
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            6. Transferencias Internacionales de Datos
          </h2>
          <p className='text-gray-300 mb-4'>
            Vercel Analytics puede realizar transferencias internacionales de
            datos a Estados Unidos. Estas transferencias se realizan bajo las
            garantías adecuadas establecidas en el RGPD, como las Cláusulas
            Contractuales Tipo de la Comisión Europea.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            7. Actualizaciones de esta Política
          </h2>
          <p className='text-gray-300 mb-4'>
            Podemos actualizar esta Política de Cookies periódicamente para
            reflejar cambios en las cookies que utilizamos o por otros motivos
            operativos, legales o reglamentarios. Te recomendamos revisar esta
            página regularmente para estar informado de cualquier cambio.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            8. Más Información
          </h2>
          <p className='text-gray-300 mb-4'>
            Para más información sobre cómo tratamos tus datos personales,
            consulta nuestra{' '}
            <a
              href='/privacy-policy'
              className='text-blue-400 hover:text-blue-300 underline'
            >
              Política de Privacidad
            </a>
            .
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            9. Contacto
          </h2>
          <p className='text-gray-300 mb-4'>
            Si tienes preguntas sobre esta Política de Cookies o sobre el uso de
            cookies en nuestro sitio web, puedes contactarnos en:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>Email: moilab.web@gmail.com</li>
            <li>A través de nuestro formulario de contacto</li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default CookiePolicyPage;
