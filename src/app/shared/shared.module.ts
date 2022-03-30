import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule, //incluye directivas como ngIf, ngFor....
    RouterModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
