import { injectable } from 'inversify';
import { BehaviorSubject, delay, map, Observable, tap } from 'rxjs';
import { UserModel } from '../../Domain/Model/UserModel';
import { IAuthenticationRepository } from '../../Domain/Repository/IAuthenticationRepository';
import { UserEntity } from '../Entity/UserEntity';

@injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
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
                    .setEmail(user.Email)
                    .Model
            ));
    }

    public setAuthenticatedUser(model: UserModel | undefined): void {
        this.currentUser$.next(
            model &&
            UserEntity.Factory
                .setId(model.Id)
                .setEmail(model.Email)
                .setPassword(model.Password)
                .Entity
        );
    }
}