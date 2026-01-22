import { ScenarioRequestDto } from '@/models/scenario';
import { createScenarioApi } from '@/services/scenario.api';
import { useMutation } from '@tanstack/react-query';

export const useCreateScenario = () => {
  return useMutation({
    mutationFn: async (request: ScenarioRequestDto) => {
      const response = await createScenarioApi(request);
      return response.data;
    },
  });
};
