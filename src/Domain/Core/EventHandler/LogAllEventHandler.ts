import { Logger } from '@juwel-development/beautiful-logger';
import {
  EventHandler,
  type IEventHandler,
} from '@juwel-development/react-observable-tools';

@EventHandler(/.*/)
class LogAllEventHandler implements IEventHandler<unknown> {
  public handle(event: unknown): void {
    Logger.getLogger(LogAllEventHandler.name).debug(
      new Date().getTime(),
      event,
    );
  }
}
