import { TestBed, inject } from '@angular/core/testing';

import { UserstatusService } from './userstatus.service';

describe('UserstatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserstatusService]
    });
  });

  it('should be created', inject([UserstatusService], (service: UserstatusService) => {
    expect(service).toBeTruthy();
  }));
});
