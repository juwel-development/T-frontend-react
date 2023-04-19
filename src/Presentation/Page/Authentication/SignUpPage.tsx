import { Provider, useInjection } from 'inversify-react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { AuthenticationCommand } from '../../../Application/Command/AuthenticationCommand';
import { AuthenticationQuery } from '../../../Application/Query/AuthenticationQuery';
import { UserViewModel } from '../../../Application/ViewModel/UserViewModel';
import { AuthenticationContainer } from '../../../Container/AuthenticationContainer';
import { TYPES } from '../../../Container/TYPES';
import { Button } from '../../Component/Common/Button';
import { FormControl } from '../../Component/Common/Form/FormControl';
import { Input } from '../../Component/Common/Form/Input';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { TranslatedMessage } from '../../Component/Common/Typography/TranslatedMessage';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';
import { useInteraction } from '../../Hooks/useInteraction';
import { useValueStream } from '../../Hooks/useValueStream';
import { PATH } from '../../Routing/Path';

const Content = () => {
    const authenticationCommand = useInjection<AuthenticationCommand>(TYPES.AuthenticationCommand);

    const [loggedInUser, setLoggedInUser] = useState<UserViewModel | undefined>();
    const getAuthenticatedUser$ = useInjection<AuthenticationQuery>(TYPES.AuthenticationQuery).getAuthenticatedUser$();

    const email$ = useValueStream('');
    const password$ = useValueStream('');

    const onSubmit$ = useInteraction<void>(() => {
        authenticationCommand.signUp(email$.value, password$.value);
    }, undefined);

    useEffect(() => {
        const subscription = getAuthenticatedUser$.subscribe(setLoggedInUser);
        return () => subscription.unsubscribe();
    }, []);

    if (loggedInUser) {
        return (
            <Navigate to={PATH.HOME}/>
        );
    }

    return (
        <>
            <Heading1><TranslatedMessage id="AUTH_SIGNUP"/></Heading1>
            <FormControl>
                <Input label={<TranslatedMessage id="USER_EMAIL"/>} value$={email$}/>
            </FormControl>
            <FormControl>
                <Input label={<TranslatedMessage id={'USER_PASSWORD'}/>} value$={password$}/>
            </FormControl>
            <FormControl>
                <Button variant="primary" onClick$={onSubmit$}><TranslatedMessage id={'AUTH_SIGNUP'}/></Button>
            </FormControl>
        </>
    );

};

export const SignUpPage = () => {

    return (
        <Provider container={AuthenticationContainer}>
            <PageLayout content={
                <Content/>
            }/>
        </Provider>
    );
};

export default SignUpPage;