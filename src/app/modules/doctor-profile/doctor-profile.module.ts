import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile.component';

const doctorProfileRoutes:Routes=[
  {
    path:'',
    component:DoctorProfileComponent
  }
]


@NgModule({
  declarations: [
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doctorProfileRoutes)
  ]
})
export class DoctorProfileModule { }
