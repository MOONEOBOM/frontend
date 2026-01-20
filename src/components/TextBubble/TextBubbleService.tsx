'use client';

import { useState } from 'react';
import TranslateIcon from '@/assets/icon/generate.svg?react';

const MOCK_ORIGINAL = `지금 <span class="highlight">결합할인</span>에 대해 알아보고 계시군요
<span class="highlight">단어</span> 여러개
`;

const MOCK_SIMPLIFIED = `여러 상품을 함께 쓰면
<span class="highlight">요금을 깎아주는 제도</span>입니다.
`;

export function TextBubbleService() {
  const [showSimplified, setShowSimplified] = useState(false);

  return (
    <>
      <style>{`
        .highlight {
          display: inline-block;
          padding: 3px;
          border-radius: 3px;
          background-color: var(--color-primary-200);
        }
      `}</style>

      <div className="my-4 flex justify-start">
        {/* 서비스 말풍선 */}
        <div className="body2 max-w-[240px] rounded-[2px_12px_12px_12px] bg-white px-[10px] py-[10px] break-words whitespace-pre-wrap shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: MOCK_ORIGINAL }}
          />

          {showSimplified && (
            <>
              <div className="my-3 border-t border-gray-300" />
              <div
                className="whitespace-pre-wrap text-gray-400"
                dangerouslySetInnerHTML={{ __html: MOCK_SIMPLIFIED }}
              />
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
