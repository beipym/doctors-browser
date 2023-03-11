import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotImplementedComponent } from 'src/@dtheme/page-not-implemented/page-not-implemented.component';


const userProfileRoutes:Routes=[
  {
    path:'',
    component:UserProfileComponent
  }
]


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userProfileRoutes),
    PageNotImplementedComponent
  ]
})
export class UserProfileModule { }
