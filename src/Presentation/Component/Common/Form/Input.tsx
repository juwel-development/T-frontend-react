import { cva, VariantProps } from 'class-variance-authority';
import { uniqueId } from 'lodash';
import React, { ChangeEvent, PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Subject } from 'rxjs';
import { Label } from './Label';

const input = cva('border-b border-border-color border-b-2 rounded py-2 px-4 w-full focus:outline-none focus:border-primary shadow-sm transition-colors peer duration-300', {
    variants: {}
});

interface IProps extends VariantProps<typeof input>, PropsWithChildren {
    value$?: Subject<string>;
    placeholder?: string;
    label?: ReactNode;
}

export const Input = ({ label, placeholder = ' ', value$ }: IProps) => {
    const [value, setValue] = useState<string>('');
    const id = useRef(uniqueId('input')).current;

    useEffect(() => {
        const subscription = value$ && value$.subscribe((currentValue) => {
            setValue(currentValue);
        });

        return () => subscription && subscription.unsubscribe();
    });

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        value$?.next(event.target.value) || setValue(event.target.value);
    }, []);


    return (
        <>
            <input id={id} className={input()} value={value} placeholder={placeholder} onChange={handleOnChange}/>
            {label && <Label htmlFor={id}>{label}</Label>}
        </>
    );
};