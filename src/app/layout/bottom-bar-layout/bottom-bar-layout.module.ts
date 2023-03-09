import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarLayoutComponent } from './bottom-bar-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BottomBarLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BottomBarLayoutComponent
  ]
})
export class BottomBarLayoutModule { }
