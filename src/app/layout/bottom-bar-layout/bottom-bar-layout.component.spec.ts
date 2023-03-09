import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarLayoutComponent } from './bottom-bar-layout.component';

describe('BottomBarLayoutComponent', () => {
  let component: BottomBarLayoutComponent;
  let fixture: ComponentFixture<BottomBarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
