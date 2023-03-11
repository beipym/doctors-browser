import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDoctorProfile } from 'src/app/core/api-urls-map';
import { environment } from 'src/environments/environment';
import { doctorProfileModel } from '../_models/doctor-profile.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {

  baseUrl = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getDoctorProfile( inputId:string ) {
    return this._http.get<doctorProfileModel[]>(`${this.baseUrl}${getDoctorProfile}` , {params:{id:inputId}});
  }

}
