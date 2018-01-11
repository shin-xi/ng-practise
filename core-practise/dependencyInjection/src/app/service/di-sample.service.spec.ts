import { TestBed, inject } from '@angular/core/testing';

import { DiSampleService } from './di-sample.service';

describe('DiSampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiSampleService]
    });
  });

  it('should be created', inject([DiSampleService], (service: DiSampleService) => {
    expect(service).toBeTruthy();
  }));
});
