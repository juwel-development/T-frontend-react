import { Navbar } from '../Common/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import { TranslatedMessage } from '../Common/Typography/TranslatedMessage';
import { UserViewModel } from '../../../Application/ViewModel/UserViewModel';
import { AuthenticationQuery } from '../../../Application/Query/AuthenticationQuery';
import { Button } from '../Common/Button';

export const NavigationMenu = () => {
    const [loggedInUser, setLoggedInUser] = useState<UserViewModel | undefined>();
    const getAuthenticatedUser$ = useRef(AuthenticationQuery.getAuthenticatedUser$);

    useEffect(() => {
        const subscription = getAuthenticatedUser$.current().subscribe(setLoggedInUser);
        return () => subscription.unsubscribe();
    }, []);

    console.log(loggedInUser);

    return (
        <Navbar end={(<Button><TranslatedMessage id={'AUTH_LOGIN'}/></Button>)}>
            <TranslatedMessage id="COMMON_BRAND"/>
        </Navbar>
    );
};