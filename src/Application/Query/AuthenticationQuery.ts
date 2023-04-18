import { BehaviorSubject } from 'rxjs';
import { UserViewModel } from '../ViewModel/UserViewModel';

export class AuthenticationQuery {

    public static getAuthenticatedUser$(): BehaviorSubject<UserViewModel | undefined> {
        return new BehaviorSubject<UserViewModel | undefined>(new UserViewModel('123', 'John Doe'));
    }
}