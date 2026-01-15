import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import Dropdown from '@/components/common/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'change' },
    width: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const OPTIONS = [
  { label: '비용을 줄이고 싶어요.', value: '비용' },
  { label: '데이터가 더 많이 필요해요.', value: '데이터' },
  { label: '통화량이 더 많이 필요해요.', value: '통화량' },
  { label: '혜택을 추가하고 싶어요.', value: '혜택' },
];

/**
 *  기본 드롭다운
 */
export const Default: Story = {
  args: {
    options: OPTIONS,
    value: null,
    placeholder: '이유를 선택하세요',
    width: 'w-[300px]',
  },
};

/**
 *  선택된 값이 있는 상태
 */
export const Selected: Story = {
  args: {
    options: OPTIONS,
    value: '데이터',
    placeholder: '이유를 선택하세요',
  },
};

/**
 * 🔹 width 변경 케이스
 */
export const CustomWidth: Story = {
  args: {
    options: OPTIONS,
    value: null,
    width: 'w-[200px]',
  },
};

/**
 * 🔹 실제 사용과 동일한 Controlled 패턴
 * (실무에서 제일 중요)
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <Dropdown
        options={OPTIONS}
        placeholder="사유를 선택하세요"
        value={value}
        onChange={setValue}
      />
    );
  },
};
