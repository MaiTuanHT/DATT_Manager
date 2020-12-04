import { TestBed } from '@angular/core/testing';

import { AddBusService } from './add-bus.service';

describe('AddBusService', () => {
  let service: AddBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
