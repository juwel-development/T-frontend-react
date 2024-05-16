import { inject, injectable } from 'inversify';
import { TYPES } from 'Container/TYPES';
import { SignUpEvent } from '../../Model/Event/SignUpEvent';
import { UserModel } from '../../Model/UserModel';
import { IAuthenticationRepository } from '../../Repository/IAuthenticationRepository';
import { IUserRepository } from '../../Repository/IUserRepository';
import { ICommandUseCase } from '../ICommandUseCase';

@injectable()
export class SignUpUseCase implements ICommandUseCase<SignUpEvent> {
    constructor(
        @inject(TYPES.AuthenticationRepository) private readonly authenticationRepository: IAuthenticationRepository,
        @inject(TYPES.UserRepository) private readonly userRepository: IUserRepository,
    ) {
    }

    public execute(event: SignUpEvent) {
        const user = UserModel.Factory
            .setEmail(event.Email)
            .setPassword(event.Password)
            .Model;

        this.authenticationRepository
            .setAuthenticatedUser(user);

        this.userRepository.addUser(user);
    }
}