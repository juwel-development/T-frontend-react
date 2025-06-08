import { StrictBuilder } from 'Framework/StrictBuilder';
import { v4 } from 'uuid';

export class UserViewModel {
  public Id = '';
  public FullName = '';
  public Email = '';

  public static get Builder() {
    return StrictBuilder<UserViewModel>().Id(v4());
  }
}
