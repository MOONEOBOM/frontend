'use client';

import Header from '../common/Header';
import BottomBoard from './BottomBoard';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Step3 from './steps/Step3';

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
  // ...
];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter;
  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log('?');
    }
  };
  const CurrentStepContent = ONBOARDING_STEPS[currentStep].component;
  return (
    <div className="flex flex-col items-center justify-center">
      <Header type="onboarding" />
      <CurrentStepContent />

      <BottomBoard
        type="white"
        title={ONBOARDING_STEPS[currentStep].title}
        text={ONBOARDING_STEPS[currentStep].text}
        onNext={handleNext}
      />
    </div>
  );
};

export default OnboardingPage;
