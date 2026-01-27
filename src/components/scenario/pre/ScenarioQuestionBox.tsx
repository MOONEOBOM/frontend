'use client';

import Badge from '@/components/common/Badge';
import Dropdown from '@/components/common/Dropdown';
import { CONSULT_TYPES, REASONS_BY_TYPE, ConsultTypeKey } from './scenariotype';
import { useOnboardingStore } from '@/store/useOnboarding';

interface ScenarioQuestionBoxProps {
  consultType: ConsultTypeKey | null;
  setConsultType: (v: ConsultTypeKey | null) => void;
  reason: string | null;
  setReason: (v: string | null) => void;
}

const ScenarioQuestionBox = ({
  consultType,
  setConsultType,
  reason,
  setReason,
}: ScenarioQuestionBoxProps) => {
  const { isOnboarding } = useOnboardingStore();
  const activeType = isOnboarding ? CONSULT_TYPES[0].key : null;
  return (
    <div className="px-[30px]">
      <div className="h-[500px] w-[330px] rounded-[10px] bg-gray-100 px-[15px]">
        {/* 1. 상담 종류 질문 */}
        <div className="pt-[27px]">
          <p className="heading3">무엇에 관한 상담인가요?</p>
        </div>

        {/* 2. 상담 종류 Badge 컴포넌트 */}
        <div className="mx-auto mt-[12px] max-w-[300px] px-[5px]">
          <div className="flex flex-wrap justify-between gap-y-[10px]">
            {CONSULT_TYPES.map((item, index) => {
              const isFirstInOnboarding = isOnboarding && index === 0;

              return (
                <button
                  key={item.key}
                  type="button"
                  className="block"
                  onClick={() => {
                    setConsultType(item.key);
                    setReason(null);
                  }}
                >
                  <Badge
                    isOnboarding={isFirstInOnboarding}
                    color="primary"
                    size="large"
                    isSelected={consultType === item.key}
                  >
                    {item.label}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
        {activeType && ( //온보딩의 경우 첫번째 아이템으로 지정
          <>
            <div className="mt-[53px]">
              <p className="heading3">변경하시는 이유가 무엇인가요?</p>
            </div>
            <div className="mt-[12px]">
              <Dropdown
                value={reason}
                onChange={setReason}
                options={REASONS_BY_TYPE[activeType] || []}
                placeholder={
                  activeType
                    ? '이유를 선택하세요.'
                    : '상담 종류를 먼저 선택하세요.'
                }
                width="w-[300px]"
              />
            </div>
          </>
        )}
        {consultType && (
          <>
            {/* 3. 이유 질문 */}
            <div className="mt-[53px]">
              <p className="heading3">변경하시는 이유가 무엇인가요?</p>
            </div>

            {/* 4. 이유 선택 Dropdown */}
            <div className="mt-[12px]">
              <Dropdown
                value={reason}
                onChange={setReason}
                options={consultType ? REASONS_BY_TYPE[consultType] : []}
                placeholder={
                  consultType
                    ? '이유를 선택하세요.'
                    : '상담 종류를 먼저 선택하세요.'
                }
                width="w-[300px]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ScenarioQuestionBox;
