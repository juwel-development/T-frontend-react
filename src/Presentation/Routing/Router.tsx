import React, { PropsWithChildren } from 'react';
import { Navigate, Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { RouteDefinition as AllRoutes } from './RouteDefinition';

export const Router = ({ children }: PropsWithChildren) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {AllRoutes.map(({ path, Component }) =>
                        (<Route
                                path={path}
                                key={path}
                                element={
                                    <React.Suspense fallback={'Loading'}>
                                        <Component/>
                                    </React.Suspense>
                                }
                            />
                        ))}
                    <Route path="*" key="error404" element={<Navigate replace to={'/404'}/>}/>
                </Routes>
            </BrowserRouter>
            {children}
        </>
    );
};