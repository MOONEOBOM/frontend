'use client';

import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import ScenarioQuestionBox from './ScenarioQuestionBox';
import ScenarioNextButton from './ScenarioNextButton';
import { ConsultTypeKey } from './scenariotype';

export default function ScenarioContainer({
  children,
  isOnboarding,
}: {
  children: ReactNode;
  isOnboarding?: boolean;
}) {
  const router = useRouter();
  const [consultType, setConsultType] = useState<ConsultTypeKey | null>(null);
  const [reason, setReason] = useState<string | null>(null);

  return (
    <div className={isOnboarding ? 'mt-[50px]' : ''}>
      {!isOnboarding && <Header type="home" />}

      {children}

      <ScenarioQuestionBox
        consultType={consultType}
        setConsultType={setConsultType}
        reason={reason}
        setReason={setReason}
      />

      <ScenarioNextButton consultType={consultType} reason={reason} />
    </div>
  );
}
