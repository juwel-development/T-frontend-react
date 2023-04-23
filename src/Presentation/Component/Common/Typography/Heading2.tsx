import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const classes = cva('', {
    variants: {
        color: {
            primary: 'text-primary',
            'error': 'text-error-contrast',
            'warning': 'text-warning-contrast',
        },
        size: {
            md: 'text-2xl py-4',
            sm: 'text-md text-bold py-1',
        }
    },
    defaultVariants: {
        color: 'primary',
        size: 'md',
    }
});

interface IProps extends VariantProps<typeof classes>, PropsWithChildren {
}

export const Heading2 = ({ children, ...props }: IProps) => {
    return (
        <h2 className={classes(props)}>{children}</h2>
    );
};