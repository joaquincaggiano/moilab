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
          <main className='w-full min-h-screen bg-gray-900 flex flex-col'>
            {children}
          </main>
        </LenisWrapper>
      </body>
    </html>
  );
}
