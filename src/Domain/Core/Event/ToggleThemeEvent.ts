import type { TEvent } from '@juwel-development/react-observable-tools';

export const ToggleThemeEventType = 'core:toggle-theme';

export class ToggleThemeEvent implements TEvent {
  public readonly type: string;

  constructor() {
    this.type = ToggleThemeEventType;
  }
}
