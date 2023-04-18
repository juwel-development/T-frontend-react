import { Provider } from 'inversify-react';
import React from 'react';
import { AuthenticationContainer } from '../../../Container/AuthenticationContainer';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';

export const LoginPage = () => {
    return (
        <Provider container={AuthenticationContainer}>
            <PageLayout content={
                <Heading1>Login</Heading1>
            }/>
        </Provider>
    );
};

export default LoginPage;