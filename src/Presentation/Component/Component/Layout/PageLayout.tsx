import { useInjection } from 'inversify-react';
import React, { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { ApplicationCommandHandler } from '../../../../Application/Command/Handler/ApplicationCommandHandler';
import { TYPES } from '../../../../Container/TYPES';
import type { en_US } from '../../../Translation/Resources/en_US';
import { Translation } from '../../../Translation/Translation';
import { Loader } from '../../Common/Loader';
import { NavigationMenu } from '../NavigationMenu';
import { Notification } from '../Notification';

interface IProps {
    content: ReactNode;
}

export const PageLayout = ({ content }: IProps) => {
    const translation = Translation.Instance;
    const [messageMap, setMessageMap] = useState<undefined | typeof en_US>();

    const messages$ = useInjection<ApplicationCommandHandler>(TYPES.ApplicationCommandHandler).Message$;

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
            <Notification notification$={messages$}/>
            <NavigationMenu/>
            <main className="p-2 sm:p-4 md:p-8 bg-body text-font-color">
                <div className="relative">
                    {content}
                </div>
            </main>
        </IntlProvider>
    );
};