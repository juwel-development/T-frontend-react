import { cva } from 'class-variance-authority';
import type { FunctionComponent } from 'react';

const iconStyle = cva('size-6 dark:text-white');

interface IProps {
  alt?: string;
}
/**
 * MoonIcon component renders a moon SVG icon.
 *
 * @uxguidelines
 *  - Use this icon to represent dark mode, night themes, or related features.
 *  - Always provide a descriptive alt prop for accessibility.
 *  - Ensure the icon color contrasts sufficiently with the background.
 *  - Use consistent sizing (className="size-6") to align with other icons in the UI.
 *  - Avoid using the icon as the sole method of conveying important information.
 */
export const MoonIcon: FunctionComponent<IProps> = ({ alt }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconStyle()}
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
};
