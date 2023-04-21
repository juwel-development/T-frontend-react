import { isNotEmpty, isEmail } from 'class-validator';
import { StreamableProperty } from '../../../Framework/Application/StreamableProperty';

export class LoginCommand {
    public Email = new StreamableProperty<string>('', [isEmail]);

    public Password = new StreamableProperty<string>('', [isNotEmpty]);
}