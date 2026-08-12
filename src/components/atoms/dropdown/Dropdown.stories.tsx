import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Dropdown',
    placeholder: 'Select...',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Dropdown',
    placeholder: 'Select...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Dropdown',
    placeholder: 'Select...',
  },
};