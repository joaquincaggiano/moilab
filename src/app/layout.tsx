import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LenisWrapper } from './components/wrapper/lenis-wrapper';
import { Footer } from './components/sections/footer/Footer';
import { CookieBanner } from './components/cookie-banner/CookieBanner';
import { ConditionalAnalytics } from './components/analytics/ConditionalAnalytics';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

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
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
