import {
  EventHandler,
  type IEventHandler,
} from '@juwel-development/react-observable-tools';
import { CoreToken } from 'Domain/Core/CoreToken';
import {
  type ToggleThemeEvent,
  ToggleThemeEventType,
} from 'Domain/Core/Event/ToggleThemeEvent';
import type { IThemeRepository } from 'Domain/Core/Repository/IThemeRepository';
import { take } from 'rxjs';
import { inject, injectable } from 'tsyringe';

@EventHandler(ToggleThemeEventType)
@injectable()
class ToggleThemeEventHandler implements IEventHandler<ToggleThemeEvent> {
  constructor(
    @inject(CoreToken.ThemeRepository)
    private readonly themeRepository: IThemeRepository,
  ) {}

  public handle(): void {
    this.themeRepository.Theme$.pipe(take(1)).subscribe((theme) => {
      if (theme === 'dark') {
        this.themeRepository.toggleTheme('light');
        document.documentElement.classList.remove('dark');
      } else {
        this.themeRepository.toggleTheme('dark');
        document.documentElement.classList.add('dark');
      }
    });
  }
}
