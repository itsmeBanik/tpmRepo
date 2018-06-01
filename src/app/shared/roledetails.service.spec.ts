import { TestBed, inject } from '@angular/core/testing';

import { RoledetailsService } from './roledetails.service';

describe('RoledetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoledetailsService]
    });
  });

  it('should be created', inject([RoledetailsService], (service: RoledetailsService) => {
    expect(service).toBeTruthy();
  }));
});
