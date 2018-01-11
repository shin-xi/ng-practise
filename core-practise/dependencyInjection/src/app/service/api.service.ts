import { Inject, Injectable } from '@angular/core';

export const API_URL = 'shino';

@Injectable()
export class ApiService {

  constructor(@Inject(API_URL) private apiUrl: string) {
  }

  get(): void {
    console.log('Getting resource...');
  }

  getState(): void {
    console.log(`Calling ${this.apiUrl}/endpoint...`);
  }
}
