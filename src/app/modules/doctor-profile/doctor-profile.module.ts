import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile.component';
import { ImageViewerComponent } from 'src/@dtheme/image-viewer/image-viewer.component';
import { DoctorOverviewItemComponent } from './components/doctor-overview-item/doctor-overview-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const doctorProfileRoutes:Routes=[
  {
    path:'',
    component:DoctorProfileComponent
  }
]


@NgModule({
  declarations: [
    DoctorProfileComponent,
    DoctorOverviewItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doctorProfileRoutes),
    ImageViewerComponent,
    FontAwesomeModule
  ]
})
export class DoctorProfileModule { }
