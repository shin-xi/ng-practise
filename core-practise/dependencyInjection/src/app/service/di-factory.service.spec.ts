import { TestBed, inject } from '@angular/core/testing';

import { DiFactoryService } from './di-factory.service';

describe('DiFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiFactoryService]
    });
  });

  it('should be created', inject([DiFactoryService], (service: DiFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
