import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListItemComponent } from './doctors-list-item.component';

describe('DoctorsListItemComponent', () => {
  let component: DoctorsListItemComponent;
  let fixture: ComponentFixture<DoctorsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
