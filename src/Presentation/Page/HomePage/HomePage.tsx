import React from 'react';
import { Heading1 } from '../../Common/Typography/Heading1';
import { PageLayout } from '../../Component/Layout/PageLayout';
import { TranslatedMessage } from '../../Common/Typography/TranslatedMessage';

export const HomePage = () => {

    return (
        <PageLayout content={
            <Heading1><TranslatedMessage id={'HOME_TITLE'}/></Heading1>
        }/>
    );
};

export default HomePage;