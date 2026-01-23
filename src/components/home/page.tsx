'use client';

import Button from '@/components/common/Button';
import HelloMoo from '@/assets/moono/moono_hello.svg';
import ToggleBox from '@/components/common/ToggleBox';
import ChevRight from '@/assets/icon/chevron_right.svg';
import { useRouter } from 'next/navigation';
import { useSummaryRecent } from '@/lib/tanstack/query/history.query';
import { useMe } from '@/lib/tanstack/query/user.query';

const HomePage = () => {
  const router = useRouter();
  const { data: summary, isLoading, isError } = useSummaryRecent();
  const { data: me } = useMe();

  function handleChatbot() {
    router.push('/chatbot');
  }
  function handleHistory() {
    router.push('/history');
  }

  if (isLoading) return <div>로딩...</div>;
  if (isError) return <div>에러</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="heading1 mt-[71px]">{me?.name}님, 반갑습니다!</div>
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
      <div className="mt-[58px] mb-[19px] flex w-full items-center justify-between px-[37.5px]">
        <div className="heading2">최근 상담 내역</div>
        <button
          className="body3 flex items-center gap-[5px]"
          onClick={handleHistory}
        >
          전체보기
          <ChevRight />
        </button>
      </div>
      <div className="mb-[82px] flex flex-col gap-[15px]">
        {summary && summary.length > 0 ? (
          summary.map((item) => (
            <ToggleBox
              isHome
              href={`/history?selected=${item.id}`}
              key={item.id}
            >
              {item.title}
            </ToggleBox>
          ))
        ) : (
          <div className="shadow-box flex h-[115px] w-[315px] items-center justify-center rounded-xl text-center">
            <span className="script-body-14 text-gray-800">
              아직 진행한 상담이 없어요 T_T
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
