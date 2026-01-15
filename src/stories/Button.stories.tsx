// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from '@/components/common/Button';
import GoogleLogo from '@/assets/icon/google.svg?react';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['half', 'full'],
      description: '버튼의 너비를 결정합니다.',
    },
    buttonStyle: {
      control: 'select',
      options: ['solid', 'outline'],
      description: '버튼의 테두리 및 배경 스타일을 결정합니다.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 1. 기본 스타일 (Solid + Full)
export const Default: Story = {
  args: {
    children: '상담 시작하기',
    variant: 'full',
    buttonStyle: 'solid',
    className: 'bg-primary-100', // 배경색 예시
  },
};

// 2. 아웃라인 스타일
export const Outline: Story = {
  args: {
    children: '상담 시작하기',
    variant: 'full',
    buttonStyle: 'outline',
    className: 'bg-white ',
  },
};

// 3. 아이콘이 있는 구글 로그인 버튼
export const WithGoogleIcon: Story = {
  args: {
    children: '구글로 로그인하기',
    variant: 'full',
    buttonStyle: 'outline',
    className: 'bg-white',
    icon: <GoogleLogo width={20} height={20} />,
  },
};

// 4. 절반 사이즈 (Half)
export const HalfSize: Story = {
  args: {
    children: '확인',
    variant: 'half',
    buttonStyle: 'solid',
    className: 'bg-primary-100',
  },
};
