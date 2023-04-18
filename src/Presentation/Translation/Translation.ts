import { from, map, Observable } from 'rxjs';
import { en_US } from './Resources/en_US';

type TSupportedLanguage = 'en-US' | 'de-DE';

export class Translation {
    public static readonly Instance = new Translation();

    private Translation() {
        // Private constructor to prevent instantiation
    }

    public get CurrentLanguage(): TSupportedLanguage {
        return 'en-US';
    }

    public getMessages$ = (): Observable<typeof en_US> => {
        const key = this.CurrentLanguage.replace('-', '_');

        return from(import(`./Resources/${key}.ts`)).pipe(map(module => module[key]));
    };
}