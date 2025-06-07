import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { PagePath } from 'Presentation/Routing/PagePath';
import { lazy } from 'react';

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePath.home,
  component: lazy(() => import('Presentation/Page/HomePage')),
});

rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree: rootRoute,
});
