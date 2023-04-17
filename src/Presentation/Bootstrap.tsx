import React, { FunctionComponent, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './Routing/Router';
import './Style/main.css';

export namespace Bootstrap {
    /**
     * initializes react and render main element
     */
    export function init(): void {
        const element = document.createElement('div');

        element.id = 'app';
        document.body.className = 'font-sans';
        document.body.appendChild(element);

        createRoot(element).render(<AppComponent/>);
    }

    const AppComponent: FunctionComponent = () => {
        return (
            <StrictMode>
                <Router/>
            </StrictMode>
        );
    };
}