import { Arduino } from './arduino.model';

export class ArduinoError {
    constructor(
        public arduinoErrorID: number,
        public arduinoID: number,
        public errorID: number,
        public arduino: Arduino,
        public error: Error) {
    }
}
