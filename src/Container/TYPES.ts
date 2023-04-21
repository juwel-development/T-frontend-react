export const TYPES = {
    //Application
    AuthenticationCommandHandler: Symbol('AuthenticationCommand'),
    AuthenticationQuery: Symbol('AuthenticationQuery'),

    //Domain
    GetAuthenticatedUserUseCase: Symbol('GetAuthenticatedUserUseCase'),
    LogoutUseCase: Symbol('LogoutUseCase'),
    LoginUseCase: Symbol('LoginUseCase'),
    SignUpUseCase: Symbol('SignUpUseCase'),

    //Infrastructure
    AuthenticationRepository: Symbol('AuthenticationRepository'),
    UserRepository: Symbol('UserRepository')
};