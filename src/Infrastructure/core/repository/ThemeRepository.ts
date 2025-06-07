import type { IThemeRepository } from 'Domain/Core/IThemeRepository';
import { ReplaySubject } from 'rxjs';

export class ThemeRepository implements IThemeRepository {
  private readonly localStorageKey = 'theme';

  public Theme$ = new ReplaySubject<'dark' | 'light'>(1);

  constructor() {
    const storedTheme = localStorage.getItem(this.localStorageKey) as
      | 'dark'
      | 'light'
      | null;

    if (storedTheme === 'dark') {
      this.Theme$.next('dark');
      document.documentElement.classList.add('dark');
    } else {
      this.Theme$.next('light');
      document.documentElement.classList.remove('dark');
    }
  }

  public toggleTheme(theme: 'dark' | 'light'): void {
    localStorage.setItem(this.localStorageKey, theme);
    this.Theme$.next(theme);
  }
}
