import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from '@/components/common/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: '텍스트를 입력하세요',
    disabled: false,
    error: false,
  },
  argTypes: {
    error: {
      control: 'boolean',
      description: '에러 상태 여부',
    },
    disabled: {
      control: 'boolean',
    },
    width: {
      control: 'text',
      description: 'Tailwind width 클래스 (ex: w-full, w-[300px])',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/** 기본 Input */
export const Default: Story = {};

/** 에러 상태 */
export const ErrorState: Story = {
  args: {
    error: true,
    placeholder: '에러 상태 Input',
  },
};

/** 비활성화 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 Input',
  },
};

/** 고정 너비 */
export const FixedWidth: Story = {
  args: {
    width: 'w-[300px]',
    placeholder: '300px 너비 Input',
  },
};
