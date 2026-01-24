import api from '@/lib/axios';
import { user } from '@/models/user';
import { ApiResponse } from '@/models/common';

export const loginWithGoogleApi = (idToken: string) => {
  return api.post<ApiResponse<user>>(
    '/auth/login',
    {},
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
  );
};

export const logoutApi = () => {
  return api.post('/auth/logout');
};
