import { inject, injectable } from 'inversify';
import { map, Observable } from 'rxjs';
import { TYPES } from '../../Container/TYPES';
import type { GetAuthenticatedUserUseCase } from '../../Domain/UseCase/Authentication/GetAuthenticatedUserUseCase';
import { UserViewModel } from '../ViewModel/UserViewModel';

@injectable()
export class AuthenticationQuery {

    @inject(TYPES.GetAuthenticatedUserUseCase)
    private readonly getAuthenticatedUserUseCase!: GetAuthenticatedUserUseCase;

    public getAuthenticatedUser$(): Observable<UserViewModel | undefined> {
        return this.getAuthenticatedUserUseCase.execute().pipe(
            map(model => model && UserViewModel.Factory
                .setId(model.Id)
                .setFullName(model.FirstName || '', model.LastName || '')
                .Model
            )
        );
    }
}