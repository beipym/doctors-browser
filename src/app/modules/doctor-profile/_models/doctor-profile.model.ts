import { DoctorListItemModel } from '../../doctors-list/_models/doctor-list-item-model'

export interface doctorProfileModel extends DoctorListItemModel{
    neazmCode : number,
    patientsReview : string,
    aboutDoctor  : string,
    education    : string,
    achievements : string,
}