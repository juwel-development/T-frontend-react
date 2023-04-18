import { uniqueId } from 'lodash';

export class UserEntity {
    public Id: string = uniqueId();

    public FirstName?: string;

    public LastName?: string;

    public Email = '';
}