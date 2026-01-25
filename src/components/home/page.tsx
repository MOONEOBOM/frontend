import HomeProfile from './HomeProfile';
import RecentHistory from './RecentHistory';
import axios from 'axios';
import { ApiErrorResponse } from '@/models/common';

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HomeProfile />
      <RecentHistory />
    </div>
  );
};

export default HomePage;
