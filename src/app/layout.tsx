import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LenisWrapper } from './components/wrapper/lenis-wrapper';
import Header from './components/sections/header/Header';
import { Footer } from './components/sections/footer/Footer';
import StructuredData from './components/seo/StructuredData';

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
  authors: [{ name: 'MoiLab' }],
  creator: 'MoiLab',
  publisher: 'MoiLab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moilab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://moilab.com',
    title: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
    siteName: 'MoiLab',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MoiLab - Desarrollo de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
    images: ['/img/og-image.jpg'],
    creator: '@moilab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <head>
        <StructuredData type='organization' />
        <StructuredData type='website' />
        <StructuredData type='service' />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <LenisWrapper>
          <Header />

          <main className='w-full min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden flex flex-col px-5 sm:px-10'>
            {/* Background */}
            {/* Soft radial gradient */}
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.08)_0%,rgba(96,165,250,0.04)_30%,transparent_70%)]' />

            {/* Natural conic gradient with smoother transitions */}
            <div className='absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(96,165,250,0.06)_0deg,rgba(96,165,250,0.03)_45deg,rgba(168,85,247,0.04)_90deg,rgba(168,85,247,0.06)_135deg,rgba(96,165,250,0.03)_180deg,rgba(96,165,250,0.06)_225deg,rgba(168,85,247,0.04)_270deg,rgba(96,165,250,0.06)_315deg,rgba(96,165,250,0.06)_360deg)]' />

            {/* Additional subtle gradient layer */}
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.05)_0%,transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(96,165,250,0.05)_0%,transparent_50%)]' />

            {/* Refined grid pattern */}
            <div className='absolute inset-0 opacity-40'>
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage: `
            linear-gradient(rgba(96,165,250,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.4) 1px, transparent 1px)
          `,
                  backgroundSize: '60px 60px',
                }}
              />
            </div>
            {/* End Background */}

            <div className='relative z-10 w-full h-full'>{children}</div>
          </main>

          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
