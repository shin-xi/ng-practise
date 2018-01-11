import { Component, Inject, OnInit } from '@angular/core';
import { DiSampleService } from '../../service/di-sample.service';

@Component({
  selector: 'app-di-existing',
  templateUrl: './di-existing.component.html',
  styleUrls: ['./di-existing.component.scss'],
  providers: [{ provide: 'DiExistingService', useExisting: DiSampleService }]
})
export class DiExistingComponent implements OnInit {

  constructor(@Inject('DiExistingService') private myService: DiSampleService) {
  }

  invokeService(): void {
    console.log('MyService returned', (<any>this.myService).getValue());
  }

  ngOnInit() {
  }

}
