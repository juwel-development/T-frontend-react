import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Container/TYPES';
import { LoginFailedError } from '../../../Domain/Model/Error/LoginFailedError';
import { LoginEvent } from '../../../Domain/Model/Event/LoginEvent';
import { SignUpEvent } from '../../../Domain/Model/Event/SignUpEvent';
import { ErrorResult } from '../../../Domain/Model/Result/ErrorResult';
import { ICommandUseCase } from '../../../Domain/UseCase/ICommandUseCase';
import { LoginCommand } from '../Authentication/LoginCommand';
import { SignUpCommand } from '../Authentication/SignUpCommand';
import { ApplicationCommandHandler } from './ApplicationCommandHandler';

@injectable()
export class AuthenticationCommandHandler {
    constructor(
        @inject(TYPES.SignUpUseCase) private readonly signUpUseCase: ICommandUseCase<SignUpEvent>,
        @inject(TYPES.LoginUseCase) private readonly loginUseCase: ICommandUseCase<LoginEvent>,
        @inject(TYPES.LogoutUseCase) private readonly logoutUseCase: ICommandUseCase<void>,
        @inject(TYPES.ApplicationCommandHandler) private readonly applicationCommandHandler: ApplicationCommandHandler,
    ) {
    }

    public signUp(command: SignUpCommand) {
        const event = new SignUpEvent();
        event.Email = command.Email.Value$.value;
        event.Password = command.Password.Value$.value;

        this.signUpUseCase.execute(event);
    }

    public login(command: LoginCommand) {
        const event = new LoginEvent();
        event.Email = command.Email.Value$.value;
        event.Password = command.Password.Value$.value;

        this.applicationCommandHandler.Error$.next(new ErrorResult(
            new LoginFailedError(),
        ));

        this.loginUseCase.execute(event, this.applicationCommandHandler.Error$);
    }

    logout() {
        this.logoutUseCase.execute();
    }
}