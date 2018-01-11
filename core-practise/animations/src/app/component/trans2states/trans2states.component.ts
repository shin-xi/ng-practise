import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group } from '@angular/animations';


@Component({
  selector: 'app-trans2states',
  templateUrl: './trans2states.component.html',
  styleUrls: ['./trans2states.component.scss'],
  animations: [
    trigger('trans2states', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),

      // transition('inactive => active,', animate('100ms ease-in')),

      transition('active => inactive', animate('100ms ease-out')),

      // transition('inactive => active,active => inactive', animate('100ms ease-in')),//合并

      transition('inactive => active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        style({
          transform: 'scale(0)'
        }),
        animate('80ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ]),

      // transition('void => *', [// 进场
      //   style({ transform: 'translateX(-100%)' }),
      //   animate(1000)
      // ]),
      //
      // transition('* => void', [// 离场
      //   animate(1000, style({ transform: 'translateX(100%)' }))
      // ]),

      // transition('* => void', [// 离场自动计算高度 css动画盲区
      //   style({height: '*'}),
      //   animate(250, style({height: 0}))
      // ]),

      // transition('void => inactive', [
      //   style({ transform: 'translateX(-100%) scale(1)' }),
      //   animate(1000)
      // ]),
      // transition('inactive => void', [
      //   animate(1000, style({ transform: 'translateX(100%) scale(1)' }))
      // ]),
      // transition('void => active', [
      //   style({ transform: 'translateX(0) scale(0)' }),
      //   animate(1000)
      // ]),
      // transition('active => void', [
      //   animate(1000, style({ transform: 'translateX(0) scale(0)' }))
      // ])

      transition('void => *', [// 并行动画组
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('1s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('1s ease', style({
            opacity: 1
          }))
        ])
      ]),
    ])
  ]
})
export class Trans2statesComponent implements OnInit {
  name: string;
  state: string;

  constructor() {
    this.name = 'shino';
    this.state = 'active';
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  animationStarted(e) {
    console.log(e);
    console.log('start');
  }

  animationDone(e) {
    console.log(e);
    console.log('end');
  }

  ngOnInit() {
  }

}
