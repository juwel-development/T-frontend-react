import { Container } from 'inversify';
import { ApplicationCommandHandler } from '../Application/Command/Handler/ApplicationCommandHandler';
import { AuthenticationCommandHandler } from '../Application/Command/Handler/AuthenticationCommandHandler';
import { ApplicationQuery } from '../Application/Query/ApplicationQuery';
import { AuthenticationQuery } from '../Application/Query/AuthenticationQuery';
import { GetAuthenticatedUserUseCase } from '../Domain/UseCase/Authentication/GetAuthenticatedUserUseCase';
import { LoginUseCase } from '../Domain/UseCase/Authentication/LoginUseCase';
import { LogoutUseCase } from '../Domain/UseCase/Authentication/LogoutUseCase';
import { SignUpUseCase } from '../Domain/UseCase/Authentication/SignUpUseCase';
import { AuthenticationRepository } from '../Infrastructure/Repository/AuthenticationRepository';
import { TYPES } from './TYPES';

export const ApplicationContainer = new Container();

//Application
ApplicationContainer.bind(TYPES.AuthenticationCommandHandler).to(AuthenticationCommandHandler).inTransientScope();
ApplicationContainer.bind(TYPES.AuthenticationQuery).to(AuthenticationQuery).inTransientScope();
ApplicationContainer.bind(TYPES.ApplicationCommandHandler).to(ApplicationCommandHandler).inSingletonScope();
ApplicationContainer.bind(TYPES.ApplicationQuery).to(ApplicationQuery).inTransientScope();

//Domain
ApplicationContainer.bind(TYPES.GetAuthenticatedUserUseCase).to(GetAuthenticatedUserUseCase).inTransientScope();
ApplicationContainer.bind(TYPES.LoginUseCase).to(LoginUseCase).inTransientScope();
ApplicationContainer.bind(TYPES.LogoutUseCase).to(LogoutUseCase).inTransientScope();
ApplicationContainer.bind(TYPES.SignUpUseCase).to(SignUpUseCase).inTransientScope();

//Infrastructure
ApplicationContainer.bind(TYPES.AuthenticationRepository).to(AuthenticationRepository).inSingletonScope();
