import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list.component';
import { RouterModule, Routes } from '@angular/router';


const doctorsListRoutes:Routes=[
  {
    path:'',
    component:DoctorsListComponent
  }
]


@NgModule({
  declarations: [
    DoctorsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doctorsListRoutes)
  ]
})
export class DoctorsListModule { }
