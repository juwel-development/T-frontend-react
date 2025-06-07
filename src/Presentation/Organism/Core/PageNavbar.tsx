import { useAction } from '@juwel-development/react-observable-tools';
import { ApplicationEventDispatcher } from 'Application/Core/ApplicationEventDispatcher';
import { Navbar } from 'Presentation/Core/Atom/Layout/Navbar';
import type { FunctionComponent } from 'react';
import { container } from 'tsyringe';

export const PageNavbar: FunctionComponent = () => {
  const applicationEventDispatcher = container.resolve(
    ApplicationEventDispatcher,
  );
  const toggleTheme$ = useAction(() => {
    applicationEventDispatcher.toggleTheme();
  });
  return (
    <Navbar.Root
      right={<Navbar.Button onClick$={toggleTheme$}>Theme</Navbar.Button>}
    />
  );
};
