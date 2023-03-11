import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotImplementedComponent } from 'src/@dtheme/page-not-implemented/page-not-implemented.component';

const homeModuleRoutes:Routes=[
  {
    path:'',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeModuleRoutes),
    PageNotImplementedComponent
  ]
})
export class HomeModule { }
