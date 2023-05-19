import { injectable } from 'inversify';
import { Subject } from 'rxjs';
import { ErrorResult } from '../../../Domain/Model/Result/ErrorResult';

@injectable()
export class ApplicationCommandHandler {
    public Error$: Subject<ErrorResult> = new Subject<ErrorResult>();
}