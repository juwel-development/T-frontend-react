import type { Meta, StoryObj } from '@storybook/react';
import { PagePath } from 'Presentation/Routing/PagePath';
import { InternalLink } from './InternalLink';

const meta: Meta<typeof InternalLink> = {
  title: 'Core/Atom/InternalLink',
  component: InternalLink,
  argTypes: {
    to: {
      control: 'select',
      options: Object.values(PagePath),
      description: 'The internal path to navigate to',
    },
    children: {
      control: 'text',
      description: 'Link text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Go to page' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InternalLink>;

export const Default: Story = {
  args: {
    to: Object.values(PagePath)[0],
    children: 'Go to page',
  },
};
