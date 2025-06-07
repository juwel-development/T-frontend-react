import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from './H1';

const meta: Meta<typeof H1> = {
  title: 'Core/Atom/Typography/H1',
  component: H1,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral'],
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Heading 1',
    size: 'md',
    color: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof H1>;

/**
 * This is the h1 component used for headings in the application.
 */
export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <>
      <H1 {...args} size="sm">
        Small Heading
      </H1>
      <H1 {...args} size="md">
        Medium Heading
      </H1>
      <H1 {...args} size="lg">
        Large Heading
      </H1>
      <H1 {...args} size="xl">
        Extra Large Heading
      </H1>
    </>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <>
      <H1 {...args} color="primary">
        Primary Color
      </H1>
      <H1 {...args} color="secondary">
        Secondary Color
      </H1>
      <H1 {...args} color="neutral">
        Neutral Color
      </H1>
    </>
  ),
};
