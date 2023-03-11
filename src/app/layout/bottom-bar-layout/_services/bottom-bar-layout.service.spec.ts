import { TestBed } from '@angular/core/testing';

import { BottomBarLayoutService } from './bottom-bar-layout.service';

describe('BottomBarLayoutService', () => {
  let service: BottomBarLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomBarLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
