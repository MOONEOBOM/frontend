import { create } from 'zustand';

interface HistoryState {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useHistoryStore = create<HistoryState>((set) => ({
  activeIndex: 0, // 초기값
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
