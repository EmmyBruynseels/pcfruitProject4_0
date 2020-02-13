import { Simkaart } from './simkaart.model';
import { Meting } from './meting.model';

export class Arduino {
  constructor(
    public arduinoID: number,
    public naam: string,
    public model: string,
    public logger: string,
    public status: string,
    public productieDatum: Date,
    public updateDatum: Date,
    public simkaart: Simkaart,
    public metingen: Meting[]) {
  }
}
