'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Analytics = dynamic(() =>
  import('@vercel/analytics/next').then((m) => ({ default: m.Analytics }))
);

export const ConditionalAnalytics = () => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    setHasConsent(cookieConsent === 'accepted');
  }, []);

  // Only render Analytics if user has accepted cookies
  if (!hasConsent) return null;

  return <Analytics />;
};
