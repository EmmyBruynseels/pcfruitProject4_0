import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { database } from 'firebase';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  database = firebase.database();
  jsonData: string;

  constructor(public db: AngularFirestore) { }

  getData() {
    return this.db.collection('/dataArduino').valueChanges();
  }

  getDataJS() {
    this.database.ref('/users').once('value').then(function (snapshot) {
      console.log(snapshot.val());
      return snapshot.val();
    });
    // var dataJS = this.database.ref('/users').once('value').then(function (snapshot) {
    //   console.log(snapshot.val());
    //   return snapshot.val();
    // });

    // dataJS.then(response => {
    //   this.jsonData = JSON.stringify(response);
    //   console.log(this.jsonData);
    // });
    // return this.jsonData;
  }

  insertUserJS() {
    let userRef = this.database.ref('users/');
    userRef.child('Hendrik').set({ 'firstName': 'Hendrik', 'lastName': 'Something', 'gender': 'male' });
  }

}
