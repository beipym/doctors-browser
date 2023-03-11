import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { icons } from 'src/assets/icons';
import { doctorProfileModel } from './_models/doctor-profile.model';
import { DoctorProfileService } from './_services/doctor-profile.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit{
  icons = icons;

  doctorData : doctorProfileModel = {
    "id":3 ,
    "name":"علی سعیدیان",
    "profession":"متخصص پوست و مو ",
    "yearsActive":"8",
    "neazmCode":2314,
    "patientsReview":"4.5",
    "aboutDoctor":"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ",
    "education":"لورم ایپسوم متن ساختگی",
    "achievements":"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg"
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _doctorProfileService : DoctorProfileService
  ){}

  ngOnInit(): void {
    console.log(this._route.snapshot.paramMap.get('id'))
    const doctorId = this._route.snapshot.paramMap.get('id') ;
    if( doctorId === null ){
      this._router.navigate(['/app/doctors-list'])
    } else {
      this._doctorProfileService
          .getDoctorProfile(doctorId)
          .pipe(take(1))
          .subscribe(
            profile => {
              this.doctorData = profile[0];
            }
          )

    }



  }

}
