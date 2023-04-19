import React, { FunctionComponent, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './Routing/Router';
import './Style/main.css';

const AppComponent: FunctionComponent = () => {
    return (
        <StrictMode>
            <Router/>
        </StrictMode>
    );
};

export const Bootstrap = {
    /**
     * initializes react and render main element
     */
    init: (): void => {
        const element = document.createElement('div');

        element.id = 'app';
        // document.body.className = 'font-sans';
        document.body.appendChild(element);

        createRoot(element).render(<AppComponent/>);
    }
};