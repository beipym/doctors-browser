import { Component, OnInit } from '@angular/core';
import { icons } from 'src/assets/icons';
import { BottomBarLayoutService } from './_services/bottom-bar-layout.service';

@Component({
  selector: 'bottom-bar-layout',
  templateUrl: './bottom-bar-layout.component.html',
  styleUrls: ['./bottom-bar-layout.component.scss']
})
export class BottomBarLayoutComponent implements OnInit{

  icons = icons;

  currentPageTitle = ''

  constructor(
    private _bottombarLayoutService : BottomBarLayoutService
  ){}

  ngOnInit(): void {
    this._bottombarLayoutService.getCurrentPageTitleSubs().subscribe(
      res => {
        this.currentPageTitle = res;
      }
    ) 
  }

  setTitle( title : string ){
    this._bottombarLayoutService.setCurrentPageTitle(title);
  }
}

