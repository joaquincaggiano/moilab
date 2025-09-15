import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LenisWrapper } from './components/wrapper/lenis-wrapper';
import Header from './components/sections/header/Header';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MoiLab',
  description: 'Desarrollo de software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>
        <LenisWrapper>
          <Header />
          <main className='w-full min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex flex-col z-0'>
            {/* Background */}
            {/* Soft radial gradient */}
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.08)_0%,rgba(96,165,250,0.04)_30%,transparent_70%)] -z-10' />
            
            {/* Natural conic gradient with smoother transitions */}
            <div className='absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(96,165,250,0.06)_0deg,rgba(96,165,250,0.03)_45deg,rgba(168,85,247,0.04)_90deg,rgba(168,85,247,0.06)_135deg,rgba(96,165,250,0.03)_180deg,rgba(96,165,250,0.06)_225deg,rgba(168,85,247,0.04)_270deg,rgba(96,165,250,0.06)_315deg,rgba(96,165,250,0.06)_360deg)] -z-10' />
            
            {/* Additional subtle gradient layer */}
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.05)_0%,transparent_50%)] -z-10' />
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(96,165,250,0.05)_0%,transparent_50%)] -z-10' />
            
            {/* Refined grid pattern */}
            <div className='absolute inset-0 opacity-20 -z-10'>
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage: `
            linear-gradient(rgba(96,165,250,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.25) 1px, transparent 1px)
          `,
                  backgroundSize: '60px 60px',
                }}
              />
            </div>
            {/* End Background */}

            {children}
          </main>
        </LenisWrapper>
      </body>
    </html>
  );
}
