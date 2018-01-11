import { Component, OnInit } from '@angular/core';
import { API_URL, DiValueService } from '../../service/di-value.service';


@Component({
  selector: 'app-di-value',
  templateUrl: './di-value.component.html',
  styleUrls: ['./di-value.component.scss'],
  providers: [{ provide: DiValueService, useValue: API_URL }]
})
export class DiValueComponent implements OnInit {

  constructor(private myService: DiValueService) {
  }

  ngOnInit() {
  }

}
