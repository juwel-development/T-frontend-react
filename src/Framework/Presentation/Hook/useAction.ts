import { useEffect, useRef } from 'react';
import { Subject } from 'rxjs';

export const useAction = (handler: () => void, dependencies: unknown[] = []) => {
    const subjectRef = useRef(new Subject<void>());

    useEffect(() => {
        const subscription = subjectRef.current.subscribe(handler);

        return () => subscription.unsubscribe();
    }, dependencies);

    return subjectRef.current;
};