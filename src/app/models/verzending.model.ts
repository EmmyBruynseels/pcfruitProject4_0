export class Verzending {
    constructor(public verzendingID: number,
        public datum: Date,
        public status: string,
        public httpCode: number ) {
    }
}
