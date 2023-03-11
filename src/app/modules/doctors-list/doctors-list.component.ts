import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { icons } from 'src/assets/icons';
import { DoctorListItemModel } from './_models/doctor-list-item-model';
import { DoctorsListService } from './_services/doctors-list.service';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit{

  icons = icons; 
  doctors : DoctorListItemModel[] ;

  constructor(
    private _router : Router,
    private _doctorsListService : DoctorsListService
  ){
    this.doctors = [];
  }

  ngOnInit(): void {
    this._doctorsListService
      .getDoctorsList()
      .pipe(take(1))
      .subscribe(
        list => {
          this.doctors = list;
        }
      )
  }

  seeDoctorProfile(doctorId:number){
    this._router.navigate(['doctor-profile' , doctorId])
  }

}
