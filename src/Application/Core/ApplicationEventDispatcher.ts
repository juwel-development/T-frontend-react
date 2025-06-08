import 'Domain/Core/CoreModule';

import {
  GlobalEventStreamToken,
  type TEvent,
} from '@juwel-development/react-observable-tools';
import { ApplicationReadyEvent } from 'Domain/Core/Event/ApplicationReadyEvent';
import { ToggleThemeEvent } from 'Domain/Core/Event/ToggleThemeEvent';
import { TranslationReadyEvent } from 'Domain/Core/Event/TranslationReadyEvent';
import type { Subject } from 'rxjs';
import { inject, singleton } from 'tsyringe';

@singleton()
export class ApplicationEventDispatcher {
  constructor(
    @inject(GlobalEventStreamToken)
    private readonly globalEvent$: Subject<TEvent>,
  ) {}

  public applicationReady() {
    this.globalEvent$.next(new ApplicationReadyEvent());
  }

  public toggleTheme() {
    this.globalEvent$.next(new ToggleThemeEvent());
  }

  public translationReady() {
    this.globalEvent$.next(new TranslationReadyEvent());
  }
}
