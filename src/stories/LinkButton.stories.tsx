import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LinkButton from '@/components/summary/LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/Summary/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['outline', 'solid'],
      description: '버튼의 스타일 타입을 결정합니다.',
    },
    isFull: {
      control: 'boolean',
      description: '너비를 고정값(285px)으로 확장할지 여부입니다.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

/** 1. 기본 아웃라인 스타일 (자세히 보기) */
export const Outline: Story = {
  args: {
    children: '자세히 보기',
    type: 'outline',
    isFull: false,
  },
};

/** 2. 배경색이 채워진 솔리드 스타일 (로밍 해지하기) */
export const Solid: Story = {
  args: {
    children: '로밍 해지하기',
    type: 'solid',
    isFull: false,
  },
};

/** 3. 너비가 확장된 스타일 (Full Width) */
export const FullWidth: Story = {
  args: {
    children: '로밍 해지하기',
    type: 'outline',
    isFull: true,
  },
};

/** 4. 모든 상태를 한눈에 보기 위한 리스트 */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <LinkButton {...args} type="outline" isFull={false}>
        자세히 보기
      </LinkButton>
      <LinkButton {...args} type="solid" isFull={false}>
        로밍 해지하기
      </LinkButton>
      <LinkButton {...args} type="outline" isFull={true}>
        로밍 해지하기
      </LinkButton>
    </div>
  ),
};
