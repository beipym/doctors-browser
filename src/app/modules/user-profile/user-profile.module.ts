import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';


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
    RouterModule.forChild(userProfileRoutes)
  ]
})
export class UserProfileModule { }
