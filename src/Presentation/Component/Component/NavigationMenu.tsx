import { useInjection } from 'inversify-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import type { AuthenticationQuery } from '../../../Application/Query/AuthenticationQuery';
import { UserViewModel } from '../../../Application/ViewModel/UserViewModel';
import { TYPES } from '../../../Container/TYPES';
import { useInteraction } from '../../Hooks/useInteraction';
import { PATH } from '../../Routing/Path';
import { Button } from '../Common/Button';
import { Navbar } from '../Common/Navbar';
import { TextDecoration } from '../Common/Typography/TextDecoration';
import { TranslatedMessage } from '../Common/Typography/TranslatedMessage';

export const NavigationMenu = () => {
    const [loggedInUser, setLoggedInUser] = useState<UserViewModel | undefined>();
    const getAuthenticatedUser$ = useInjection<AuthenticationQuery>(TYPES.AuthenticationQuery).getAuthenticatedUser$();

    const navigate = useNavigate();
    const navigateToHome$ = useInteraction<void>(() => navigate(PATH.HOME), undefined);
    const navigateToLogin$ = useInteraction<void>(() => navigate(PATH.LOGIN), undefined);
    const navigateToSignup$ = useInteraction<void>(() => navigate(PATH.SIGN_UP), undefined);

    useEffect(() => {
        const subscription = getAuthenticatedUser$.subscribe(setLoggedInUser);
        return () => subscription.unsubscribe();
    }, []);

    return (
        <Navbar
            end={(
                loggedInUser
                    ? <TextDecoration decoration="uppercase">{loggedInUser.FullName}</TextDecoration>
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