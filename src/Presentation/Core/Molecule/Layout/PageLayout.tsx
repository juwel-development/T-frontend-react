import { Container } from 'Presentation/Core/Atom/Layout/Container';
import { H1 } from 'Presentation/Core/Atom/Typography/H1';
import type { FunctionComponent, ReactNode } from 'react';

interface IProps {
  heading?: string;
  content?: ReactNode;
  navbar?: ReactNode;
}

/**
 * @component PageLayout
 * @description A standard page layout component that provides consistent structure for application pages.
 *
 * @ux
 * Use this component to maintain consistent page layout throughout the application.
 * This layout provides a standardized structure with optional navbar and heading.
 *
 * Guidelines:
 * - Use for all main content pages to maintain visual consistency
 * - Include a clear, descriptive heading that indicates the page purpose
 * - The navbar should be consistent across pages for predictable navigation
 * - Content should be well-structured and follow a logical hierarchy
 * - Maintain appropriate spacing between content sections
 *
 * Accessibility:
 * - Heading properly sets page context for screen readers
 * - Container provides appropriate margins and padding for readability
 * - Ensure content follows semantic HTML patterns
 *
 * @example
 * <PageLayout
 *   heading="User Dashboard"
 *   navbar={<NavigationBar />}
 *   content={<DashboardContent />}
 * />
 *
 */
export const PageLayout: FunctionComponent<IProps> = ({
  heading,
  content,
  navbar,
}) => {
  return (
    <>
      {navbar}
      <Container>
        {heading && <H1>{heading}</H1>}
        {content}
      </Container>
    </>
  );
};
