import { Container } from 'inversify';
import { AuthenticationCommand } from '../Application/Command/AuthenticationCommand';
import { AuthenticationQuery } from '../Application/Query/AuthenticationQuery';
import { GetAuthenticatedUserUseCase } from '../Domain/UseCase/Authentication/GetAuthenticatedUserUseCase';
import { SignUpUseCase } from '../Domain/UseCase/Authentication/SignUpUseCase';
import { AuthenticationRepository } from '../Infrastructure/Repository/AuthenticationRepository';
import { TYPES } from './TYPES';

export const AuthenticationContainer = new Container();

//Application
AuthenticationContainer.bind(TYPES.AuthenticationCommand).to(AuthenticationCommand).inTransientScope();
AuthenticationContainer.bind(TYPES.AuthenticationQuery).to(AuthenticationQuery).inTransientScope();

//Domain
AuthenticationContainer.bind(TYPES.GetAuthenticatedUserUseCase).to(GetAuthenticatedUserUseCase).inTransientScope();
AuthenticationContainer.bind(TYPES.SignUpUseCase).to(SignUpUseCase).inTransientScope();

//Infrastructure
AuthenticationContainer.bind(TYPES.AuthenticationRepository).to(AuthenticationRepository).inSingletonScope();
