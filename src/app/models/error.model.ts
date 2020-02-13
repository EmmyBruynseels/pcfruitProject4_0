export class Error {
    constructor(public errorID: number,
        public errorCode: number,
        public beschrijving: string,
        public errors: Error[]) {
    }
}
