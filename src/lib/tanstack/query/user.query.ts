import api from '@/lib/axios';
import { user } from '@/models/user';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  return useQuery<user>({
    queryKey: ['users', 'me'],
    queryFn: async () => {
      const response = await api.get('/users/me');
      return response.data.data;
    },
  });
};
