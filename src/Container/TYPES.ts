export const TYPES = {
    //Application
    AuthenticationCommandHandler: Symbol('AuthenticationCommandHandler'),
    ApplicationCommandHandler: Symbol('ApplicationCommandHandler'),

    AuthenticationQuery: Symbol('AuthenticationQuery'),
    ApplicationQuery: Symbol('ApplicationQuery'),

    //Domain
    GetAuthenticatedUserUseCase: Symbol('GetAuthenticatedUserUseCase'),
    LogoutUseCase: Symbol('LogoutUseCase'),
    LoginUseCase: Symbol('LoginUseCase'),
    SignUpUseCase: Symbol('SignUpUseCase'),

    //Infrastructure
    AuthenticationRepository: Symbol('AuthenticationRepository'),
    UserRepository: Symbol('UserRepository')
};