import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-di-example2',
  templateUrl: './di-example2.component.html',
  styleUrls: ['./di-example2.component.scss']
})
export class DiExample2Component implements OnInit {

  constructor(private apiService: ApiService) {
  }

  invokeApi() {
    this.apiService.getState();
  }

  ngOnInit() {
  }

}
