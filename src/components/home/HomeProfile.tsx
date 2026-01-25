'use client';
import Button from '@/components/common/Button';
import HelloMoo from '@/assets/moono/moono_hello.svg';

import { useRouter } from 'next/navigation';
import { useMe } from '@/lib/tanstack/query/user.query';

const HomeProfile = () => {
  const router = useRouter();
  const { data: me } = useMe();

  function handleChatbot() {
    router.push('/chatbot');
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="heading1 mt-[71px]">{me.name}님, 반갑습니다!</div>
      <div className="script-body-14 mt-[9px]">무너가 도와드릴게요.</div>
      <HelloMoo className="mt-[50px]" />
      <div className="mt-[76px] flex flex-row items-center justify-center gap-[10px]">
        <Button
          size="full"
          variant="solid"
          className="bg-primary"
          onClick={handleChatbot}
        >
          상담 시작하기
        </Button>
      </div>
    </div>
  );
};

export default HomeProfile;
