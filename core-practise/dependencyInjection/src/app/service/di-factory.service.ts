import { Injectable } from '@angular/core';

@Injectable()
export class DiFactoryService {

  constructor(private phrase: string) {
    console.log('ParamService is being created with phrase', phrase);
  }

  getValue(): string {
    return this.phrase;
  }
}
