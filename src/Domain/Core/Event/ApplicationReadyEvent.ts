export const ApplicationReadyEventType = 'core:application-ready';

export class ApplicationReadyEvent {
  public readonly type: string;

  constructor() {
    this.type = ApplicationReadyEventType;
  }
}
