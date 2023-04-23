import { injectable } from 'inversify';
import { map, Observable, Subject } from 'rxjs';
import { LoginFailedError } from '../../../Domain/Model/Error/LoginFailedError';
import { ErrorResult } from '../../../Domain/Model/Result/ErrorResult';
import { MessageType, MessageViewModel } from '../../ViewModel/MessageViewModel';

@injectable()
export class ApplicationCommandHandler {
    public Error$: Subject<ErrorResult> = new Subject<ErrorResult>();

    public get Message$(): Observable<MessageViewModel> {
        //setTimeout(() => this.Error$.next(new ErrorResult(new LoginFailedError())), 1000);

        return this.Error$.pipe(
            map(result => ApplicationCommandHandler.getMessageFromError(result.Error))
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