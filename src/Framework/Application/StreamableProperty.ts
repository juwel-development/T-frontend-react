import { BehaviorSubject, mergeMap, Observable, of } from 'rxjs';

export class StreamableProperty<T> {

    public Value$: BehaviorSubject<T>;

    public IsValid$: Observable<boolean>;

    constructor(value: T, validationRules: ((value: T) => boolean)[] = []) {
        this.Value$ = new BehaviorSubject<T>(value);
        this.IsValid$ = this.Value$.pipe(
            mergeMap((value) => of(
                validationRules.every((rule) => rule(value))
            )),
        );
    }
}