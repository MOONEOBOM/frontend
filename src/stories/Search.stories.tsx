import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Search } from '@/components/common/Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Common/Search',
  component: Search,
  tags: ['autodocs'],
  args: {
    placeholder: '검색어를 입력하세요',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

/** 기본 검색창 */
export const Default: Story = {};

/** 비활성화 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
