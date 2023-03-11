import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile.component';
import { ImageViewerComponent } from 'src/@dtheme/image-viewer/image-viewer.component';
import { DoctorOverviewItemComponent } from './components/doctor-overview-item/doctor-overview-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsAccordionComponent } from 'src/@dtheme/details-accordion/details-accordion.component';
import { DoctorReservationCardComponent } from './components/doctor-reservation-card/doctor-reservation-card.component';

const doctorProfileRoutes:Routes=[
  {
    path:'',
    component:DoctorProfileComponent
  },
  {
    path:':id',
    component:DoctorProfileComponent
  }
]


@NgModule({
  declarations: [
    DoctorProfileComponent,
    DoctorOverviewItemComponent,
    DoctorReservationCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doctorProfileRoutes),
    ImageViewerComponent,
    DetailsAccordionComponent,
    FontAwesomeModule
  ]
})
export class DoctorProfileModule { }
