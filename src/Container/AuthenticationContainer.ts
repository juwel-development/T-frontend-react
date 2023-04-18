import { Container } from 'inversify';
import { AuthenticationQuery } from '../Application/Query/AuthenticationQuery';
import { GetAuthenticatedUserUseCase } from '../Domain/UseCase/GetAuthenticatedUserUseCase';
import { AuthenticationRepository } from '../Infrastructure/Repository/AuthenticationRepository';
import { TYPES } from './TYPES';

export const AuthenticationContainer = new Container();

//Application
AuthenticationContainer.bind(TYPES.AuthenticationQuery).to(AuthenticationQuery).inTransientScope();

//Domain
AuthenticationContainer.bind(TYPES.GetAuthenticatedUserUseCase).to(GetAuthenticatedUserUseCase).inTransientScope();

//Infrastructure
AuthenticationContainer.bind(TYPES.AuthenticationRepository).to(AuthenticationRepository).inSingletonScope();
