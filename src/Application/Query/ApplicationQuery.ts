import { inject, injectable } from 'inversify';
import { map, Observable } from 'rxjs';
import { TYPES } from '../../Container/TYPES';
import { LoginFailedError } from '../../Domain/Model/Error/LoginFailedError';
import { ApplicationCommandHandler } from '../Command/Handler/ApplicationCommandHandler';
import { MessageType, MessageViewModel } from '../ViewModel/MessageViewModel';

@injectable()
export class ApplicationQuery {

    constructor(
        @inject(TYPES.ApplicationCommandHandler) private readonly applicationCommandHandler: ApplicationCommandHandler,
    ) {
    }

    public get Message$(): Observable<MessageViewModel> {
        //setTimeout(() => this.Error$.next(new ErrorResult(new LoginFailedError())), 1000);

        return this.applicationCommandHandler.Error$.pipe(
            map(result => ApplicationQuery.getMessageFromError(result.Error))
        );
    }

    private static getMessageFromError(error: Error) {
        const factory = MessageViewModel.Factory.setType(MessageType.Error);

        if (error instanceof LoginFailedError) {
            factory.setTitle('ERROR_LOGIN_TITLE');
            factory.setMessage('ERROR_LOGIN_MESSAGE');
        }

        return factory.Model;
    }
}