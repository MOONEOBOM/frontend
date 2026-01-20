'use client';

import Link from 'next/link';
import LeftChevron from '@/assets/icon/chevron_left.svg?react';
import { useRouter } from 'next/navigation';

const BackButton = ({ type = 'back' }: { type: 'back' | 'home' | 'chat' }) => {
  const router = useRouter();

  if (type === 'back') {
    return <LeftChevron onClick={() => router.back()} />;
  }

  return (
    <Link href="/">
      <LeftChevron />
    </Link>
  );
};

export default BackButton;
