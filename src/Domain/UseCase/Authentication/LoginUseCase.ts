import { inject, injectable } from 'inversify';
import { Subject } from 'rxjs';
import { TYPES } from '../../../Container/TYPES';
import { LoginFailedError } from '../../Model/Error/LoginFailedError';
import { LoginEvent } from '../../Model/Event/LoginEvent';
import { ErrorResult } from '../../Model/Result/ErrorResult';
import { IAuthenticationRepository } from '../../Repository/IAuthenticationRepository';
import { IUserRepository } from '../../Repository/IUserRepository';
import { ICommandUseCase } from '../ICommandUseCase';

@injectable()
export class LoginUseCase implements ICommandUseCase<LoginEvent> {
    constructor(
        @inject(TYPES.AuthenticationRepository) private readonly authenticationRepository: IAuthenticationRepository,
        @inject(TYPES.UserRepository) private readonly userRepository: IUserRepository,
    ) {
    }

    public execute(event: LoginEvent, error$: Subject<ErrorResult>): void {
        const user = this.userRepository.getByEmail(event.Email);

        if (user && user.Password === event.Password) {
            this.authenticationRepository.setAuthenticatedUser(user);
        } else {
            error$.next(new ErrorResult(new LoginFailedError()));
        }

    }
}