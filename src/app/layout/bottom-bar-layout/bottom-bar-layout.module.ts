import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarLayoutComponent } from './bottom-bar-layout.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BottomBarLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    BottomBarLayoutComponent
  ]
})
export class BottomBarLayoutModule { }
