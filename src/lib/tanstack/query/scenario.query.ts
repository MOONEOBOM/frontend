import { ScenarioRequestDto, ScenarioResponseDto } from '@/models/scenario';
import { createScenarioApi } from '@/services/scenario.api';
import { useQuery } from '@tanstack/react-query';

export const useGetScenario = (
  request: ScenarioRequestDto,
  options?: { enabled?: boolean },
) => {
  return useQuery<ScenarioResponseDto>({
    queryKey: ['scenario', request.categoryKey, ...request.reasonKey],
    queryFn: async () => {
      const response = await createScenarioApi(request);
      return response.data.data;
    },
    enabled:
      !!request.categoryKey &&
      request.reasonKey.length > 0 &&
      (options?.enabled ?? true),
    staleTime: Infinity,
  });
};
