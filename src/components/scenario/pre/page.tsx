'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/common/Header';

import ScenarioIntroBubble from './ScenarioIntroBubble';
import ScenarioQuestionBox from './ScenarioQuestionBox';
import ScenarioNextButton from './ScenarioNextButton';
import { ConsultTypeKey } from './scenariotype';

const ScenarioPrePage = () => {
  
  const router = useRouter();
  const [consultType, setConsultType] = useState<ConsultTypeKey | null>(null);
  const [reason, setReason] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-white border">
      
      <Header
        type="default"
        onClickButton={() => router.push('/')}
      />
      
      <ScenarioIntroBubble />

      <ScenarioQuestionBox
        consultType={consultType}
        setConsultType={setConsultType}
        reason={reason}
        setReason={setReason}
      />

      <ScenarioNextButton
        consultType={consultType}
        reason={reason}
      />
    </div>
  );
};

export default ScenarioPrePage;
