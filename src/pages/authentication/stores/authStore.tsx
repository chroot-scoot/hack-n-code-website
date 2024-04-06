// authStore.ts
import { create } from 'zustand';

type AuthState = {
  isUser: boolean;
  setIsUserFalse: () => void;
  setIsUserTrue: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isUser: true,
  setIsUserFalse: () => set(() => ({ isUser: false })),
  setIsUserTrue: () => set(() => ({ isUser: true })),
}));
