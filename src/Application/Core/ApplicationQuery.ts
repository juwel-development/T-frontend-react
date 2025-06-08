import { CoreToken } from 'Domain/Core/CoreToken';
import type { IThemeRepository } from 'Domain/Core/IThemeRepository';
import type { Observable } from 'rxjs';
import { inject, singleton } from 'tsyringe';

import 'Domain/Core/CoreModule';

@singleton()
export class ApplicationQuery {
  public readonly Theme$: Observable<'light' | 'dark'>;

  constructor(
    @inject(CoreToken.ThemeRepository) themeRepository: IThemeRepository,
  ) {
    this.Theme$ = themeRepository.Theme$;
  }
}
