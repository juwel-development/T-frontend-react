import React, { PropsWithChildren } from 'react';

export const FormControl = ({ children }: PropsWithChildren) => {
    return (
        <div className='relative py-3'>
            {children}
        </div>
    );
};