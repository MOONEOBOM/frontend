'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import ScenarioQuestionBox from './ScenarioQuestionBox';
import ScenarioNextButton from './ScenarioNextButton';
import { ConsultTypeKey } from './scenariotype';
import { useOnboardingStore } from '@/store/useOnboarding';
import ScenarioIntroBubble from './ScenarioIntroBubble';

const ScenarioPrePage = () => {
  const [consultType, setConsultType] = useState<ConsultTypeKey | null>(null);
  const [reason, setReason] = useState<string | null>(null);
  const { isOnboarding } = useOnboardingStore();
  return (
    <div className={isOnboarding ? 'mt-[50px]' : ''}>
      {!isOnboarding && <Header type="home" />}

      <ScenarioIntroBubble />

      <ScenarioQuestionBox
        consultType={consultType}
        setConsultType={setConsultType}
        reason={reason}
        setReason={setReason}
      />

      <ScenarioNextButton consultType={consultType} reason={reason} />
    </div>
  );
};

export default ScenarioPrePage;
