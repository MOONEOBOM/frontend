'use client';

import MooneoIcon from '@/assets/icon/mooneo.svg';

const MOCK_SCENARIO_TEXT =
  '1월 12일 ~ 14일 동안 과금이 발생한 것으로 확인됩니다.';

export function TextBubbleScenario() {
  return (
    // 프로필 + 말풍선 전체 묶음의 최대 너비
    <div className="max-w-[290px]">
      <div className="flex items-start gap-[5px] my-4">
        {/* 프로필 영역 */}
        <div
          className="
            w-[46px] h-[46px]
            rounded-full
            overflow-hidden
            flex-shrink-0
            bg-border-200
            border border-black
          "
        >
          <img
            src={MooneoIcon.src}
            alt="프로필 이미지"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 말풍선 */}
        <div
          className="
            max-w-[240px]
            mt-[20px]
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
