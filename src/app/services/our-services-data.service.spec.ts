import { TestBed } from '@angular/core/testing';

import { OurServicesDataService } from './our-services-data.service';

describe('OurServicesDataService', () => {
  let service: OurServicesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurServicesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
