export abstract class AError extends Error {
    constructor(message?: string) {
        super(message);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.__proto__ = new.target.prototype;
    }
}