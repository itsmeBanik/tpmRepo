import { TestBed, inject } from '@angular/core/testing';

import { CompanydetailsService } from './companydetails.service';

describe('CompanydetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanydetailsService]
    });
  });

  it('should be created', inject([CompanydetailsService], (service: CompanydetailsService) => {
    expect(service).toBeTruthy();
  }));
});
