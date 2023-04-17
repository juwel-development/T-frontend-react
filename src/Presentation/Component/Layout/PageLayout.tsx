import React, { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Translation } from '../../Translation/Translation';
import type { en_US } from '../../Translation/Resources/en_US';
import { Loader } from '../../Common/Loader';
import { NavigationMenu } from '../NavigationMenu';

interface IProps {
    content: ReactNode;
}

export const PageLayout = ({ content }: IProps) => {
    const translation = Translation.Instance;
    const [messageMap, setMessageMap] = useState<undefined | typeof en_US>();

    useEffect(() => {
        const subscription = translation.getMessages$().subscribe(setMessageMap);
        return () => subscription.unsubscribe();
    }, [translation]);

    if (!messageMap) {
        return (
            <div className="flex flex-grow flex-wrap w-screen h-screen items-center content content-evenly bg-body">
                <Loader/>
            </div>
        );
    }

    return (
        <IntlProvider locale={translation.CurrentLanguage} messages={messageMap}>
            <NavigationMenu/>
            <main className="p-2 sm:p-4 md:p-8 bg-body">
                {content}
            </main>
        </IntlProvider>
    );
};