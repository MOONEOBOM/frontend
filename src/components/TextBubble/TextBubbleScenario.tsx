'use client';

import MooneoIcon from '@/assets/icon/moono_profile.svg?react';

interface TextBubbleAgentProps {
  text: string;
}
export function TextBubbleScenario({ text }: TextBubbleAgentProps) {
  return (
    <div className="flex w-full justify-start">
      <div className="my-4 flex items-start gap-[5px]">
        {/* 프로필 무너 아이콘 */}
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white px-[8px] py-[6px]"
          aria-label="Mooneo 프로필"
        >
          <MooneoIcon className="h-[36px] w-[32px] translate-x-[0.5px]" />
        </div>
        {/* 말풍선 */}
        <div className="body2 shadow-bubble mt-[20px] max-w-[240px] rounded-[2px_12px_12px_12px] bg-gray-100 px-[10px] py-[10px] break-words whitespace-pre-wrap">
          {text}
        </div>
      </div>
    </div>
  );
}
