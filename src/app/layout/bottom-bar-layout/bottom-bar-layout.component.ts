import { Component } from '@angular/core';
import { icons } from 'src/assets/icons';

@Component({
  selector: 'bottom-bar-layout',
  templateUrl: './bottom-bar-layout.component.html',
  styleUrls: ['./bottom-bar-layout.component.scss']
})
export class BottomBarLayoutComponent {

  icons = icons;
}
