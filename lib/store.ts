import { create } from 'zustand';

interface AppState {
  lightweightMode: boolean;
  toggleLightweightMode: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>((set) => ({
  lightweightMode:
    typeof window !== 'undefined'
      ? localStorage.getItem('lightweightMode') === 'true'
      : false,
  toggleLightweightMode: () =>
    set((state) => {
      const newVal = !state.lightweightMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('lightweightMode', String(newVal));
      }
      return { lightweightMode: newVal };
    }),
  theme: 'dark', // We will sync this on client-side mount, default to dark
  setTheme: (newTheme) =>
    set(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
      return { theme: newTheme };
    }),
}));
