import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styleUrls: ['./by-id.component.scss']
})
export class ByIdComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
