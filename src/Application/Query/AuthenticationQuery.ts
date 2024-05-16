import { inject, injectable } from 'inversify';
import { map, Observable } from 'rxjs';
import { TYPES } from 'Container/TYPES';
import { UserModel } from 'Domain/Model/UserModel';
import { IQueryUseCase } from 'Domain/UseCase/IQueryUseCase';
import { UserViewModel } from '../ViewModel/UserViewModel';

@injectable()
export class AuthenticationQuery {

    @inject(TYPES.GetAuthenticatedUserUseCase)
    private readonly getAuthenticatedUserUseCase!: IQueryUseCase<void, UserModel | undefined>;

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