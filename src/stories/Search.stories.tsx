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

/** 에러 상태 (Input props 전달) */
export const Error: Story = {
  args: {
    error: true,
    placeholder: '검색 중 오류',
  },
};

/** 커스텀 스타일 */
export const CustomStyle: Story = {
  args: {
    style: {
      ['--input-border-color' as any]: 'var(--color-primary)',
    },
  },
};
