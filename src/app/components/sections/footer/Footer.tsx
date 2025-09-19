import { BrandSection } from './BrandSection';
import { QuickLinks } from './QuickLinks';
import { ServicesFooter } from './ServicesFooter';
import { SocialLinksList } from './SocialLinksList';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.05)_0%,transparent_70%)]' />
      <div className='absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(96,165,250,0.03)_0deg,rgba(168,85,247,0.03)_90deg,rgba(96,165,250,0.03)_180deg,rgba(168,85,247,0.03)_270deg)]' />

      <div className='relative z-10 container mx-auto px-5 sm:px-10 pt-16 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <BrandSection />

          {/* Quick Links */}
          <QuickLinks />

          {/* Services */}
          <ServicesFooter />

          {/* Social Links */}
          <SocialLinksList />
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-gray-800/50'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {currentYear} MoiLab. Todos los derechos reservados.
            </p>

            <div className='flex gap-6 text-sm'>
              <a
                href='#'
                className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
              >
                Política de Privacidad
              </a>
              <a
                href='#'
                className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
