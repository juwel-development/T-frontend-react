import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const classes = cva('text-4xl py-4', {
    variants: {
        color: {
            primary: 'text-primary',
        }
    },
    defaultVariants: {
        color: 'primary',
    }
});

interface IProps extends VariantProps<typeof classes>, PropsWithChildren {
}

export const Heading1 = ({ children, ...props }: IProps) => {
    return (
        <h1 className={classes(props)}>{children}</h1>
    );
};