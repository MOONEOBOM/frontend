'use client';

import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import ScenarioQuestionBox from './ScenarioQuestionBox';
import ScenarioNextButton from './ScenarioNextButton';
import { ConsultTypeKey } from './scenariotype';

export default function ScenarioContainer({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [consultType, setConsultType] = useState<ConsultTypeKey | null>(null);
  const [reason, setReason] = useState<string | null>(null);

  return (
    <div>
      <Header type="home" />

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
