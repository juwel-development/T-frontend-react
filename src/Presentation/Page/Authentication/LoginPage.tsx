import { useAction } from '@juwel-development/react-observable-tools';
import { Provider, useInjection } from 'inversify-react';
import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router';
import { LoginCommand } from '../../../Application/Command/Authentication/LoginCommand';
import { AuthenticationCommandHandler } from '../../../Application/Command/Handler/AuthenticationCommandHandler';
import { AuthenticationQuery } from '../../../Application/Query/AuthenticationQuery';
import { UserViewModel } from '../../../Application/ViewModel/UserViewModel';
import { TYPES } from '../../../Container/TYPES';
import { UserContainer } from '../../../Container/UserContainer';
import { useIsValid } from '../../../Framework/Presentation/Hook/useIsValid';
import { Button } from '../../Component/Common/Button';
import { FormControl } from '../../Component/Common/Form/FormControl';
import { Input } from '../../Component/Common/Form/Input';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { TranslatedMessage } from '../../Component/Common/Typography/TranslatedMessage';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';
import { PATH } from '../../Routing/Path';

const Content = () => {
    const authenticationCommandHandler = useInjection<AuthenticationCommandHandler>(TYPES.AuthenticationCommandHandler);

    const [loggedInUser, setLoggedInUser] = useState<UserViewModel | undefined>();
    const getAuthenticatedUser$ = useInjection<AuthenticationQuery>(TYPES.AuthenticationQuery).getAuthenticatedUser$();

    const command = useRef<LoginCommand>(new LoginCommand()).current;
    const isValid = useIsValid([command.Email.IsValid$, command.Password.IsValid$]);

    const onSubmit$ = useAction(() => {
        isValid && authenticationCommandHandler.login(command);
    }, [isValid, authenticationCommandHandler, command]);

    useEffect(() => {
        const subscription = getAuthenticatedUser$.subscribe(setLoggedInUser);
        return () => subscription.unsubscribe();
    }, []);

    if (loggedInUser) {
        return <Navigate to={PATH.ORGANIZATION_OVERVIEW}/>;
    }

    return (
        <>
            <Heading1><TranslatedMessage id={'AUTH_LOGIN'}/></Heading1>
            <FormControl>
                <Input
                    value$={command.Email.Value$}
                    isValid$={command.Email.IsValid$}
                    label={<TranslatedMessage id={'USER_EMAIL'}/>}
                />
            </FormControl>
            <FormControl>
                <Input
                    value$={command.Password.Value$}
                    isValid$={command.Password.IsValid$}
                    type="password"
                    label={<TranslatedMessage id={'USER_PASSWORD'}/>}
                />
            </FormControl>
            <FormControl>
                <Button variant="primary" onClick$={onSubmit$} disabled={!isValid}><TranslatedMessage id={'AUTH_LOGIN'}/></Button>
            </FormControl>
        </>
    );
};


export const LoginPage = () => {
    return (
        <Provider container={UserContainer}>
            <PageLayout content={<Content/>}/>
        </Provider>
    );
};

export default LoginPage;