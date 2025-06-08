import { UserToken } from 'Domain/UserManagement/UserToken';
import { UserRepository } from 'Infrastructure/User/Repository/UserRepository';
import { container } from 'tsyringe';

container.registerSingleton(UserToken.UserRepository, UserRepository);
