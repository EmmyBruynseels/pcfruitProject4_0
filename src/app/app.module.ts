import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

// realtime database
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GrafiekComponent } from './grafiek/grafiek.component';
import { GrafiekVruchtgrootteComponent } from './grafiek/grafiek-vruchtgrootte/grafiek-vruchtgrootte.component';
import { GrafiekVruchtgroeiComponent } from './grafiek/grafiek-vruchtgroei/grafiek-vruchtgroei.component';
import { GrafiekTempVochtComponent } from './grafiek/grafiek-temp-vocht/grafiek-temp-vocht.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home/home.component';
import { OverzichtComponent } from './grafiek/overzicht/overzicht.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    GrafiekComponent,
    GrafiekVruchtgrootteComponent,
    GrafiekVruchtgroeiComponent,
    GrafiekTempVochtComponent,
    OverzichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    // rtdb
    AngularFireDatabaseModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
