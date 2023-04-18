import React, { FunctionComponent, LazyExoticComponent } from 'react';
import { PATH } from './Path';

interface IRoute {
    path: string;
    Component: LazyExoticComponent<FunctionComponent>;
    // roles?: ((user?: IUserResource) => boolean)[];
    redirectPath?: string;
}

export const RouteDefinition: readonly IRoute[] = [
    {
        path: PATH.HOME,
        Component: React.lazy(() => import('../Page/HomePage/HomePage')),
    },
    {
        path: PATH.LOGIN,
        Component: React.lazy(() => import('../Page/Authentication/LoginPage')),
    },
    {
        path: PATH.SIGN_UP,
        Component: React.lazy(() => import('../Page/Authentication/SignUpPage')),
    }
];