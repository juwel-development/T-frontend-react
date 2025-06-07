import type { FunctionComponent, PropsWithChildren } from 'react';

/**
 * Container Component
 *
 * @description
 * This component enforces a maximum width of 896px (Tailwind's max-w-4xl), which:
 * - Maintains optimal reading line length (50-75 characters per line)
 * - Ensures content readability across different screen sizes
 * - Creates visual hierarchy through consistent content boundaries
 * - Prevents eye fatigue by limiting horizontal eye movement
 *
 * @uxguidelines
 * - Use for primary content areas requiring focused reading
 * - Ideal for article content, forms, and detailed information displays
 * - Pair with responsive typography for optimal reading experience
 * - Consider using wider alternatives for data-heavy interfaces (tables, dashboards)
 * - Avoid nesting multiple Containers which can create unnecessary padding constraints
 *
 * @accessibility
 * The width constraint improves readability for users with visual or cognitive impairments
 * by maintaining predictable line lengths and content organization.*
 */
export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className="mx-auto max-w-4xl py-3 px-2 md:py-4">{children}</div>;
};
