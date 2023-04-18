export class UserViewModel {
    private readonly id: string;
    private readonly fullName: string;

    constructor(id: string, fullName: string) {
        this.id = id;
        this.fullName = fullName;

    }

    public get Id(): string {
        return this.id;
    }

    public get FullName(): string {
        return `${this.fullName}`;
    }
}