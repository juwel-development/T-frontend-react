import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren, ReactNode } from 'react';

const navbar = cva('flex align-center w-screen bg-primary shadow sticky top-0 flex', {
    variants: {
        color: {
            primary: 'bg-primary text-primary-contrast',
        }
    },
    defaultVariants: {
        color: 'primary'
    }
});

interface IProps extends VariantProps<typeof navbar>, PropsWithChildren {
    end?: ReactNode;
}

export const Navbar = ({ color, children, end }: IProps) => {
    return (
        <nav className={navbar({ color })}>
            <div className="p-2 sm:px-4 md:px-8">
                {children}
            </div>
            <div className="flex-grow"/>
            <div className="p-2 sm:px-4 md:px-8">
                {end}
            </div>
        </nav>
    );
};