import { ScenarioResponseDto } from '@/models/scenario';
import { create } from 'zustand';

interface ScenarioState {
  scenarioResult: ScenarioResponseDto | null;
  setScenarioResult: (data: ScenarioResponseDto) => void;
  clearScenarioResult: () => void;
}

export const useScenarioStore = create<ScenarioState>((set) => ({
  scenarioResult: null, // 초기값
  setScenarioResult: (data) => set({ scenarioResult: data }),
  clearScenarioResult: () => set({ scenarioResult: null }),
}));
