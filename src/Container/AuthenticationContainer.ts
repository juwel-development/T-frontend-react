import { Container } from 'inversify';
import { AuthenticationQuery } from '../Application/Query/AuthenticationQuery';
import { GetAuthenticatedUserUseCase } from '../Domain/UseCase/GetAuthenticatedUserUseCase';
import { TYPES } from './TYPES';

export const AuthenticationContainer = new Container();

//Application
AuthenticationContainer.bind(TYPES.AuthenticationQuery).to(AuthenticationQuery);

//Domain
AuthenticationContainer.bind(TYPES.GetAuthenticatedUserUseCase).to(GetAuthenticatedUserUseCase);

//Infrastructure
