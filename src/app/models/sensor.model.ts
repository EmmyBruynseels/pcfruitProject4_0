import { Arduino } from './arduino.model';

export class Sensor {
    constructor(public sensorID: number,
        public naam: string,
        public modelType: string,
        public aankoopdatum: Date,
        public prijs: number,
        public bereik: number,
        public vermogen: number,
        public arduinoID: number,
        public arduino: Arduino ) {
    }
}
