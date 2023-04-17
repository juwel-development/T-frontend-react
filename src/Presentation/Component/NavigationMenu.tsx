import { Navbar } from '../Common/Navbar';
import React from 'react';
import { TranslatedMessage } from '../Common/Typography/TranslatedMessage';

export const NavigationMenu = () => {
    return (
        <Navbar>
            <TranslatedMessage id="COMMON_BRAND"/>
        </Navbar>
    );
};