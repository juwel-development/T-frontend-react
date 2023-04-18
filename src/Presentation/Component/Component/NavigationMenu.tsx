import React, { useEffect, useRef, useState } from 'react';
import { AuthenticationQuery } from '../../../Application/Query/AuthenticationQuery';
import { UserViewModel } from '../../../Application/ViewModel/UserViewModel';
import { Button } from '../Common/Button';
import { Navbar } from '../Common/Navbar';
import { TextDecoration } from '../Common/Typography/TextDecoration';
import { TranslatedMessage } from '../Common/Typography/TranslatedMessage';

export const NavigationMenu = () => {
    const [loggedInUser, setLoggedInUser] = useState<UserViewModel | undefined>();
    const getAuthenticatedUser$ = useRef(AuthenticationQuery.getAuthenticatedUser$);

    useEffect(() => {
        const subscription = getAuthenticatedUser$.current().subscribe(setLoggedInUser);
        return () => subscription.unsubscribe();
    }, []);

    return (
        <Navbar
            end={(
                loggedInUser
                    ? <TextDecoration decoration="uppercase">{loggedInUser.FullName}</TextDecoration>
                    : <Button variant="ghost"><TranslatedMessage id={'AUTH_LOGIN'}/></Button>
            )}>
            <Button variant="ghost"><TranslatedMessage id="COMMON_BRAND"/></Button>
        </Navbar>
    );
};