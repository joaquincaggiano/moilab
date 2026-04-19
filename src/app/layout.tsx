import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { SiWhatsapp } from 'react-icons/si';
import './globals.css';
import { LenisWrapper } from './components/wrapper/lenis-wrapper';
import { Footer } from './components/sections/footer/Footer';
import { CookieBanner } from './components/cookie-banner/CookieBanner';
import { ConditionalAnalytics } from './components/analytics/ConditionalAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
    template: '%s | MoiLab',
  },
  description:
    'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad. Soluciones digitales que marcan la diferencia.',
  keywords: [
    'desarrollo de software',
    'aplicaciones web',
    'landing pages',
    'desarrollo web',
    'software personalizado',
    'programación',
    'desarrollo frontend',
    'desarrollo backend',
    'Next.js',
    'React',
    'TypeScript',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${poppins.variable} antialiased`}>
        <LenisWrapper>
          {children}
          <Footer />
        </LenisWrapper>
        <CookieBanner />
        <a
          href='https://wa.me/34624750408'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110'
          aria-label='Contactar por WhatsApp'
        >
          <SiWhatsapp className='h-8 w-8' />
        </a>
        <ConditionalAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
