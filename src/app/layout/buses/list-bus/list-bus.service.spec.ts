import { TestBed } from '@angular/core/testing';

import { ListBusService } from './list-bus.service';

describe('ListBusService', () => {
  let service: ListBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
