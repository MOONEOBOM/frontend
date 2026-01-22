import MooneoIcon from '@/assets/moono/moono_profile.svg?react';

interface TextBubbleScenarioProps {
  text?: string;
}
const MOCK_SCENARIO_TEXT =
  '1월 12일 ~ 14일 동안 과금이 발생한 것으로 확인됩니다.';

export function TextBubbleScenario({ text }: TextBubbleScenarioProps) {
  const displayText = text ?? MOCK_SCENARIO_TEXT;
  return (
    <div className="flex w-full justify-start">
      <div className="my-4 flex items-start gap-[5px]">
        {/* 프로필 무너 아이콘 */}
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-full border border-black bg-white px-[8px] py-[6px]"
          aria-label="Mooneo 프로필"
        >
          <MooneoIcon className="h-[36px] w-[32px] translate-x-[0.5px]" />
        </div>

        {/* 말풍선 */}
        <div className="body2 shadow-bubble mt-[20px] max-w-[240px] rounded-[2px_12px_12px_12px] bg-gray-100 px-[10px] py-[10px] break-words whitespace-pre-wrap">
          {displayText}
        </div>
      </div>
    </div>
  );
}
