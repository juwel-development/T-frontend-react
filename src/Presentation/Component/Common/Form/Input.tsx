import { cva, VariantProps } from 'class-variance-authority';
import uniqueId from 'lodash/uniqueId';
import React, { ChangeEvent, PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Observable, Subject } from 'rxjs';
import { Label } from './Label';

const input = cva('border-b border-border-color border-b-2 rounded py-2 px-4 w-full focus:outline-none focus:border-primary shadow-sm transition-colors peer duration-300', {
    variants: {
        state: {
            error: 'border-error',
        }
    }
});

interface IProps extends VariantProps<typeof input>, PropsWithChildren {
    value$?: Subject<string>;
    isValid$?: Observable<boolean>;
    label?: ReactNode;
    type?: 'text' | 'password';
}

export const Input = ({ label, type = 'text', isValid$, value$ }: IProps) => {
    const [value, setValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const [showValidation, setShowValidation] = useState<boolean>(false);

    const id = useRef(uniqueId('input')).current;

    useEffect(() => {
        const subscription = value$ && value$.subscribe((currentValue) => {
            setValue(currentValue);
        });

        return () => subscription && subscription.unsubscribe();
    });

    useEffect(() => {
        const subscription = isValid$ && isValid$.subscribe((currentIsValid) => {
            setIsValid(currentIsValid);
        });

        return () => subscription && subscription.unsubscribe();
    });

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        value$?.next(event.target.value) || setValue(event.target.value);
    }, []);

    const handleOnBlur = useCallback(() => {
        setShowValidation(true);
    }, []);

    return (
        <>
            <input
                id={id}
                className={input({ state: !showValidation || isValid ? undefined : 'error' })}
                value={value}
                placeholder=" "
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                type={type}
            />
            {label && <Label htmlFor={id}>{label}</Label>}
        </>
    );
};