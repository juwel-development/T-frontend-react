import type { Meta, StoryObj } from '@storybook/react';
import { MoonIcon } from './MoonIcon';

const meta: Meta<typeof MoonIcon> = {
  title: 'Core/Atom/Icon/MoonIcon',
  component: MoonIcon,
  argTypes: {
    alt: {
      control: 'text',
      description: 'Accessible description for the icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Moon icon' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MoonIcon>;

export const Default: Story = {
  args: {
    alt: 'Moon icon',
  },
};
