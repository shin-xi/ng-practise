import { TestBed, inject } from '@angular/core/testing';

import { SmallService } from './small.service';

describe('SmallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmallService]
    });
  });

  it('should be created', inject([SmallService], (service: SmallService) => {
    expect(service).toBeTruthy();
  }));
});
