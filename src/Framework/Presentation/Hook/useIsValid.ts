import { useEffect, useState } from 'react';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';

export const useIsValid = (validationStreams: Observable<boolean>[]) => {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const subscription = combineLatest(validationStreams)
            .pipe(
                map(input => input.every(value => value)),
                distinctUntilChanged(),
            )
            .subscribe((value) => setIsValid(value));

        return () => subscription.unsubscribe();
    }, []);

    return isValid;
};