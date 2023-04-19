import { useRef } from 'react';
import { BehaviorSubject } from 'rxjs';

export const useValueStream = <T>(initialValue: T) => {
    const valueStream = useRef(new BehaviorSubject<T>(initialValue)).current;

    return valueStream;
};