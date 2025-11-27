import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatStep, MatStepLabel, MatStepper} from '@angular/material/stepper';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {Meta} from '@angular/platform-browser';
import {LogoComponent} from '@ui/molecules/logo/logo.component';
import {PipTitleComponent} from '@ui/atoms/pip-title/pip-title.component';
import {PipStepperButtonComponent} from '@ui/atoms/pip-stepper-button/pip-stepper-button.component';
import {
  PersonalInformationFormComponent
} from '@pages/authentication/complete-registration/components/personal-information-form/personal-information-form.component';
import {
  MedicalCenterFormComponent
} from '@pages/authentication/complete-registration/components/medical-center-form/medical-center-form.component';
import {
  AccountDetailsFormComponent
} from '@pages/authentication/complete-registration/components/account-details-form/account-details-form.component';
import {
  COMPLETE_REGISTRATION_FORM
} from '@pages/authentication/complete-registration/core/constants/complete-registration.constant';

@Component({
  selector: 'complete-registration',
  imports: [
    LogoComponent,
    PipTitleComponent,
    PersonalInformationFormComponent,
    MatStepper,
    MatStep,
    MatStepLabel,
    MedicalCenterFormComponent,
    AccountDetailsFormComponent,
    FormsModule,
    PipStepperButtonComponent
  ],
  templateUrl: './complete-registration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteRegistrationComponent implements OnInit {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _meta: Meta = inject(Meta);

  protected readonly completeRegistrationForm: FormGroup;
  protected readonly personalInformationForm: FormGroup;
  protected readonly medicalCenterForm: FormGroup;
  protected readonly accountDetailsForm: FormGroup;

  constructor() {
    this.completeRegistrationForm = this._formBuilder.group(COMPLETE_REGISTRATION_FORM);
    this.personalInformationForm = this.completeRegistrationForm.get('personalInformation') as FormGroup;
    this.medicalCenterForm = this.completeRegistrationForm.get('medicalCenter') as FormGroup;
    this.accountDetailsForm = this.completeRegistrationForm.get('accountDetails') as FormGroup;
  }

  test() {
    console.log(this.completeRegistrationForm.value);
  }

  ngOnInit(): void {
    this._meta.updateTag({
      name: 'description',
      content: 'Complete your registration on Clinic Care by providing your details. Get started with easy and secure access to your healthcare service and stay connected with your medical team.'
    });
  }
}
