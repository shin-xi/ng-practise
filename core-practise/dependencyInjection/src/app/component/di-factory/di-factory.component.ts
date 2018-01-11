import { Component, OnInit } from '@angular/core';
import { DiFactoryService } from '../../service/di-factory.service';


@Component({
  selector: 'app-di-factory',
  templateUrl: './di-factory.component.html',
  styleUrls: ['./di-factory.component.scss'],
  providers: [{ provide: DiFactoryService, useFactory: (): DiFactoryService => new DiFactoryService('shino') }]
})
export class DiFactoryComponent implements OnInit {

  constructor(private myService: DiFactoryService) {
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }

  ngOnInit() {
  }

}
