import { TestBed } from '@angular/core/testing';

import { ListScheduleService } from './list-schedule.service';

describe('ListScheduleService', () => {
  let service: ListScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
