import type { Meta, StoryObj } from '@storybook/react';

import VirtualTable from './Table';

const meta: Meta<typeof VirtualTable> = {
    title: 'Components/VirtualTable',
    component: VirtualTable,
    parameters: {
        layout: 'padded',
    },
};

export default meta;

type Story = StoryObj<typeof VirtualTable>;

export const Default: Story = {};