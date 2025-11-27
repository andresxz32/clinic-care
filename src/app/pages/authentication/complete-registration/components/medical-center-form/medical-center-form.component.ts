import {ChangeDetectionStrategy, Component, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipInputComponent} from '@ui/atoms/pip-input/pip-input.component';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {
  EMPLOYEE_ACCOUNT_ERRORS,
  MEDICAL_CENTER_ADDRESS_ERRORS,
  MEDICAL_CENTER_NAME_ERRORS, MEDICAL_SPECIALTY_ERRORS
} from '@pages/authentication/complete-registration/core/constants/complete-registration.constant';

@Component({
  selector: 'medical-center-form',
  imports: [
    FormsModule,
    PipInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './medical-center-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicalCenterFormComponent {
  medicalCenterForm: InputSignal<FormGroup> = input.required<FormGroup>({});

  protected medicalCenterNameErrors: WritableSignal<ControlErrorMessage[]> = signal(MEDICAL_CENTER_NAME_ERRORS);
  protected medicalCenterAddressErrors: WritableSignal<ControlErrorMessage[]> = signal(MEDICAL_CENTER_ADDRESS_ERRORS);
  protected employeeCountErrors: WritableSignal<ControlErrorMessage[]> = signal(EMPLOYEE_ACCOUNT_ERRORS);
  protected medicalSpecialtyErrors: WritableSignal<ControlErrorMessage[]> = signal(MEDICAL_SPECIALTY_ERRORS);


  constructor() {
  }
}
