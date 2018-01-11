import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const SingalAnimate = trigger('signal', [
  state('void', style({
    transform: 'translateX(-100%)'
  })),
  state('go', style({
    backgroundColor: 'green',
    height: '100px'
  })),
  state('stop', style({
    backgroundColor: 'red',
    height: '50px'
  })),
  transition('void => *', animate(2000, keyframes([
    style({ transform: 'scale(0)', offset: 0 }),
    style({ transform: 'scale(0.1)', offset: 0.1 }),
    style({ transform: 'scale(0.3)', offset: 0.2 }),
    style({ transform: 'scale(0.6)', offset: 0.5 }),
    style({ transform: 'scale(0.8)', offset: 0.8 }),
    style({ transform: 'scale(1)', offset: 1 })
  ]))),
  transition('* => *', animate('.5s 1s cubic-bezier(0.2, 0.8, 0.3, 1.8)'))
]);
