import { fetchMe } from '@/services/auth.api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useMe = () => {
  return useSuspenseQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => fetchMe(),
  });
};
