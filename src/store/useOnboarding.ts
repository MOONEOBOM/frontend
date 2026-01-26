import { create } from 'zustand';

interface OnboardingState {
  isOnboarding: boolean;
  startOnboarding: () => void;
  stopOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  isOnboarding: true, // 초기값
  startOnboarding: () => set({ isOnboarding: true }),
  stopOnboarding: () => set({ isOnboarding: false }),
}));
