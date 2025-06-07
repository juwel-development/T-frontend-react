import type { Observable } from 'rxjs';

export interface IThemeRepository {
  toggleTheme: (theme: 'dark' | 'light') => void;
  Theme$: Observable<'dark' | 'light'>;
}
