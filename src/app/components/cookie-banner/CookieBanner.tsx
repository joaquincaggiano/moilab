'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Reload to enable analytics
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-2xl'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div className='flex-1'>
            <h3 className='text-white font-semibold text-lg mb-2'>
              🍪 Uso de Cookies
            </h3>
            <p className='text-gray-300 text-sm'>
              Utilizamos cookies propias y de terceros (Vercel Analytics) para
              analizar el uso del sitio web y mejorar tu experiencia. Puedes
              aceptar todas las cookies o rechazarlas.{' '}
              <Link
                href='/cookie-policy'
                className='text-blue-400 hover:text-blue-300 underline'
              >
                Más información
              </Link>
              .
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
            <button
              onClick={handleReject}
              className='cursor-pointer px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200'
            >
              Rechazar
            </button>
            <button
              onClick={handleAccept}
              className='cursor-pointer px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200'
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
