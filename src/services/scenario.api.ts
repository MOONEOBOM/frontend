import api from '@/lib/axios';
import { ScenarioRequestDto } from '@/models/scenario';

export const createScenarioApi = (request: ScenarioRequestDto) => {
  return api.post('/scenario/create', request);
};
