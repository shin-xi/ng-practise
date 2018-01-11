import { Component, OnInit } from '@angular/core';
import { DiSampleService } from '../../service/di-sample.service';

@Component({
  selector: 'app-di-class',
  templateUrl: './di-class.component.html',
  styleUrls: ['./di-class.component.scss'],
  providers: [{ provide: DiSampleService, useClass: DiSampleService }]
})
export class DiClassComponent implements OnInit {

  constructor(private myService: DiSampleService) {
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }

  ngOnInit() {
  }

}
