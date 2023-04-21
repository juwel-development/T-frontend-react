import { UserModel } from '../Model/UserModel';

export interface IUserRepository {

    addUser(user: UserModel): void;

    getByEmail(email: string): UserModel | undefined;
}