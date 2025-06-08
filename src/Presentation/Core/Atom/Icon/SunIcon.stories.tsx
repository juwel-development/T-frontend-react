import type { Meta, StoryObj } from '@storybook/react';
import { SunIcon } from './SunIcon';

const meta: Meta<typeof SunIcon> = {
  title: 'Core/Atom/Icon/SunIcon',
  component: SunIcon,
  argTypes: {
    alt: {
      control: 'text',
      description: 'Accessible description for the icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sun icon' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SunIcon>;

export const Default: Story = {
  args: {
    alt: 'Sun icon',
  },
};
