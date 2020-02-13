import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Arduino } from '../models/arduino.model';
import { Meting } from '../models/meting.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  arduinoID = new BehaviorSubject(0);
  baseURL = environment.baseURL;
  jaar = 2020;

  constructor(private http: HttpClient) { }

  getArduinos(): Observable<Arduino[]> {
    //return this.http.get<Arduino[]>("https://localhost:5001/api/arduino");
    return this.http.get<Arduino[]>( this.baseURL + "/arduino/MetMetingen?jaar=" + this.jaar);
  }
  getMetingen(): Observable<Meting[]> {
    return this.http.get<Meting[]>( this.baseURL + "/meting?jaar=" + this.jaar);
  }
  getMetingByArduino(): Observable<Meting[]> {
    return this.http.get<Meting[]>( this.baseURL + "/meting/ByArduinoID?arduinoID=" + this.arduinoID + "&jaar=" + this.jaar);
  }
  
  getAppelWaardes():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/appel?jaar=" + this.jaar);
  }
  getPeerWaardes():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/peer?jaar=" + this.jaar);
  }
  getDatums() : Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + "/meting/datum?jaar=" + this.jaar);
  }

  getAppelWaardesByArduino():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/appelgrootteByArduinoID?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getPeerWaardesByArduino():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/peergrootteByArduinoID?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getDatumsByArduino() : Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + "/meting/datumByArduinoid?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }


  getAppelGroeiByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiAppelByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getPeerGroeiByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiPeerByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getAppelGroei(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiAppel?jaar=" + this.jaar);
  }
  getPeerGroei(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiPeer?jaar=" + this.jaar);
  }

  getTempByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/tempByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getBodemTempByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/bodemTempByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getvochtigheidByArduinoID(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/vochtigheidByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar);
  }
  getTemp(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/temp?jaar=" + this.jaar);
  }
  getBodemTemp(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/bodemTemp?jaar=" + this.jaar);
  }
  getvochtigheid(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/vochtigheid?jaar=" + this.jaar);
  }
}
