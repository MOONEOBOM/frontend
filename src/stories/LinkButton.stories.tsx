import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LinkButton from '@/components/summary/LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/summary/LinkButton',
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
      description: '너비를 315px로 고정할지 여부를 결정합니다.',
    },
    href: {
      control: 'text',
      description: '이동할 경로를 입력합니다.',
    },
  },
  // Next.js Link를 사용하기 위한 파라미터 설정 (Storybook 7+ 기준)
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

/** 1. 기본 아웃라인 스타일 (자세히 보기) */
export const Solid: Story = {
  args: {
    children: '로밍 해지하기',
    type: 'solid',
    href: '/',
    isFull: false,
  },
};

/** 2. 배경색이 채워진 솔리드 스타일 (로밍 해지하기) */
export const Outline: Story = {
  args: {
    children: '자세히 보기',
    type: 'outline',
    href: '/',
    isFull: false,
  },
};

/** 3. 너비가 확장된 스타일 (Full Width) */
export const FullWidth: Story = {
  args: {
    children: '로그인하여 계속하기',
    type: 'solid',
    href: '/',
    isFull: true,
  },
};
