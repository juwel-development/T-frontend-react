import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

export interface IAuthenticationRepository {
    getCurrentUser$(): Observable<UserModel | undefined>;

    setAuthenticatedUser(user: UserModel | undefined): void;
}