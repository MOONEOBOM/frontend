'use client';

import MooneoIcon from '@/assets/icon/moono_profile.svg?react';

const MOCK_SCENARIO_TEXT =
  '1월 12일 ~ 14일 동안 과금이 발생한 것으로 확인됩니다.';

export function TextBubbleScenario() {
  return (
    <div className="w-full flex justify-start">
      <div className="flex items-start gap-[5px] my-4">
        {/* 프로필 무너 아이콘 */}
        <div
          className="
            flex-shrink-0
            rounded-full
            border black
            bg-white
            flex items-center justify-center
            px-[8px] py-[6px]
          "
          aria-label="Mooneo 프로필"
        >
          <MooneoIcon
            className="
              w-[32px] h-[36px]
              translate-x-[0.5px]
            "
          />
        </div>

        {/* 말풍선 (프로필 아이콘보다 아래로 20 더 아래에 있음) */}
        <div
          className="
            mt-[20px]
            max-w-[240px]
            px-[10px] py-[10px]
            bg-gray-100
            body2
            rounded-[2px_12px_12px_12px]
            shadow-[0px_2px_4px_rgba(0,0,0,0.1)]
            whitespace-pre-wrap
            break-words
          "
        >
          {MOCK_SCENARIO_TEXT}
        </div>
      </div>
    </div>
  );
}
