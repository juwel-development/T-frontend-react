import { Observable } from 'rxjs';

export interface IQueryUseCase<Req, Res> {
    execute(request: Req): Observable<Res>;
}