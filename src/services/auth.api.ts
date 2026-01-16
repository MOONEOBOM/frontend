import api from '@/lib/axios';

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
