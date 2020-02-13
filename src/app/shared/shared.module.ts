import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
