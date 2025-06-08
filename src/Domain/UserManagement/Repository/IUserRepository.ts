import type { UserModel } from 'Domain/UserManagement/Model/UserModel';
import type { Observable } from 'rxjs';

export interface IUserRepository {
  Users$: Observable<UserModel[]>;
}
