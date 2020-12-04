import { TestBed } from '@angular/core/testing';

import { ListRouteService } from './list-route.service';

describe('ListRouteService', () => {
  let service: ListRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
