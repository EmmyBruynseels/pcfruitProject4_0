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
  jaar = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }

  getArduinos(): Observable<Arduino[]> {
    //return this.http.get<Arduino[]>("https://localhost:5001/api/arduino");
    return this.http.get<Arduino[]>( this.baseURL + "/arduino/MetMetingen?jaar=" + this.jaar.value);
  }
  getMetingen(): Observable<Meting[]> {
    return this.http.get<Meting[]>( this.baseURL + "/meting?jaar=" + this.jaar.value);
  }
  getMetingByArduino(): Observable<Meting[]> {
    return this.http.get<Meting[]>( this.baseURL + "/meting/ByArduinoID?arduinoID=" + this.arduinoID + "&jaar=" + this.jaar.value);
  }
  
  getAppelWaardes():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/appel?jaar=" + this.jaar.value);
  }
  getPeerWaardes():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/peer?jaar=" + this.jaar.value);
  }
  getDatums() : Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + "/meting/datum?jaar=" + this.jaar.value);
  }

  getAppelWaardesByArduino():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/appelgrootteByArduinoID?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getPeerWaardesByArduino():Observable<number[]>{
    return this.http.get<number[]>(this.baseURL + "/meting/peergrootteByArduinoID?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getDatumsByArduino() : Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + "/meting/datumByArduinoid?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }


  getAppelGroeiByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiAppelByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getPeerGroeiByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiPeerByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getAppelGroei(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiAppel?jaar=" + this.jaar.value);
  }
  getPeerGroei(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/groeiPeer?jaar=" + this.jaar.value);
  }

  getTempByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/tempByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getBodemTempByArduino(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/bodemTempByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getvochtigheidByArduinoID(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/vochtigheidByArduino?arduinoID=" + this.arduinoID.value + "&jaar=" + this.jaar.value);
  }
  getTemp(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/temp?jaar=" + this.jaar.value);
  }
  getBodemTemp(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/bodemTemp?jaar=" + this.jaar.value);
  }
  getvochtigheid(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/vochtigheid?jaar=" + this.jaar.value);
  }
  getJaren(): Observable<number[]> {
    return this.http.get<number[]>(this.baseURL + "/meting/jaren");
  }
}
