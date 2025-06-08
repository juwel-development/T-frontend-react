import '@fontsource/roboto';
import './tailwind.css';

import { useSubscription } from '@juwel-development/react-observable-tools';
import { RouterProvider } from '@tanstack/react-router';
import { ApplicationEventDispatcher } from 'Application/Core/ApplicationEventDispatcher';
import { ApplicationQuery } from 'Application/Core/ApplicationQuery';
import { router } from 'Presentation/Routing/Router';
import { Translation } from 'Presentation/Translation/Translation';
import { type FunctionComponent, StrictMode, Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { container } from 'tsyringe';

const AppComponent: FunctionComponent = () => {
  const applicationQuery = container.resolve(ApplicationQuery);
  const isTranslationReady = useSubscription(
    applicationQuery.TranslationReady$,
  );

  const eventDispatcher = container.resolve(ApplicationEventDispatcher);

  useEffect(() => {
    Translation.setupTranslation();
    eventDispatcher.applicationReady();
  }, [eventDispatcher]);

  if (!isTranslationReady) {
    return null; // or a loading spinner, or any placeholder while translations are loading
  }

  return (
    <StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};

export const Bootstrap = {
  /**
   * initializes react and render main element
   */
  init: async (): Promise<void> => {
    const element = document.createElement('div');

    element.id = 'app';
    document.body.appendChild(element);

    createRoot(element).render(<AppComponent />);
  },
};
