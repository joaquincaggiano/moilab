'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

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
