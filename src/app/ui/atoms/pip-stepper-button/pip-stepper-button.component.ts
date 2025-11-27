import {booleanAttribute, ChangeDetectionStrategy, Component, input, InputSignalWithTransform} from '@angular/core';
import {MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'pip-stepper-button',
  imports: [
    MatStepperNext,
    MatStepperPrevious,
    MatButton
  ],
  templateUrl: './pip-stepper-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipStepperButtonComponent {
  text = input('');
  type = input('button');
  color = input('primary');
  disabled = input(false);

  matStepperNext: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});
  matStepperPrevious: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});
}
