import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
