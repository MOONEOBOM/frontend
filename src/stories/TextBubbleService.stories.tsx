import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextBubbleService } from '@/components/TextBubble/TextBubbleService';

const meta: Meta<typeof TextBubbleService> = {
  title: 'Chat/Bubbles/TextBubbleService',
  component: TextBubbleService,

  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 flex justify-center py-10">
        {/* 전체 채팅 카드 */}
        <div className="w-[390px] bg-white rounded-md shadow">
          {/* 좌우 여백 */}
          <div className="px-[25px] py-6">
            {/* 실제 채팅 영역 */}
            <div className="w-[340px] mx-auto flex flex-col gap-[34px]">
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextBubbleService>;

export const Default: Story = {};
