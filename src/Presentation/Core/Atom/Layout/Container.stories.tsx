import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from 'Presentation/Core/Atom/Typography/H1';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Core/Atom/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 border border-dashed border-gray-300">
        Container content
      </div>
    ),
  },
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <H1>Container Example</H1>
        <p className="mb-4">
          This container provides consistent horizontal padding and a maximum
          width. It centers content with mx-auto and applies responsive padding.
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <code>max-w-4xl py-3 px-2 md:py-4</code>
        </div>
      </>
    ),
  },
};
