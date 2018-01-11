import { Component, Injector, OnInit } from '@angular/core';
import { DiSampleService } from '../../service/di-sample.service';

@Component({
  selector: 'app-di-sample',
  templateUrl: './di-sample.component.html',
  styleUrls: ['./di-sample.component.scss']
})
export class DiSampleComponent implements OnInit {
  myService: DiSampleService;

  constructor() {
    const injector: any = Injector.create([{ provide: DiSampleService, deps: [] }]);
    this.myService = injector.get(DiSampleService);
    console.log('Same instance?', this.myService === injector.get(DiSampleService));
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }

  ngOnInit() {
  }
}
