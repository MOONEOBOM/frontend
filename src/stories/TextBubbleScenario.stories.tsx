// TextBubbleScenario.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextBubbleScenario } from '@/components/chat/bubbles/TextBubbleScenario';

const meta: Meta<typeof TextBubbleScenario> = {
  title: 'Chat/Bubbles/TextBubbleScenario',
  component: TextBubbleScenario,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextBubbleScenario>;

export const Default: Story = {
  render: () => <TextBubbleScenario />,
};
