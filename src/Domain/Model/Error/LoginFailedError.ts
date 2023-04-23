import { AError } from './AError';

export class LoginFailedError extends AError {
    public static KEY = 'LoginFailedError';

    constructor() {
        super(LoginFailedError.KEY);
    }
}