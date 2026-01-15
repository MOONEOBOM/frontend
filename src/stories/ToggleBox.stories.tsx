import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ToggleBox from '@/components/summary/ToggleBox';

const meta: Meta<typeof ToggleBox> = {
  title: 'Components/Summary/ToggleBox',
  component: ToggleBox,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '토글 박스의 제목 영역에 표시될 내용입니다.',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          backgroundColor: '#f9f9f9',
          minHeight: '300px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToggleBox>;

export const Default: Story = {
  args: {
    children: '로밍 사용으로 인한 요금 과청구',
  },
};

export const LongTitle: Story = {
  args: {
    children: '이번 달 로밍 이용 요금 및 상세 안내 사항',
  },
};

export const List: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleBox>로밍 해지하기</ToggleBox>
      <ToggleBox>자세히 보기</ToggleBox>
    </div>
  ),
};
