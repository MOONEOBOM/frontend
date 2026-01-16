'use client';

import MooneoIcon from '@/assets/icon/mooneo.svg?react';

const MOCK_SCENARIO_TEXT =
  '1월 12일 ~ 14일 동안 과금이 발생한 것으로 확인됩니다.';

export function TextBubbleScenario() {
  return (
    <div className="w-full flex justify-start">
      <div className="flex items-start gap-[5px] my-4">
        {/* 프로필 (테두리까지 있는 SVG 다시 다운받고 그대로 사용하기, 테두리 X) */}
        <MooneoIcon className="w-[47px] h-[47px] flex-shrink-0" aria-label="Mooneo 프로필" />

        {/* 말풍선 (프로필 아이콘보다 아래로 20 더 아래에 있음) */}
        <div
          className="
            mt-[20px]
            max-w-[240px]
            px-[10px] py-[10px]
            bg-border-100
            text-black
            text-body2
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
