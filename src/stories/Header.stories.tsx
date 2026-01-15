import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from '@/components/common/Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'chat'],
      description: '헤더의 타입을 결정합니다.',
    },
  },
  // 실제 화면에서의 배치를 확인하기 위해 너비 제한 추가
  decorators: [
    (Story) => (
      <div
        style={{
          width: '375px',
          outline: '1px solid #efefef',
          backgroundColor: '#fff',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

/** 1. 기본 헤더 (왼쪽 화살표 아이콘) */
export const Default: Story = {
  args: {
    type: 'default',
  },
};

/** 2. 채팅 헤더 (상담 종료 버튼 우측 배치) */
export const Chat: Story = {
  args: {
    type: 'chat',
  },
};
