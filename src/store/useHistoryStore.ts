import { create } from 'zustand';

interface HistoryState {
  activeId: number;
  setActiveId: (index: number) => void;
}

export const useHistoryStore = create<HistoryState>((set) => ({
  activeId: 0, // 초기값
  setActiveId: (index) => set({ activeId: index }),
}));
