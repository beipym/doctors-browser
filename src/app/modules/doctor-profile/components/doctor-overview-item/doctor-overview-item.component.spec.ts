import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOverviewItemComponent } from './doctor-overview-item.component';

describe('DoctorOverviewItemComponent', () => {
  let component: DoctorOverviewItemComponent;
  let fixture: ComponentFixture<DoctorOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorOverviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
