import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Modal from '../components/common/Modal';
import CryMoo from '@/assets/icon/moono/moono_cry.svg?react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['select', 'info'],
      description: '모달의 타입을 설정합니다.',
    },
    isOpen: {
      control: 'boolean',
      description: '모달의 표시 여부를 결정합니다.',
    },
    onBack: { action: 'back clicked' },
    onClose: { action: 'close clicked' },
  },

  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * 선택형 모달 (돌아가기, 종료 버튼 2개)
 */
export const Select: Story = {
  args: {
    isOpen: true,
    type: 'select',
    children: '정말로 종료하시겠습니까?\n내용은 저장되지 않습니다.',
    onBack: () => console.log('Back'),
    onClose: () => console.log('Close'),
  },
};

/**
 * 정보 안내형 모달 (홈으로 돌아가기 버튼 1개 + 이미지)
 */
export const Info: Story = {
  args: {
    isOpen: true,
    type: 'info',
    image: <CryMoo />,
    onBack: () => console.log('홈으로 돌아가기 클릭'),
    children: (
      <>
        무너봄은 음성 파일에 한해
        <br />
        상담 요약을 제공해드리고 있어요.
        <br />
        불편을 드려 죄송합니다.
      </>
    ),
  },
};

/**
 * 닫힌 상태 테스트
 */
export const Closed: Story = {
  args: {
    isOpen: false,
    type: 'select',
    children: '이 문구는 보이지 않아야 합니다.',
  },
};
