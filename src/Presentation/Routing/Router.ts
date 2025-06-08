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
  component: lazy(() => import('Presentation/Page/Core/HomePage')),
});

const userOverviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePath.userOverview,
  component: lazy(
    () => import('Presentation/Page/UserManagement/UserOverviewPage'),
  ),
});

rootRoute.addChildren([homeRoute, userOverviewRoute]);

export const router = createRouter({
  routeTree: rootRoute,
});
