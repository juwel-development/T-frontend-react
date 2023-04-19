import React from 'react';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';

export const Error404Page = () => {
    return (
        <PageLayout content={
            <Heading1>404</Heading1>
        }/>
    );
};

export default Error404Page;