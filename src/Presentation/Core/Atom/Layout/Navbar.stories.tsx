import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar.Root> = {
  title: 'Core/Atom/Layout/Navbar',
  component: Navbar.Root,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A compound navbar component that provides consistent navigation structure with primary styling.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar.Root>;

export const Default: Story = {
  render: () => (
    <Navbar.Root>
      <Navbar.Button>Home</Navbar.Button>
      <Navbar.Button>Products</Navbar.Button>
      <Navbar.Button>About</Navbar.Button>
    </Navbar.Root>
  ),
};

export const WithRightContent: Story = {
  render: () => (
    <Navbar.Root right={<Navbar.Button>Profile</Navbar.Button>}>
      <Navbar.Button>Home</Navbar.Button>
      <Navbar.Button>Products</Navbar.Button>
      <Navbar.Button>About</Navbar.Button>
    </Navbar.Root>
  ),
};
