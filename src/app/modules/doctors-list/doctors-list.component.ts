import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent {

  constructor(
    private _router : Router
  ){}

  seeDoctorProfile(){
    this._router.navigate(['doctor-profile'])
  }

}
