import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'Presentation/Core/Atom/Layout/Navbar';
import { PageLayout } from './PageLayout';

const meta: Meta<typeof PageLayout> = {
  title: 'Core/Molecule/Layout/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    heading: 'Page Title',
    content: <p className="mt-4">This is the main content of the page.</p>,
    navbar: <Navbar.Root />,
  },
};

export const WithoutHeading: Story = {
  args: {
    content: (
      <p>A page layout without a heading, useful for content-only pages.</p>
    ),
  },
};
