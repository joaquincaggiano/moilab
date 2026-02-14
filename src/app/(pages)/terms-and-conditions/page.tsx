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
            1. Datos Identificativos del Titular
          </h2>
          <p className='text-gray-300 mb-4'>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            te informamos de los siguientes datos:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              <strong>Titular:</strong> Joaquín Serra Caggiano
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
            <li>
              <strong>Sitio web:</strong> moilab.es
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            2. Objeto y Aceptación de los Términos
          </h2>
          <p className='text-gray-300 mb-4'>
            El presente sitio web tiene como finalidad proporcionar información
            sobre los servicios profesionales de desarrollo de software,
            aplicaciones web y landing pages que ofrecemos, así como facilitar
            el contacto con potenciales clientes.
          </p>
          <p className='text-gray-300 mb-4'>
            Al acceder y utilizar este sitio web, aceptas de forma expresa y sin
            reservas estos Términos y Condiciones de Uso. Si no estás de acuerdo
            con estos términos, te rogamos que no utilices este sitio web.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            3. Servicios Ofrecidos
          </h2>
          <p className='text-gray-300 mb-4'>
            MoiLab ofrece servicios profesionales de:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>Desarrollo de software personalizado y a medida</li>
            <li>Desarrollo de aplicaciones web (frontend y backend)</li>
            <li>
              Diseño y desarrollo de landing pages y sitios web corporativos
            </li>
            <li>Consultoría tecnológica y optimización de proyectos digitales</li>
          </ul>
          <p className='text-gray-300 mb-4'>
            Los servicios se prestan bajo contrato específico con cada cliente,
            estableciéndose las condiciones particulares (alcance, plazos,
            precios, forma de pago, etc.) en cada caso.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            4. Condiciones de Uso del Sitio Web
          </h2>
          <p className='text-gray-300 mb-4'>
            El usuario se compromete a utilizar este sitio web de forma lícita,
            sin contravenir la legislación vigente, la moral, el orden público y
            estos Términos y Condiciones. En particular, queda prohibido:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              Utilizar el sitio web para fines ilícitos o no autorizados
            </li>
            <li>
              Intentar acceder a áreas restringidas del sitio web o de los
              sistemas informáticos
            </li>
            <li>
              Introducir virus, malware o cualquier código malicioso que pueda
              dañar el sitio web
            </li>
            <li>
              Reproducir, copiar, distribuir o modificar el contenido sin
              autorización previa
            </li>
            <li>
              Realizar cualquier acción que suponga una carga excesiva en
              nuestros servidores
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            5. Propiedad Intelectual e Industrial
          </h2>
          <p className='text-gray-300 mb-4'>
            Todos los contenidos del sitio web, incluyendo pero no limitándose a
            textos, diseños, gráficos, logotipos, iconos, imágenes, archivos de
            audio y vídeo, software y código fuente, son propiedad de Joaquín
            Serra Caggiano o de terceros que han autorizado su uso, y están
            protegidos por las leyes españolas e internacionales de propiedad
            intelectual e industrial.
          </p>
          <p className='text-gray-300 mb-4'>
            Queda prohibida la reproducción, distribución, comunicación pública,
            transformación o cualquier otra forma de explotación de los
            contenidos sin autorización expresa y por escrito del titular de los
            derechos.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            6. Responsabilidad y Garantías
          </h2>
          <p className='text-gray-300 mb-4'>
            El titular del sitio web se esfuerza por mantener la información
            actualizada y libre de errores, pero no garantiza la exactitud,
            actualización o exhaustividad de la información publicada.
          </p>
          <p className='text-gray-300 mb-4'>
            MoiLab no será responsable de:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>
              Daños y perjuicios derivados del uso incorrecto del sitio web
            </li>
            <li>
              Interrupciones, errores, omisiones, averías, retrasos o
              desconexiones en el acceso al sitio web
            </li>
            <li>
              Virus, malware o cualquier elemento dañino introducido por
              terceros
            </li>
            <li>
              El contenido de sitios web de terceros enlazados desde este sitio
            </li>
          </ul>
          <p className='text-gray-300 mb-4'>
            La responsabilidad sobre los servicios profesionales contratados se
            regirá por las condiciones específicas acordadas en cada contrato de
            prestación de servicios.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            7. Enlaces a Terceros
          </h2>
          <p className='text-gray-300 mb-4'>
            Este sitio web puede contener enlaces a sitios web de terceros. No
            tenemos control sobre el contenido de dichos sitios y no asumimos
            ninguna responsabilidad por los mismos. La inclusión de enlaces no
            implica aprobación o respaldo del contenido de las páginas
            enlazadas.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            8. Protección de Datos Personales
          </h2>
          <p className='text-gray-300 mb-4'>
            El tratamiento de los datos personales que nos proporciones a través
            de este sitio web se realizará de conformidad con lo establecido en
            nuestra{' '}
            <a
              href='/privacy-policy'
              className='text-blue-400 hover:text-blue-300 underline'
            >
              Política de Privacidad
            </a>
            , que cumple con el Reglamento General de Protección de Datos (RGPD)
            y la legislación española aplicable.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            9. Modificaciones
          </h2>
          <p className='text-gray-300 mb-4'>
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento, sin previo aviso. Las modificaciones entrarán
            en vigor desde el momento de su publicación en el sitio web. Te
            recomendamos revisar periódicamente esta página para estar informado
            de posibles cambios.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            10. Ley Aplicable y Jurisdicción
          </h2>
          <p className='text-gray-300 mb-4'>
            Estos Términos y Condiciones se rigen por la legislación española.
            Para cualquier controversia que pudiera derivarse del acceso o uso
            de este sitio web, las partes se someten expresamente a los Juzgados
            y Tribunales de Valencia (España), con renuncia a cualquier otro
            fuero que pudiera corresponderles.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            11. Contacto
          </h2>
          <p className='text-gray-300 mb-4'>
            Si tienes preguntas, dudas o sugerencias sobre estos Términos y
            Condiciones, puedes contactarnos a través de:
          </p>
          <ul className='list-disc list-inside text-gray-300 mb-4 space-y-2'>
            <li>Email: moilab.web@gmail.com</li>
            <li>Formulario de contacto disponible en el sitio web</li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default TermsAndConditionsPage;
