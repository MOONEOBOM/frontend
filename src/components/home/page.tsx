'use client';

import Button from '../common/Button';
import HelloMoo from '@/assets/moono/moono_hello.svg';
import ToggleBox from '../summary/ToggleBox';
import ChevRight from '@/assets/icon/chevron_right.svg';
import { useRouter } from 'next/navigation';
import Badge from '../common/Badge';

const HomePage = () => {
  const router = useRouter();
  function handleChatbot() {
    router.push('/chatbot');
  }
  function handleHistory() {
    router.push('/history');
  }
  function handlePreScenario() {
    router.push('/scenario/pre');
  }
  const historyList = [
    { id: 1, title: '로밍으로 인한 요금 과청구' },
    { id: 2, title: '로밍으로 인한 요금 과청구' },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="heading1 mt-[71px]">유레카님, 반갑습니다!</div>
      <div className="script-body-14 mt-[9px]">무너가 도와드릴게요.</div>
      <HelloMoo className="mt-[50px]" />
      <div className="mt-[76px] flex flex-row items-center justify-center gap-[10px]">
        <Button
          size="half"
          variant="solid"
          className="bg-primary"
          onClick={handleChatbot}
        >
          챗봇 상담
        </Button>
        <Button
          size="half"
          variant="solid"
          className="bg-primary"
          onClick={handlePreScenario}
        >
          전화 상담이 <br />
          필요하신가요?
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
        {historyList.length > 0 ? (
          historyList.map((item) => (
            <ToggleBox isHome href={`/history/${item.id}`} key={item.id}>
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
