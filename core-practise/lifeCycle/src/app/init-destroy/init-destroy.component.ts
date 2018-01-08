import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-init-destroy',
  templateUrl: './init-destroy.component.html',
  styleUrls: ['./init-destroy.component.scss']
})
export class InitDestroyComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }
}
