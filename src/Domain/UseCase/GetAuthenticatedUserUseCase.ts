import { injectable } from 'inversify';
import { UserModel } from '../Model/UserModel';

@injectable()
export class GetAuthenticatedUserUseCase {
    public execute(): UserModel {
        return new UserModel();
    }
}