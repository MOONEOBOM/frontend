import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextBubbleUser } from '@/components/chat/bubbles/TextBubbleUser';

const meta: Meta<typeof TextBubbleUser> = {
  title: 'Chat/Bubbles/TextBubbleUser',
  component: TextBubbleUser,

  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 flex justify-center py-10">
        {/* 전체 채팅 화면 (390px) */}
        <div className="w-[390px] bg-white rounded-md shadow">
          {/* 좌우 여백 25px */}
          <div className="px-[25px] py-6">
            {/* 실제 채팅 영역 (340px) */}
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
type Story = StoryObj<typeof TextBubbleUser>;

export const Default: Story = {};

export const LongText: Story = {
  args: {
    text: '해외 다녀왔는데 요금이 너무 많이 나왔어요. 예상보다 훨씬 커서 확인이 필요합니다.',
  },
};

export const ShortText: Story = {
  args: {
    text: '네 맞아요',
  },
};
