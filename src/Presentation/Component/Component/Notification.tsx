import { MessageType, MessageViewModel } from 'Application/ViewModel/MessageViewModel';
import { cva } from 'class-variance-authority';
import React, { useEffect, useRef, useState } from 'react';
import { BehaviorSubject, delay, Observable, Subject, throttleTime } from 'rxjs';
import { Heading2 } from '../Common/Typography/Heading2';
import { Paragraph } from '../Common/Typography/Paragraph';
import { TranslatedMessage } from '../Common/Typography/TranslatedMessage';

const notification = cva('fixed z-10 text-sm top-0 right-0 px-2 py-2 border-error-light border rounded-lg shadow-lg w-72 md:w-96 m-2 sm:m-4', {
    variants: {
        type: {
            error: 'bg-error text-error-contrast',
            warning: 'bg-warning text-warning-contrast',
        }
    }
});

interface IProps {
    notification$: Observable<MessageViewModel>;
}

const NOTIFICATION_TIMEOUT = 5000;

const getTypeFromMessageType = (type: MessageType) => {
    switch (type) {
        case MessageType.Error:
            return 'error';
        case MessageType.Warning:
            return 'warning';
    }
};

export const Notification = ({ notification$ }: IProps) => {
    const [currentNotification, setCurrentNotification] = useState<MessageViewModel | undefined>(undefined);
    const currentNotification$ = useRef(new BehaviorSubject<MessageViewModel | undefined>(undefined)).current;
    const removeNotification$ = useRef(new Subject<void>()).current;

    console.log(notification$);

    useEffect(() => {
        const subscription = currentNotification$
            .subscribe((notification) => {
                setCurrentNotification(notification);
            });
        return () => subscription.unsubscribe();
    }, [currentNotification$]);

    useEffect(() => {
        const subscription = notification$
            .pipe(
                throttleTime(NOTIFICATION_TIMEOUT + 100, undefined, { leading: true, trailing: true }),
            )
            .subscribe((notification) => {
                currentNotification$.next(notification);
                removeNotification$.next();
            });

        return () => subscription.unsubscribe();
    });


    useEffect(() => {
        removeNotification$
            .pipe(delay(NOTIFICATION_TIMEOUT))
            .subscribe(() => {
                currentNotification$.next(undefined);
            });
    }, [removeNotification$]);

    if (!currentNotification) {
        return null;
    }

    const type = getTypeFromMessageType(currentNotification.Type);

    return (
        <div className={notification({ type })}>
            <Heading2 color={type} size="sm"><TranslatedMessage id={currentNotification.Titel}/></Heading2>
            <hr className="my-1 bg-error-light"/>
            <Paragraph><TranslatedMessage id={currentNotification.Message}/></Paragraph>
        </div>);
};