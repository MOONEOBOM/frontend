import { cookies } from 'next/headers';
import api from './index';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Fetcher {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

export const serverApi = {
  get: async <T>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> => {
    const cookieStore = await cookies();
    const cookieString = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join('; ');

    return api.get<T>(url, {
      ...config,
      headers: {
        ...config.headers,
        Cookie: cookieString,
      },
    });
  },
};
