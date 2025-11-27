import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal, output,
  OutputEmitterRef,
  ViewEncapsulation
} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {toggleArrowAnimation} from '@core/animations/toggle-arrow.animation';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
import {PreventDoubleClickDirective} from '@core/directives/prevent-double-click.directive';

@Component({
  selector: 'pip-button-arrow',
  imports: [
    MatIcon,
    MatTooltip,
    PreventDoubleClickDirective,
  ],
  templateUrl: './pip-button-arrow.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    toggleArrowAnimation
  ]
})
export class PipButtonArrowComponent {
  isOpen: InputSignal<boolean> = input(false);
  tooltipText: InputSignal<string> = input('');
  onClick: OutputEmitterRef<void> = output();
}
