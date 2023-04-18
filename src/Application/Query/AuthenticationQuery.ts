import { inject, injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';
import { TYPES } from '../../Container/TYPES';
import type { GetAuthenticatedUserUseCase } from '../../Domain/UseCase/GetAuthenticatedUserUseCase';
import { UserViewModel } from '../ViewModel/UserViewModel';

@injectable()
export class AuthenticationQuery {

    @inject(TYPES.GetAuthenticatedUserUseCase)
    private readonly getAuthenticatedUserUseCase!: GetAuthenticatedUserUseCase;

    public getAuthenticatedUser$(): BehaviorSubject<UserViewModel | undefined> {
        const user = this.getAuthenticatedUserUseCase.execute();

        return new BehaviorSubject<UserViewModel | undefined>(new UserViewModel(user.Id, 'John Doe'));
    }
}