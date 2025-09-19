import { BottomFooterBar } from './BottomFooterBar';
import { BrandSection } from './BrandSection';
import { QuickLinks } from './QuickLinks';
import { ServicesFooter } from './ServicesFooter';
import { SocialLinksList } from './SocialLinksList';

export const Footer = () => {
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
        <BottomFooterBar />
      </div>
    </footer>
  );
};
