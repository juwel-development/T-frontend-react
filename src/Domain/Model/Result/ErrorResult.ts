export class ErrorResult {
    public Error: Error;

    constructor(error: Error) {
        this.Error = error;
    }
}