class UserModelFactory {
    private _model: UserModel = new UserModel();

    public get Model(): UserModel {
        return this._model;
    }

    public setId(id: string): UserModelFactory {
        this._model.Id = id;
        return this;
    }

    public setFirstName(firstName?: string): UserModelFactory {
        this._model.FirstName = firstName;
        return this;
    }

    public setLastName(lastName?: string): UserModelFactory {
        this._model.LastName = lastName;
        return this;
    }
}


export class UserModel {
    public Id = '';
    public FirstName?: string;
    public LastName?: string;

    public static get Factory(): UserModelFactory {
        return new UserModelFactory();
    }
}