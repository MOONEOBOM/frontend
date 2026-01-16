'use client';

import { TextBubbleService } from '@/components/TextBubble/TextBubbleService';
import { TextBubbleUser } from '@/components/TextBubble/TextBubbleUser';
import { TextBubbleScenario } from '@/components/TextBubble/TextBubbleScenario';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center py-10">
      {/* 모바일 채팅 프레임 */}
      <div className="w-[390px] bg-white rounded-md shadow">
        <div className="px-[25px] py-6">
          <div className="w-[340px] mx-auto flex flex-col gap-[20px]">

            {/* 상담사 말풍선 */}
            <TextBubbleService />

            {/* 사용자 말풍선 */}
            <TextBubbleUser />

            {/* 시나리오 말풍선 */}
            <TextBubbleScenario />

            {/* 사용자 짧은 응답 */}
            <TextBubbleUser text="네 맞아요" />

          </div>
        </div>
      </div>
    </main>
  );
}
