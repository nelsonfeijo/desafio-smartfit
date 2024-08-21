import { TestBed } from '@angular/core/testing';

import { FilterUnitsSeviceService } from './filter-units.sevice.service';

describe('FilterUnitsSeviceService', () => {
  let service: FilterUnitsSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUnitsSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
