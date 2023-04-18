import React from 'react';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';
import { TranslatedMessage } from '../../Component/Common/Typography/TranslatedMessage';

export const HomePage = () => {

    return (
        <PageLayout content={
            <Heading1>
                <TranslatedMessage id={'HOME_TITLE'}/>
            </Heading1>
        }/>
    );
};

export default HomePage;