import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListItemComponent } from './components/doctors-list-item/doctors-list-item.component';
import { ImageViewerComponent } from 'src/@dtheme/image-viewer/image-viewer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    RouterModule.forChild(doctorsListRoutes),
    ImageViewerComponent,
    FontAwesomeModule
  ]
})
export class DoctorsListModule { }
