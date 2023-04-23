import { Container } from 'inversify';
import { ApplicationCommandHandler } from '../Application/Command/Handler/ApplicationCommandHandler';
import { AuthenticationCommandHandler } from '../Application/Command/Handler/AuthenticationCommandHandler';
import { AuthenticationQuery } from '../Application/Query/AuthenticationQuery';
import { GetAuthenticatedUserUseCase } from '../Domain/UseCase/Authentication/GetAuthenticatedUserUseCase';
import { LoginUseCase } from '../Domain/UseCase/Authentication/LoginUseCase';
import { LogoutUseCase } from '../Domain/UseCase/Authentication/LogoutUseCase';
import { SignUpUseCase } from '../Domain/UseCase/Authentication/SignUpUseCase';
import { AuthenticationRepository } from '../Infrastructure/Repository/AuthenticationRepository';
import { TYPES } from './TYPES';

export const AuthenticationContainer = new Container();

//Application
AuthenticationContainer.bind(TYPES.AuthenticationCommandHandler).to(AuthenticationCommandHandler).inTransientScope();
AuthenticationContainer.bind(TYPES.AuthenticationQuery).to(AuthenticationQuery).inTransientScope();
AuthenticationContainer.bind(TYPES.ApplicationCommandHandler).to(ApplicationCommandHandler).inSingletonScope();

//Domain
AuthenticationContainer.bind(TYPES.GetAuthenticatedUserUseCase).to(GetAuthenticatedUserUseCase).inTransientScope();
AuthenticationContainer.bind(TYPES.LoginUseCase).to(LoginUseCase).inTransientScope();
AuthenticationContainer.bind(TYPES.LogoutUseCase).to(LogoutUseCase).inTransientScope();
AuthenticationContainer.bind(TYPES.SignUpUseCase).to(SignUpUseCase).inTransientScope();

//Infrastructure
AuthenticationContainer.bind(TYPES.AuthenticationRepository).to(AuthenticationRepository).inSingletonScope();
