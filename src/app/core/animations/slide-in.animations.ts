import {animate, style, transition, trigger} from '@angular/animations';

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({height: '0px', opacity: 0}),
    animate('300ms ease-in'),
    style({height: '*', opacity: 1})
  ]),
  transition(':leave', [
    animate('300ms ease-out'),
    style({height: '0px', opacity: 0, margin: '0'})])
]);
