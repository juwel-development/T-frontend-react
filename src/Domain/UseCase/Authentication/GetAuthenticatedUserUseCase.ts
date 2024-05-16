import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import { TYPES } from 'Container/TYPES';
import { UserModel } from '../../Model/UserModel';
import { IAuthenticationRepository } from '../../Repository/IAuthenticationRepository';
import { IQueryUseCase } from '../IQueryUseCase';

@injectable()
export class GetAuthenticatedUserUseCase implements IQueryUseCase<void, UserModel | undefined> {
    constructor(
        @inject(TYPES.AuthenticationRepository) private readonly authenticationRepository: IAuthenticationRepository
    ) {
    }

    public execute(): Observable<UserModel | undefined> {
        return this.authenticationRepository.getCurrentUser$();
    }
}