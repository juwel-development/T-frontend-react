import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import { TYPES } from '../../Container/TYPES';
import type { AuthenticationRepository } from '../../Infrastructure/Repository/AuthenticationRepository';
import { UserModel } from '../Model/UserModel';

@injectable()
export class GetAuthenticatedUserUseCase {
    constructor(
        @inject(TYPES.AuthenticationRepository) private readonly authenticationRepository: AuthenticationRepository
    ) {
    }

    public execute(): Observable<UserModel | undefined> {
        return this.authenticationRepository.getCurrentUser$();
    }
}