import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReservationCardComponent } from './doctor-reservation-card.component';

describe('DoctorReservationCardComponent', () => {
  let component: DoctorReservationCardComponent;
  let fixture: ComponentFixture<DoctorReservationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorReservationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorReservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
