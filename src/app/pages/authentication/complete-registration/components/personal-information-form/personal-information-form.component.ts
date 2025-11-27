import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipInputComponent} from '@ui/atoms/pip-input/pip-input.component';
import {PipInputPhoneComponent} from '@ui/atoms/pip-input-phone/pip-input-phone.component';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {
  FIRST_NAME_ERRORS, LAST_NAME_ERRORS, PHONE_NUMBER_ERRORS, SECOND_LAST_NAME_ERRORS
} from '@pages/authentication/complete-registration/core/constants/complete-registration.constant';
import {CountryISO} from '@ui/atoms/pip-input-phone/enums/country-iso.enum';

@Component({
  selector: 'personal-information-form',
  imports: [
    FormsModule,
    PipInputComponent,
    ReactiveFormsModule,
    PipInputPhoneComponent,
  ],
  templateUrl: './personal-information-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInformationFormComponent implements OnInit {
  personalInformationForm: InputSignal<FormGroup> = input.required<FormGroup>({});

  protected firstNameErrors: WritableSignal<ControlErrorMessage[]> = signal(FIRST_NAME_ERRORS);
  protected lastNameErrors: WritableSignal<ControlErrorMessage[]> = signal(LAST_NAME_ERRORS);
  protected secondLastNameErrors: WritableSignal<ControlErrorMessage[]> = signal(SECOND_LAST_NAME_ERRORS);
  protected phoneNumberErrors: WritableSignal<ControlErrorMessage[]> = signal(PHONE_NUMBER_ERRORS);
  protected readonly preferredCountry: WritableSignal<CountryISO> = signal(CountryISO.Mexico);

  constructor() {
  }

  ngOnInit(): void {
  }

  test() {
    console.log();
  }


}
