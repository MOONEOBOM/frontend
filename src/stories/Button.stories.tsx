import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from '../components/common/Button';
import GoogleLogo from '@/assets/icon/google.svg?react';
const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['half', 'full'],
      description: '버튼의 너비를 결정합니다.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
      description: '버튼의 스타일 변형을 선택합니다.',
    },
    children: {
      control: 'text',
      description: '버튼 내부에 표시될 텍스트입니다.',
    },
    icon: {
      control: 'boolean',
      description: '아이콘 포함 여부를 테스트합니다.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 기본 Solid 타입의 가득 찬 버튼입니다.
 */
export const SolidFull: Story = {
  args: {
    size: 'full',
    variant: 'solid',
    children: '확인하기',
    className: 'bg-primary-100 ',
  },
};

/**
 * 테두리만 있는 Outline 타입의 절반 너비 버튼입니다.
 */
export const OutlineHalf: Story = {
  args: {
    size: 'half',
    variant: 'outline',
    children: '취소',
    className: 'bg-white ',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'full',
    variant: 'outline',
    className: 'bg-white ',
    icon: <GoogleLogo />,
    children: '구글로 로그인',
  },
};
