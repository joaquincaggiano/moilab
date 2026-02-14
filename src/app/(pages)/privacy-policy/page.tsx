import Breadcrumbs from '@/app/components/seo/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de MoiLab. Conoce cómo protegemos y manejamos tu información personal.',
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
            1. Responsable del Tratamiento
          </h2>
          <p className='text-gray-300 mb-4'>
            En cumplimiento del Reglamento General de Protección de Datos (RGPD)
            y la Ley Orgánica 3/2018 de Protección de Datos Personales y
            garantía de los derechos digitales (LOPDGDD), te informamos que el
            responsable del tratamiento de tus datos personales es:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Responsable:</strong> Joaquín Serra Caggiano
            </li>
            <li>
              <strong>Nombre comercial:</strong> MoiLab
            </li>
            <li>
              <strong>NIF:</strong> Disponible bajo petición
            </li>
            <li>
              <strong>Domicilio:</strong> Valencia, España
            </li>
            <li>
              <strong>Email de contacto:</strong> moilab.web@gmail.com
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            2. Datos Personales que Recopilamos
          </h2>
          <p className='text-gray-300 mb-4'>
            Recopilamos y tratamos las siguientes categorías de datos personales:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Datos de contacto:</strong> Nombre, dirección de correo
              electrónico y mensaje que nos proporcionas a través del formulario
              de contacto.
            </li>
            <li>
              <strong>Datos de navegación:</strong> Información recopilada
              automáticamente mediante cookies y tecnologías similares, como
              dirección IP, tipo de navegador, páginas visitadas, tiempo de
              navegación y datos analíticos proporcionados por Vercel Analytics.
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            3. Finalidad y Base Legal del Tratamiento
          </h2>
          <p className='text-gray-300 mb-4'>
            Tratamos tus datos personales para las siguientes finalidades:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Gestión de consultas:</strong> Responder a tus consultas y
              solicitudes de información sobre nuestros servicios (
              <strong>Base legal:</strong> Consentimiento del interesado - Art.
              6.1.a RGPD).
            </li>
            <li>
              <strong>Mejora del sitio web:</strong> Análisis estadístico del
              uso del sitio web para mejorar la experiencia del usuario (
              <strong>Base legal:</strong> Interés legítimo - Art. 6.1.f RGPD).
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            4. Plazo de Conservación de Datos
          </h2>
          <p className='text-gray-300 mb-4'>
            Tus datos personales serán conservados durante:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Datos del formulario de contacto:</strong> Mientras dure
              la relación comercial o hasta que solicites su supresión.
            </li>
            <li>
              <strong>Datos de navegación (cookies):</strong> El plazo
              establecido en nuestra Política de Cookies (generalmente entre 1 y
              24 meses para cookies analíticas).
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            5. Destinatarios de los Datos
          </h2>
          <p className='text-gray-300 mb-4'>
            Tus datos personales podrán ser comunicados a:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Vercel Inc.:</strong> Proveedor de servicios de hosting y
              analítica web. Vercel puede realizar transferencias
              internacionales de datos a Estados Unidos, bajo las garantías
              adecuadas establecidas en el RGPD.
            </li>
            <li>
              No cedemos tus datos a terceros con fines comerciales o de
              marketing.
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            6. Tus Derechos
          </h2>
          <p className='text-gray-300 mb-4'>
            De acuerdo con el RGPD, tienes los siguientes derechos:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Derecho de acceso:</strong> Conocer qué datos personales
              tratamos sobre ti.
            </li>
            <li>
              <strong>Derecho de rectificación:</strong> Solicitar la
              corrección de datos inexactos o incompletos.
            </li>
            <li>
              <strong>Derecho de supresión:</strong> Solicitar la eliminación de
              tus datos cuando ya no sean necesarios.
            </li>
            <li>
              <strong>Derecho de limitación:</strong> Solicitar la limitación
              del tratamiento de tus datos.
            </li>
            <li>
              <strong>Derecho de portabilidad:</strong> Recibir tus datos en un
              formato estructurado y de uso común.
            </li>
            <li>
              <strong>Derecho de oposición:</strong> Oponerte al tratamiento de
              tus datos personales.
            </li>
            <li>
              <strong>Derecho a retirar el consentimiento:</strong> En cualquier
              momento, sin que ello afecte a la licitud del tratamiento previo.
            </li>
          </ul>
          <p className='text-gray-300 mb-4'>
            Para ejercer cualquiera de estos derechos, puedes contactarnos en{' '}
            <strong>moilab.web@gmail.com</strong>, adjuntando copia de tu DNI o
            documento identificativo.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            7. Medidas de Seguridad
          </h2>
          <p className='text-gray-300 mb-4'>
            Implementamos medidas técnicas y organizativas apropiadas para
            proteger tus datos personales contra acceso no autorizado,
            alteración, divulgación o destrucción. Esto incluye el uso de
            conexiones seguras (HTTPS), sistemas de cifrado y controles de
            acceso.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            8. Cookies y Tecnologías Similares
          </h2>
          <p className='text-gray-300 mb-4'>
            Utilizamos cookies y tecnologías similares para mejorar tu
            experiencia en nuestro sitio web y realizar análisis estadísticos.
            Para más información sobre las cookies que utilizamos, consulta
            nuestra{' '}
            <a
              href='/cookie-policy'
              className='text-blue-400 hover:text-blue-300 underline'
            >
              Política de Cookies
            </a>
            .
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            9. Reclamaciones
          </h2>
          <p className='text-gray-300 mb-4'>
            Si consideras que tus derechos no han sido atendidos adecuadamente,
            tienes derecho a presentar una reclamación ante la{' '}
            <strong>Agencia Española de Protección de Datos (AEPD)</strong>:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>Sitio web: www.aepd.es</li>
            <li>Dirección: C/ Jorge Juan, 6, 28001 Madrid</li>
            <li>Teléfono: 901 100 099 / 912 663 517</li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            10. Modificaciones de la Política de Privacidad
          </h2>
          <p className='text-gray-300 mb-4'>
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Las modificaciones entrarán en vigor desde su
            publicación en el sitio web. Te recomendamos revisar periódicamente
            esta página para estar informado de cualquier cambio.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            11. Contacto
          </h2>
          <p className='text-gray-300 mb-4'>
            Si tienes preguntas sobre esta Política de Privacidad o sobre el
            tratamiento de tus datos personales, puedes contactarnos en:
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

export default PrivacyPolicyPage;
