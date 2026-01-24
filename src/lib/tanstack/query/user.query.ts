import api from '@/lib/axios';
import { user } from '@/models/user';
import { ApiResponse } from '@/types/common';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  return useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => {
      const response = await api.get<ApiResponse<user>>('/users/me');
      return response.data.data;
    },
  });
};
