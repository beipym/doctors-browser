import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListItemComponent } from './components/doctors-list-item/doctors-list-item.component';


const doctorsListRoutes:Routes=[
  {
    path:'',
    component:DoctorsListComponent
  }
]


@NgModule({
  declarations: [
    DoctorsListComponent,
    DoctorsListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doctorsListRoutes)
  ]
})
export class DoctorsListModule { }
