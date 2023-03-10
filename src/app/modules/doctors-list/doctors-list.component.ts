import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent {

  faSearch = faSearch;
  faSlider = faSliders; 

  constructor(
    private _router : Router
  ){}

  seeDoctorProfile(){
    this._router.navigate(['doctor-profile'])
  }

}
