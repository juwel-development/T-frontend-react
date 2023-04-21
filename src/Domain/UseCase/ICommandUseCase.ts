export interface ICommandUseCase<Req, Res = void> {
    execute(request: Req): Res;
}