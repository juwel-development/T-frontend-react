import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const textDecoration = cva('', {
    variants: {
        decoration: { uppercase: 'uppercase' }
    }
});

interface IProps extends VariantProps<typeof textDecoration>, PropsWithChildren {

}

export const TextDecoration = ({ decoration, children }: IProps) => {
    return (
        <span className={textDecoration({ decoration })}>{children}</span>
    );
};