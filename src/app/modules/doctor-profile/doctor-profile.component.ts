import { Component } from '@angular/core';
import { icons } from 'src/assets/icons';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent {
  icons = icons;
}
