import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextBubbleScenario } from '@/components/chat/bubbles/TextBubbleScenario';

const meta: Meta<typeof TextBubbleScenario> = {
  title: 'Chat/Bubbles/TextBubbleScenario',
  component: TextBubbleScenario,

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

type Story = StoryObj<typeof TextBubbleScenario>;

export const Default: Story = {};