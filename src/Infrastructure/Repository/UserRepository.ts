import { injectable } from 'inversify';
import { UserModel } from 'Domain/Model/UserModel';
import { IUserRepository } from 'Domain/Repository/IUserRepository';
import { UserEntity } from '../Entity/UserEntity';

@injectable()
export class UserRepository implements IUserRepository {
    public _userRepository = new Map<string, UserEntity>();

    public addUser(user: UserModel): void {
        const entity = UserEntity.Factory
            .setId(user.Id)
            .setEmail(user.Email)
            .setPassword(user.Password)
            .setFirstName(user.FirstName)
            .setLastName(user.LastName)
            .Entity;

        this._userRepository.set(user.Id, entity);

        console.log(this._userRepository);
    }

    public getByEmail(email: string): UserModel | undefined {
const entity = Array.from(this._userRepository.values()).find(user => user.Email === email);
        if (entity) {
            return UserModel.Factory
                .setId(entity.Id)
                .setEmail(entity.Email)
                .setPassword(entity.Password)
                .setFirstName(entity.FirstName)
                .setLastName(entity.LastName)
                .Model;
        }
    }
}