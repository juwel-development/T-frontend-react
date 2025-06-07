import { type FunctionComponent, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/roboto';
import './tailwind.css';
import { RouterProvider } from '@tanstack/react-router';
import { ApplicationEventDispatcher } from 'Application/Core/ApplicationEventDispatcher';
import { router } from 'Presentation/Routing/Router';
import { container } from 'tsyringe';

const AppComponent: FunctionComponent = () => {
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

    const eventDispatcher = container.resolve(ApplicationEventDispatcher);
    eventDispatcher.applicationReady();
  },
};
