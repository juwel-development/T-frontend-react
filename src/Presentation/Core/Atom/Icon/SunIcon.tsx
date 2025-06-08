import { cva } from 'class-variance-authority';
import type { FunctionComponent } from 'react';

const iconStyle = cva('size-6 dark:text-white');

interface IProps {
  alt?: string;
}

/**
 * SunIcon component renders a moon SVG icon.
 *
 * @uxguidelines
 *  - Use this icon to represent light mode, or related features.
 *  - Always provide a descriptive alt prop for accessibility.
 *  - Ensure the icon color contrasts sufficiently with the background.
 *  - Use consistent sizing (className="size-6") to align with other icons in the UI.
 *  - Avoid using the icon as the sole method of conveying important information.
 */
export const SunIcon: FunctionComponent<IProps> = ({ alt }) => {
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
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};
