import { TestBed } from '@angular/core/testing';

import { ListStaffService } from './list-staff.service';

describe('ListStaffService', () => {
  let service: ListStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
