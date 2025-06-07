import type { Meta, StoryObj } from '@storybook/react';
import { P } from './P';

const meta: Meta<typeof P> = {
  title: 'Core/Atom/Typography/P',
  component: P,
};

export default meta;
type Story = StoryObj<typeof P>;

export const Default: Story = {
  args: {
    children: 'This is a standard paragraph text.',
  },
};

export const LongParagraph: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis euismod, fringilla nisi at, dignissim justo. Sed vitae magna euismod, lacinia est vel, ultricies nisl. Donec eget elit vel nunc tempus efficitur. Phasellus in lorem vitae justo tincidunt faucibus eu eget neque. Morbi et diam ac tortor posuere eleifend.',
  },
};

export const MultiParagraph: Story = {
  render: () => (
    <>
      <P>This is the first paragraph showing standard text presentation.</P>
      <P>
        This is a second paragraph demonstrating spacing and visual rhythm
        between paragraph components.
      </P>
    </>
  ),
};
