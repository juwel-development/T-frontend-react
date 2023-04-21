import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Container/TYPES';
import { LoginEvent } from '../../../Domain/Model/Event/LoginEvent';
import { SignUpEvent } from '../../../Domain/Model/Event/SignUpEvent';
import { ICommandUseCase } from '../../../Domain/UseCase/ICommandUseCase';
import { LoginCommand } from '../Authentication/LoginCommand';
import { SignUpCommand } from '../Authentication/SignUpCommand';

@injectable()
export class AuthenticationCommandHandler {
    constructor(
        @inject(TYPES.SignUpUseCase) private readonly signUpUseCase: ICommandUseCase<SignUpEvent>,
        @inject(TYPES.LoginUseCase) private readonly loginUseCase: ICommandUseCase<LoginEvent>,
        @inject(TYPES.LogoutUseCase) private readonly logoutUseCase: ICommandUseCase<void>,
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

        this.loginUseCase.execute(event);
    }

    logout() {
        this.logoutUseCase.execute();
    }
}