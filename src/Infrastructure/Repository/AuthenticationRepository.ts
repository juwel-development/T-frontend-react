import { injectable } from 'inversify';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';
import { UserModel } from '../../Domain/Model/UserModel';
import { UserEntity } from '../Entity/UserEntity';

@injectable()
export class AuthenticationRepository {
    private readonly currentUser$ = new BehaviorSubject<UserEntity | undefined>(undefined);

    public getCurrentUser$(): Observable<UserModel | undefined> {
        return this.currentUser$.pipe(
            delay(200),
            tap(user => console.log('getCurrentUser$ result:', user)),
            map(
                user => user && UserModel.Factory
                    .setId(user.Id)
                    .setFirstName(user.FirstName)
                    .setLastName(user.LastName)
                    .Model
            ));
    }

    public setAuthenticatedUser(model: UserModel) {
        this.currentUser$.next(
            UserEntity.Factory
                .setId(model.Id)
                .setEmail(model.Email)
                .setPassword(model.Password)
                .Entity
        );
    }
}