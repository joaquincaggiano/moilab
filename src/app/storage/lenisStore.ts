import { create } from 'zustand';
import Lenis from 'lenis';

interface LenisStore {
  lenis: Lenis | null;
  setLenis: (lenis: Lenis | null) => void;
  scrollTo: (target: string | HTMLElement, options?: Record<string, unknown>) => void;
  destroy: () => void;
}

export const useLenisStore = create<LenisStore>((set, get) => ({
  lenis: null,

  setLenis: (lenis) => set({ lenis }),

  scrollTo: (target, options = {}) => {
    const { lenis } = get();
    if (!lenis) return;

    const defaultOptions = {
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    const scrollOptions = { ...defaultOptions, ...options };

    if (typeof target === 'string') {
      const element = document.getElementById(target);
      if (element) {
        lenis.scrollTo(element, scrollOptions);
      }
    } else {
      lenis.scrollTo(target, scrollOptions);
    }
  },

  destroy: () => {
    const { lenis } = get();
    if (lenis) {
      lenis.destroy();
      set({ lenis: null });
    }
  },
}));
