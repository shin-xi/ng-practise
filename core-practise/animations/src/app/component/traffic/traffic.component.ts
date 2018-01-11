import { Component, OnInit } from '@angular/core';
import { SingalAnimate } from '../../animate/animate';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
  animations: [SingalAnimate]
})

export class TrafficComponent implements OnInit {
  signalState: string;

  constructor() {
  }

  go(): void {
    this.signalState = 'go';
  }

  stop(): void {
    this.signalState = 'stop';
  }

  ngOnInit() {
  }

}
