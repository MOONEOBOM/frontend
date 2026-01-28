import MoonoProfile from '@/assets/moono/moono_profile.svg?react';

const ScenarioIntroBubble = () => {
  return (
    <div className="mb-[24px] pl-[30px]">
      <div className="flex w-[280px] items-center gap-[10px] rounded-[20px_20px_20px_3px] bg-gray-100 px-[15px] py-[8px]">
        <MoonoProfile aria-hidden="true" focusable="false" />
        <p className="body2 leading-snug">
          전화 상담을 시작하기 전에,
          <br />
          무너와 함께 시나리오를 만들어보아요!
        </p>
      </div>
    </div>
  );
};

export default ScenarioIntroBubble;
