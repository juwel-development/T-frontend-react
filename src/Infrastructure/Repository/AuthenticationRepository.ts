import { injectable } from 'inversify';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserModel } from '../../Domain/Model/UserModel';
import { UserEntity } from '../Entity/UserEntity';

@injectable()
export class AuthenticationRepository {
    private readonly currentUser$ = new BehaviorSubject<UserEntity | undefined>(undefined);

    public getCurrentUser$(): Observable<UserModel | undefined> {
        return this.currentUser$.pipe(map(
            user => user
                ? UserModel.Factory
                    .setId(user.Id)
                    .setFirstName(user.FirstName)
                    .setLastName(user.LastName)
                    .Model
                : undefined
        ));
    }
}