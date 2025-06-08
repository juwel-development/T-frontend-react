import type { PagePath } from 'Presentation/Routing/PagePath';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  to: (typeof PagePath)[keyof typeof PagePath];
}

/**
 * InternalLink component renders an accessible internal navigation link.
 *
 * @usdesignguidelines
 * - Use for navigation within the application, not for external URLs.
 * - Ensure link text is descriptive and clearly indicates the destination.
 * - Maintain sufficient color contrast for readability and accessibility.
 * - Use consistent styling for all internal links to reinforce navigation patterns.
 * - Ensure the link is keyboard accessible and screen reader friendly.
 */
export const InternalLink: FunctionComponent<PropsWithChildren<IProps>> = ({
  to,
  children,
}) => {
  return (
    <a className="underline dark:text-white" href={to} target="_self">
      {children}
    </a>
  );
};
