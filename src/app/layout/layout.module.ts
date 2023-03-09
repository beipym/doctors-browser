import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { BottomBarLayoutModule } from './bottom-bar-layout/bottom-bar-layout.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BottomBarLayoutModule
  ]
})
export class LayoutModule { }
