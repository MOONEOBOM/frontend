'use client';

import { useState } from 'react';
import TranslateIcon from '@/assets/icon/generate.svg?react';

interface TextBubbleServiceProps {
  normal: string;
  easy: string;
}

export function TextBubbleService({ normal, easy }: TextBubbleServiceProps) {
  const [showSimplified, setShowSimplified] = useState(false);

  return (
    <>
      <div className="my-4 flex justify-start">
        {/* 서비스 말풍선 */}
        <div className="body2 shadow-bubble max-w-[240px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-words whitespace-pre-wrap">
          <div className="whitespace-pre-wrap">{normal}</div>
          {showSimplified && (
            <>
              <div className="my-3 border-t border-gray-300" />
              <div className="whitespace-pre-wrap text-[#7E7E7E]">{easy}</div>
            </>
          )}
        </div>
        {/* 번역 버튼 */}
        <button
          onClick={() => setShowSimplified((prev) => !prev)}
          className="mt-[10px] ml-[10px] flex h-[20px] w-[20px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300"
        >
          <TranslateIcon className="h-[10px] w-[10px]" />
        </button>
      </div>
    </>
  );
}
