import { Injectable } from '@angular/core';

@Injectable()
export class DiSampleService {

  constructor() {
  }

  getValue(): string {
    return 'a value';
  }
}
