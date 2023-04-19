import { Provider } from 'inversify-react';
import React from 'react';
import { AuthenticationContainer } from '../../../Container/AuthenticationContainer';
import { Button } from '../../Component/Common/Button';
import { FormControl } from '../../Component/Common/Form/FormControl';
import { Input } from '../../Component/Common/Form/Input';
import { Heading1 } from '../../Component/Common/Typography/Heading1';
import { TranslatedMessage } from '../../Component/Common/Typography/TranslatedMessage';
import { PageLayout } from '../../Component/Component/Layout/PageLayout';

export const SignUpPage = () => {

    return (
        <Provider container={AuthenticationContainer}>
            <PageLayout content={
                <>
                    <Heading1><TranslatedMessage id="AUTH_SIGNUP"/></Heading1>
                    <FormControl>
                        <Input label={<TranslatedMessage id="USER_EMAIL"/>}/>
                    </FormControl>
                    <FormControl>
                        <Input label={<TranslatedMessage id={'USER_PASSWORD'}/>}/>
                    </FormControl>
                    <FormControl>
                        <Button variant="primary"><TranslatedMessage id={'AUTH_SIGNUP'}/></Button>
                    </FormControl>
                </>
            }/>
        </Provider>
    );
};

export default SignUpPage;