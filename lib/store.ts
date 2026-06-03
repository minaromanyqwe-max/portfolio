import { create } from 'zustand';

interface AppState {
  lightweightMode: boolean;
  toggleLightweightMode: () => void;
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
}));
