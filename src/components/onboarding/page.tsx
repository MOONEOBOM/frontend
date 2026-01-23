'use client';
import Header from '../common/Header';
import BottomBoard from './BottomBoard';

const OnboardingPage = () => {
  const handleNext = () => {
    console.log('f');
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Header type="onboarding" />
      <h1>온보딩 페이지 내용</h1>
      <BottomBoard
        type="white"
        title="통신 용어가 어려우신가요?"
        text="무너봄이 쉬운 말로 풀어드릴게요."
        onNext={handleNext}
      />
    </div>
  );
};

export default OnboardingPage;
