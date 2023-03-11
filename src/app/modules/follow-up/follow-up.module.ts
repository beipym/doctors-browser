import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpComponent } from './follow-up.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotImplementedComponent } from 'src/@dtheme/page-not-implemented/page-not-implemented.component';


const followUpRoutes:Routes=[
  {
    path:'',
    component:FollowUpComponent
  }
]


@NgModule({
  declarations: [
    FollowUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(followUpRoutes),
    PageNotImplementedComponent
  ]
})
export class FollowUpModule { }
