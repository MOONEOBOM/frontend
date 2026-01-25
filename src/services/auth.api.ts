import api from '@/lib/axios';
import { Fetcher } from '@/lib/axios/axiosServer';
import { ApiResponse } from '@/models/common';
import { user } from '@/models/user';

export const loginWithGoogleApi = (idToken: string) => {
  return api.post(
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

export const fetchMe = async (customApi: Fetcher = api) => {
  const res = await customApi.get<ApiResponse<user>>('/users/me');
  return res.data.data;
};
