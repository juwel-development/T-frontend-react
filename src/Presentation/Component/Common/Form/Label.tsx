import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
    htmlFor: string;
}

export const Label = ({ htmlFor, children }: IProps) => {
    return (
        <label htmlFor={htmlFor}
               className="absolute cursor-text text-font-light text-xs left-0 -top-1 transition-all peer-focus:-top-1 peer-focus:left-0 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base duration-200">
            {children}
        </label>
    );
};