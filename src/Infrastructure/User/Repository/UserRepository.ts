import { UserModel } from 'Domain/UserManagement/Model/UserModel';
import type { IUserRepository } from 'Domain/UserManagement/Repository/IUserRepository';
import { ReplaySubject } from 'rxjs';

export class UserRepository implements IUserRepository {
  public readonly Users$: ReplaySubject<UserModel[]> = new ReplaySubject(1);

  constructor() {
    this.Users$.next([
      UserModel.Builder.FirstName('John')
        .LastName('Doe')
        .Email('john.doe@company.com')
        .build(),
    ]);
  }
}
