import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ViewPortService } from '../../service/view-port.service';
import { DiSampleService } from '../../service/di-sample.service';

@Component({
  selector: 'app-di-example1',
  templateUrl: './di-example1.component.html',
  styleUrls: ['./di-example1.component.scss']
})
export class DiExample1Component implements OnInit {

  constructor(private apiService: ApiService,
              @Inject('ApiServiceAlias') private aliasService: ApiService,
              @Inject('SizeService') private sizeService: any) {
  }

  invokeApi(): void {
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  useInjectors(): void {
    const injector: any = Injector.create([
      { provide: ViewPortService, deps: [] },
      {
        provide: 'OtherSizeService',
        useFactory: (): ViewPortService => new ViewPortService().determineService(),
        deps: [ViewPortService]
      }
    ]);

    const sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }

  ngOnInit() {
  }

}
