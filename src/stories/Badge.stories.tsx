import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Badge from '@/components/common/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Common/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['blue', 'primary'],
      description: '배지의 색상 및 스타일 타입을 선택합니다.',
    },
    children: {
      control: 'text',
      description: '배지에 표시될 텍스트 내용입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/** 1. 블루 타입 (보더 없는 스타일) */
export const Blue: Story = {
  args: {
    children: '대학생 요금제 추천해줘',
    type: 'blue',
  },
};

/** 2. 프라이머리 타입 (보더가 있고, 세로로 더 긴 스타일) */
export const Primary: Story = {
  args: {
    children: '요금제 변경',
    type: 'primary',
  },
};

/** 3. 여러 상태 모아보기 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge type="blue">사용 중</Badge>
      <Badge type="primary">추천 상품</Badge>
    </div>
  ),
};
