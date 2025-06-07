import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from 'Presentation/Core/Atom/Typography/H1';
import { P } from 'Presentation/Core/Atom/Typography/P';
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
        <P>
          This container provides consistent horizontal padding and a maximum
          width. It centers content with mx-auto and applies responsive padding.
        </P>
      </>
    ),
  },
};
