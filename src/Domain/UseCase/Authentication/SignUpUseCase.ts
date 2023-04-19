import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Container/TYPES';
import type { AuthenticationRepository } from '../../../Infrastructure/Repository/AuthenticationRepository';
import { UserModel } from '../../Model/UserModel';

@injectable()
export class SignUpUseCase {
    constructor(
        @inject(TYPES.AuthenticationRepository) private readonly authenticationRepository: AuthenticationRepository
    ) {
    }

    public execute(email: string, password: string) {
        this.authenticationRepository
            .setAuthenticatedUser(
                UserModel.Factory
                    .setEmail(email)
                    .setPassword(password)
                    .Model
            );
    }
}