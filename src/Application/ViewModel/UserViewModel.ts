export class UserViewModel {
    private readonly _id: string;
    private readonly _fullName: string;

    constructor(id: string, fullName: string) {
        this._id = id;
        this._fullName = fullName;

    }

    public get Id(): string {
        return this._id;
    }

    public get FullName(): string {
        return `${this._fullName}`;
    }
}