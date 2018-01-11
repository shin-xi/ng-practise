import { TestBed, inject } from '@angular/core/testing';

import { DiExistingService } from './di-existing.service';

describe('DiExistingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiExistingService]
    });
  });

  it('should be created', inject([DiExistingService], (service: DiExistingService) => {
    expect(service).toBeTruthy();
  }));
});
