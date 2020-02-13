import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { DatabaseService } from 'src/app/services/database.service';
import { Arduino } from 'src/app/models/arduino.model';
import { Meting } from 'src/app/models/meting.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: string;
  dataJS: Promise<string>;
  jsonData: string;
  arduinos: Arduino[];
  metingen: Meting[];
  constructor(public _firebaseService: FirebaseService, public _databaseService : DatabaseService,private router: Router) { }

  ngOnInit() {
    this._firebaseService.getData().subscribe(result => {
      // console.log(JSON.stringify(result));
      this.data = JSON.stringify(result);
    });


    var database = firebase.database();
    this.dataJS = database.ref('/users').once('value').then(function (snapshot) {
      // console.log(snapshot.val());
      return snapshot.val();
    });

    this.dataJS.then(response => {
      this.jsonData = JSON.stringify(response);
      // console.log(this.jsonData);
    });

    // this.jsonData = this._firebaseService.getDataJS();
    // console.log(this.jsonData);

    //this._firebaseService.insertUserJS();


    this._databaseService.getArduinos().subscribe(result => {
      this.arduinos = result;
    });

    this._databaseService.getMetingen().subscribe(result => {
      this.metingen = result;
    })
  }

  goToGrafiekVruchtgrootte(arduinoID) {
    this._databaseService.arduinoID.next(arduinoID);
    this.router.navigate(['/grafiekVruchtgrootte']);
  }
  goToGrafiekVruchtgroei(arduinoID) {
    this._databaseService.arduinoID.next(arduinoID);
    this.router.navigate(['/grafiekVruchtgroei']);
  }
  goToGrafiekTempVocht(arduinoID) {
    this._databaseService.arduinoID.next(arduinoID);
    this.router.navigate(['/grafiekTempVocht']);
  }
  goToOverzicht() {
    this.router.navigate(['/overzicht']);
  }

}
