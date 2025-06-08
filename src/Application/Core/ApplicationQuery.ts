import {
  GlobalEventStreamToken,
  type TEvent,
} from '@juwel-development/react-observable-tools';
import { CoreToken } from 'Domain/Core/CoreToken';
import { TranslationReadyEventType } from 'Domain/Core/Event/TranslationReadyEvent';
import type { IThemeRepository } from 'Domain/Core/Repository/IThemeRepository';
import { type Observable, type Subject, filter, map, startWith } from 'rxjs';
import { inject, singleton } from 'tsyringe';

import 'Domain/Core/CoreModule';

@singleton()
export class ApplicationQuery {
  public readonly Theme$: Observable<'light' | 'dark'>;
  public readonly TranslationReady$: Observable<boolean>;

  constructor(
    @inject(CoreToken.ThemeRepository) themeRepository: IThemeRepository,
    @inject(GlobalEventStreamToken) globalEvent$: Subject<TEvent>,
  ) {
    this.Theme$ = themeRepository.Theme$;

    this.TranslationReady$ = globalEvent$.pipe(
      startWith({ type: 'core:translation-init' }),

      filter(
        (event) =>
          event.type === TranslationReadyEventType ||
          event.type === 'core:translation-init',
      ),
      map((value: TEvent) => {
        return value.type === TranslationReadyEventType;
      }),
    );
  }
}
