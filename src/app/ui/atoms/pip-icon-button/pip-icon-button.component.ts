import {ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {PreventDoubleClickDirective} from '@core/directives/prevent-double-click.directive';

@Component({
  selector: 'pip-icon-button',
  imports: [
    MatIcon,
    PreventDoubleClickDirective,
  ],
  templateUrl: './pip-icon-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipIconButtonComponent {
  icon:InputSignal<string> = input('');
  onClick: OutputEmitterRef<void>= output();
}
