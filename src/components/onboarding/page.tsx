'use client';

import Header from '../common/Header';
import BottomBoard from './BottomBoard';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import { useState } from 'react';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import { useRouter } from 'next/navigation';
import ScalingDots from './ScalingDots';

const ONBOARDING_STEPS = [
  {
    component: Step1,
    title: '통신 용어가 어려우신가요?',
    text: '무너봄이 쉬운 말로 풀어드릴게요.',
  },
  {
    component: Step2,
    title: '전화 상담이 필요하신가요?',
    text: '전화 상담 이전에 무너와 함께 시나리오를 만들 수 있어요.',
  },
  {
    component: Step3,
    title: '전화 상담이 필요하신가요?',
    text: '전화 상담 이전에 무너와 함께 시나리오를 만들 수 있어요.',
  },
  {
    component: Step4,
    title: '상담한 내용을 무너가 요약해 드려요.',
    text: '무너와 함께 한눈에 확인하세요!',
  },
  {
    component: Step5,
    title: '요약 내역을 확인할 수 있어요.',
    text: '카드를 뒤집어 요약 내용을 확인해 보세요!',
  },
];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push('/');
    }
  };
  const CurrentStepContent = ONBOARDING_STEPS[currentStep].component;
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;
  return (
    <div className="flex flex-col items-center justify-center">
      <Header type="onboarding" />
      <ScalingDots total={ONBOARDING_STEPS.length} current={currentStep} />
      <CurrentStepContent />

      <BottomBoard
        title={ONBOARDING_STEPS[currentStep].title}
        text={ONBOARDING_STEPS[currentStep].text}
        onNext={handleNext}
        isLast={isLastStep}
      />
    </div>
  );
};

export default OnboardingPage;
