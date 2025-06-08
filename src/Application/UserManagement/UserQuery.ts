import { UserViewModel } from 'Application/UserManagement/ViewModel/UserViewModel';
import type { IUserRepository } from 'Domain/UserManagement/Repository/IUserRepository';
import { UserToken } from 'Domain/UserManagement/UserToken';
import { type Observable, map } from 'rxjs';
import { inject, singleton } from 'tsyringe';

import 'Domain/UserManagement/UserModule';

@singleton()
export class UserQuery {
  public readonly Users$: Observable<UserViewModel[]>;

  constructor(
    @inject(UserToken.UserRepository)
    userRepository: IUserRepository,
  ) {
    this.Users$ = userRepository.Users$.pipe(
      map((models) =>
        models.map((model) =>
          UserViewModel.Builder.Id(model.Id)
            .Email(model.Email)
            .FullName(`${model.FirstName} ${model.LastName}`)
            .build(),
        ),
      ),
    );
  }
}
