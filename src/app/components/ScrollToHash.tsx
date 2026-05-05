'use client';

import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');

    // Retry hasta que ScrollTrigger haya agregado los spacers y el elemento
    // esté en su posición final. 600ms es suficiente en la mayoría de casos.
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
