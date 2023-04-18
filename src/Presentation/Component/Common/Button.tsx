import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const button = cva('', {
    variants: {
        variant: {
            ghost: 'bg-transparent hover:underline px-2',
        }
    }
});

interface IProps extends VariantProps<typeof button>, PropsWithChildren {
}

export const Button = ({ children, variant }: IProps) => {
    return (
        <button className={button({ variant })}>
            {children}
        </button>
    );
};