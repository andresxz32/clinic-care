import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '@core/validators/CustomValidators';
import {PASSWORD_REGEX} from '@pages/authentication/sign-in/core/constants/sign-in-form.constants';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';

export const PERSONAL_INFORMATION_FORM = {
  //Personal information
  firstName: new FormControl('', Validators.required),
  secondName: new FormControl(''),
  lastName: new FormControl('', Validators.required),
  secondLastName: new FormControl('', Validators.required),
  phoneNumber: new FormGroup({
    label: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required, CustomValidators.requiredPhoneNumber]),
  }),
}

export const MEDICAL_CENTER_INFORMATION_FORM = {
  //Medic center basic data
  medicalCenterName: new FormControl('', Validators.required),
  medicalCenterAddress: new FormControl('', Validators.required),
  employeeCount: new FormControl('', Validators.required),
  medicalSpecialty: new FormControl('', Validators.required),
}

export const ACCOUNT_DETAILS_FORM = {
  emailAddress: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX), Validators.maxLength(20)]),
  confirmPassword: new FormControl('', [Validators.required, CustomValidators.requiredSamePassword])
}

export const FIRST_NAME_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your first name.'
  }
];

export const LAST_NAME_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your last name.'
  }
];

export const SECOND_LAST_NAME_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your second last name.'
  }
];

export const PHONE_NUMBER_ERRORS: ControlErrorMessage[] = [
  {
    name: 'requiredPhoneNumber',
    message: 'Please enter a valid phone number.'
  },
  {
    name: 'required',
    message: 'Please enter your phone number.'
  }
];


export const MEDICAL_CENTER_NAME_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your the medical center name.'
  }
];

export const MEDICAL_CENTER_ADDRESS_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your the medical center address.'
  }
];

export const EMPLOYEE_ACCOUNT_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your employee account.'
  }
];

export const MEDICAL_SPECIALTY_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your medical speciality.'
  }
];


export const USER_NAME_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your username.'
  }
];


export const EMAIL_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter your email.'
  },
  {
    name: 'email',
    message: 'Please enter a valid email.'
  }
];

export const CONFIRM_PASSWORD_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter confirm password.'
  },
  {
    name: 'requiredSamePassword',
    message: 'Passwords do not match.'
  }
];

export const COMPLETE_REGISTRATION_FORM = {
  personalInformation: new FormGroup(PERSONAL_INFORMATION_FORM),
  medicalCenter: new FormGroup(MEDICAL_CENTER_INFORMATION_FORM),
  accountDetails: new FormGroup(ACCOUNT_DETAILS_FORM),
}

