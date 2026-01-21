import api from '@/lib/axios';

export const chatAnswerApi = (chat: string) => {
  return api.post('/chat/answer', { chat });
};
