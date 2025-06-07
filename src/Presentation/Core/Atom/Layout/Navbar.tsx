import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const rootStyle = cva(
  'bg-primary-500 dark:bg-primary-400 w-full py-1 px-4 min-h-10 ',
  {},
);

const Root: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <nav className={rootStyle()}>{children}</nav>;
};

export const Navbar = {
  Root,
};
