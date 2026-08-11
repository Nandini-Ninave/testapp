import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type something here...',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small size...',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium size...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large size...',
  },
};
