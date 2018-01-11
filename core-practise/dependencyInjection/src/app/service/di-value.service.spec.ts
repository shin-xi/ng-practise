import { TestBed, inject } from '@angular/core/testing';

import { DiValueService } from './di-value.service';

describe('DiValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiValueService]
    });
  });

  it('should be created', inject([DiValueService], (service: DiValueService) => {
    expect(service).toBeTruthy();
  }));
});
