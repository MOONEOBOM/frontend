import api from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

export function useCompleteFirstLogin() {
  return useMutation({
    mutationFn: async () => {
      await api.patch('/users/complete');
    },
  });
}
