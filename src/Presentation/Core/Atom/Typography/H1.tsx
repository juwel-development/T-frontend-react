import { type VariantProps, cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const classes = cva('font-bold', {
  variants: {
    size: {
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
      xl: 'text-5xl',
    },
    color: {
      primary: 'text-primary-500 dark:text-primary-400',
      secondary: 'text-secondary-500 dark:text-secondary-400',
      neutral: 'text-neutral-500 dark:text-neutral-200',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

type TProps = Readonly<PropsWithChildren<VariantProps<typeof classes>>>;

/**
 * H1 component for main page headings.
 *
 * ## Usage Rules (set by UX):
 * - Only one H1 per page to represent the main topic.
 * - Text must be clear and concise, describing the page content.
 * - Use H1 for the main heading only; use H2, H3, etc., for sub-sections.
 * - Ensure H1 is visually prominent and easy to find.
 * - Apply consistent styling and placement across all pages.
 * - Must be accessible to screen readers and not hidden with CSS.
 * - Use relevant keywords for SEO, but keep text natural and user-focused.
 * - Do not use H1 for decorative or non-essential text.
 */
export const H1: FunctionComponent<TProps> = ({
  children,
  ...variantProps
}) => {
  return <h1 className={classes(variantProps)}>{children}</h1>;
};
