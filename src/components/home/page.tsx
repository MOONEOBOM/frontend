import HomeProfile from './HomeProfile';
import RecentHistory from './RecentHistory';
import axios from 'axios';
import { ApiErrorResponse } from '@/types/common';

export function getApiErrorCode(error: unknown): string | undefined {
  if (!axios.isAxiosError(error)) return undefined;

  const data = error.response?.data;
  if (!data || typeof data !== 'object') return undefined;

  return (data as ApiErrorResponse).code;
}

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HomeProfile />
      <RecentHistory />
    </div>
  );
};

export default HomePage;
