import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const titleStyle = cva('text-base dark:text-white text-black py-1');

/**
 * Paragraph component
 *
 * @description
 * This component renders a paragraph with a base text size and color.
 *
 * @uxguidelines
 * - Use this component for standard text content.
 * - Ensure text is legible with appropriate contrast.
 * - Maintain consistent spacing around paragraphs.
 * - Avoid using this component for headings or titles; use H1, H2, etc., instead.
 */
export const P: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <p className={titleStyle()}>{children}</p>;
};
