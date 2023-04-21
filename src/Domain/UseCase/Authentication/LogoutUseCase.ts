import { inject, injectable } from 'inversify';
import { TYPES } from '../../../Container/TYPES';
import { IAuthenticationRepository } from '../../Repository/IAuthenticationRepository';
import { ICommandUseCase } from '../ICommandUseCase';

@injectable()
export class LogoutUseCase implements ICommandUseCase<void> {
    constructor(
        @inject(TYPES.AuthenticationRepository) private readonly authenticationRepository: IAuthenticationRepository,
    ) {
    }

    public execute(): void {
        this.authenticationRepository.setAuthenticatedUser(undefined);
    }
}