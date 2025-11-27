import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'pip-checkbox',
  imports: [
    MatCheckbox
  ],
  templateUrl: './pip-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipCheckboxComponent {
}
