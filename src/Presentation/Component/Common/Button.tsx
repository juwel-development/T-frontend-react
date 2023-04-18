import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';
import { Subject } from 'rxjs';

const button = cva('', {
    variants: {
        variant: {
            ghost: 'bg-transparent hover:underline px-2',
        }
    }
});

interface IProps extends VariantProps<typeof button>, PropsWithChildren {
    onClick$?: Subject<void>;
}

export const Button = ({ children, variant, onClick$ }: IProps) => {
    return (
        <button className={button({ variant })} onClick={() => onClick$ && onClick$.next()}>
            {children}
        </button>
    );
};