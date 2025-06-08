import { StrictBuilder } from 'Framework/StrictBuilder';
import { v4 } from 'uuid';

export class UserModel {
  public Id = '';
  public FirstName = '';
  public LastName = '';
  public Email = '';

  public static get Builder() {
    return StrictBuilder<UserModel>().Id(v4());
  }
}
