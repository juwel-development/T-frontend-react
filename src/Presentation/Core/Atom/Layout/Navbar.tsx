import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import type { Subject } from 'rxjs';

// ! Navbar Root Component
const rootStyle = cva(
  'bg-primary-500 dark:bg-primary-400 w-full py-1 px-4 min-h-10 flex flex-row items-center justify-center',
);

interface IRootProps {
  right?: ReactNode;
}

/**
 * @component Navbar
 * @description A compound navbar component that provides consistent navigation structure with primary styling.
 *
 * @ux
 * Use this component to create navigation bars across the application.
 * The navbar has a primary background color with appropriate color contrast for light and dark modes.
 *
 * Guidelines:
 * - Position at the top of layouts for consistent user expectations
 * - Keep navigation options concise and clearly labeled
 * - Group related actions together
 * - Use the 'right' prop for secondary actions or user account controls
 * - Maintain consistent navigation patterns across all pages
 * - Consider responsive behavior - ensure buttons remain accessible on small screens
 *
 * Accessibility:
 * - Uses semantic <nav> element for screen reader navigation
 * - Buttons provide appropriate hover states for visual feedback
 * - Ensure adequate color contrast between text and background
 * - Consider adding aria-current="page" to buttons that represent the current page
 * - Add aria-labels to buttons that use icons without text
 *
 * @example
 * <Navbar.Root right={<UserProfile />}>
 *   <Navbar.Button>Home</Navbar.Button>
 *   <Navbar.Button>Products</Navbar.Button>
 *   <Navbar.Button>About</Navbar.Button>
 * </Navbar.Root>
 */
const Root: FunctionComponent<PropsWithChildren<IRootProps>> = ({
  right,
  children,
}) => {
  return (
    <nav className={rootStyle()}>
      <div className="grow">{children}</div>
      <div>{right}</div>
    </nav>
  );
};

// ! Navbar Button

const buttonStyle = cva(
  'text-white dark:text-black px-3 py-2 rounded hover:bg-primary-600 dark:hover:bg-primary-300',
);

interface IButtonProps {
  onClick$?: Subject<void>;
}

/**
 * @component Navbar.Button
 * @description A specialized button component designed specifically for navigation items within the Navbar.
 *
 * @ux
 * Use this component for creating consistent navigation options within the Navbar component.
 * The button has appropriate styling to match the navbar's primary color theme.
 *
 * Guidelines:
 * - Use for primary navigation actions within the Navbar
 * - Keep button labels short and descriptive (1-2 words ideal)
 * - Maintain consistent verb or noun patterns across navigation items
 * - Arrange buttons in order of importance or frequency of use
 * - Consider using icons alongside text for improved visual recognition
 * - Limit the number of navigation items to prevent overcrowding
 * - Ensure adequate spacing between navigation buttons
 *
 * Accessibility:
 * - Provides clear hover states for visual feedback
 * - Maintains sufficient contrast between text and background
 * - Use aria-current="page" to indicate the active navigation item
 * - When using icons, ensure they have appropriate aria-labels
 * - Consider keyboard navigation patterns between buttons
 *
 * @example
 * <Navbar.Root>
 *   <Navbar.Button aria-current="page">Dashboard</Navbar.Button>
 *   <Navbar.Button>Products</Navbar.Button>
 *   <Navbar.Button>Settings</Navbar.Button>
 * </Navbar.Root>
 */

const Button: FunctionComponent<PropsWithChildren<IButtonProps>> = ({
  children,
  onClick$,
}) => {
  const handleClick = () => {
    onClick$?.next();
  };

  return (
    <button className={buttonStyle()} type={'button'} onClick={handleClick}>
      {children}
    </button>
  );
};

export const Navbar = {
  Root,
  Button,
};
