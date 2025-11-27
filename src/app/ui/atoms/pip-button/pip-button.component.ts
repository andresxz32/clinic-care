import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {PreventDoubleClickDirective} from '@core/directives/prevent-double-click.directive';

@Component({
  selector: 'pip-button',
  imports: [
    MatButton,
    MatIcon,
    PreventDoubleClickDirective
  ],
  templateUrl: './pip-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipButtonComponent {
  text = input('');
  type = input('button');
  color = input('primary');

  matPrefix = input('');
  matSuffix = input('');

  click = output<void>();

  onClick(): void {
    console.log('On Click');
    this.click.emit();
  }

}
