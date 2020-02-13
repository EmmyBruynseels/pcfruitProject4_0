import { Arduino } from './arduino.model';
import { Verzending } from './verzending.model';

export class Meting {
    constructor(public metingID: number,
        public datum: Date,
        public luchttemperatuur: number,
        public luchtvochtigheid: number,
        public bodemspanning: number,
        public bodemtemperatuur: number,
        public lichtsterkte: number,
        public vruchtgrootteAppel: number,
        public vruchtgroottePeer: number,
        public opmerkingen: string,
        public temperatuurEenheid: string,
        public lichtsterkteEenheid: string,
        public grootteEenheid: string,
        public vochtigheidEenheid: string,
        public arduinoID: number,
        public arduino: Arduino,
        public verzendingID: number,
        public verzending: Verzending ) {
    }
}