import { useInjection } from 'inversify-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthenticationCommandHandler } from '../../../Application/Command/Handler/AuthenticationCommandHandler';
import type { AuthenticationQuery } from '../../../Application/Query/AuthenticationQuery';
import { UserViewModel } from '../../../Application/ViewModel/UserViewModel';
import { TYPES } from '../../../Container/TYPES';
import { useAction } from '../../../Framework/Presentation/Hook/useAction';
import { PATH } from '../../Routing/Path';
import { Button } from '../Common/Button';
import { Navbar } from '../Common/Navbar';
import { TextDecoration } from '../Common/Typography/TextDecoration';
import { TranslatedMessage } from '../Common/Typography/TranslatedMessage';

export const NavigationMenu = () => {
    const [loggedInUser, setLoggedInUser] = useState<UserViewModel | undefined>();
    const getAuthenticatedUser$ = useInjection<AuthenticationQuery>(TYPES.AuthenticationQuery).getAuthenticatedUser$();
    const authenticationCommandHandler = useInjection<AuthenticationCommandHandler>(TYPES.AuthenticationCommandHandler);

    const navigate = useNavigate();
    const navigateToHome$ = useAction(() => navigate(PATH.HOME));
    const navigateToLogin$ = useAction(() => navigate(PATH.LOGIN));
    const navigateToSignup$ = useAction(() => navigate(PATH.SIGN_UP));
    const logout$ = useAction(() => authenticationCommandHandler.logout());

    useEffect(() => {
        const subscription = getAuthenticatedUser$.subscribe(setLoggedInUser);
        return () => subscription.unsubscribe();
    }, []);

    return (
        <Navbar
            end={(
                loggedInUser
                    ? <>
                        <TextDecoration decoration="uppercase">{loggedInUser.FullName}</TextDecoration>
                        <Button variant="ghost" onClick$={logout$}><TranslatedMessage id="AUTH_LOGOUT"/></Button>
                    </>
                    : (
                        <>
                            <Button variant="ghost" onClick$={navigateToSignup$}><TranslatedMessage id={'AUTH_SIGNUP'}/></Button>
                            <Button variant="ghost" onClick$={navigateToLogin$}><TranslatedMessage id={'AUTH_LOGIN'}/></Button>
                        </>
                    )
            )}>
            <Button variant="ghost" onClick$={navigateToHome$}><TranslatedMessage id="COMMON_BRAND"/></Button>
        </Navbar>
    );
};