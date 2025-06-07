import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'Presentation/Core/Atom/Layout/Navbar';
import { P } from 'Presentation/Core/Atom/Typography/P';
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
    content: <P>This is the main content of the page.</P>,
    navbar: <Navbar.Root right={<Navbar.Button>Profile</Navbar.Button>} />,
  },
};

export const WithoutHeading: Story = {
  args: {
    content: (
      <P>A page layout without a heading, useful for content-only pages.</P>
    ),
  },
};
