import { Component, Input } from '@angular/core';
import { icons } from 'src/assets/icons';

@Component({
  selector: 'app-doctor-overview-item',
  templateUrl: './doctor-overview-item.component.html',
  styleUrls: ['./doctor-overview-item.component.scss']
})
export class DoctorOverviewItemComponent {

  @Input() title = '';
  @Input() subTitle = '';
  @Input() icon = '';


  icons = icons;

}
