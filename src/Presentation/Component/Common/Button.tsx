import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const button = cva('', { variants: {} });

interface IProps extends VariantProps<typeof button>, PropsWithChildren {
}

export const Button = ({ children }: IProps) => {
    return (
        <button className={button({})}>
            {children}
        </button>
    );
};