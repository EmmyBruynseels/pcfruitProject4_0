import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GrafiekComponent } from './grafiek/grafiek.component';
import { GrafiekVruchtgrootteComponent } from './grafiek/grafiek-vruchtgrootte/grafiek-vruchtgrootte.component';
import { GrafiekVruchtgroeiComponent } from './grafiek/grafiek-vruchtgroei/grafiek-vruchtgroei.component';
import { GrafiekTempVochtComponent } from './grafiek/grafiek-temp-vocht/grafiek-temp-vocht.component';
import { OverzichtComponent } from './grafiek/overzicht/overzicht.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'grafiekVruchtgrootte', component: GrafiekVruchtgrootteComponent},
  {path: 'grafiekVruchtgroei', component: GrafiekVruchtgroeiComponent},
  {path: 'grafiekTempVocht', component: GrafiekTempVochtComponent},
  {path: 'overzicht', component: OverzichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
