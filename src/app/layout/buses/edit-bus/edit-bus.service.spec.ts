import { TestBed } from '@angular/core/testing';

import { EditBusService } from './edit-bus.service';

describe('EditBusService', () => {
  let service: EditBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
