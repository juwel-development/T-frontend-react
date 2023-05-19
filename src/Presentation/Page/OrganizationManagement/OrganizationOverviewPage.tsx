import { Provider } from 'inversify-react';
import React from 'react';
import { UserContainer } from '../../../Container/UserContainer';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { TranslatedMessage } from '../../Component/Common/Typography/TranslatedMessage';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';

const OrganizationOverviewPage = () => {

    return (
        <Provider container={UserContainer}>
            <PageLayout content={
                <Heading1><TranslatedMessage id="ORGANIZATION_OVERVIEW_TITLE"/></Heading1>
            }/>
        </Provider>
    );
};

export default OrganizationOverviewPage;