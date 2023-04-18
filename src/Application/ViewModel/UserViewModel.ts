class UserViewModelFactory {
    private _model: UserViewModel = new UserViewModel();

    public get Model(): UserViewModel {
        return this._model;
    }

    public setId(id: string): UserViewModelFactory {
        this._model.Id = id;
        return this;
    }

    public setFullName(firstName: string, lastName: string): UserViewModelFactory {
        this._model.FullName = firstName || lastName ? `${firstName} ${lastName}` : 'Du';
        return this;
    }
}

export class UserViewModel {
    public Id = '';
    public FullName = '';

    public static get Factory() {
        return new UserViewModelFactory();
    }
}
