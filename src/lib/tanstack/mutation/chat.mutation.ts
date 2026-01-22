import { useMutation } from '@tanstack/react-query';
import { chatAnswerApi } from '@/services/chat.api';

export const useChat = () => {
  return useMutation({
    mutationFn: async (chat: string) => {
      const response = await chatAnswerApi(chat);
      return response.data;
    },
  });
};
