import { TestBed } from '@angular/core/testing';

import { UpdateAgencyService } from './update-agency.service';

describe('UpdateAgencyService', () => {
  let service: UpdateAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
