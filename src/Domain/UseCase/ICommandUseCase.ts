import { Subject } from 'rxjs';
import { ErrorResult } from '../Model/Result/ErrorResult';

export interface ICommandUseCase<Req, Res = void> {
    execute(request: Req, error$?: Subject<ErrorResult>): Res;
}