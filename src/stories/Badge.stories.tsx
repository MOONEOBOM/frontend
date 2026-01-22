import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Badge from '@/components/common/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Common/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    // 1. props 이름이 'color'이므로 type 대신 color로 수정
    color: {
      control: 'radio',
      options: ['blue', 'primary'],
      description: '배지의 색상 타입을 선택합니다.',
    },
    size: {
      control: 'radio',
      options: ['default', 'large'],
    },
    isSelected: { control: 'boolean' },
    outline: { control: 'boolean' },
    children: {
      control: 'text',
      description: '배지에 표시될 텍스트 내용입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/** blue */
export const BlueDefault: Story = {
  args: {
    children: '요금제 변경',
    color: 'blue',
  },
};

/** primary + large + outline */
export const PrimaryLarge: Story = {
  args: {
    children: '요금제 변경',
    color: 'primary',
    size: 'large',
  },
};

/** primary + large + isSelected */
export const PrimarySelected: Story = {
  args: {
    children: '요금제 변경',
    color: 'primary',
    isSelected: true,
    size: 'large',
  },
};

/** blue + outline */
export const BlueOutline: Story = {
  args: {
    children: '전화 상담 연결하기',
    color: 'blue',
    outline: true,
  },
};

/** primary + outline */
export const PrimaryDefault: Story = {
  args: {
    children: '전화 연결하기',
    color: 'primary',
  },
};

/** 전체 모아보기 */
export const List: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Badge color="blue">요금제 변경</Badge>
      <Badge color="primary" size="large">
        요금제 변경
      </Badge>
      <Badge color="primary" size="large" isSelected>
        요금제 변경
      </Badge>
      <Badge color="blue" outline>
        전화 상담 연결하기
      </Badge>
      <Badge color="primary" outline>
        전화 연결하기
      </Badge>
    </div>
  ),
};
