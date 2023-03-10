import { Component, Input } from '@angular/core';
import { faAngleLeft, faCoffee, faLeaf, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctors-list-item',
  templateUrl: './doctors-list-item.component.html',
  styleUrls: ['./doctors-list-item.component.scss']
})
export class DoctorsListItemComponent {
  @Input() imageUrl : string;
  @Input() doctorsName : string;
  @Input() profession : string;
  @Input() history : string;

  faLeft = faAngleLeft;

  constructor(){
    this.imageUrl = '';
    this.doctorsName = '';
    this.profession = '';
    this.history = '';
  }

}
