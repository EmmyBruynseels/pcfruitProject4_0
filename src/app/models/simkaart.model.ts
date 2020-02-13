import { Arduino } from './arduino.model';

export class Simkaart {
    constructor(public simkaartID: number,
        public provider: string,
        public pin1: string,
        public pin2: string,
        public puk1: string,
        public puk2: string,
        public telefoonNummer: string,
        public status: string,
        public arduinoID: number,
        public arduino: Arduino ) {
    }
}
