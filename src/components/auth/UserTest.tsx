'use client';
import { useMe } from '@/lib/tanstack/query/user.query';

const UserTest = () => {
  const { data: me } = useMe();

  return (
    <div>
      <span>{me?.name}</span>
    </div>
  );
};

export default UserTest;
