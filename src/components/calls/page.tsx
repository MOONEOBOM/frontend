import Header from '@/components/common/Header';
import MoonoCall from '@/assets/moono/moono_calling.svg?react';
import CallList from './CallList';

const CallPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header type="home" />
      <MoonoCall className="mt-[10px] mb-[25px]" />
      <p className="script-body-16 mb-[35px] text-center">
        무너가 확인한 통화내역이에요.
        <br />
        요약하고 싶은 상담을 선택해주세요.
      </p>
      <CallList />
    </div>
  );
};

export default CallPage;
