import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDoctorsListUrl } from 'src/app/core/api-urls-map';
import { environment } from 'src/environments/environment';
import { DoctorListItemModel } from '../_models/doctor-list-item-model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsListService {

  baseUrl = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getDoctorsList() {
    return this._http.get<DoctorListItemModel[]>( `${this.baseUrl}${getDoctorsListUrl}`);
  }

}
