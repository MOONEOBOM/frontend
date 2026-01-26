import HomeProfile from './HomeProfile';
import RecentHistory from './RecentHistory';

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <HomeProfile />
      <RecentHistory />
    </div>
  );
};

export default HomePage;
