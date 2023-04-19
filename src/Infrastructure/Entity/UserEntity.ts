import * as uuid from 'uuid';

class UserEntityFactory {
    private _entity: UserEntity = new UserEntity();

    public get Entity(): UserEntity {
        return this._entity;
    }

    public setId(id: string): UserEntityFactory {
        this._entity.Id = id;
        return this;
    }

    public setFirstName(firstName?: string): UserEntityFactory {
        this._entity.FirstName = firstName;
        return this;
    }

    public setLastName(lastName?: string): UserEntityFactory {
        this._entity.LastName = lastName;
        return this;
    }

    public setEmail(email: string): UserEntityFactory {
        this._entity.Email = email;
        return this;
    }

    public setPassword(password: string): UserEntityFactory {
        this._entity.Password = password;
        return this;
    }
}

export class UserEntity {
    public Id: string = uuid.v4();
    public FirstName?: string;
    public LastName?: string;
    public Email = '';
    public Password = '';

    static get Factory(): UserEntityFactory {
        return new UserEntityFactory();
    }
}