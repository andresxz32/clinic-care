import {animate, state, style, transition, trigger} from '@angular/animations';

export const toggleArrowAnimation = trigger('toggleArrowAnimation', [
  state('closed', style({transform: 'rotate(0deg)'})),
  state('open', style({transform: 'rotate(180deg)'})),
  transition('closed <=> open', [
    animate('300ms ease-in-out')
  ])
])
