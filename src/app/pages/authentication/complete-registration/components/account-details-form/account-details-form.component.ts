import {ChangeDetectionStrategy, Component, inject, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipInputComponent} from '@ui/atoms/pip-input/pip-input.component';
import {PipPasswordStrengthComponent} from '@ui/atoms/pip-password-strength/pip-password-strength.component';
import {
  PipPasswordStrengthInfoComponent
} from '@ui/atoms/pip-password-strength-info/pip-password-strength-info.component';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {EMAIL_ERRORS, PASSWORD_ERRORS} from '@pages/authentication/sign-in/core/constants/sign-in-form.constants';
import {
  CONFIRM_PASSWORD_ERRORS
} from '@pages/authentication/complete-registration/core/constants/complete-registration.constant';

@Component({
  selector: 'account-details-form',
  imports: [
    FormsModule,
    PipInputComponent,
    ReactiveFormsModule,
    PipPasswordStrengthComponent,
    PipPasswordStrengthInfoComponent
  ],
  templateUrl: './account-details-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsFormComponent {
  accountDetailsForm: InputSignal<FormGroup> = input.required<FormGroup>({});

  protected emailErrors: WritableSignal<ControlErrorMessage[]> = signal(EMAIL_ERRORS);
  protected passwordErrors: WritableSignal<ControlErrorMessage[]> = signal(PASSWORD_ERRORS);
  protected confirmPasswordErrors: WritableSignal<ControlErrorMessage[]> = signal(CONFIRM_PASSWORD_ERRORS);
  protected showPassword: WritableSignal<boolean> = signal(false);
  protected showConfirmPassword: WritableSignal<boolean> = signal(false);

  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }
}
