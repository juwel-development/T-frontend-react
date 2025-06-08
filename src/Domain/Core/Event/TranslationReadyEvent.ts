import type { TEvent } from '@juwel-development/react-observable-tools';

export const TranslationReadyEventType = 'core:translation-ready';

export class TranslationReadyEvent implements TEvent {
  public readonly type: string;

  constructor() {
    this.type = TranslationReadyEventType;
  }
}
