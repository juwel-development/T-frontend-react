import { inject, injectable } from 'inversify';
import { TYPES } from '../../Container/TYPES';
import type { SignUpUseCase } from '../../Domain/UseCase/Authentication/SignUpUseCase';

@injectable()
export class AuthenticationCommand {
    constructor(
        @inject(TYPES.SignUpUseCase) private readonly signUpUseCase: SignUpUseCase
    ) {
    }

    public signUp(email: string, password: string) {
        this.signUpUseCase.execute(email, password);
    }
}