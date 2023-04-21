import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';
import { Subject } from 'rxjs';

const button = cva('py-1 disabled:bg-font-light', {
    variants: {
        variant: {
            primary: 'bg-primary hover:bg-primary-dark text-primary-contrast px-8 rounded-lg transition-colors duration-300',
            ghost: 'bg-transparent hover:underline px-2',
        },
    }
});

interface IProps extends VariantProps<typeof button>, PropsWithChildren {
    onClick$?: Subject<void>;
    disabled?: boolean;
}

export const Button = ({ children, disabled, variant, onClick$ }: IProps) => {
    return (
        <button className={button({ variant })} onClick={() => onClick$ && onClick$.next()} disabled={disabled}>
            {children}
        </button>
    );
};