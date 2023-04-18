import { useEffect, useRef } from 'react';
import { BehaviorSubject, skip } from 'rxjs';

export const useInteraction = <T>(handler: (param: T) => void, initialValue: T) => {
    const subjectRef = useRef(new BehaviorSubject<T>(initialValue));

    useEffect(() => {
        const subscription = subjectRef.current.pipe(skip(1)).subscribe(handler);
        return () => subscription.unsubscribe();
    }, []);

    return subjectRef.current;
};