import {
  useAction,
  useSubscription,
} from '@juwel-development/react-observable-tools';
import { ApplicationEventDispatcher } from 'Application/Core/ApplicationEventDispatcher';
import { ApplicationQuery } from 'Application/Core/ApplicationQuery';
import { MoonIcon } from 'Presentation/Core/Atom/Icon/MoonIcon';
import { SunIcon } from 'Presentation/Core/Atom/Icon/SunIcon';
import { Navbar } from 'Presentation/Core/Atom/Layout/Navbar';
import type { FunctionComponent } from 'react';
import { container } from 'tsyringe';

export const PageNavbar: FunctionComponent = () => {
  const applicationQuery = container.resolve(ApplicationQuery);
  const theme = useSubscription(applicationQuery.Theme$);

  const applicationEventDispatcher = container.resolve(
    ApplicationEventDispatcher,
  );
  const toggleTheme$ = useAction(() => {
    applicationEventDispatcher.toggleTheme();
  });

  return (
    <Navbar.Root
      right={
        <Navbar.Button onClick$={toggleTheme$}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Navbar.Button>
      }
    />
  );
};
